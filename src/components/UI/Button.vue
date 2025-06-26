<template>
  <button
    :class="['glass-btn', `glass-btn--${variant}`, { 'is-disabled': disabled }]"
    :disabled="disabled"
    :type="type"
    :aria-disabled="disabled ? 'true' : undefined"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: v => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(v)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button',
    validator: v => ['button', 'submit', 'reset'].includes(v)
  }
});

const emit = defineEmits(['click']);

function onClick(event) {
  if (!props.disabled) emit('click', event);
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-btn {
  padding: 0.5em 1.5em;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1em;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
  background: var(--default-bg);
  color: var(--text-color);
  font-family: var(--font-family);
  backdrop-filter: blur(var(--glass-blur));
  box-shadow: var(--glass-shadow);
  border: var(--glass-border);
  outline: none;
}
.glass-btn:focus-visible {
  box-shadow: var(--focus-ring), var(--glass-shadow);
}

.glass-btn--primary    { background: var(--primary-bg);   color: var(--primary-text);   }
.glass-btn--secondary  { background: var(--secondary-bg); color: var(--secondary-text); }
.glass-btn--success    { background: var(--success-bg);   color: var(--success-text);   }
.glass-btn--danger     { background: var(--danger-bg);    color: var(--danger-text);    }
.glass-btn--warning    { background: var(--warning-bg);   color: var(--warning-text);   }
.glass-btn--info       { background: var(--info-bg);      color: var(--info-text);      }
.glass-btn--light      { background: var(--light-bg);     color: var(--light-text);     }
.glass-btn--dark       { background: var(--dark-bg);      color: var(--dark-text);      }

.is-disabled,
.glass-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}
</style>