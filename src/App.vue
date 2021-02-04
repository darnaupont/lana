<template>
  <div id="app" class="wrapper">
    <VContainer class="main-content relative">
        <VMain :cart="cart"/>
      <template #aside>
        <VAside :cart="cart"/>
      </template>
    </VContainer>
  </div>
</template>

<script>
import VAside from './components/v-aside/index.vue';
import VContainer from './components/layout/v-container.vue';
import VMain from './components/v-main.vue';

import products from '../fakeData/products';
import Checkout from '../helpers/checkout';

const cart = new Checkout(products);
export default {
  name: 'App',
  components: {
    VAside,
    VMain,
    VContainer,
  },
  data() {
    return {
      cart,
    };
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
</style>
