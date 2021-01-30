<template>
  <div id="app" class="wrapper">
    <div class="flex main-content">
      <div class="flex-grow bg-white p-4 rounded-l-md">
        <CSection title="Shopping cart"/>
        content
        <div v-for="item in products" :key="item.code">
          {{ item.name }}
          {{ item.units = 2 }}
          {{ item.totalPrice }}
          {{ item.discount }}
        </div>
      </div>
      <div class="flex-grow bg-gray-100 p-4 rounded-r-md">
        <CSection title="Order summary"/>
        cart
        <!-- {{cart.products.tshit}}   -->
        <hr>
        <!-- {{cart.distance(5)}} -->
        {{cart.identify()}}
      </div>

    </div>
  </div>
</template>

<script>
import CSection from './components/section.vue';
import products from '../fakeData/products';

class Checkout {
  constructor(productsList) {
    this.products = productsList;
    this.test = 0;
  }

  identify() {
    this.products.tshit.units += 1;
    console.log(this.products.tshit);
    // return this;
    // this.products.tshit += this.products.tshit;
    // this.products[0].units += this.products[0].units;
  }
}
const cart = new Checkout(products);
export default {
  name: 'App',
  components: {
    CSection,
  },
  data() {
    return {
      products,
      cart,
    };
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
.main-content{
  min-height: 70vh;
  min-width: 70vw;
}
</style>
