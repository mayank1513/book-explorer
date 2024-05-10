<script setup lang="ts">
import Book from "../components/Book.vue";
import { ref } from "vue";
import debounce from "lodash/debounce";
import { APIDataInterface, BookInterface } from "../types";
import BookDisplay from "../components/BookDisplay.vue";
import InfiniteScrollLoader from "../components/InfiniteScrollLoader.vue";
import { apiDataToBooks } from "../utils";
import LoaderLine from "../components/LoaderLine.vue";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";
const query = ref("");
const startIndex = ref(0);
const totalItems = ref(0);
const books = ref<BookInterface[]>([]);
const selectedBook = ref<BookInterface | undefined>();
const loading = ref(true);
/** Can rename if a more meaningful name is possible */
const handleInput = debounce(async () => {
  // todo -- may be clean query to avoid &/? etc. if it interfers with filtering etc.
  loading.value = true;
  const data: APIDataInterface = await fetch(
    `${apiUrl}?q=${encodeURI(query.value)}&startIndex=0&projection=lite`
  ).then((res) => res.json());
  books.value = apiDataToBooks(data);
  totalItems.value = data.totalItems;
  loading.value = false;
}, 300);

// Use debounce to be on safer side, e.g., when user keeps srolling top and bottom quickly
const loadMore = debounce(async () => {
  startIndex.value++;
  const data: APIDataInterface = await fetch(
    `${apiUrl}?q=${encodeURI(query.value)}&startIndex=${
      startIndex.value
    }&projection=lite`
  ).then((res) => res.json());
  books.value = books.value.concat(apiDataToBooks(data));
}, 300);
</script>
<template>
  <header>
    <input type="text" v-model="query" @input="handleInput" />
    <LoaderLine v-if="loading" />
  </header>
  <main>
    <ul class="books">
      <Book
        v-for="(book, index) in books"
        v-bind="book"
        :key="book.title + index"
        @click="selectedBook = book"
      />
      <InfiniteScrollLoader v-if="books.length < totalItems" @load="loadMore" />
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
