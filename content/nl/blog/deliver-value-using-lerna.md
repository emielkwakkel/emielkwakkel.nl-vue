---
title: "Meer waarde leveren met Lerna"
description: "Hoe een monorepository-gedreven architectuur met Lerna meer waarde kan leveren."
head:
  meta:
    - name: "keywords"
      content: "frontend architectuur, lerna"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Emiel Kwakkel"
    - name: "copyright"
      content: "© 2024 Emiel Kwakkel"
---

## Hoe een monorepository-gedreven architectuur met Lerna meer waarde kan leveren

**Grote organisaties doen steeds meer moeite om zich aan te passen aan veeleisende markten en zich te richten op hoogwaardige klantreizen. In een tijd waarin startups, bevrijd van de technologische complexiteit die is opgebouwd door jaren van iteratieve ontwikkeling, markten verstoren, moeten organisaties zich verbeteren. Door een moderne aanpak kan de tijd die wordt besteed aan het onderhouden van de ontwikkelomgeving en ondersteunende tooling worden verminderd.**

In dit artikel geef ik je een diepgaand frontend-perspectief op hoe een Lerna-gebaseerde monorepository je in staat stelt om je weer te richten op het leveren van toegevoegde waarde aan je klanten.

![Frontend Uitdagingen](/images/blog/deliver-value-using-lerna/lerna-challenges.jpg)

Net als veel andere redelijke organisaties loopt die van jou waarschijnlijk voorop in het organiseren van DevOps, het bouwen van complexe CI/CD-architecturen en het omzetten van grote monolieten in beheersbare packages. Maar hoe beheer je dat allemaal? Meer dan een dozijn repositories met code ontwikkeld door meerdere teams, die semi-generieke frontends bevatten voor cross-platform toepassingen, brengt uitdagingen met zich mee.

Welk project moet een nieuwe ontwikkelaar uitchecken om aan de slag te gaan? Hoe kan je doorgaan met continu leveren als het hele proces van bouwen, unit testen, e2e-testen, releasen en deployen van de applicatie uren in beslag neemt? Hoe kunnen al die pipelines op de meest generieke manier worden onderhouden? En hoe zorg je ervoor dat alle packages samen worden getest voordat ze worden vrijgegeven als de packages allemaal onduidelijke versienummering hebben? Kun je zelfs vertellen welke packages momenteel in productie zijn?

Daarbovenop eist de business focus op het verbeteren van de klantreis en snellere aanpassing aan de veranderende omgeving. Met steeds complexere ontwikkelomgevingen is de realiteit dat we proberen bij te blijven met het nieuwste framework, alle pipelines in het groen te houden, en laten we de nieuwe regelgeving niet vergeten. Maar hoe kunnen we verbeteren? Is die single repository-architectuur niet gewoon een hype? En zijn we niet afgestapt van het bouwen van monolithische applicaties?

![Introductie in Lerna](/images/blog/deliver-value-using-lerna/lerna-introduction.jpg)

Laten we duidelijk zijn, Lerna versnelt de prestaties van je applicatie niet, en het stelt je ook niet in staat om andere programmeertechnieken te gebruiken. De belofte is simpel. Lerna vereenvoudigt het beheren van je monorepository-code, omdat het tools biedt voor het efficiënt installeren van afhankelijkheden (bootstrapping), het koppelen van lokale projecten, het beheren van versies inclusief geautomatiseerde release-opmerkingen en het uitvoeren van commando's op alle packages parallel of gericht op een kleinere set packages.

Bovendien hanteert Lerna een modulaire aanpak. Ja, alle code wordt opgeslagen in een enkele repository, maar het is op geen enkele manier een monoliet omdat alle code is opgesplitst in npm-packages. Allemaal afzonderlijk te releasen in je privé-register.

## Versiebeheer

Met een eenduidig versiebeheer wordt het duidelijk welke versie getest moet worden en welke in productie is. Geen discussies meer over welke versies van verschillende packages samen zijn getest. Je hebt de mogelijkheid om alle packages te releasen, waarbij alle versienummers worden gelijkgetrokken, of slechts één package vrij te geven voor een snelle hotfix. Versies voldoen aan de semver-standaarden en geautomatiseerde release-opmerkingen worden mogelijk gemaakt met conventionele commits.

## Scoping

Met al je packages netjes opgeborgen in georganiseerde mappen ontstaat de eerste uitdaging. Het is moeilijk om commando's uit te voeren voor een enkel package, of een subset van packages, handmatig of geautomatiseerd. Je moet de terminal naar elk afzonderlijk package wijzen voordat je het commando uitvoert. Lerna lost dit probleem op door je in staat te stellen commando's uit te voeren vanaf de root van het project, die worden uitgevoerd op alle packages die overeenkomen met de opgegeven scope.

```bash
lerna run --scope feature-* test
```

Deze enkele opdracht voert unittests uit over alle packages waarvan de packagenaam begint met 'feature-'.

## Yarn workspaces

Optioneel kun je Yarn gebruiken om je packagearchitectuur te beheren. Hiermee kun je met één opdracht 'yarn install' alle packageafhankelijkheden installeren, waarbij lokale packages slim worden gesymlinkt. De gelinkte packages stellen je in staat om direct het effect van gewijzigde code in een andere afhankelijke codebase te zien.

## Wel of geen Lerna?

Moet elk frontend-project worden opgezet als een Lerna-monorepo? Kort gezegd: nee, voor reguliere projecten is een monorepo-architectuur overkill. Als je meerdere packages hebt die onafhankelijk draaien, zijn de voordelen van een monorepo-setup mogelijk minder overtuigend.

Kijk bijvoorbeeld naar Angular, dat is opgezet als een Lerna-monorepo. Alle packages dragen bij aan de functionaliteit van het framework, maar alle packages zijn modulair opgezet. Angular is op geen enkele manier een monoliet. packages kunnen afzonderlijk worden gebouwd, getest en vrijgegeven, maar vormen tegelijkertijd een framework van verbonden packages.

![Architectural overview](/images/blog/deliver-value-using-lerna/lerna-architecture.jpg)

In het bovenstaande high-level diagram is een generieke multi-platform applicatie-opzet weergegeven. packages maken deel uit van een groter geheel. Op deze manier is het eenvoudig om opdrachten uit te voeren op specifieke delen van de applicatie. Er kunnen zoveel features zijn als nodig, die optioneel afhankelijk zijn van modules (niet weergegeven hierboven) met specifieke functionaliteiten. Neem bijvoorbeeld een salesflow; afhankelijk van het platform, het type feature dat wordt geladen of andere aangepaste parameters, kan de flow zich aanpassen door verschillende modules te laden.

Alle packages maken gebruik van de core-packages om generiek te functioneren en gedeelde packages waarin stijlen en UI-componenten beschikbaar worden gemaakt. Als geheel vormen alle packages samen de applicatie die op verschillende platforms draait.

## Meer focus op wat echt belangrijk is

Een enkel project, enkele checkout, enkele installatie en een enkele pipeline komen allemaal neer op efficiëntie. Als je test in feature-branches, hoe complex is geautomatiseerd testen van feature-branches over meerdere repositories? In de nieuwe architectuur heb je slechts één feature-branch nodig, die naar develop kan worden gemerged zodra alle tests zijn geslaagd. Het uitchecken van tientallen repositories, elk met hun eigen structuur, moeilijk te onderhouden pipelines, afzonderlijk installeren van alle afhankelijkheden en handmatig linken van lokale projecten behoren tot het verleden. Wat overblijft is focus. Focus op het bouwen van wat echt belangrijk is voor je klanten.
