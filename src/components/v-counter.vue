<template>
    <VCell>
    <VButton class="mx-2 text-blue-500 font-bold" variant="icon" @click="remove(item.code)">
        -
    </VButton>
    <input type="number" v-model="units" disabled
    class="border-2 rounded-sm px-3 py-2 w-12 text-center"
 >
    <VButton class="mx-2 text-blue-500 font-bold px-1" variant="icon" @click="add(item.code)">
        +
    </VButton>
    </VCell>
</template>

<script>
import VButton from './common/v-button.vue';
import VCell from './table/cell.vue';

export default {
  name: 'MCounter',
  components: {
    VButton,
    VCell,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      units: this.item.units,
    };
  },
  watch: {
    item: {
      // This will let Vue know to look inside the array
      deep: true,
      // We have to move our method to a handler field
      handler() {
        this.units = this.item.units;
      },
    },
  },
  methods: {
    add() {
      this.item.add(1);
    },
    remove() {
      if (this.units > 0) {
        this.item.remove(1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
