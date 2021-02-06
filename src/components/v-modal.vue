<template>
<div class="modal z-10  h-screen  flex justify-center items-center">
  <div  class="fixed inset-0 cursor-pointer -z-1"
  @click="closeModal"/>
  <VContainer class="main-content m-auto overflow-hidden"  v-if="product">
    <figure class="-my-8 -mx-12 flex-grow relative">
        <img v-if="product.img"
          :src="require(`../assets/img/${product.img}.png`)"
          :alt="product.img"
          class="h-full w-full object-cover object-center"
        />
        <div v-else class="h-full w-full bg-primary-500"/>
        </figure>
      <template #aside>
        <div class="flex justify-end mb-4">
          <VButton class="flex justify-center" variant="icon" @click="closeModal">
            <ICross class="text-gray-700 h-8 w-8 p-2" />
          </VButton>
        </div>
        <VSection :title="product.name" :price="price">
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
              class="flex justify-center mt-8 add"
              @click="addToCart(product.code)"
            >
              Add to cart
            </VButton>
          </template>
        </VSection>
      </template>
  </VContainer>
  </div>
</template>

<script>
import VContainer from './layout/v-container.vue';
import VSection from './layout/v-section.vue';
import ICross from './icons/cross.vue';
import VButton from './common/v-button.vue';

export default {
  components: {
    VContainer,
    VSection,
    ICross,
    VButton,
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
      require: true,
    },
  },
  computed: {
    price() {
      return `${this.product.price} ${this.product.coin}`;
    },
  },
  methods: {
    addToCart(id) {
      this.$emit('add', id);
      this.closeModal();
    },
    closeModal() {
      this.$emit('modal', null);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @apply absolute inset-0 overflow-hidden;
  &:before {
    content: "";
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.15;
    clip-path: ellipse(5vw 5vw at 50% 50%);

    transition: 0.15s ease-in-out;
    @apply bg-blue-600;
  }
}
.modal.active {
  &:before {
    transition: 0.3s ease-in-out;
    opacity: 0.35;
    clip-path: ellipse(125vw 125vw at 50% 50%);
  }
}
</style>
