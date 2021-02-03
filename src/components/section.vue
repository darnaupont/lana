<template>
  <section>
    <header v-if="title" class="border-b border-gray-300 pb-6 mb-8 font-semibold flex">
      {{ title }}
      <span v-if="price" class="ml-auto">{{price}}</span>
    </header>
    <slot />
    <footer
    v-if="hasSlotDefault"
    class="flex flex-wrap justify-between mt-8 border-t border-gray-300 pt-6 self-end">
      <slot name="footer"/>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined,
    },
    price: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    hasSlotDefault() {
      return this.$slots.default;
    },
  },
};
</script>
