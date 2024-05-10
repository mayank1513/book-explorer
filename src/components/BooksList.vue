<script lang="ts" setup>
import { useBooksStore } from "../store";
import Book from "./Book.vue";
import InfiniteScrollLoader from "./InfiniteScrollLoader.vue";

const bookStore = useBooksStore();
</script>
<template>
  <ul>
    <Book
      v-for="(book, index) in bookStore.books"
      v-bind="book"
      :key="book.title + index"
      @click="bookStore.selectedBook = book"
    />
    <InfiniteScrollLoader
      v-if="bookStore.books.length < bookStore.totalItems"
      @load="bookStore.loadMore"
    />
  </ul>
</template>
<style scoped>
ul {
  max-width: 99%;
  margin: auto;
}
</style>
