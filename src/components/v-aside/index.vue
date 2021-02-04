<template>
  <div class="flex flex-col flex-grow">
    <VSection title="Order summary" />
    <div class="flex justify-between  mt-0 pb-8 border-b border-gray-300 font-light">
      <div>{{ cart.items }} items</div>
      <div>
        {{ cart.basePrice() }}
      </div>
    </div>
    <VSummary :discounts="discounts" />
    <div class="flex justify-between mt-auto border-t border-gray-300 pt-4 pb-8 text-xl">
      <div class="text-base uppercase text-gray-500">Total cost</div>
      <strong>{{ cart.total() }}</strong>
    </div>
    <VButton @click="payment">
      Checkout
    </VButton>
  </div>
</template>

<script>
import VSummary from './v-summary.vue';
import VSection from '../layout/v-section.vue';
import VButton from '../common/v-button.vue';

export default {
  components: {
    VSection,
    VSummary,
    VButton,
  },
  props: {
    cart: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    discounts() {
      return Object.values(this.cart.products)
        .filter((item) => parseFloat(item.discount.value) < 0);
    },
  },
  methods: {
    payment() {
      console.log('payment');
    },
  },
};
</script>

<style lang="scss" scoped></style>
