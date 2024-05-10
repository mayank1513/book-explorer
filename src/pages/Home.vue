<script setup lang="ts">
import Book from "../components/Book.vue";
import { ref } from "vue";
import debounce from "lodash/debounce";
import { BookInterface } from "../types";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";
const query = ref("");
const books = ref<BookInterface[]>([]);
/** Can rename if a more meaningful name is possible */
const handleInput = debounce(async () => {
  // todo -- may be clean query to avoid &/? etc. if it interfers with filtering etc.
  const data: {
    items: {
      volumeInfo: {
        title: string;
        authors: string[];
        imageLinks: { thumbnail: string };
      };
    }[];
  } = await fetch(`${apiUrl}?q=${encodeURI(query.value)}`).then((res) =>
    res.json()
  );
  books.value = data.items.map((item) => ({
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    coverImage: item.volumeInfo.imageLinks.thumbnail,
  }));
}, 300);
</script>
<template>
  <input type="text" v-model="query" @input="handleInput" />
  <ul>
    <Book
      v-for="(book, index) in books"
      v-bind="book"
      :key="book.title + index"
    />
  </ul>
</template>
<style lang="scss" scoped></style>
