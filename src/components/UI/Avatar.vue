<template>
  <img
    class="glass-avatar"
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
    :style="{ borderRadius: shape === 'circle' ? '50%' : '8px', width: size + 'px', height: size + 'px' }"
  />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Avatar',
  },
  size: {
    type: [String, Number],
    default: 48,
  },
  shape: {
    type: String,
    default: 'circle',
    validator: v => ['circle', 'rounded'].includes(v),
  },
});
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;
.glass-avatar {
  object-fit: cover;
  background: var(--default-bg);
  border: 2px solid var(--primary-color);
  box-shadow: 0 2px 8px #0001;
  display: inline-block;
}
</style>