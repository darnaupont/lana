<template>
  <figure class="product flex" @click="showModal">
    <img
      :src="require(`../../assets/img/${img}.png`)"
      :alt="img"
      class="rounded-md w-20 h-20 object-cover product__img"
    />
    <div class="text-left mx-4 my-auto">
      <h1 class="text-blue-500">{{ name }}</h1>
      <p class="text-gray-500 font-light text-xs tracking-wider">Product code {{ code }}</p>
    </div>
  </figure>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
      require: true,
    },
    name: {
      type: String,
      default: '',
      require: true,
    },
    code: {
      type: String,
      default: '',
      require: true,
    },
  },
  methods: {
    showModal() {
      this.$emit('modal', this.code);
    },
  },
};

</script>
<style lang="scss" scoped>
.product {
  position: relative;
  &__img {
    transition: transform 0.3s ease-out;
    position: relative;
  }
  &:before {
    transition: all 0.4s ease-out;
    @apply w-16 h-16 top-4 left-2 rounded-full bg-blue-900;
    content: "";
    position: absolute;
    opacity: .25;
    filter: blur(8px);
  }
  &:hover {
    .product {
      &__img {
        transform: perspective(375px) rotateY(20deg) rotateX(8deg);
      }
    }

    &:before {
      transform: scale(1) translateY(5px);
      opacity: 0.5;
    }
  }
}
</style>
