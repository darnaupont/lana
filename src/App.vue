<template>
  <div id="app" class="wrapper">
    <div class="flex main-content relative overflow-hidden">
      <Modal :cart="cart"/>
      <!-- <MFlipFlop :flip-card="Boolean(modal)" class="relative">
        <template #front>
          <div class="w-8/12 bg-white py-8 px-12 rounded-l-md">
            <CSection title="Shopping cart" />
            <Table :products="products" :cart="cart" @modal="setModal"/>
          </div>
          <div class="w-4/12 bg-gray-100  py-8 px-8 rounded-r-md flex flex-col">
            <CSection title="Order summary" />
            <div class="flex justify-between  mt-0 pb-8 border-b border-gray-300 font-light">
              <div>{{ cart.items }} items</div>
              <div>
                {{ cart.basePrice() }}
              </div>
            </div>
            <MSummary :discounts="discounts" />
            <div class="flex justify-between mt-auto border-t border-gray-300 pt-4 pb-8 text-xl">
              <div class="text-base uppercase text-gray-500">Total cost</div>
              <strong>{{ cart.total() }}</strong>
            </div>
            <button
              class="bg-blue-500 text-white py-3 rounded-sm"
              @click="() => console.log('Buy')"
            >
              Checkout
            </button>
          </div>
        </template>

        <template #back>
          <div class="bg-gray-200 flex w-full z-10 relative">
            <img
              src="./assets/img/shirt.png"
              class="rounded-l-md w-2/3 h-full object-cover product-image__img z-10 relative"
            />
          </div>
        </template>
      </MFlipFlop> -->
    </div>
  </div>
</template>

<script>
// import CSection from './components/section.vue';
// import Table from './components/organism/table.vue';
// import MSummary from './components/molecules/MSummary.vue';
import Modal from './components/modal.vue';

import products from '../fakeData/products';
import Checkout from '../fakeData/checkout';
// import MFlipFlop from './components/flipflop.vue';

const cart = new Checkout(products);
export default {
  name: 'App',
  components: {
    // CSection,
    // Table,
    // MSummary,
    // MFlipFlop,
    Modal,
  },
  data() {
    return {
      products,
      cart,
      modal: null,
    };
  },
  computed: {
    hasItems() {
      return this.cart.items > 0;
    },
    hasDiscounts() {
      return this.discounts.length > 0;
    },
    discounts() {
      // I just realize its not a good idea to keep coins (€) on the value
      return Object.values(this.cart.products)
        .filter((item) => parseFloat(item.discount.value) < 0);
    },
  },
  methods: {
    setModal(ev) {
      this.modal = ev;
      console.log('modal', ev);
    },
    add(id) {
      this.cart.add(id);
    },
    remove(id) {
      this.cart.remove(id);
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  overflow: hidden;
  @apply min-h-screen flex justify-center items-center;
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
  // i thinks is much better to use
  // vh or vw than calc 100% - Xpx on the main layout
  height: 70vh;
  width: 70vw;
  max-width: 1088px;
  max-height: 648px;
}
</style>
