<template>
  <component
    :is="tag"
    :href="href"
    class="cursor-pointer"
    :class="[variantStyles]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    // External links
    href: {
      type: String,
      default: null,
      // default value has to be null
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'icon'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      variantStyles: this.buildVariantStyles(),
    };
  },
  computed: {
    tag() {
      const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
      const validUrl = pattern.test(this.href);
      if (this.href && validUrl) {
        return 'a';
      }
      return 'button';
    },
  },
  methods: {
    buildVariantStyles() {
      const baseButton = 'btn';
      const baseVariant = this.variant ? ` ${baseButton}-${this.variant}` : '';

      return `${baseButton} ${baseVariant}`;
    },
    handleClick(ev) {
      this.$emit('click', ev);
    },
  },
};
</script>
<style lang="scss">
.btn {
  min-width: 2rem;
  min-height: 2rem;
  &-icon {
    transition: transform 0.3s ease-out;
    position: relative;
    z-index: 0;
    &:before {
      transition: transform 0.3s ease-out;
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0.95);
      @apply bg-gray-50 shadow;
    }
    &:focus,
    &:hover,
    &:active {
      // disabled outline because it's ugly,
      // added some accesibility hints
      outline: none;
      transform: scale(1.05);
      &:before {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  &-primary {
    transition: 0.3s ease-out;
    @apply w-full bg-blue-500 text-white py-3 rounded-sm;
    &:focus,
    &:hover,
    &:active {
      transform: perspective(1750px) translateZ(10px) translateY(-2px);
      @apply w-full bg-blue-400 shadow-lg;
    }
  }
}
</style>
