<template>
  <div class="container">
    <BookItem
      v-for="(book, index) in books"
      :key="index"
      :_id="book._id"
      :title="book.title"
      :url="book.url"
      :price="book.price"
      :category="book.category"
      :seller="book.seller"
    />
    <hr class="is-divider"/>
  </div>
</template>

<script setup lang="ts">
import BookItem from './BookItem.vue';

defineProps<{
  books: {
    _id: string;
    category: string;
    title: string;
    url: string;
    price: string;
    seller: string;
  }[];
}>();
</script>

<style lang="css" scoped>
  hr.is-divider {
    border: none;
    height: 2px;
    background-color: #dbdbdb; /* cinza do Bulma */
    margin: 1.5rem 0;
  }
</style>