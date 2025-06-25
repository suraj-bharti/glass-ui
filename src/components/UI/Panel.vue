<template>
  <div
    class="panel"
    :class="[bgClass, paddingClass, { 'is-disabled': disabled }]"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : undefined"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: v => ['default', 'success', 'primary', 'danger', 'warning'].includes(v)
  },
  padding: {
    type: String,
    default: '',
    validator: v => ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2x', '3x', ''].includes(v),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const bgClass = computed(() => `bg--${props.variant}`);
const paddingClass = computed(() => props.padding ? `p--${props.padding}` : '');
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

@each $name, $size in $sizes {
  .p--#{$name} {
    padding: #{$size};
  }
}

.panel {
  box-shadow: 1px 1px 1px #aaa;
  transition: opacity 0.2s;
  color: var(--text-color);
  font-family: var(--font-family);
  border-radius: var(--border-radius);
}

.bg--default   { background: var(--default-bg); }
.bg--success   { background: var(--success-bg); }
.bg--primary   { background: var(--primary-bg); }
.bg--danger    { background: var(--danger-bg); }
.bg--warning   { background: var(--warning-bg); }

.is-disabled {
  opacity: 0.6;
  pointer-events: none;
  user-select: none;
}
</style>