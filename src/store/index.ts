import { defineStore } from "pinia";
import { ref } from "vue";
import { APIDataInterface, BookInterface } from "../types";
import debounce from "lodash/debounce";
import { API_BASE_URL } from "../constants";
import { apiDataToBooks } from "../utils";

export const useBooksStore = defineStore("book-store", () => {
  const query = ref("");
  const startIndex = ref(0);
  const totalItems = ref(0);
  const books = ref<BookInterface[]>([]);
  const selectedBook = ref<BookInterface | undefined>();
  const loading = ref(true);

  const loadBooks = debounce(async (e: Event) => {
    query.value = encodeURI((e.target as HTMLInputElement).value);
    startIndex.value = 0;
    // todo -- may be clean query to avoid &/? etc. if it interfers with filtering etc.
    loading.value = true;
    const data: APIDataInterface = await fetch(
      `${API_BASE_URL}?q=${query.value}&startIndex=0&projection=lite`
    ).then((res) => res.json());
    books.value = apiDataToBooks(data);
    totalItems.value = data.totalItems;
    loading.value = false;
  }, 300);

  // Use debounce to be on safer side, e.g., when user keeps srolling top and bottom quickly
  const loadMore = debounce(async () => {
    startIndex.value++;
    const data: APIDataInterface = await fetch(
      `${API_BASE_URL}?q=${encodeURI(query.value)}&startIndex=${
        startIndex.value
      }&projection=lite`
    ).then((res) => res.json());
    books.value = books.value.concat(apiDataToBooks(data));
  }, 300);

  return {
    totalItems,
    books,
    selectedBook,
    loading,
    loadBooks,
    loadMore,
  };
});
