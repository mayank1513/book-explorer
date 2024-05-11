import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Book from "../Book.vue";

describe("Book", () => {
  test("renders properly", () => {
    const wrapper = mount(Book, { props: { title: "My Book" } });
    expect(wrapper.text()).toContain("My Book");
  });
});
