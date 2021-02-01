<template>
  <div class="grid grid-cols-4 gap-4 text-center my-6">
    <slot>
    <div v-for="item in items" :key="item" class="uppercase text-gray-400 font-bold text-xs">
      {{ item }}
    </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
