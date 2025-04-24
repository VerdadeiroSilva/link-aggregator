<template>
    <div class="book-item">
      <img :src="cover" alt="Book cover" class="book-cover" />
      <div class="book-info">
        <a :href="link" target="_blank">{{ title }}</a>
        <p class="price">{{ price }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    cover: string;
    title: string;
    link: string;
    price: string;
  }>();
  </script>
  
  <style scoped>
  .book-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .book-cover {
    width: 60px;
    height: 90px;
    object-fit: cover;
  }
  
  .book-info {
    display: flex;
    flex-direction: column;
  }
  
  .price {
    color: #555;
    font-weight: bold;
  }
  </style>
  