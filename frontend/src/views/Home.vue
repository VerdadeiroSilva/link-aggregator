<template>
    <div class="home">
      <h1>{{ title }}</h1>
      <BookList :books="filteredBooks" />
    </div>
  </template>
  
  <script setup lang="ts">
  import BookList from '../components/BookList.vue';
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  
  const route = useRoute();
  
  const books = [
    { cover: 'https://via.placeholder.com/60x90', title: 'Livro A', link: '#', price: 'R$ 39,90', category: 'novos' },
    { cover: 'https://via.placeholder.com/60x90', title: 'Livro B', link: '#', price: 'R$ 29,90', category: 'usados' },
    { cover: 'https://via.placeholder.com/60x90', title: 'Livro C', link: '#', price: 'R$ 59,90', category: 'novos' },
  ];
  
  const category = computed(() => route.path.replace('/', ''));
  
  const title = computed(() => (category.value === 'usados' ? 'Livros Usados' : 'Livros Novos'));
  
  const filteredBooks = computed(() =>
    books.filter(book => book.category === category.value)
  );
  </script>
  