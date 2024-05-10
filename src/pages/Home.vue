<script setup lang="ts">
import Book from "../components/Book.vue";
import { ref } from "vue";
import { BookInterface } from "../types";
import BookDisplay from "../components/BookDisplay.vue";
import InfiniteScrollLoader from "../components/InfiniteScrollLoader.vue";
import LoaderLine from "../components/LoaderLine.vue";
import { useBooksStore } from "../store";

const bookStore = useBooksStore();
const selectedBook = ref<BookInterface | undefined>();
</script>
<template>
  <header>
    <input type="text" @input="bookStore.loadBooks" />
    <LoaderLine v-if="bookStore.loading" />
  </header>
  <main>
    <ul class="books">
      <Book
        v-for="(book, index) in bookStore.books"
        v-bind="book"
        :key="book.title + index"
        @click="selectedBook = book"
      />
      <InfiniteScrollLoader
        v-if="bookStore.books.length < bookStore.totalItems"
        @load="bookStore.loadMore"
      />
    </ul>
    <BookDisplay
      v-if="selectedBook"
      v-bind="selectedBook"
      @close="selectedBook = undefined"
    />
  </main>
</template>
<style lang="scss" scoped>
header {
  width: 100%;
  padding: 20px;
  backdrop-filter: blur(3px);
  position: sticky;
  top: 0;
  box-shadow: 0 0 5px currentColor;
}
input {
  padding: 10px 20px;
  width: 80%;
  margin: auto;
  display: block;
  border-radius: 5px;
}
main {
  display: flex;
  padding: 0 20px;
  justify-content: center;
}
.books {
  list-style-type: none;
}
</style>
