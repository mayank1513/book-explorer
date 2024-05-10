<script lang="ts" setup>
import { ref } from "vue";
import { useBooksStore } from "../store";
import LoaderLine from "./LoaderLine.vue";
import { FILTERS } from "../constants";
import { FilterType } from "../types";

const filtersVisible = ref(false);
const bookStore = useBooksStore();
</script>
<template>
  <header>
    <input type="text" v-model="bookStore.query" @input="bookStore.loadBooks" />
    <strong @click="filtersVisible = !filtersVisible">⚙</strong>
    <div class="filters" v-if="filtersVisible">
      <label v-for="filter in FILTERS" :for="filter">
        {{ filter.replace(/^in/, "").toUpperCase() }}:
        <input
          type="text"
          :id="filter"
          :key="filter"
          v-model="bookStore[filter as FilterType]"
          @input="bookStore.loadBooks"
        />
      </label>
    </div>
    <LoaderLine v-if="bookStore.loading" />
  </header>
</template>

<style scoped lang="scss">
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
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
label {
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  input {
    padding: 5px 10px;
    margin-left: 10px;
    width: calc(100% - 110px);
    margin-right: 15px;
  }
}
</style>
