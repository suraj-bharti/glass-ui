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

- **Storybook:** [https://suraj-bharti.github.io/glass-ui](https://suraj-bharti.github.io/glass-ui)  
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
    <g-button variant="success" @click="notify">Show Toast</g-button>
    <!-- Toaster should be mounted at the root or in App.vue -->
    <Toaster />
  </g-panel>
</template>

<script setup>
import { toast } from 'glass-ui-vue';

function notify() {
  toast.emit('show', {
    message: 'Hello from Glass UI!',
    variant: 'success',
    duration: 3000
  });
}
</script>
```

---

## 🛎️ Using the Toaster: Two Approaches

Glass UI provides two ways to trigger toast notifications.  
Choose the one that best fits your use case:

### 1. Global Event Emitter (`toast.emit`)

**How:**  
Import the `toast` event bus and emit notifications from anywhere in your app.

```js
import { toast } from 'glass-ui-vue';

function notify() {
  toast.emit('show', {
    message: 'Hello from Glass UI!',
    variant: 'success',
    duration: 3000
  });
}
```

**When to use:**  
- You want to trigger toasts from any component, even deeply nested ones.
- You want a decoupled, global notification system.
- You don’t want to pass refs or props around.

**Note:**  
Mount `<Toaster />` once at the root (e.g., in `App.vue`).
 
---

### 2. Local Ref Method

**How:**  
Use a `ref` to the `<Toaster />` component and call its `show` method directly.

```vue
<template>
  <Toaster ref="toaster" />
  <g-button @click="notify">Show Toast</g-button>
</template>

<script setup>
import { ref } from 'vue';
import { Toaster } from 'glass-ui-vue';

const toaster = ref(null);

function notify() {
  toaster.value.show('Hello from Glass UI!', { variant: 'success', duration: 3000 });
}
</script>
```

**When to use:**  
- You only need to show toasts from within a specific component or local area.
- You want more direct control or to avoid global state.
- You don’t want to rely on an event bus.

---

**Tip:**  
You can use both methods in the same app if needed!

---

## ⭐️ Star & Share

If you find Glass UI useful, please ⭐️ star the repo and share it with others!

---

**Glass UI &copy; 2025 — Created by Surajdev
