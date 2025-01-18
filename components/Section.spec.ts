import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Section from "./Section.vue";

describe("Section.vue", () => {
  describe("slots", () => {
    it("renders the header slot content", () => {
      const wrapper = mount(Section, {
        slots: {
          header: '<div class="header-content">Header Content</div>',
        },
      });
      expect(wrapper.find(".header-content").exists()).toBe(true);
      expect(wrapper.find(".header-content").text()).toBe("Header Content");
    });

    it("renders the default slot content", () => {
      const wrapper = mount(Section, {
        slots: {
          default: '<div class="default-content">Default Content</div>',
        },
      });
      expect(wrapper.find(".default-content").exists()).toBe(true);
      expect(wrapper.find(".default-content").text()).toBe("Default Content");
    });
  });

  describe("props", () => {
    it("should make the background darker if prop `shade` is true", () => {
      const wrapper = mount(Section, {
        props: {
          shade: true,
        },
      });
      expect(wrapper.classes()).toContain("dark:bg-gray-950");
      expect(wrapper.classes()).toContain("bg-gray-100");
    });

    it("should make the background lighter if prop `shade` is false", () => {
      const wrapper = mount(Section, {
        props: {
          shade: false,
        },
      });
      expect(wrapper.classes()).toContain("dark:bg-gray-900");
      expect(wrapper.classes()).toContain("bg-white");
    });

    it("should add a grid if prop `grid` is true", () => {
      const wrapper = mount(Section, {
        props: {
          grid: true,
        },
      });
      expect(wrapper.find(".container").classes()).toContain("grid");
      expect(wrapper.find(".container").classes()).toContain("grid-cols-1");
      expect(wrapper.find(".container").classes()).toContain("md:grid-cols-2");
      expect(wrapper.find(".container").classes()).toContain("gap-8");
    });

    it("should not add a grid if prop `grid` is false", () => {
      const wrapper = mount(Section, {
        props: {
          grid: false,
        },
      });
      expect(wrapper.find(".container").classes()).not.toContain("grid");
      expect(wrapper.find(".container").classes()).not.toContain("grid-cols-1");
      expect(wrapper.find(".container").classes()).not.toContain(
        "md:grid-cols-2",
      );
      expect(wrapper.find(".container").classes()).not.toContain("gap-8");
    });
  });
});
