<template>
  <main>
    <g-panel padding="xl" style="max-width: 700px; margin: 2rem auto;">
      <h1>Welcome to Glass UI</h1>
      <p>
        <strong>Glass UI</strong> is a modern Vue 3 component library featuring beautiful glassmorphism effects.<br>
        Use these components to quickly build elegant, responsive, and accessible UIs.
      </p>

      <h2 style="margin-top:2rem;">🚀 Getting Started</h2>
      <ul>
        <li>Install Glass UI via npm or yarn.</li>
        <li>Import and register the components globally or locally in your Vue app.</li>
        <li>Customize appearance using <code>variant</code>, <code>padding</code>, <code>align</code>, and other props.</li>
        <li>All components support light and dark themes out of the box.</li>
      </ul>

      <h2 style="margin-top:2rem;">🧩 Component Showcase</h2>
      <g-stack direction="column" gap="lg" align="start">
        <g-alert variant="info" dismissible>
          <strong>Info:</strong> Glass UI supports all alert variants!
        </g-alert>
        <g-alert variant="warning" dismissible>
          <strong>Warning:</strong> Glass UI supports all alert variants!
        </g-alert>
        <g-alert variant="success" dismissible>
          <strong>Success:</strong> Glass UI supports all alert variants!
        </g-alert>
        <g-alert variant="danger" dismissible>
          <strong>Danger:</strong> Glass UI supports all alert variants!
        </g-alert>
        <g-alert variant="light" dismissible>
          <strong>Light:</strong> Glass UI supports all alert variants!
        </g-alert>
        <g-alert variant="dark" dismissible>
          <strong>Dark:</strong> Glass UI supports all alert variants!
        </g-alert>
        <g-button @click="notify">Click me!</g-button>
        <g-badge variant="success">Success Badge</g-badge>
        <g-input placeholder="Type something..." />
        <g-grid :cols="3" gap="md" style="margin-top: 1rem;">
          <g-panel variant="secondary" padding="sm">Grid Item 1</g-panel>
          <g-panel variant="success" padding="sm">Grid Item 2</g-panel>
          <g-panel variant="danger" padding="sm">Grid Item 3</g-panel>
        </g-grid>
      </g-stack>

      <h2 style="margin-top:2rem;">📚 Available Components</h2>
      <ul>
        <li><b>Panel</b>: Glass container for grouping content, supports variants and padding.</li>
        <li><b>Stack</b>: Flexible layout for stacking children vertically or horizontally.</li>
        <li><b>Button</b>: Glassmorphic button with variants and disabled state.</li>
        <li><b>Alert</b>: Stylish alert for messages and notifications, dismissible.</li>
        <li><b>Badge</b>: Status or highlight badge, supports all variants.</li>
        <li><b>Input</b>: Glass input field, supports types and custom borders.</li>
        <li><b>Grid</b>: Responsive grid system for arranging items in columns.</li>
      </ul>

      <h2 style="margin-top:2rem;">🔗 Documentation & Community</h2>
      <ul>
        <li>See the <b>Storybook</b> for live demos and prop documentation.</li>
        <li>Visit the <b>GitHub repo</b> for source code, issues, and contributions.</li>
        <li>Star the project if you find it useful!</li>
      </ul>

      <footer style="margin-top:2rem; text-align:center; opacity:0.7;">
        <small>
          Glass UI &copy; 2025 &mdash; Created by Surajdev Pandey. MIT Licensed.
        </small>
      </footer>
    </g-panel>
  </main>
</template>

<script setup>

import toast from '@/plugins/toaster';

function notify() {
  toast.emit('show', {message: 'Warning notification from anywhere!', variant: 'warning', duration: 1000 });
  toast.emit('show', {message: 'Dark notification from anywhere!', variant: 'dark', duration: 3000 });
  toast.emit('show', {message: 'Success notification from anywhere!', variant: 'success', duration: 5000 });
  toast.emit('show', {message: 'Info notification from anywhere!', variant: 'info', duration: 5000 });
  toast.emit('show', {message: 'Danger notification from anywhere!', variant: 'danger', duration: 5000 });
}

</script>

<style>
/* Add any additional global styles here */
</style>
