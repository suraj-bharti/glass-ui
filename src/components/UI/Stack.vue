<template>
  <div
    class="stack"
    :class="[
      directionClass,
      align ? `align-${align}` : '',
      justify ? `justify--${justify}` : '',
      padding ? `p--${padding}` : ''
    ]"
    :style="gapStyle"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  align: {
    type: String,
    default: '',
    validator: v => ['start', 'center', 'end', 'stretch', 'baseline', ''].includes(v),
  },
  justify: {
    type: String,
    default: '',
    validator: v => ['start', 'center', 'end', 'between', 'around', 'evenly', ''].includes(v),
  },
  direction: {
    type: String,
    default: 'column',
    validator: v => ['column', 'row'].includes(v),
  },
  gap: {
    type: [String, Number],
    default: '',
  },
  padding: {
    type: String,
    default: '',
  },
});

const directionClass = computed(() => `direction--${props.direction}`);
const gapStyle = computed(() =>
  props.gap ? { gap: typeof props.gap === 'number' ? `${props.gap}px` : props.gap } : {}
);
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;

.stack {
  display: flex;
  min-width: 0;
  min-height: 0;
  height: 200px;
}

.direction--column {
  flex-direction: column;
}
.direction--row {
  flex-direction: row;
}

.align-start    { align-items: flex-start; }
.align-center   { align-items: center; }
.align-end      { align-items: flex-end; }
.align-stretch  { align-items: stretch; }
.align-baseline { align-items: baseline; }

.justify--start    { justify-content: flex-start; }
.justify--center   { justify-content: center; }
.justify--end      { justify-content: flex-end; }
.justify--between  { justify-content: space-between; }
.justify--around   { justify-content: space-around; }
.justify--evenly   { justify-content: space-evenly; }

@each $name, $size in $sizes {
  .p--#{$name} {
    padding: #{$size};
  }
}
</style>