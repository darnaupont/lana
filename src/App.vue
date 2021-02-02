<template>
  <div id="app" class="wrapper">
    <div class="flex main-content">
      <div class="flex-grow bg-white p-4 rounded-l-md">
        <CSection title="Shopping cart" />
        <CHeader :items="['name', 'quantity', 'price', 'total']" />
        <CHeader v-for="item in products" :key="item.code">

                          <figure class="product-image flex">
                  <img :src="require(`./assets/img/${item.img}.png`)"
                  :alt="item.img" class="rounded-md w-20 h-20 object-cover"/>
                  <div class="text-left mx-4 my-auto">
                    <h1 class="text-blue-500">{{ item.name }}</h1>
                    <p class="text-gray-500 font-light text-xs">Product code {{item.code}}</p>
                  </div>
                </figure>
          <div class="flex justify-center items-center">
            <button class="mx-2 text-blue-500 font-bold" @click="remove(item.code)">
              -
            </button>
            <div class="border-2  rounded-sm px-3 py-2">
              {{ item.units }}
            </div>
            <button class="mx-2 text-blue-500 font-bold px-1" @click="add(item.code)">
              +
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
      <div class="w-2/6 bg-gray-100 p-4 rounded-r-md flex flex-col">
        <CSection title="Order summary" />
        <div class="flex justify-between py-4 border-b border-gray-300">
          <div>
             {{ cart.items }} items
            </div>
            <div>
              {{ cart.basePrice()  }}
            </div>
          </div>
        <div class="my-4" v-if="hasDiscounts">
          Discounts
        <div v-for="{discount}, index in discounts" :key="`disc_${index}`"
        class="flex justify-between my-2">
          <div>
          {{ discount.name }}
          </div>
          <div>
            {{ discount.value }}
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
    add(id) {
      this.cart.add(id);
    },
    remove(id) {
      this.cart.remove(id, 3);
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  @apply min-h-screen  flex justify-center items-center;
  background-image: url("./assets/img/background.png");
  background-position: center center;
  background-size: cover;
  position: relative;
  z-index: 1;
  &:after{
    content: '';
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    opacity: 0.5;
    @apply bg-black;
  }
}

.main-content {
  min-height: 70vh;
  min-width: 70vw;
}
</style>
