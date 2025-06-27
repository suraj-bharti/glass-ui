<template>
  <div
    :class="[
      'glass-grid',
      `grid-cols-${cols}`,
      gap ? `grid-gap-${gap}` : '',
      align ? `grid-align-${align}` : '',
      justify ? `grid-justify-${justify}` : '',
      wrap ? 'grid-wrap' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  cols: {
    type: [Number, String],
    default: 2,
    validator: v => Number(v) >= 1 && Number(v) <= 12
  },
  gap: {
    type: [String, Number],
    default: 'md', // Use your spacing scale: xs, sm, md, lg, xl
  },
  align: {
    type: String,
    default: '',
    validator: v => ['', 'start', 'center', 'end', 'stretch'].includes(v)
  },
  justify: {
    type: String,
    default: '',
    validator: v => ['', 'start', 'center', 'end', 'between', 'around', 'evenly'].includes(v)
  },
  wrap: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-cols, 2), 1fr);
  gap: var(--space-md, 16px);
  width: 100%;
}

.grid-wrap {
  flex-wrap: wrap;
}

@for $i from 1 through 12 {
  .grid-cols-#{$i} > * {
    flex: 0 0 calc(100% / #{$i});
    max-width: calc(100% / #{$i});
  }
}

@each $name, $size in $sizes {
  .grid-gap-#{$name} {
    gap: #{$size};
  }
}

.grid-align-start    { align-items: flex-start; }
.grid-align-center   { align-items: center; }
.grid-align-end      { align-items: flex-end; }
.grid-align-stretch  { align-items: stretch; }

.grid-justify-start    { justify-content: flex-start; }
.grid-justify-center   { justify-content: center; }
.grid-justify-end      { justify-content: flex-end; }
.grid-justify-between  { justify-content: space-between; }
.grid-justify-around   { justify-content: space-around; }
.grid-justify-evenly   { justify-content: space-evenly; }

.grid-cols-1  { --grid-cols: 1; }
.grid-cols-2  { --grid-cols: 2; }
.grid-cols-3  { --grid-cols: 3; }
.grid-cols-4  { --grid-cols: 4; }
.grid-cols-5  { --grid-cols: 5; }
.grid-cols-6  { --grid-cols: 6; }
.grid-cols-7  { --grid-cols: 7; }
.grid-cols-8  { --grid-cols: 8; }
.grid-cols-9  { --grid-cols: 9; }
.grid-cols-10 { --grid-cols: 10; }
.grid-cols-11 { --grid-cols: 11; }
.grid-cols-12 { --grid-cols: 12; }
</style>