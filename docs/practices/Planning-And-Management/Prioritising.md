---
title: Prioritising
description: Defining the Minimum Viable Product, planning development priorities or schedules.
tags: 
  - Practice
  - Prioritising
featured: 
  class: c
  element: '<action>Prioritise</action>'
practice:
  aka: 
   - "Roadmapping"
   - "Release Planning"
   - "Task Prioritization"
   - "Minimum Viable Product"
   - "Backlog Refinement"
   - "Scheduling"
  mitigates:
   - tag: Schedule Risk
     reason: "Helps in focusing on high-priority tasks."
   - tag: Market Risk
     reason: "Ensures that the most valuable features and opportunities are addressed first."
   - tag: Funding Risk
     reason: "Allocates resources efficiently to high-impact areas."
   - tag: Deadline Risk
     reason: "In order to hit a deadline, you can de-prioritise less important work."
  attendant:
   - tag: Reliability Risk
     reason: "Prioritization can create dependencies on specific tasks or features."
   - tag: Market Risk
     reason: "Prioritising a single client or narrowing scope reduces diversification, increasing exposure to changes in the market." 
   - tag: Deadline Risk
     reason: "Establishing an order of events often places deadlines on the earlier events completing or the later events starting."
  related:
   - ../Planning-and-Management/Requirements-Capture
   - ../Communication-and-Collaboration/Retrospectives
   - ../Development-and-Coding/Refactoring
   - ../Tools-And-Standards/Prototyping
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Prioritization is the activity that arranges items or activities in order of importance relative to each other." - [Prioritization, _Wikipedia_](https://en.wikipedia.org/wiki/Prioritization)

Prioritising in software development involves defining the Minimum Viable Product (MVP) and planning development priorities. This practice ensures that the most critical features and tasks are completed first, helping to meet deadlines, allocate resources efficiently, and maximize the project's impact.

## What It It?

Prioritisation is a key process in trying to focus on building _useful_ stuff first.   It could look like:

 - [A Sprint Planning Meeting](/tags/Agile): Deciding on the most important things for the team to build in a time period.
 - [Phased Delivery](/methods/Waterfall): Breaking a large project into smaller-scoped projects.
 - [A Backlog](/methods/Lean): Having tasks or stories in delivery order in a queue.
 - **Task Decomposition**:  Breaking down larger units of a task into smaller items.  Often, [Requirements](Requirements-Capture) come _bundled together_ and need to be broken down so that we work on just the most vital parts, as in
 - [Identifying the MVP](https://en.wikipedia.org/wiki/Minimum_viable_product): Trying to cast out _all_ non-essential functionality.    
 
**Prioritisation** relies on not delivering all the functionality in one go.  But it tends to be a spectrum:

- **Big Bang**:  Delivering all the functionality in a single go.
- **Cycles, or Phases**:  Splitting a large project into smaller chunks.
- **Sprints**: Delivering with a fixed cadence, e.g. every month or week.
- [Continuous Delivery](/methods/DevOps): Delivering functionality one-piece-at-a-time.

Usually, risk is mitigated by **Prioritisation**.  But sometimes, it's not appropriate:  When Finland changed from driving on the right side of the road to the left, (in order to be in line with the rest of Europe) the changeover _had_ to be **Big Bang** and the whole country changed [overnight](https://en.wikipedia.org/wiki/Dagen_H).

## How It Works

There are several ways you can prioritise work:

- **Largest Mitigation First**:  What's the thing we can do right now to reduce our [Attendant Risk](/tags/Attendant-Risk) most?  This is sometimes hard to quantify, given [Hidden Risk](/tags/Hidden-Risk), so maybe an easier metric is...
- **Biggest Win**:  What's the best thing we can do right now to reduce [Attendant Risk](/tags/Attendant-Risk) for least additional [Schedule-Risk](/tags/Schedule-Risk)?  (i.e. simply considering how much *work* is likely to be involved)
- **Dependency Order**:  Sometimes, you can't build Feature A until Feature B is complete.   Prioritisation helps to identify and mitigate [Dependency Risks](/tags/Dependency-Risks).

By prioritising, you get to [Meet Reality](/thinking/Meeting-Reality) _sooner_ and _more frequently_ and in _small chunks_.


See:
 - [Issue Management](Issue-Management)
 - [Tracking Risks](/thinking/Track-Risk#visualising-risks)


## See Also

<TagList tag="Prioritising" />
