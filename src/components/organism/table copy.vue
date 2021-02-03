<template>
  <div>
    <CHeader :items="['product details', 'quantity', 'price', 'total']" class="my-6 pt-2" />
    <CHeader v-for="item in products" :key="item.code" class="text-center my-8">
      <CProduct
        :name="item.name"
        :code="item.code"
        :img="item.img"
        class="col-span-3 text-left"
        @modal="sexy"
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
    <!-- {{ modal }} -->
    <transition name="slide-fade">
        <!-- transform-origin: 47.99714660644531px 168.03976440429688px; -->
      <div
        ref="modal"
        v-show="hasModal"
        class="absolute inset-0 pointer-events-none overflow-hidden rounded-md flex"
        :style="{ transformOrigin: origin }"
      >
      <div class="w-8/12 bg-white rounded-l-md">
        <img
          :src="require(`../../assets/img/shirt.png`)"
          alt="shirt"
          class="h-full w-full object-cover object-center"
          ref="img"
        />
        </div>
          <div class="w-4/12 bg-gray-100  py-8 px-8 rounded-r-md flex flex-col">
            <CSection title="Order summary" />
            <div class="flex justify-between  mt-0 pb-8 border-b border-gray-300 font-light">
              <div>{{ cart.items }} items</div>
              <div>
                {{ cart.basePrice() }}
              </div>
            </div>
            <MSummary :discounts="discounts" />
            <div class="flex justify-between mt-auto border-t border-gray-300 pt-4 pb-8 text-xl">
              <div class="text-base uppercase text-gray-500">Total cost</div>
              <strong>{{ cart.total() }}</strong>
            </div>
            <button
              class="bg-blue-500 text-white py-3 rounded-sm"
              @click="() => console.log('Buy')"
            >
              Checkout
            </button>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CSection from '../section.vue';
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
    sexy(ev, pos) {
      const posModal = this.$refs.modal.getBoundingClientRect();
      const posX = pos.left - posModal.left;
      const posY = pos.top - posModal.top;
      console.log();
      this.origin = `${posX}px ${posY}px`;
      this.$nextTick(() => {
        if (this.modal === ev) {
          this.modal = null;
        } else {
          this.modal = ev;
        }
        this.origin = '0px 0px';
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.onshow {
  transition: 0.3s linear;
  transform: translate(47.99714660644531px, 168.03976440429688px) scale(0.15);
  transform-origin: 0;
}
.slide-fade-enter-active {

  transition: all 0.45s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale(.25);
  opacity: 1;
}
/* transform: translate(0,0); */
</style>
