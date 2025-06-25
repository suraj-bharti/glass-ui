<template>
  <button
    :class="['glass-btn', `glass-btn--${variant}`, { 'is-disabled': disabled }]"
    :disabled="disabled"
    :type="type"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

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
  border-radius: 0.5em;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: rgba(255,255,255,0.15);
  color: var(--text-color);
  font-family: var(--font-family);
  backdrop-filter: blur(6px);
}
.glass-btn--primary    { background: var(--primary-color); color: #fff; }
.glass-btn--secondary  { background: var(--secondary-color); color: #222; }
.glass-btn--success    { background: var(--success-bg); color: #222; }
.glass-btn--danger     { background: var(--danger-bg); color: #fff; }
.glass-btn--warning    { background: var(--warning-bg); color: #222; }
.glass-btn--info       { background: var(--info-bg); color: #fff; }
.glass-btn--light      { background: var(--light-bg); color: #222; }
.glass-btn--dark       { background: var(--dark-bg); color: #fff; }
.is-disabled,
.glass-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>