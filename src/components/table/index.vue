<template>
  <div>
    <TRow :items="['product details', 'quantity', 'price', 'total']" class="my-6 pt-2" />
    <TRow v-for="item in products" :key="item.code" class="text-center my-8">
      <VProduct
        :name="item.name"
        :code="item.code"
        :img="item.img"
        class="col-span-3 text-left cursor-pointer"
        @modal="showModal(item.code)"
      />

      <VCounter :item="item" @add="add(item.code)" @remove="remove(item.code)" />
      <TCell>
        {{ item.price }} {{item.coin}}
      </TCell>
      <TCell>
        {{ item.basePrice }}
      </TCell>
    </TRow>
  </div>
</template>

<script>
import TRow from './row.vue';
import TCell from './cell.vue';
import VProduct from './v-product.vue';
import VCounter from './v-counter.vue';

export default {
  components: {
    VCounter,
    TRow,
    VProduct,
    TCell,
  },
  props: {
    cart: {
      type: Object,
      default: () => ({}),
      require: true,
    },
  },
  data() {
    return {
      modal: null,
      products: this.cart.products,
    };
  },
  computed: {

    hasModal() {
      return Boolean(this.modal);
    },
  },

  methods: {
    add(id) {
      this.cart.add(id);
    },
    remove(id) {
      this.cart.remove(id);
    },
    showModal(id) {
      this.$emit('modal', id);
    },
  },
};
</script>
