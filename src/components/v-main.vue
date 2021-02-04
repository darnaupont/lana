<template>
  <VSection title="Shopping cart">
    <Table :cart="cart" @modal="setModal" />
    <transition name="modal-fade" @before-leave="beforeLeave" @after-enter="afterEnter">
      <VModal :cart="cart" v-show="hasModal" :id="modal" @modal="setModal" @add="add" />
    </transition>
  </VSection>
</template>

<script>
import VModal from './v-modal.vue';
import VSection from './layout/v-section.vue';
import Table from './table/index.vue';

export default {
  components: {
    VSection,
    Table,
    VModal,
  },
  data() {
    return {
      modal: null,
    };
  },
  props: {
    cart: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    hasModal() {
      return Boolean(this.modal);
    },
  },
  methods: {
    setModal(id) {
      if (this.modal !== id) {
        this.modal = id;
      } else {
        this.modal = null;
      }
    },
    add(id) {
      this.cart.add(id);
    },
    remove(id) {
      this.cart.remove(id);
    },
    beforeLeave(ev) {
      ev.classList.remove('active');
    },
    afterEnter(ev) {
      ev.classList.add('active');
    },
  },
};
</script>

<style lang="scss" scoped>
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
