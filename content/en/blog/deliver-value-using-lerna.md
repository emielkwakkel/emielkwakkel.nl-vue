---
title: "Deliver more value using Lerna"
description: "How a monorepository driven architecture powered by Lerna can deliver more value."
date: 2018-10-15
head:
  meta:
    - name: "keywords"
      content: "frontend architecture, lerna"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Emiel Kwakkel"
    - name: "copyright"
      content: "© 2024 Emiel Kwakkel"
---

## How a monorepository driven architecture powered by Lerna can deliver more value

**Big organisations are increasing their efforts to adjust to demanding markets and focus on high quality customer journeys. In a time where startups, freed of collected technological complexity caused by years of iterative development, are disrupting the markets, organisations have to step up their game. By taking a modern approach time spent on maintaining the whole development environment and supporting tooling can be cut.**

In this article I'll give you an in-depth frontend perspective on how a Lerna based monorepo will enable you to regain focus on delivering added value to your customers.

![Frontend Challenges](/images/blog/deliver-value-using-lerna/lerna-challenges.jpg)

Just like many other reasonable organisations yours might be well ahead in organising DevOps, building complex CI/CD architectures and converting big monoliths into manageable packages. But how do you manage all that? Having over a dozen repositories with code developed by several teams, containing semi-generic frontends for cross-platform applications introduces challenges.

What project should a new developer checkout to get started? How to progress in continuous delivery if the whole proces of building, unit testing, e2e testing, releasing and deploying of the application takes hours? How can all pipelines be maintained in the most generic way? And how to ensure all packages are tested together before a release if packages all have ambiguous versioning? Can you even tell which packages are currently in production?

On top of that, business is demanding focus on improving the customer journey and quicker adaption of the changing environment. With increasingly more complex development environments the reality is that we attempt to keep up with the latest framework, having all pipelines in the green, and let's not forget meeting new regulations. But how can we improve? Isn't that single repository architecture just a hype? And haven't we stepped away from building monolith applications?

![Introduction into Lerna](/images/blog/deliver-value-using-lerna/lerna-introduction.jpg)

To be clear, Lerna doesn't speed up your applications performance, neither will it enable you to use other programming techniques. The promise is simple. Lerna will simplify managing your mono repository code, as it provides tools for efficiently installing dependencies (bootstrapping), linking local projects, versioning including automated release notes and running commands on all packages in parallel or scoped to a smaller set of packages.

Furthermore, Lerna takes the modular approach. Yes, all code is stored in a single repository, but there is in no way a monolith since all code is split up in npm packages. All separately releasable in your private registry.

## Versioning

Having unambiguous versioning will make it clear which version is to be tested and which is in production. No more discussions on which versions of different packages are tested as a whole. You'll have the possibility to release all packages, straightening out all version numbers, or just releasing a single package for a quick hotfix. Versions will meet semver standards and automated release notes are made possible using conventional commits.

## Scoping

With your packages all tucked away in neatly organised folders the first challenge arises. It's hard to run commands for a single package, or a subset of packages, manually or automated. You'll have to point the terminal at each single package before executing the command. Lerna solves this issue by allowing you to run commands from the root of the project, which will be executed on all packages matching the provided scope.

```bash
lerna run --scope feature-* test
```

This single command runs unit tests over all packages of which the package name starts with 'feature-'.

## Yarn workspaces

Optionally use Yarn to manage your package architecture. It will enable you to run 'yarn install' once in order to install all package dependencies, intelligently symlinking local packages. The linked packages will enable you to immediately see the effect of changed code in another dependent codebase.

## To Lerna or not to Lerna

So should any frontend project be setup as a Lerna monorepo? In short: no, for regular projects a monorepo architecture is overkill. If you have several packages running independently the benefits of a monorepo setup might also be less convincing.

Look for example at Angular, which is setup as a Lerna monorepo. All packages add to the functionality of the framework, however all packages are setup in a modular way. In no way Angular is a monolith. Packages can be separately be build, tested and released, but at the same time form a framework of connected packages.

![Architectural overview](/images/blog/deliver-value-using-lerna/lerna-architecture.jpg)

In the above high-level diagram a generic multi-platform application setup is shown. Packages are part of a bigger scope. This way it's easy to run commands on specific parts of the application. There can be as many features as needed, which optionally dependent on modules (not displayed above) containing specific functionalities. Take for example a sales flow; based upon the platform, the type of feature loading it or other custom parameters the flow is able to adapt by loading in different modules.

All packages use the core packages to function in a generic way and shared packages in which styles and UI components are made available. As a whole all packages combined make up the application running on all different platforms.

## More focus on things that matter

A single project, single checkout, single installation and a single pipeline all boil down to efficiency. If you are testing in feature branches, how complex is automated feature branche testing over multiple repositories? In the new architecture you only need one feature branch, which can be merged to develop once all tests have passed. Checking out dozens of repositories, all with their own structure, hard to maintain pipelines, separately installing all dependencies and manually linking local projects are all in the past. What's left is focus. Focus on building what really matters to your customers.
