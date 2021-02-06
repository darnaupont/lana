<template>
    <VCell>
    <VButton class="mx-2 text-blue-500 font-bold btn-remove"
    variant="icon" @click="remove">
        -
    </VButton>
    <input type="number" v-model="units" disabled
    class="border-2 rounded-sm px-3 py-2 w-12 text-center"
 >
    <VButton class="mx-2 text-blue-500 font-bold px-1 btn-add"
    variant="icon" @click="add">
        +
    </VButton>
    </VCell>
</template>

<script>
import VButton from '../common/v-button.vue';
import VCell from './cell.vue';

export default {
  name: 'MCounter',
  components: {
    VButton,
    VCell,
  },
  props: {
    units: {
      type: Number,
      default: 0,
      require: true,
    },
  },
  methods: {
    add() {
      this.$emit('add');
    },
    remove() {
      if (this.units > 0) {
        this.$emit('remove');
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
