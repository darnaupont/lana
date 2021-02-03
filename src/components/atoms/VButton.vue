<template>
  <component
    :is="tag"
    :href="href"
    class="cursor-pointer"
    :class="[variantStyles, sizeStyles]"
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
    // Internal links
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'icon',
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
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
      sizeStyles: this.buildSizeStyles(),
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
    buildSizeStyles() {
      const baseButton = 'btn';
      const withPadding = ['primary', 'secondary', 'outline', 'dark'].includes(
        this.variant,
      );
      const basePadding = withPadding ? ` ${withPadding ? 'padding' : ''}` : '';
      const baseSize = this.size ? ` ${baseButton}-size--${this.size}` : '';

      return `${baseSize} ${basePadding}`;
    },
    handleClick(ev) {
      this.$emit('click', ev);
    },
  },
};
</script>
<style lang="scss">
.btn{
  min-width: 2rem;
  min-height: 2rem;
  transition: transform 0.3s ease-out;
  position: relative;
  z-index: 0;
  &:before{
    transition: transform 0.3s ease-out;
    content:"";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    border-radius: 50%;
    opacity:0;
    transform: scale(.95);
    @apply bg-gray-50 shadow;
  }
  &:focus,
  &:hover,
  &:active{
    // disabled outline because it's ugly,
    // added some accesibility hints
    outline: none;
    transform: scale(1.05);
    &:before{
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
