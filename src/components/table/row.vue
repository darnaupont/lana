<template>
  <div class="grid grid-cols-6 gap-4">
    <slot>
    <div v-for="item, index in items"
    :key="item"
    :class="[index === 0 ? 'col-span-3' : 'text-center']"
    class="uppercase text-gray-400 text-xs">
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
