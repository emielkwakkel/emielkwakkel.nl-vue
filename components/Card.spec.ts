import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Card from "./Card.vue";

const selectors = {
  card: "section",
  image: "img",
  link: "a",
  title: "h3 span:first-child",
  date: "h3 span:last-child",
  description: "p",
};

const cardData = {
  title: "Blog on Sustainable IT",
  date: "2025-01-01",
  description: "More sustainable IT is needed to save the planet.",
  image: "https://emielkwakkel.nl/en",
  link: {
    href: "https://emielkwakkel.nl/blog/item",
    title: "Read More",
  },
};

describe("Card.vue", () => {
  [true, false].forEach((isSupplied) => {
    it(`should ${isSupplied ? "" : "not "}display a card`, () => {
      const cardProps = isSupplied ? cardData : undefined;

      const wrapper = mount(Card, { props: { card: cardProps } });

      const card = wrapper.find(selectors.card);

      expect(card.exists()).toBe(isSupplied);
      if (isSupplied) {
        expect(wrapper.find(selectors.title).text()).toBe(cardData.title);
        expect(wrapper.find(selectors.date).text()).toBe(cardData.date);
        expect(wrapper.find(selectors.description).text()).toBe(
          cardData.description,
        );
      }
    });

    it(`should ${isSupplied ? "" : "not "}show a card link if supplied`, () => {
      const cardProps = isSupplied
        ? cardData
        : { ...cardData, link: undefined };

      const wrapper = mount(Card, { props: { card: cardProps } });

      const link = wrapper.find(selectors.link);

      expect(link.exists()).toBe(isSupplied);
      if (isSupplied) {
        expect(link.attributes("href")).toBe(cardData.link.href);
        expect(link.text()).toBe(cardData.link.title);
      }
    });

    it(`should ${isSupplied ? "" : "not "}show an image if supplied`, () => {
      const cardProps = isSupplied
        ? cardData
        : { ...cardData, image: undefined };

      const wrapper = mount(Card, { props: { card: cardProps } });

      const image = wrapper.find(selectors.image);

      expect(image.exists()).toBe(isSupplied);
      if (isSupplied) {
        expect(image.attributes("src")).toBe(cardData.image);
        expect(image.attributes("alt")).toBe(cardData.title);
      }
    });
  });

  [true, false].forEach((shade) => {
    it(`shade ${shade} should make the background ${
      shade ? "darker" : "lighter"
    }`, () => {
      const wrapper = mount(Card, { props: { card: cardData, shade } });

      if (shade) {
        expect(wrapper.classes()).toContain("dark:bg-gray-950");
        expect(wrapper.classes()).toContain("bg-gray-100");
      } else {
        expect(wrapper.classes()).toContain("dark:bg-gray-900");
        expect(wrapper.classes()).toContain("bg-white");
      }
    });
  });
});
