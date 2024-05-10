<script setup lang="ts">
import { ref } from "vue";
import debounce from "lodash/debounce";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";
const query = ref("");
/** Can rename if a more meaningful name is possible */
const handleInput = debounce(async () => {
  // todo -- may be clean query to avoid &/? etc. if it interfers with filtering etc.
  const data = await fetch(`${apiUrl}?q=${encodeURI(query.value)}`).then(
    (res) => res.json()
  );
  console.log(data);
}, 300);
</script>
<template>
  <input type="text" v-model="query" @input="handleInput" />
</template>
<style lang="scss"></style>
