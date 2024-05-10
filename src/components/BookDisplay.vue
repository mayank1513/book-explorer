<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { BookInterface } from "../types";

defineProps<BookInterface>();
onMounted(() => {
  if (innerWidth < 800) {
    document.documentElement.style.overflow = "hidden";
  }
});
onUnmounted(() => {
  document.documentElement.style.overflow = "auto";
});
</script>

<template>
  <section>
    <div class="close" @click="$emit('close')">❌</div>
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 20px;
  text-align: justify;
  background: var(--bg-color);
  pointer-events: all;
  overflow: auto;
}
img {
  float: right;
  margin-left: 20px;
}
.close {
  padding: 10px;
  position: fixed;
  right: 10px;
  cursor: pointer;
}
@media screen and (min-width: 800px) {
  section {
    all: unset;
    max-width: 50%;
    text-align: justify;
  }
  .close {
    all: unset;
    float: right;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>
