import { describe, test, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Home from "../Home.vue";
import { setActivePinia, createPinia } from "pinia";

describe("Book", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("renders properly", () => {
    mount(Home);
  });
});
