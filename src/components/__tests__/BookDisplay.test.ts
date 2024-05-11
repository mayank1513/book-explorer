import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BookDisplay from "../BookDisplay.vue";

describe("Book", () => {
  test("renders properly", () => {
    const wrapper = mount(BookDisplay, { props: { title: "My Book" } });
    expect(wrapper.text()).toContain("My Book");
  });
  test("Disables background document scrolling on mobile devices", () => {
    window.innerWidth = 700;
    const wrapper = mount(BookDisplay, { props: { title: "My Book" } });
    expect(wrapper.text()).toContain("My Book");
    expect(document.documentElement.style.overflow).toBe("hidden");

    wrapper.unmount();
    expect(document.documentElement.style.overflow).toBe("auto");
  });
});
