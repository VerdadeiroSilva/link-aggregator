<template>
    <div class="home has-text-centered pt-5">
      <h1>{{ title }}</h1>
      <BookList :books="books" />
    </div>
  </template>
  
  <script setup lang="ts">

  import { fetchNewBooks, type Book } from '../api/books';
  import BookList from '../components/BookList.vue';
  import { useRoute } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  
  const route = useRoute();
  const books = ref<Book[]>([]);

  onMounted(async () => {
    books.value = await fetchNewBooks();
  });
  const category = computed(() => route.path.replace('/', ''));
  
  const title = computed(() => (category.value === 'usados' ? 'Livros Usados' : 'Livros Novos'));

  </script>