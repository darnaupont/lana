<template>
  <div class="my-6" v-if="hasDiscounts">
    <header class="text-gray-400 uppercase font-light">
      Discounts
    </header>
    <ul>
    <li
      v-for="({ discount }, index) in discounts"
      :key="`disc_${index}`"
      class="flex justify-between my-4 text-sm"
    >
      <span class="font-light text-gray-700">
        {{ discount.name }}
      </span>
      <span class="text-gray-700 font-semibold">
        {{ discount.value }}
      </span>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    discounts: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasDiscounts() {
      return this.discounts.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
