<template>
  <nav class="navbar">
    <router-link 
      to="/novos" 
      class="nav-link" 
      :class="{ active: route.path === '/novos' }"
    >
      Novos
    </router-link>
    <router-link 
      to="/usados" 
      class="nav-link" 
      :class="{ active: route.path === '/usados' }"
    >
      Usados
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background-color: #eee;
  border-bottom: 1px solid #ccc;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-link.active {
  color: #007bff; /* Azul pra indicar ativo */
  border-bottom: 2px solid #007bff;
}
</style>
