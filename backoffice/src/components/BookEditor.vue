<template>
    <div class="box" v-if="book">
      <figure class="image is-128x128 mb-4">
        <img :src="coverUrl" alt="Capa do Livro" />
      </figure>
      <div class="field">
        <label class="label">Título</label>
        <div class="control">
          <input v-model="book.title" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Autor</label>
        <div class="control">
          <input v-model="book.author" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Preço</label>
        <div class="control">
          <input v-model="book.price" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Substituir imagem</label>
        <div class="control">
          <input type="file" @change="handleFileUpload" />
        </div>
      </div>
      <button class="button is-success mt-3" @click="markAsOk">Marcar como tratado</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { getBooksToTreat, updateBook, uploadCover } from '../services/api.js'
  
  const book = ref(null)
  const coverUrl = ref('')
  
  onMounted(async () => {
    const books = await getBooksToTreat()
    book.value = books[0] // só o primeiro
    if (book.value?._id) {
      coverUrl.value = `/api/books/${book.value._id}/cover.webp`
    }
  })
  
  function markAsOk() {
    if (book.value) {
      book.value.status = 'ok'
      updateBook(book.value)
    }
  }
  
  function handleFileUpload(e) {
    const file = e.target.files[0]
    if (file && book.value) {
      uploadCover(book.value._id, file)
    }
  }
  </script>