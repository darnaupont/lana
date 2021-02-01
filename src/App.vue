<template>
  <div id="app" class="wrapper">
    <div class="flex main-content">
      <div class="flex-grow bg-white p-4 rounded-l-md">
        <CSection title="Shopping cart" />
        <CHeader :items="['name', 'quantity', 'price', 'total']" />
        <CHeader v-for="item in products" :key="item.code">
          <div class="text-left">
            {{ item.name }}
          </div>
          <div class="flex -mx-2">
            <button class="mx-2" @click="add(item.code)">
              add
            </button>
            <div>
              {{ item.units }}
            </div>
            <button class="mx-2" @click="remove(item.code)">
              remove
            </button>
          </div>
          <div>
            {{ item.price }}
          </div>
          <div>
            {{ item.basePrice }}
          </div>
        </CHeader>
      </div>
      <div class="flex-grow bg-gray-100 p-4 rounded-r-md flex flex-col">
        <CSection title="Order summary" />
        <div class="flex justify-between py-4 border-b border-gray-300">
          <div>
             {{ cart.items }} items
            </div>
            <div>
              {{ cart.basePrice()  }}
            </div>
          </div>
        <div class="my-4">
          Discounts
        <div v-for="item in discounts" :key="item.code" class="flex justify-between my-2">
          <div>
          {{ item.units }}
          </div>
          <div>
            {{ item.discount }}
          </div>
        </div>
        </div>
        <div class="flex justify-between mt-auto border-t border-gray-300 py-4">
          <div>Total cost</div>
          <div>{{ cart.total() }}</div>
        </div>
            <button class="bg-blue-500 text-white py-3 rounded-sm" @click="()=>console.log('Buy')">
              Checkout
            </button>
      </div>
    </div>
  </div>
</template>

<script>
import CSection from './components/section.vue';
import CHeader from './components/row.vue';
import products from '../fakeData/products';
import Checkout from '../fakeData/checkout';

const cart = new Checkout(products);
export default {
  name: 'App',
  components: {
    CSection,
    CHeader,
  },
  data() {
    return {
      products,
      cart,
    };
  },
  computed: {
    discounts() {
      // I just realize its not a good idea to keep coins (€) on the value
      return Object.values(this.cart.products).filter((item) => parseFloat(item.discount) < 0);
    },
  },
  methods: {
    add(id) {
      this.cart.add(id);
    },
    remove(id) {
      this.cart.remove(id);
    },
  },
};
</script>

<style>
.wrapper {
  @apply min-h-screen bg-black bg-opacity-25 flex justify-center items-center;
  background-image: url("./assets/img/background.png");
  background-position: center center;
  background-size: cover;
}
.main-content {
  min-height: 70vh;
  min-width: 70vw;
}
</style>
