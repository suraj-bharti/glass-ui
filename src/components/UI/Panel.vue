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
    validator: v => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(v)
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
  box-shadow: var(--glass-shadow);
  transition: opacity var(--transition);
  color: var(--text-color);
  font-family: var(--font-family);
  border-radius: var(--border-radius);
  background: var(--default-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: var(--glass-border);
}

.bg--primary    { background: var(--primary-bg);   color: var(--primary-text);   }
.bg--secondary  { background: var(--secondary-bg); color: var(--secondary-text); }
.bg--success    { background: var(--success-bg);   color: var(--success-text);   }
.bg--danger     { background: var(--danger-bg);    color: var(--danger-text);    }
.bg--warning    { background: var(--warning-bg);   color: var(--warning-text);   }
.bg--info       { background: var(--info-bg);      color: var(--info-text);      }
.bg--light      { background: var(--light-bg);     color: var(--light-text);     }
.bg--dark       { background: var(--dark-bg);      color: var(--dark-text);      }

.is-disabled {
  opacity: 0.6;
  pointer-events: none;
  user-select: none;
}
</style>