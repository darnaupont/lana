<template>
  <div class="modal " :class="{ close: close }">
    <div class="w-8/12 bg-white rounded-l-md">
      <img
        :src="require(`../assets/img/${product.img}.png`)"
        :alt="product.img"
        class="h-full w-full object-cover object-center"
        ref="img"
      />
    </div>
    <div class="w-4/12 bg-gray-100  py-8 px-8 rounded-r-md flex flex-col">
      <div class="flex justify-end mb-4">
        <VButton class="flex justify-center" variant="icon" @click="closeModal()">
          <ICross class="text-gray-700 h-8 w-8 p-2" />
        </VButton>
      </div>
      <CSection :title="product.name" :price="price">
        <!-- <p>{{ product.description }}</p> -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores repellat natus quas
          repellendus, a nesciunt consequuntur accusantium iste? Molestias, ad eius praesentium
          maxime porro reprehenderit at eos laboriosam excepturi exercitationem.
        </p>
        <template #footer>
          <p class="text-gray-500 font-light text-xs tracking-wider">
            Product code {{ product.code }}
          </p>
          <VButton
            variant="primary"
            class="flex justify-center mt-8"
            @click="() => console.log('Buy')"
          >
            Add to cart
          </VButton>
        </template>
      </CSection>
    </div>
  </div>
</template>

<script>
import CSection from './section.vue';
import ICross from './icons/cross.vue';
import VButton from './atoms/VButton.vue';

export default {
  components: {
    CSection,
    ICross,
    VButton,
  },
  props: {
    cart: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      product: this.cart.products.MUG,
      close: false,
    };
  },
  computed: {
    price() {
      return `${this.product.price} ${this.product.coin}`;
    },
  },
  methods: {
    addToCart() {
      this.$emit('add', this.product.code);
    },
    closeModal() {
      this.close = true;
      this.$emit('modal', null);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @apply overflow-hidden rounded-md flex;
  &:before {
    content: "";
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.35;
    clip-path: ellipse(125vw 125vw at 50% 50%);
    transition: 0.3s ease-in-out;
    @apply bg-blue-500;
  }
}
.modal.close {
  &:before {
    clip-path: ellipse(5vw 5vw at 50% 50%);
  }
}
</style>
