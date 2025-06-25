<template>
  <span class="glass-badge" :class="`glass-badge--${variant}`">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: v => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(v),
  },
});
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;
.glass-badge {
  display: inline-block;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  font-size: 0.9em;
  font-weight: 500;
  background: rgba(255,255,255,0.15);
  color: var(--text-color);
  font-family: var(--font-family);
  backdrop-filter: blur(6px);
}
.glass-badge--primary   { background: var(--primary-color); color: #fff; }
.glass-badge--secondary { background: var(--secondary-color); color: #222; }
.glass-badge--success   { background: var(--success-bg); color: #222; }
.glass-badge--danger    { background: var(--danger-bg); color: #fff; }
.glass-badge--warning   { background: var(--warning-bg); color: #222; }
.glass-badge--info      { background: #17a2b8; color: #fff; }
.glass-badge--light     { background: #f8f9fa; color: #222; }
.glass-badge--dark      { background: #343a40; color: #fff; }
</style>