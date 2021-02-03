<template>
    <div>
        <CHeader :items="['product details', 'quantity', 'price', 'total']"
        class="my-6 pt-2" />
        <CHeader v-for="item in products" :key="item.code" class="text-center my-8">
          <CProduct
            :name="item.name"
            :code="item.code"
            :img="item.img"
            class="col-span-3 text-left"
            @modal="emitModal"
            :ref="item.code"
          />

          <MCounter :item="item" @add="add(item.code)" @remove="remove(item.code)" />
          <CCell>
            {{ item.price }}
          </CCell>
          <CCell>
            {{ item.basePrice }}
          </CCell>
        </CHeader>
    </div>
</template>

<script>
import CHeader from '../row.vue';
import CProduct from '../product.vue';
import CCell from '../cell.vue';
import MCounter from '../molecules/MCounter.vue';

export default {
  components: {
    MCounter,
    CHeader,
    CProduct,
    CCell,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
      require: true,
    },
    cart: {
      type: Object,
      default: () => ({}),
      require: true,
    },
  },
  data() {
    return {
      modal: null,
      origin: '0px 0px',
    };
  },
  methods: {
    add(id) {
      this.cart.add(id);
    },
    remove(id) {
      this.cart.remove(id);
    },
    emitModal(ev, pos) {
      this.$emit('modal', ev);
      if (this.modal === ev) {
        this.modal = null;
      } else {
        this.modal = ev;
        this.$nextTick(() => {
          const modalPost = this.$refs.modal.getBoundingClientRect();
          console.log('sexy', ev, pos, this.$refs.modal.getBoundingClientRect());
          this.origin = ` ${pos.x - modalPost.x}px ${pos.y - modalPost.y}px`;
        });
      }
    },
  },
};
</script>
