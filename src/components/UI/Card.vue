<template>
  <div
    class="glass-card"
    :class="[
      `glass-card--${variant}`,
      { 'glass-card--hoverable': hoverable, 'glass-card--shadow': shadow }
    ]"
    :style="{ width, height }"
    @click="onClick"
  >
    <div v-if="$slots.header || title" class="glass-card__header">
      <slot name="header">
        <span v-if="title" class="glass-card__title">{{ title }}</span>
      </slot>
    </div>
    <div class="glass-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="glass-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  variant: {
    type: String,
    default: 'default',
    validator: v =>
      ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(v)
  },
  width: { type: String, default: 'auto' },
  height: { type: String, default: 'auto' },
  hoverable: { type: Boolean, default: false },
  shadow: { type: Boolean, default: true },
});
const emit = defineEmits(['close', 'click']);
function onClick(e) {
  emit('click', e);
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-card {
  background: var(--default-bg, rgba(255,255,255,0.25));
  border-radius: var(--border-radius, 1em);
  box-shadow: var(--glass-shadow, 0 8px 32px 0 rgba(31, 38, 135, 0.18));
  color: var(--text-color, #222);
  position: relative;
  overflow: hidden;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}

.glass-card--shadow {
  box-shadow: var(--glass-shadow, 0 8px 32px 0 rgba(31, 38, 135, 0.18));
}

.glass-card--primary    { background: var(--primary-bg);   color: var(--primary-text);   }
.glass-card--secondary  { background: var(--secondary-bg); color: var(--secondary-text); }
.glass-card--success    { background: var(--success-bg);   color: var(--success-text);   }
.glass-card--danger     { background: var(--danger-bg);    color: var(--danger-text);    }
.glass-card--warning    { background: var(--warning-bg);   color: var(--warning-text);   }
.glass-card--info       { background: var(--info-bg);      color: var(--info-text);      }
.glass-card--light      { background: var(--light-bg);     color: var(--light-text);     }
.glass-card--dark       { background: var(--dark-bg);      color: var(--dark-text);      }

.glass-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(190 190 190 / 20%);
  font-weight: 600;
  font-size: 1.15em;
  padding: var(--space-md, 1.5em);
}

.glass-card__title {
  flex: 1;
}

.glass-card__body {
  flex: 1;
  padding: var(--space-md, 1.5em);
}

.glass-card__footer {
  margin-top: var(--space-md, 1em);
  padding: var(--space-md, 1.5em);
}
</style>