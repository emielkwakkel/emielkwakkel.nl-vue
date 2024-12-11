---
title: "Sustainable Frontend Development"
description: "There is an app for that! IT as the solution to every problem. This is the mindset that drives developers who live for making an impact to get up every day with fresh energy. When looking at sustainability, this leads to IT for Good, Green IT, and the all-encompassing Sustainable IT"
date: 2022-09-10
head:
  meta:
    - name: "keywords"
      content: "sustainability"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Emiel Kwakkel"
    - name: "copyright"
      content: "© 2024 Emiel Kwakkel"
---

## How to Make concious choices?

At the same time, the energy consumption of digital technologies increases significantly every year. Decisions made during development are often unknowingly a major influence on energy consumption, CO2 emissions, and the use of scarce resources.

Years ago, I developed my personal website, emielkwakkel.nl, using Angular and Bootstrap. Slightly over-engineered, but how much emissions could a small personal website cause? Recently, I was shocked by the results from websitecarbon.com, a tool that estimates the carbon footprint of your website based on various factors. My site turned out to be more polluting than 93% of tested websites, emitting five grams of CO2 per page view. Ten thousand page views equated to the energy consumption needed to drive an electric car 9,000 kilometers—that’s a round trip to Greece, twice!

![First version of emielkwakkel.nl](/images/blog/sustainable-choices/emielkwakkel-nl-old.png)

Now, I don’t have illusions of thousands of visitors to my personal website. But I do build front-end applications for banks, insurers, and governments, handling millions of page views and heavy usage. What impact do my choices make there? And does the architecture account for best practices?

Sustainability has always been important to me. Yet, until recently, I unconsciously hadn’t included it as a strict non-functional requirement. When setting up my server, I focused on scalability, performance, and redundancy. But critically speaking, how many cores do a few small Node-based websites really need? And is a cloud backup of a standard server instance necessary when all the source code is on GitHub?

Time for a change: a new lightweight VPS proved equally capable of serving my site quickly and resulted in monthly savings of 24 euros. I also revamped my website.

Disclaimer: the main takeaway here is the importance of choosing the right architecture based on the use case and avoiding emissions from over-engineering. The combination of Angular, a Single Page Application, and Bootstrap can be a sustainable choice for a dynamic enterprise application, provided it’s optimized.

For my personal website, I opted for Vue 3 and Nuxt 3 with Static Site Generation (SSG) and Tailwind for styling. The updated Vue Virtual DOM allows for faster rendering and reduced memory usage. Paired with Nuxt, the framework becomes largely tree-shakable, reducing bundle sizes. Tailwind’s utility classes enable custom styling without the overhead of unused components.

Styling also impacts an application’s energy consumption. Did you know that dark mode significantly reduces energy usage? In the early 2000s, during the era of CRT monitors, Google turned its website black for Earth Day. With the shift to LCD screens (single backlight, always on), the advantage disappeared. But with the rise of OLED screens, dark mode is making a comeback. Research by Google found that Google Maps in dark mode on mobile devices used up to 63% less energy for the display. A win-win for every developer who loves dark mode!
![Current draw in mA](/images/blog/sustainable-choices/colour-energy-usage.png)

Source: [Wholegrain Digital](https://www.wholegraindigital.com/blog/dark-colour-web-design/)

With the new website live, it was time for another scan with websitecarbon.com. The five grams of CO2 per page view has been reduced to 0.06 grams, and 10,000 page views now equate to a car trip of just 112 kilometers! Thanks to the reduced bundle size combined with Static Site Generation, load times have improved. The GitHub workflow deploys the site to production in one minute, and server costs have decreased by 500%.

## New challenges

As the scale of the project increases, so do the challenges. On the development side, the number of tests grows rapidly. Combined with additional quality gates, linting, and more extensive deployment scripting, pipeline lead times increase. Both a micro-frontend and monorepository architecture can help here. The goal is to automate the impact assessment of a change. Based on the dependency tree, only the tests, builds, and deployments affected by the change are executed.

An example of such an approach is the KickstartGreen application, built for a fictional bank that helps clients plant trees alongside banking. The architecture is described as an Angular monorepository with NX, divided into projects following Manfred Steyer’s Domain-Driven Design principles. This setup allows for zooming in on the application, domain, and library levels. An affected analysis highlights the libraries within the application impacted by a change.

![KickstartGreen Dependency Graph in kaart gebracht met NX](/images/blog/sustainable-choices/kickstartgreen-nx.png)

When splitting the application into domains and libraries, careful thought is required about hierarchy. Dependencies should only flow downward. For instance, if a utility library imports an application, any change to that utility would mark the entire application and all its packages as affected.

## Final thoughts

The list of possible optimizations is too long for this article. Ultimately, raising awareness and making sustainability a hard requirement is the only way to make balanced and measurable choices. Does your organization lack strict sustainability goals? Then consider how a sustainable proposal can also save costs, improve maintainability, or shorten time-to-market. A win-win!

All projects mentioned in this article are available on my [personal GitHub](https://github.com/emielkwakkel).
