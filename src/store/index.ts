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
  const filters = ref<string[]>([]);

  async function retriveBooks() {
    const data: APIDataInterface = await fetch(
      `${API_BASE_URL}?q=${encodeURI(
        query.value
      )}&startIndex=${startIndex}&projection=lite`
    ).then((res) => res.json());
    totalItems.value = data.totalItems;
    return apiDataToBooks(data);
  }

  const loadBooks = debounce(async () => {
    startIndex.value = 0;
    if (!query.value) {
      totalItems.value = 0;
      books.value = [];
    }
    // todo -- may be clean query to avoid &/? etc. if it interfers with filtering etc.
    loading.value = true;
    books.value = await retriveBooks();
    loading.value = false;
  }, 300);

  // Use debounce to be on safer side, e.g., when user keeps srolling top and bottom quickly
  const loadMore = debounce(async () => {
    startIndex.value++;
    books.value = books.value.concat(await retriveBooks());
  }, 300);

  return {
    query,
    filters,
    totalItems,
    books,
    selectedBook,
    loading,
    loadBooks,
    loadMore,
  };
});
