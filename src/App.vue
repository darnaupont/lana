<template>
  <div id="app" class="wrapper">
    <VContainer class="main-content relative">
      <VSection title="Shopping cart">
        <Table :cart="cart" @modal="setModal" />
      </VSection>
      <template #aside>
        <VAside :cart="cart" />
      </template>
    </VContainer>
    <transition name="modal-fade" @before-leave="beforeLeave" @after-enter="afterEnter">
      <VModal :product="modal" v-if="hasModal" @modal="setModal" @add="add"/>
    </transition>
  </div>
</template>

<script>
import VAside from './components/v-aside/index.vue';
import VContainer from './components/layout/v-container.vue';
import VModal from './components/v-modal.vue';
import VSection from './components/layout/v-section.vue';
import Table from './components/table/index.vue';

import products from '../fakeData/products';
import Checkout from '../helpers/checkout';

const cart = new Checkout(products);
export default {
  name: 'App',
  components: {
    VAside,
    VContainer,
    VSection,
    Table,
    VModal,
  },
  data() {
    return {
      cart,
      modal: null,
    };
  },
  computed: {
    hasModal() {
      return Boolean(this.modal);
    },
  },
  methods: {
    setModal(id) {
      if (this.modal) {
        this.modal = null;
      } else {
        this.modal = this.cart.product(id);
      }
    },
    add(id) {
      this.cart.add(id);
    },
    remove(id) {
      this.cart.remove(id);
    },

    // animation
    beforeLeave(ev) {
      ev.classList.remove('active');
    },
    afterEnter(ev) {
      ev.classList.add('active');
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  overflow: hidden;
  @apply min-h-screen flex justify-center items-center bg-blue-800;
  background-image: url("./assets/img/background.png");
  background-position: center center;
  background-size: cover;
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    opacity: 0.1;
    @apply bg-black;
  }
}

.main-content {
  // I think is much better to use
  // vh or vw than calc 100% - Xpx on the main layout
  height: 70vh;
  width: 70vw;
  max-width: 1088px;
  max-height: 648px;
}
.modal-fade-enter-active {
  opacity: 1;
  transition: all 0.3s ease;
}
.modal-fade-leave-active {
  transition: all 0.2s ease;
}
.modal-fade-enter,
.modal-fade-leave-to {
  transform: scale(0.75);
  opacity: 0.25;
}
</style>
