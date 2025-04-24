<template>
    <div>
      <BookItem
        v-for="(book, index) in books"
        :key="index"
        :cover="book.cover"
        :title="book.title"
        :link="book.link"
        :price="book.price"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import BookItem from './BookItem.vue';
  
  interface Book {
    cover: string;
    title: string;
    link: string;
    price: string;
  }
  
  const books: Book[] = [
    {
      cover: 'https://via.placeholder.com/60x90',
      title: 'Livro 1',
      link: 'https://exemplo.com/livro1',
      price: 'R$ 39,90',
    },
    {
      cover: 'https://via.placeholder.com/60x90',
      title: 'Livro 2',
      link: 'https://exemplo.com/livro2',
      price: 'R$ 49,90',
    },
  ];
  </script>
  