<script lang="ts" setup>
import { BookInterface } from "../types";
defineProps<BookInterface>();
</script>
<template>
  <li class="book">
    <img :src="coverImage ?? '/vite.svg'" alt="Cover Image" />
    <div>
      <h2>{{ title }}</h2>
      <p>
        <i>By {{ authors?.join(", ") }}</i>
      </p>
    </div>
  </li>
</template>
<style scoped lang="scss">
.book {
  display: flex;
  gap: 20px;
  margin: 20px auto;
  padding-right: 10px;
  height: 100px;
  text-align: justify;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 3px currentColor;
  max-width: 90%;
  h2,
  p {
    margin: 0;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  img {
    height: 100%;
    width: 70px;
    object-fit: cover;
  }
  & > div {
    width: calc(100% - 80px);
  }
  &:hover {
    box-shadow: 0 0 5px red;
  }
}
</style>
