<template>
  <input
    class="glass-input"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :style="inputStyle"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
    validator: v => ['text', 'password', 'email', 'number'].includes(v),
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  borderColor: {
    type: String,
    default: 'blue', // e.g. "#6200ea" or "blue"
  },
  borderWidth: {
    type: String,
    default: '1px',
  },
  borderType: {
    type: String,
    default: 'solid',
    validator: v => ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'].includes(v),
  },
  borderRadius: {
    type: String,
    default: '', // e.g. "8px"
  },
});

const inputStyle = computed(() => ({
  border: props.borderColor
    ? `${props.borderWidth} ${props.borderType} ${props.borderColor}`
    : undefined,
  borderRadius: props.borderRadius || undefined,
}));
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-input {
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  background: transparent;
  color: var(--text-color);
  font-family: var(--font-family);
  backdrop-filter: blur(2px);
  outline: none;
  transition: border 0.2s;
}
.glass-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>