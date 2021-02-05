<template>
  <section>
    <header v-if="title" class="border-b border-gray-300 pb-6 mb-8 font-semibold flex">
      <h2>{{ title }}</h2>
      <span v-if="price" class="ml-auto">{{price}}</span>
    </header>
    <slot />
    <footer
    v-if="hasSlotFooter"
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
    hasSlotFooter() {
      return this.$slots.footer;
    },
  },
};
</script>
