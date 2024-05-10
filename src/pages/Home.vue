<script setup lang="ts">
import BookDisplay from "../components/BookDisplay.vue";
import BooksList from "../components/BooksList.vue";
import MyHeader from "../components/Header.vue";
</script>
<template>
  <MyHeader />
  <main>
    <BooksList />
    <BookDisplay />
  </main>
</template>
<style scoped>
main {
  display: flex;
  padding: 0 20px;
  justify-content: center;
}
</style>
