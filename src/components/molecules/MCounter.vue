<template>
    <VCell>
    <VButton class="mx-2 text-blue-500 font-bold" @click="remove(item.code)">
        -
    </VButton>
    <input type="number" v-model="units" disabled
    class="border-2 rounded-sm px-3 py-2 w-12 text-center"
 >
    <VButton class="mx-2 text-blue-500 font-bold px-1" @click="add(item.code)">
        +
    </VButton>
    </VCell>
</template>

<script>
import VButton from '../atoms/VButton.vue';
import VCell from '../cell.vue';

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
    units(newValue, oldValue) {
      const diff = newValue - oldValue;
      const payload = { id: this.item.code, diff };
      if (diff > 0) {
        this.$emit('add', payload);
      } else {
        this.$emit('remove', payload);
      }
    },
  },
  methods: {
    add() {
      this.units += 1;
    },
    remove() {
      if (this.units > 0) {
        this.units -= 1;
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
