import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Book from "../Book.vue";

describe("Book", () => {
  test("renders properly", () => {
    const wrapper = mount(Book, {
      props: { title: "My Book", publisher: "BBT" },
    });
    expect(wrapper.text()).toContain("My Book");
  });
});
