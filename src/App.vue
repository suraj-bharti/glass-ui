<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, ref } from 'vue';
import Toaster from '@/components/UI/Toaster.vue';

const toaster = ref(null);
provide('toast', (msg, opts) => toaster.value.show(msg, opts));
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <Toaster />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  margin-bottom: 30px;
}
</style>
