<script lang="ts" setup>
import { BookInterface } from "../types";
defineProps<BookInterface>();
</script>
<template>
  <div class="book">
    <img :src="coverImage" alt="Cover Image of the Book" />
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="author in authors" :key="author">{{ author }}</li>
    </ul>
  </div>
</template>
<style scoped lang="scss"></style>
