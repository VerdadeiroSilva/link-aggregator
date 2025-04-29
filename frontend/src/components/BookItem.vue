<template>
  <div class="box is-flex is-align-items-center book-container">
      <figure class="book-cover">
        <img class="image is-3by4" :src="`http://localhost:5984/links/${_id}/cover.webp`" alt="Book cover" />
      </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong><a :href="url" target="_blank">{{ title }}</a></strong><br>
          <small class="price">R$ {{ price }}</small>
        </p>
      </div>
    </div>
    <figure class="image is-64x64 mr-4">
      <img :src="`http://localhost:5984/sellers/${seller}/seller.webp`" alt="Book Seller" class="book-seller" />
    </figure>
  </div>
</template>
  
<script setup lang="ts">
  defineProps<{
    _id: string,
    category: string,
    title: string;
    url: string;
    price: string;
    seller: string;
  }>();
</script>

<style lang="css" scoped>
  .book-cover {
    width: 64px;
  }
  .book-container {
    max-height: 120px;
  }
</style>