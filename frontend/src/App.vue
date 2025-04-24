<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="app" class="layout">
    <aside class="sidebar left"> <!-- Ads à esquerda --> </aside>
    <main class="content">
      <Navbar />
      <router-view />
    </main>
    <aside class="sidebar right"> <!-- Ads à direita --> </aside>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  min-height: 100vh;
}

.sidebar {
  background-color: #f4f4f4;
}

.content {
  padding: 1rem;
}
</style>
