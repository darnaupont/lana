<template>
  <div class="v-container rounded-md overflow-hidden">
      <div class="flex flex-wrap overflow-hidden">
        <main class="v-container__main w-full lg:w-8/12 ">
          <slot />
        </main>
        <aside class="v-container__aside w-full lg:w-4/12">
          <slot name="aside" />
        </aside>
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    click(ev) {
      this.$emit('clickOutside', ev);
    },
    props: {
      modal: {
        type: Boolean,
        default: false,
      },
    },
  },
};
</script>
<style lang="scss">
.v-container {
  &__main {
    @apply  bg-white py-8 px-12 flex;
  }

  &__aside {
    @apply  bg-gray-100  py-8 px-8 flex flex-col;
  }
}
</style>
