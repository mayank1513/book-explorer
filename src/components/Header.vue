<script lang="ts" setup>
import { useBooksStore } from "../store";
import LoaderLine from "./LoaderLine.vue";

const bookStore = useBooksStore();
</script>
<template>
  <header>
    <input type="text" @input="bookStore.loadBooks" />
    <LoaderLine v-if="bookStore.loading" />
  </header>
</template>

<style scoped>
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
</style>
