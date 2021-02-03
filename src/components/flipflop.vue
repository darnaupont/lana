<template>
  <div class="Mflip">
    <div ref="card" class="Mf-card">
      <div
        ref="front"
        class="Mf-card__content Mf-card__content--front"
      >
        <slot name="front" />
      </div>
      <div
        ref="back"
        class="Mf-card__content Mf-card__content--back"
        @click="toggle(false)"
      >
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'MFlipFlop',
  props: {
    flipCard: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cardHeight: 0,
    };
  },
  watch: {
    flipCard(newValue) {
      this.toggle(newValue);
    },
  },
  mounted() {
    const frontHeight = this.$refs.front?.getBoundingClientRect().height;
    const backHeight = this.$refs.back?.getBoundingClientRect().height;
    const cardHeight = Math.max(backHeight, frontHeight);
    this.cardHeight = Math.ceil(cardHeight);
  },
  methods: {
    toggle(flip) {
      const tl = gsap.timeline({
        duration: 0.3,
      });
      const rotateDeg = flip ? 180 : 0;
      tl.to(this.$refs.card, 1, { rotationX: rotateDeg });
    },
  },
};
</script>

<style lang="scss" scoped>
.Mflip {
  background-color: transparent;
  perspective: 1000px;
}
.Mf-card {
  @apply relative;
  transform-style: preserve-3d;
}

.Mf-card__content {
  position: relative;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
   @apply flex;
}

.Mf-card__content--back {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: rotateX(180deg);
}
</style>
