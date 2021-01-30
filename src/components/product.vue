<template>
  <div>
    product {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
