<script lang="ts" setup>
import { ref } from "vue";
import { useBooksStore } from "../store";
import LoaderLine from "./LoaderLine.vue";
import { FILTERS } from "../constants";

const filtersVisible = ref(false);
const bookStore = useBooksStore();
</script>
<template>
  <header>
    <input type="text" v-model="bookStore.query" @input="bookStore.loadBooks" />
    <strong @click="filtersVisible = !filtersVisible">⚙</strong>
    <div class="filters" v-if="filtersVisible">
      Search In:
      <label v-for="filter in FILTERS" :for="filter">
        <input
          type="checkbox"
          :id="filter"
          :value="filter"
          v-model="bookStore.filters"
        />
        {{ filter.replace(/^in/, "").toUpperCase() }}
      </label>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
strong {
  font-size: 1.5rem;
  cursor: pointer;
}
input {
  padding: 10px 20px;
  width: 80%;
  display: block;
  border-radius: 5px;
}
.filters {
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
label {
  display: flex;
}
</style>
