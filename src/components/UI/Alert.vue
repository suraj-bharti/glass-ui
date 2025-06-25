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
    <slot />
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
    validator: v => ['info', 'success', 'warning', 'danger', 'light', 'dark'].includes(v),
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  timeout: {
    type: [Number, String],
    default: null, // ms, e.g. 3000
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
  border-radius: 0.5em;
  margin: 1em 0;
  font-family: var(--font-family);
  font-size: 1em;
  color: var(--text-color);
  background: var(--default-bg);
  box-shadow: 0 2px 8px #0001;
}
.glass-alert--dismissible {
  padding-right: 3em; // Add space for the close button
}
.glass-alert--success { background: var(--success-bg); color: #222; }
.glass-alert--warning { background: var(--warning-bg); color: #222; }
.glass-alert--danger  { background: var(--danger-bg); color: #fff; }
.glass-alert--info    { background: var(--info-bg); color: #fff; }
.glass-alert--light   { background: var(--light-bg); color: #222; }
.glass-alert--dark    { background: var(--dark-bg); color: #fff; }

.glass-alert__close {
  position: absolute;
  top: 0.5em;
  right: 1em;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5em;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.glass-alert__close:hover {
  opacity: 1;
}
</style>