import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Breadcrumb from "./Breadcrumb.vue";

const selectors = {
  link: "a[data-testid='link']",
  iconHome: "svg[data-testid='icon-home']",
  iconChevron: "svg[data-testid='icon-chevron-right']",
};

const links = [
  { label: "Home", to: "/en/" },
  { label: "Blog", to: "/en/blog" },
  { label: "Blog item", to: "/en/blog/item" },
];

describe("Breadcrumb.vue", () => {
  describe("props", () => {
    it("renders breadcrumb links correctly", () => {
      const wrapper = mount(Breadcrumb, { props: { links } });
      const breadcrumbLinks = wrapper.findAll(selectors.link);

      // Current page (last item in the array) is not a link
      expect(breadcrumbLinks.length).toBe(links.length - 1);

      // Check the links
      breadcrumbLinks.forEach((link, index) => {
        console.log(link.text());
        expect(link.text()).toBe(links[index].label);
        expect(link.attributes("href")).toBe(links[index].to);
      });

      // Check the current page
      const lastLink = wrapper.find("span[data-testid='current-page']");
      expect(lastLink.text()).toBe(links[links.length - 1].label);
    });

    it("renders one home icon and separator chevrons for the other links", () => {
      const wrapper = mount(Breadcrumb, { props: { links } });
      const home = wrapper.findAll(selectors.iconHome);
      const chevron = wrapper.findAll(selectors.iconChevron);

      expect(home.length).toBe(1);
      expect(chevron.length).toBe(links.length - 1);
    });
  });
});
