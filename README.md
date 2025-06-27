# Glass UI

A modern Vue 3 component library featuring beautiful glassmorphism effects.  
Quickly build elegant, responsive, and accessible UIs with ready-to-use glass components.

---

## ✨ Features

- **Glassmorphism Design:** All components use frosted glass backgrounds and soft shadows.
- **Vue 3 Support:** Built with `<script setup>` and Composition API.
- **Customizable:** Easily change variants, padding, alignment, and more via props.
- **Light & Dark Themes:** Automatic support for both themes.
- **Accessible:** Focus rings, ARIA attributes, and keyboard navigation.
- **Component Library:** Panel, Stack, Button, Alert, Badge, Input, Grid, Toaster, and more.

---

## 🚀 Getting Started

### 1. Install

```bash
npm install glass-ui-vue
# or
yarn add glass-ui-vue
# or
pnpm add glass-ui-vue
```

### 2. Register the Plugin

```js
// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import GlassUI from 'glass-ui-vue';
import 'glass-ui-vue/styles';

const app = createApp(App);
app.use(GlassUI);
app.mount('#app');
```

Or import components locally:

```js
import { Button, Panel } from 'glass-ui-vue';
```

---

## 🧩 Components

| Component | Description |
|-----------|-------------|
| **Panel** | Glass container for grouping content, supports variants and padding. |
| **Stack** | Flexible layout for stacking children vertically or horizontally. |
| **Button** | Glassmorphic button with variants and disabled state. |
| **Alert** | Stylish alert for messages and notifications, dismissible. |
| **Badge** | Status or highlight badge, supports all variants. |
| **Input** | Glass input field, supports types and custom borders. |
| **Grid** | Responsive grid system for arranging items in columns. |
| **Toaster** | Toast notification system with variants and auto-dismiss. |

See the [Storybook](#storybook) for live demos and prop documentation.

---

## 📚 Documentation & Community

- **Storybook:** _[Link to your Storybook deployment]_  
  Live demos and prop documentation for every component.
- **GitHub Repo:** [https://github.com/suraj-bharti/glass-ui](https://github.com/suraj-bharti/glass-ui)
- **Issues & Contributions:**  
  Please open issues or pull requests for bugs, features, or improvements.
- **License:** MIT

---

## 🛡️ License & Attribution

This project is licensed under the [MIT License](./LICENSE).

> **Attribution:**  
> Please credit [Surajdev Pandey](https://github.com/suraj-bharti) when using this library in your projects.  
> Do not remove or alter the original attribution in source or documentation.

---

## 💡 Example Usage

```vue
<template>
  <g-panel variant="primary" padding="lg">
    <h1>Welcome to Glass UI</h1>
    <g-alert variant="info" dismissible>
      This is an info alert!
    </g-alert>
    <g-btn variant="success" @click="notify">Show Toast</g-btn>
    <Toaster ref="toaster" />
  </g-panel>
</template>

<script setup>
import { ref } from 'vue';
import { Toaster } from 'glass-ui';

const toaster = ref(null);
function notify() {
  toaster.value.show('Hello from Glass UI!', { variant: 'success' });
}
</script>
```

---

## ⭐️ Star & Share

If you find Glass UI useful, please ⭐️ star the repo and share it with others!

---

**Glass UI &copy; 2025 — Created by Surajdev
