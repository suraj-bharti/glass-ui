<template>
  <transition-group name="toaster-fade" tag="div" class="glass-toaster">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['glass-toast', `glass-toast--${toast.variant}`]"
      @mouseenter="pause(toast.id)"
      @mouseleave="resume(toast.id)"
    >
      <span>{{ toast.message }}</span>
      <button class="glass-toast__close" @click="remove(toast.id)">×</button>
    </div>
  </transition-group>
</template>

<script setup>
import { ref } from 'vue';
import toaster from '@/plugins/toaster';

const toasts = ref([]);

let counter = 0;
const timers = {};

function show(message, { variant = 'info', duration = 3000 } = {}) {
  const id = ++counter;
  toasts.value.push({ id, message, variant });
  timers[id] = setTimeout(() => remove(id), duration);
}

function remove(id) {
  toasts.value = toasts.value.filter(t => t.id !== id);
  clearTimeout(timers[id]);
  delete timers[id];
}

function pause(id) {
  clearTimeout(timers[id]);
}

function resume(id) {
  const toast = toasts.value.find(t => t.id === id);
  if (toast) {
    timers[id] = setTimeout(() => remove(id), 2000);
  }
}

toaster.on('show', (payload = {}) => {
  // payload: { message, variant, duration }
  show(payload.message, payload);
});
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-toaster {
  position: fixed;
  top: var(--space-xl, 40px);
  right: var(--space-xl, 40px);
  z-index: var(--z-toast, 1200);
  display: flex;
  flex-direction: column;
  gap: var(--space-md, 16px);
}

.glass-toast {
  min-width: 220px;
  max-width: 320px;
  padding: 1em 2.5em 1em 1.2em;
  border-radius: var(--border-radius, 12px);
  background: var(--default-bg);
  color: var(--text-color);
  box-shadow: var(--glass-shadow);
  border: var(--glass-border);
  font-family: var(--font-family);
  position: relative;
  display: flex;
  align-items: center;
  animation: toaster-in 0.3s;
}

.glass-toast__close {
  position: absolute;
  top: 0.7em;
  right: 1em;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.2em;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.glass-toast__close:hover {
  opacity: 1;
}

.glass-toast--success   { background: var(--success-bg);   color: var(--success-text);   }
.glass-toast--danger    { background: var(--danger-bg);    color: var(--danger-text);    }
.glass-toast--warning   { background: var(--warning-bg);   color: var(--warning-text);   }
.glass-toast--info      { background: var(--info-bg);      color: var(--info-text);      }
.glass-toast--primary   { background: var(--primary-bg);   color: var(--primary-text);   }
.glass-toast--secondary { background: var(--secondary-bg); color: var(--secondary-text); }
.glass-toast--light     { background: var(--light-bg);     color: var(--light-text);     }
.glass-toast--dark      { background: var(--dark-bg);      color: var(--dark-text);      }

.toaster-fade-enter-active,
.toaster-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.toaster-fade-enter-from,
.toaster-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes toaster-in {
  from { opacity: 0; transform: translateY(-20px);}
  to   { opacity: 1; transform: translateY(0);}
}
</style>