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
  background: var(--default-bg);
  color: var(--text-color);
  font-family: var(--font-family);
  backdrop-filter: blur(var(--glass-blur));
  box-shadow: var(--glass-shadow);
  border: var(--glass-border);
  transition: background var(--transition), color var(--transition);
}

.glass-badge--primary    { background: var(--primary-bg);   color: var(--primary-text);   }
.glass-badge--secondary  { background: var(--secondary-bg); color: var(--secondary-text); }
.glass-badge--success    { background: var(--success-bg);   color: var(--success-text);   }
.glass-badge--danger     { background: var(--danger-bg);    color: var(--danger-text);    }
.glass-badge--warning    { background: var(--warning-bg);   color: var(--warning-text);   }
.glass-badge--info       { background: var(--info-bg);      color: var(--info-text);      }
.glass-badge--light      { background: var(--light-bg);     color: var(--light-text);     }
.glass-badge--dark       { background: var(--dark-bg);      color: var(--dark-text);      }
</style>