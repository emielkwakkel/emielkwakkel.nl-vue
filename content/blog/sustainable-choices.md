---
title: "Sustainable Frontend Development"
description: "Hoe maak je de juiste keuzes?"
head:
  meta:
    - name: "keywords"
      content: "sustainability"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Emiel Kwakkel"
    - name: "copyright"
      content: "© 2022 Emiel Kwakkel"
---

## Hoe maak je de juiste keuzes?

**There is an app for that! IT als de oplossing voor elk probleem. Dat is de mindset waardoor developers die leven voor het maken van impact elke dag met frisse energie opstaan. Kijkend naar duurzaamheid kom je dan uit op IT for good, Green IT en het allesomvattende Sustainable IT.**

Tegelijkertijd neemt jaarlijks het energieverbruik van digitale technologieën sterk toe. Keuzes die we tijdens het ontwikkelen maken blijken onbewust van grote invloed op het energieverbruik, de CO2 uitstoot en gebruik van schaarse grondstoffen.

Jaren geleden ontwikkelde ik met Angular en Bootstrap mijn persoonlijke website emielkwakkel.nl. Enigszins over-engineered, maar hoeveel uitstoot kan een kleine persoonlijke website veroorzaken? Recent schrok ik van de resultaten van websitecarbon.com, een website die een benadering kan geven van de uitstoot van je website op basis van tal van factoren. Mijn website bleek vervuilender dan 93% van de geteste websites met vijf gram CO2 uitstoot per page view. Tienduizend page views bleek gelijk te staan aan het energieverbruik waarmee een elektrische auto negenduizend kilometer kan rijden. Daarmee kan je twee keer op en neer naar Griekenland rijden!

![Eerste versie emielkwakkel.nl](/assets/blog/sustainable-choices/emielkwakkel-nl-old.png)

Nu maak ik mij geen illusies over duizenden bezoekers op mijn persoonlijke website. Wel bouw ik aan front-end applicaties voor bijvoorbeeld banken, verzekeraars en overheden, goed voor miljoenen pageviews en intensief gebruik. Welke impact maken de keuzes die ik daar maak? En wordt in de architectuur rekening gehouden met de best practices?

Duurzaamheid heb ik altijd een belangrijk onderwerp gevonden. Tegelijk heb ik het tot voor kort onbewust niet meegenomen als harde non-functional requirement. Bij het opzetten van mijn server keek ik naar schaalbaarheid, performance en redundantie. Kritisch gezien kan je de vraag stellen: hoeveel cores hebben een aantal kleine Node based websites echt nodig? En is een cloud backup van een standaard ingerichte server instance nuttig wanneer alle eigen broncode op GitHub staat?

Tijd voor verandering: een nieuwe lichtgewicht VPS bleek evengoed instaat mijn website snel te serveren en leverde een maandelijkse besparing op van 24 euro. Ook mijn website ging op de schop.

Tijd voor een disclaimer: de strekking van onderstaand verhaal is het belang om op basis van de use case de juiste architectuur te kiezen en uitstoot door over-engineering te voorkomen. De combinatie Angular, Single Page Application met Bootstrap kan voor een dynamische Enterprise applicatie, mits geoptimaliseerd, een duurzame keuze zijn.

Voor mijn persoonlijke website kwam ik uit op de Vue 3 & Nuxt 3 combinatie met Static Site Generation (SSG) en Tailwind voor de styling. De vernieuwde Vue Virtual DOM zorgt voor snellere rendering gecombineerd met verminderd geheugen gebruik. Gecombineerd met Nuxt wordt het framework grotendeels tree-shakable waardoor bundle sizes verkleinen. Daarnaast biedt Tailwind met de utility classes veel mogelijkheden om zelf de website te stylen, zonder de overhead van ongebruikte components.

Ook de styling bleek van invloed op het energieverbruik van de applicatie. Wist je dat een dark mode significant minder energie gebruikt? Begin 2000, in de tijd van de ouderwetse CRT-monitoren, ging de website van Google op zwart tijdens Earth Day. Met de stap naar LCD-schermen (single backlight, always on) verviel echter het voordeel. Sinds de opkomst van OLED-schermen is de dark mode weer terug van weggeweest. Uit onderzoek van Google bleek dat Google Maps in dark mode op mobiele devices tot 63% minder energie verbruikte voor het scherm. Win-win voor iedere developer met voorliefde voor dark mode!
![Current draw in mA](/assets/blog/sustainable-choices/colour-energy-usage.png)

Bron: [Wholegrain Digital](https://www.wholegraindigital.com/blog/dark-colour-web-design/)

Met de nieuwe website live werd het tijd voor een nieuwe scan bij websitecarbon.com. De vijf gram CO2 per page view is nu gereduceerd naar 0,06 gram en 10.000 page views staan nu gelijk aan een autorit van 112 kilometer! Door de gereduceerde bundle size gecombineerd met de Static Site Generation zijn de laadtijden verbeterd. De GitHub workflow deployed in één minuut de site naar productie en de kosten voor de server zijn met 500% gedaald.

Met het vergroten van de schaal van het project ontstaan ook andere uitdagingen. Aan de development kant groeit in rap tempo het aantal testen. Gecombineerd met extra quality gates, linting en uitgebreidere deployment scripting groeit daarmee ook de doorlooptijd van de pipeline. Zowel een microfrontend als monorepository architectuur kunnen uitkomst bieden. Uitgangspunt is dat geautomatiseerd in kaart gebracht kan worden wat de impact is van een wijziging. Hiermee kan op basis van de dependency tree enkel de testen, builds en deployments worden uitgevoerd die geraakt worden.

Voorbeeld voor een dergelijke opzet is de KickstartGreen applicatie, gemaakt voor een fictieve bank die naast bankieren klanten helpt met het planten van bomen. De architectuur laat zich omschrijven als een Angular monorepository met NX, opgedeeld in projecten volgens het Domain Driven Design principe van Manfred Stayer. In deze opzet kan op applicatie, domein en library niveau worden ingezoomed. Een affected analyse highlight de libraries binnen de applicatie die geraakt worden door een wijziging.

![KickstartGreen Dependency Graph in kaart gebracht met NX](/assets/blog/sustainable-choices/kickstartgreen-nx.png)

Bij het opsplitsen van de applicatie in domeinen en libraries moet goed nagedacht worden over de hiërarchie. Afhankelijkheden mogen enkel naar beneden lopen. Zou een utility library bijvoorbeeld een applicatie importeren dan zou een wijziging aan die utility betekenen dat ook de gehele applicatie als affected wordt aangemerkt, en daarmee ook alle onderliggende packages.

De lijst met mogelijke optimalisaties is te groot voor dit artikel. In basis blijkt bewustwording en het benoemen van duurzaamheid als harde eis de enige manier om afgewogen en meetbare keuzes te maken. Werk je voor een organisatie zonder harde duurzaamheidsdoelstellingen? Bekijk dan hoe een duurzaam voorstel ook kosten besparen, de onderhoudbaarheid vergroten, of bijvoorbeeld de time-to-market kunnen verbeteren. Win-win dus!

Alle projecten genoemd in dit artikel staan op mijn [persoonlijke GitHub](https://github.com/emielkwakkel).
