<template>
  <button
    :class="[
      'glass-btn',
      `glass-btn--${variant}`,
      { 'is-disabled': disabled, 'is-loading': loading, 'glass-btn--block': block, 'glass-btn--icon': !!icon }
    ]"
    :disabled="disabled || loading"
    :type="type"
    :aria-disabled="(disabled || loading) ? 'true' : undefined"
    @click="onClick"
    :autofocus="autofocus"
  >
    <span v-if="loading" class="glass-btn__spinner" aria-hidden="true"></span>
    <span v-if="icon && !loading" class="glass-btn__icon">
      <slot name="icon">
        <template v-if="typeof icon === 'string'">
            {{ icon }}
          </template>
          <template v-else-if="icon">
            <component :is="icon" />
          </template>
        </slot>
    </span>
    <span v-if="$slots.default" class="glass-btn__content">
      <slot />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: v => [
      'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
    ].includes(v)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [Object, Function, String],
    default: null
  },
  block: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button',
    validator: v => ['button', 'submit', 'reset'].includes(v)
  },
  autofocus: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

function onClick(event) {
  if (!props.disabled && !props.loading) emit('click', event);
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
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
  background: var(--default-bg);
  color: var(--text-color);
  font-family: var(--font-family);
  backdrop-filter: blur(var(--glass-blur));
  box-shadow: var(--glass-shadow);
  border: var(--glass-border);
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  position: relative;
  min-width: 2.5em;
  min-height: 2.5em;
  user-select: none;
}

.glass-btn--block {
  display: flex;
  width: 100%;
}

.glass-btn--icon {
  padding-left: 0.75em;
  padding-right: 0.75em;
}

.glass-btn__icon {
  display: inline-flex;
  align-items: center;
  font-size: 1.2em;
}

.glass-btn__spinner {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border: 2px solid var(--text-color, #222);
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: glass-btn-spin 0.7s linear infinite;
  margin-right: 0.5em;
}

@keyframes glass-btn-spin {
  100% { transform: rotate(360deg); }
}

.glass-btn__content {
  display: inline-block;
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

.is-loading {
  pointer-events: none;
  opacity: 0.7;
}
</style>