<template>
  <div
    v-if="visible"
    class="glass-alert"
    :class="[
      `glass-alert--${variant}`,
      dismissible ? 'glass-alert--dismissible' : ''
    ]"
    role="alert"
  >
    <span v-if="icon || $slots.icon" class="glass-alert__icon">
      <slot name="icon">
        <template v-if="typeof icon === 'string'">
          {{ icon }}
        </template>
        <template v-else-if="icon">
          <component :is="icon" />
        </template>
      </slot>
    </span>
    <div class="glass-alert__content">
      <div v-if="title" class="glass-alert__title">{{ title }}</div>
      <div v-if="description" class="glass-alert__description">{{ description }}</div>
      <slot v-if="!title && !description" />
    </div>
    <button
      v-if="dismissible"
      class="glass-alert__close"
      @click="closeAlert"
      aria-label="Dismiss"
      type="button"
    >&times;</button>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: v => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(v),
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  timeout: {
    type: [Number, String],
    default: null, // ms, e.g. 3000
  },
  icon: {
    type: [String, Object, Function],
    default: null,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
});

const visible = ref(true);
let timer = null;

function closeAlert() {
  visible.value = false;
}

watch(
  () => props.timeout,
  (val) => {
    if (timer) clearTimeout(timer);
    if (val && Number(val) > 0) {
      timer = setTimeout(() => {
        visible.value = false;
      }, Number(val));
    }
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
});
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-alert {
  position: relative;
  padding: 1em 1.5em;
  border-radius: var(--border-radius);
  margin: 1em 0;
  font-family: var(--font-family);
  font-size: 1em;
  color: var(--text-color);
  background: var(--default-bg);
  box-shadow: var(--glass-shadow);
  backdrop-filter: blur(var(--glass-blur));
  border: var(--glass-border);
  transition: opacity var(--transition);
  display: flex;
  align-items: center; // <-- Change from flex-start to center
  gap: 0.75em;
}

.glass-alert__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  line-height: 1;
  height: 2em;      // Ensures vertical centering
  min-width: 2em;   // Ensures horizontal centering if icon is smaller
}

.glass-alert__content {
  display: block;
}

.glass-alert__title {
  font-weight: 600;
  font-size: 1.1em;
  margin-bottom: 0.1em;
}

.glass-alert__description {
  font-size: 0.98em;
  opacity: 0.95;
}

.glass-alert--dismissible {
  padding-right: 3em; // Add space for the close button
}

.glass-alert--primary    { background: var(--primary-bg);   color: var(--primary-text);   }
.glass-alert--secondary  { background: var(--secondary-bg); color: var(--secondary-text); }
.glass-alert--success    { background: var(--success-bg);   color: var(--success-text);   }
.glass-alert--danger     { background: var(--danger-bg);    color: var(--danger-text);    }
.glass-alert--warning    { background: var(--warning-bg);   color: var(--warning-text);   }
.glass-alert--info       { background: var(--info-bg);      color: var(--info-text);      }
.glass-alert--light      { background: var(--light-bg);     color: var(--light-text);     }
.glass-alert--dark       { background: var(--dark-bg);      color: var(--dark-text);      }

.glass-alert__close {
  position: absolute;
  top: var(--space-sm, 0.5em);
  right: var(--space-md, 1em);
  background: none;
  border: none;
  color: inherit;
  font-size: 2em;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  opacity: 0.7;
  transition: opacity var(--transition);
  border-radius: var(--border-radius);
}
.glass-alert__close:hover {
  opacity: 1;
}
</style>