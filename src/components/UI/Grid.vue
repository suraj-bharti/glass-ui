<template>
  <div
    :class="[
      'glass-grid',
      `grid-cols-${cols}`,
      gap ? `grid-gap-${gap}` : '',
      wrap ? 'grid-wrap' : '',
    ]"
    :style="{
      alignItems: align || undefined,
      justifyItems: justify && ['start','center','end','stretch'].includes(justify) ? justify : undefined,
      justifyContent: justify && ['between','around','evenly'].includes(justify)
        ? (
            justify === 'between' ? 'space-between' :
            justify === 'around' ? 'space-around' :
            justify === 'evenly' ? 'space-evenly' : undefined
          )
        : undefined,
      // Add a maxWidth for demo/dev so justify-content is visible
      maxWidth: (justify && ['between','around','evenly'].includes(justify)) ? '600px' : undefined,
      margin: (justify && ['between','around','evenly'].includes(justify)) ? '2em auto' : undefined
    }"
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
  /* Do NOT set width: 100% here, so justify-content can work! */
}

.grid-wrap {
  flex-wrap: wrap;
}

@for $i from 1 through 12 {
  .grid-cols-#{$i} {
    --grid-cols: #{$i};
  }
}

@each $name, $size in $sizes {
  .grid-gap-#{$name} {
    gap: #{$size};
  }
}
</style>