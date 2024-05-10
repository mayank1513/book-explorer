<script setup lang="ts">
import { onMounted, ref } from "vue";
import LoaderLine from "./LoaderLine.vue";
const emit = defineEmits(["load"]);
const targetEl = ref<HTMLDivElement>();
onMounted(() => {
  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      emit("load");
    }
  }).observe(targetEl.value as HTMLDivElement);
});
</script>
<template>
  <li ref="targetEl">
    Loading...
    <LoaderLine />
  </li>
</template>
<style scoped>
li {
  margin: 20px;
  height: 50px;
  position: relative;
}
</style>
