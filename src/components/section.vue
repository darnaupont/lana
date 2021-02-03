<template>
  <section>
    <header v-if="title" class="border-b border-gray-300 pb-6 mb-8 font-semibold">
      {{ title }}
    </header>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped></style>
