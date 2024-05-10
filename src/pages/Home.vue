<script setup lang="ts">
import BookDisplay from "../components/BookDisplay.vue";
import BooksList from "../components/BooksList.vue";
import MyHeader from "../components/Header.vue";
import { useBooksStore } from "../store";

const bookStore = useBooksStore();
</script>
<template>
  <MyHeader />
  <main>
    <BooksList />
    <BookDisplay
      v-if="bookStore.selectedBook"
      v-bind="bookStore.selectedBook"
      @close="bookStore.selectedBook = undefined"
    />
  </main>
</template>
<style scoped>
main {
  display: flex;
  padding: 0 20px;
  justify-content: center;
}
</style>
