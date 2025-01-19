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
    it("shade true should make the background darker", () => {
      const wrapper = mount(Section, { props: { shade: true } });
      expect(wrapper.classes()).toContain("dark:bg-gray-950");
      expect(wrapper.classes()).toContain("bg-gray-100");
    });

    it("shade false should make the background lighter", () => {
      const wrapper = mount(Section, { props: { shade: false } });
      expect(wrapper.classes()).toContain("dark:bg-gray-900");
      expect(wrapper.classes()).toContain("bg-white");
    });

    it("grid true should add a grid", () => {
      const wrapper = mount(Section, { props: { grid: true } });
      expect(wrapper.find(".container").classes()).toContain("grid");
      expect(wrapper.find(".container").classes()).toContain("grid-cols-1");
      expect(wrapper.find(".container").classes()).toContain("md:grid-cols-2");
      expect(wrapper.find(".container").classes()).toContain("gap-8");
    });

    it("grid false should result in no grid", () => {
      const wrapper = mount(Section, { props: { grid: false } });
      expect(wrapper.find(".container").classes()).not.toContain("grid");
      expect(wrapper.find(".container").classes()).not.toContain("grid-cols-1");
      expect(wrapper.find(".container").classes()).not.toContain(
        "md:grid-cols-2",
      );
      expect(wrapper.find(".container").classes()).not.toContain("gap-8");
    });
  });
});
