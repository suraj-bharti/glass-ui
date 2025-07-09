<template>
  <transition name="glass-modal-fade" appear>
    <div
      v-if="modelValue"
      class="glass-modal__backdrop"
      @click.self="close"
      :style="{ zIndex }"
    >
      <transition name="glass-modal-zoom" appear>
        <div
          class="glass-modal"
          role="dialog"
          aria-modal="true"
          v-show="modelValue"
        >
          <button
            v-if="closable"
            class="glass-modal__close"
            @click="close"
            aria-label="Close"
            type="button"
          >&times;</button>
          <div class="glass-modal__content">
            <slot />
          </div>
          <div class="glass-modal__actions">
            <Button variant="danger" @click="onCancel">
              {{ cancelText }}
            </Button>
            <Button variant="primary" @click="onConfirm">
              {{ confirmText }}
            </Button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import Button from './Button.vue';

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  closable: { type: Boolean, default: true },
  zIndex: { type: [Number, String], default: 1000 },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' }
});
const emit = defineEmits(['update:modelValue', 'confirm', 'cancel']);

function close() {
  emit('update:modelValue', false);
}
function onConfirm() {
  emit('confirm');
  close();
}
function onCancel() {
  emit('cancel');
  close();
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-modal-fade-enter-active,
.glass-modal-fade-leave-active {
  transition: opacity 0.25s cubic-bezier(.4,0,.2,1);
}
.glass-modal-fade-enter-from,
.glass-modal-fade-leave-to {
  opacity: 0;
}
.glass-modal-fade-enter-to,
.glass-modal-fade-leave-from {
  opacity: 1;
}

.glass-modal-zoom-enter-active,
.glass-modal-zoom-leave-active {
  transition: transform 0.25s cubic-bezier(.4,0,.2,1), opacity 0.25s cubic-bezier(.4,0,.2,1);
}
.glass-modal-zoom-enter-from,
.glass-modal-zoom-leave-to {
  transform: scale(0.92);
  opacity: 0;
}
.glass-modal-zoom-enter-to,
.glass-modal-zoom-leave-from {
  transform: scale(1);
  opacity: 1;
}

.glass-modal__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(30, 30, 40, 0.25);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-modal {
  background: var(--default-bg, rgba(255,255,255,0.25));
  border-radius: var(--border-radius, 1em);
  box-shadow: var(--glass-shadow, 0 8px 32px 0 rgba(31, 38, 135, 0.37));
  padding: 2em 1.5em 1.5em 1.5em;
  position: relative;
  color: var(--text-color, #222);
  overflow: auto;
}

.glass-modal__close {
  position: absolute;
  top: 1em;
  right: 1em;
  background: none;
  border: none;
  font-size: 2em;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  z-index: 2;
}
.glass-modal__close:hover {
  opacity: 1;
}

.glass-modal__content {
  margin-top: 0.5em;
}

.glass-modal__actions {
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 1.5em;
}
</style>