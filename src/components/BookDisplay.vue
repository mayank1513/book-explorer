<script setup lang="ts">
import { BookInterface } from "../types";

defineProps<BookInterface>();
</script>

<template>
  <section>
    <h1>{{ title }}</h1>
    <h2>
      <i>By {{ authors?.join(", ") }}</i>
    </h2>
    <p>
      <img v-if="coverImage" :src="coverImage" alt="coverImage" />
      {{ description }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
section {
  max-width: 50%;
  text-align: justify;
}
img {
  float: right;
  margin-left: 20px;
}
</style>
