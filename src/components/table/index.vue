<template>
  <div>
    <TRow :items="['product details', 'quantity', 'price', 'total']" class="my-6 pt-2" />
    <TRow v-for="item in products" :key="item.code" class="text-center my-8 product-row">
      <VProduct
        :name="item.name"
        :code="item.code"
        :img="item.img"
        class="col-span-3 text-left cursor-pointer"
        @modal="showModal(item.code)"
      />
      <VCounter :units="item.units" @add="add(item.code)" @remove="remove(item.code)" />
      <TCell>
        {{ item.price }} {{item.coin}}
      </TCell>
      <TCell class="product-row__price col-start-4 md:col-start-6 font-bold md:font-normal">
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
  computed: {
    products() {
      return this.cart.products;
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
