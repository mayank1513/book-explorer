<script setup lang="ts">
import Book from "../components/Book.vue";
import { ref } from "vue";
import debounce from "lodash/debounce";
import { BookInterface } from "../types";
import BookDisplay from "../components/BookDisplay.vue";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";
const query = ref("");
const books = ref<BookInterface[]>([]);
const selectedBook = ref<BookInterface | undefined>();
const loading = ref(true);
/** Can rename if a more meaningful name is possible */
const handleInput = debounce(async () => {
  // todo -- may be clean query to avoid &/? etc. if it interfers with filtering etc.
  loading.value = true;
  const data: {
    items: {
      volumeInfo: {
        title: string;
        authors?: string[];
        imageLinks?: { thumbnail: string };
        description: string;
      };
    }[];
  } = await fetch(`${apiUrl}?q=${encodeURI(query.value)}`).then((res) =>
    res.json()
  );
  books.value = data.items.map((item) => ({
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    coverImage: item.volumeInfo.imageLinks?.thumbnail,
    description: item.volumeInfo.description,
  }));
  loading.value = false;
}, 300);
</script>
<template>
  <header>
    <input type="text" v-model="query" @input="handleInput" />
    <div class="loader" v-if="loading"></div>
  </header>
  <main>
    <ul class="books">
      <Book
        v-for="(book, index) in books"
        v-bind="book"
        :key="book.title + index"
        @click="selectedBook = book"
      />
    </ul>
    <BookDisplay v-if="selectedBook" v-bind="selectedBook" />
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
}
.books {
  list-style-type: none;
}
.loader {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  filter: blur(4px);
  background: linear-gradient(
    to right,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  background-size: 200%;
  animation: loading 1s infinite linear alternate;
}
@keyframes loading {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 100% 0%;
  }
}
</style>
