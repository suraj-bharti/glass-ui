<template>
  <nav class="glass-nav" :aria-label="ariaLabel">
    <ul
      class="glass-nav__list"
      :class="[
        fill ? 'glass-nav__list--fill' : '',
        justify ? `glass-nav__list--justify-${justify}` : ''
      ]"
    >
      <li
        v-for="(item, i) in items"
        :key="item.key || i"
        :class="['glass-nav__item', { 'is-active': item.active, 'is-disabled': item.disabled }, fill ? 'glass-nav__item--fill' : '']"
        @click="onNavClick(item, i)"
        :tabindex="item.disabled ? -1 : 0"
        :aria-current="item.active ? 'page' : undefined"
        :aria-disabled="item.disabled ? 'true' : undefined"
      >
        <span v-if="item.icon" class="glass-nav__icon">
          <template v-if="typeof item.icon === 'string'">
            {{ item.icon }}
          </template>
          <template v-else-if="item.icon">
            <component :is="item.icon" />
          </template>
        </span>
        <span class="glass-nav__label">{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    // [{ label: String, key: String|Number, icon: Component|String, active: Boolean, disabled: Boolean }]
  },
  ariaLabel: {
    type: String,
    default: 'Main Navigation'
  },
  fill: {
    type: Boolean,
    default: false
  },
  justify: {
    type: String,
    default: '',
    validator: v => ['', 'start', 'center', 'end', 'between', 'around', 'evenly'].includes(v)
  }
});
const emit = defineEmits(['select']);

function onNavClick(item, idx) {
  if (!item.disabled) emit('select', { item, idx });
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/_variables.scss' as *;

.glass-nav {
  background: var(--default-bg, rgba(255,255,255,0.25));
  border-radius: var(--border-radius, 1em);
  box-shadow: var(--glass-shadow, 0 2px 8px 0 rgba(31, 38, 135, 0.10));
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  min-height: 3em;
}

.glass-nav__list {
  display: flex;
  gap: 1em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.glass-nav__list--fill {
  width: 100%;
}

.glass-nav__list--justify-start    { justify-content: flex-start; }
.glass-nav__list--justify-center   { justify-content: center; }
.glass-nav__list--justify-end      { justify-content: flex-end; }
.glass-nav__list--justify-between  { justify-content: space-between; }
.glass-nav__list--justify-around   { justify-content: space-around; }
.glass-nav__list--justify-evenly   { justify-content: space-evenly; }

.glass-nav__item {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  color: var(--text-color, #222);
  font-weight: 500;
  user-select: none;

  &:hover,
  &:focus-visible {
    background: var(--primary-bg, rgba(98,0,234,0.2));
    color: var(--primary-text, #4b2ff6);
    outline: none;
  }
  &.is-active {
    background: var(--primary-bg, rgba(98,0,234,0.2));
    color: var(--primary-text, #4b2ff6);
  }
  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
}

.glass-nav__item--fill {
  flex: 1 1 0;
  justify-content: center;
}

.glass-nav__icon {
  display: flex;
  align-items: center;
  font-size: 1.2em;
}

.glass-nav__label {
  display: inline-block;
}
</style>

<script>
import Nav from '../components/UI/Nav.vue';

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Navigation items array',
    },
    ariaLabel: {
      control: { type: 'text' },
      defaultValue: 'Main Navigation',
      description: 'ARIA label for navigation',
    },
    fill: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Whether nav items fill the width',
    },
    justify: {
      control: { type: 'select' },
      options: ['', 'start', 'center', 'end', 'between', 'around', 'evenly'],
      defaultValue: '',
      description: 'Justify nav items',
    },
  },
};

const Template = (args) => ({
  components: { Nav },
  setup() {
    function onSelect({ item }) {
      alert(`Selected: ${item.label}`);
    }
    return { args, onSelect };
  },
  template: `
    <div style="background: #f4f7fa; padding: 2em;">
      <Nav v-bind="args" @select="onSelect" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', key: 'home', active: true },
    { label: 'Docs', key: 'docs' },
    { label: 'GitHub', key: 'github', icon: '🚀', disabled: false }
  ],
  ariaLabel: 'Main Navigation',
  fill: false,
  justify: '',
};

export const FillAndJustify = Template.bind({});
FillAndJustify.args = {
  ...Default.args,
  fill: true,
  justify: 'between',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: [
    { label: 'Home', key: 'home', icon: '🏠', active: true },
    { label: 'Docs', key: 'docs', icon: '📚' },
    { label: 'GitHub', key: 'github', icon: '🚀', disabled: false }
  ],
  fill: true,
  justify: 'center',
};
</script>