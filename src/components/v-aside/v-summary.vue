<template>
  <div class="my-6">
    <transition name="fade">
    <header class="text-gray-400 uppercase font-light text-sm" v-if="hasDiscounts">
      Discounts
    </header>
    </transition>
    <transition-group name="list-disc" tag="ul">
    <li
      v-for="({ discount }, index) in discounts"
      :key="`disc_${index}`"
      class="disc-item flex justify-between my-4 text-sm"
    >
      <span class="font-light text-gray-700">
        {{ discount.name }}
      </span>
      <span class="text-gray-700 font-semibold">
        {{ discount.value }}
      </span>
    </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    discounts: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasDiscounts() {
      return this.discounts.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.disc-item {
  transition: all .7s;
}
.list-disc-enter, .list-disc-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .7s
}

.fade-enter,
.fade-leave-to{
  opacity: 0
}
</style>
