<template>
  <textarea
    class="glass-textarea"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :style="textareaStyle"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: [String, Number],
    default: 3,
  },
  borderColor: {
    type: String,
    default: 'grey',
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
    default: '',
  },
});

const textareaStyle = computed(() => ({
  border: `${props.borderWidth} ${props.borderType} ${props.borderColor}`,
  borderRadius: props.borderRadius || undefined,
}));
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-textarea {
  width: 100%;
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
  resize: vertical;
}
.glass-textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>