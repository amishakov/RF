---
title: Risk-First Analysis
description: Part of the 'Estimating' Risk-First Track, looking at an alternative to Scrum's Planning Poker


date: 2020-11-10 16:32:03 +0000

featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/logo/R1_logo_black.svg">Risk-First Analysis</image-artifact>'
tags:
 - Estimating
 - Feedback Loop
 - Attendant Risk
 - Upside Risk
sidebar_position: 7
tweet: yes
---

# Risk-First Analysis: An Example

The previous article, [Fixing Scrum](Fixing-Scrum), examined Scrum's idea of "Sprints" and concluded:

- The main purpose of a Sprint is to ensure there is a **feedback loop**.  Every two weeks (or however long the Sprint is) we have a Sprint Review, and review the code that has been completed during the Sprint.  In Risk-First parlance, we call this [Meeting Reality](/tags/Meeting-Reality).  It is the process of _testing your ideas against reality_ to make sure they stand up. 

- This Sprint Review is performed by the whole team.  All the code must be completed by the end of the sprint in order that it can be reviewed.  This introduces an artificial deadline to be met.

- In order to meet this deadline (and because estimating is so hard) the Sprint must be planned carefully by the whole team, in a session of **Planning Poker**.

![Scrum: Consequences Of Time-Boxing](/img/generated/estimating/planner/scrum-consequences.svg)

The diagram above shows this behaviour in the form of a [Risk-First Diagram](/thinking/Risk-First-Diagrams).  Put briefly:  _risks_ ([Schedule Risk](/tags/Schedule-Risk), [Feature Fit Risk](/tags/Feature-Fit-Risk)) are addressed by actions such as "Development", "Review" or "Planning Poker".  

If you're new to [Risk-First](https://www.riskfirst.org) then it's probably worth explaining at this point that one of the purposes of this project is to enumerate the different types of risk you could face running a software project.  You can begin to learn about them all [here](/risks/Start).  Suffice to say, we have icons to represent each of these kinds of risks, and the rest of this article will introduce some of them to you in passing.

##### On a Risk-First diagram, when you address a risk by taking an action, you draw a line through the risk.

## Estimating Is A Poor Tool

Seen like this, **Planning Poker** is a tool to avoid the [Coordination Risk](/tags/Coordination-Risk) problem of everyone needing to complete their work for the end of the Sprint.  But estimating is _really hard_:  In this track so far we've looked at three different ways in which software estimation deviates from the straightforward extrapolation (a.k.a, [Fill-The-Bucket](Fill-The-Bucket)) we learnt about in maths classes at school:

- [Kitchen Cabinet](Kitchen-Cabinet):  In this domain, there is _hidden work_.  We don't know how much there might be.  If we can break down tasks into smaller units, then by the _law of averages_ and the _central limit theorem_, we can apply some statistics to figure out when we might finish.
- [Journeys](Journeys):  In this domain, work is heterogeneous and interconnected.  Different parts depend on each other, and a failure in one part might mean going right back to square one.  The way to estimate in this domain is to _know the landscape_ and to build in _buffers_.  
- [Fractals](Fractals):  In this domain, [Parkinson's Law](/risks/Process-Risk#4-bureaucratic-creep) is king.  There is always more work to be done.  The best thing we can do is try and apply ourselves to the _highest value_ work at any given point, and frequently refer back to reality to find out if we're building the right thing.

![Three Dimensions From Fill-The-Bucket](/img/estimates/dimensions.png)

As a result, Sprints can often get derailed by poor estimating.  

##### Scrum: The _"cure"_ of estimating is worse than the _"disease"_ of wasting stake-holder time.

## Unintended Consequences

![Scrum: Consequences Of Time-Boxing](/img/generated/estimating/planner/poker.svg)

As shown in the above diagram, the emphasis on _estimating as a way to plan sprints_ means that our measure of success is at the mercy of our ability to estimate.  Trust in a team can be _eroded_ not by their failure to "do engineering" but their failure to meet self-imposed deadlines.  As a result, we end up with some unintended consequences, as shown in the table below. 

|Planning Poker Focuses us on....                          |At the expense of...                                      |
|----------------------------------------------------------|----------------------------------------------------------|
|What can we commit to in a two-week window                |Where we _should_ be headed in the long-term.             |
|Narrow goals, such as _what we estimated could be done in a given time_|The wider goals of the product or project in general|
|Ability to estimate                                       |Concerns _aside_ from estimation (such as, are we making the software too complex, too hard to understand, to difficult to change).|

## Fixing It
 
How can we convert a planning session away from being estimate-focused and back to delivering us useful insights about what we are building?  We want a tool that promotes the following:

- Consideration for what is going on longer-term in the project.
- Consideration of risks besides how long something takes.  Sure, that's important, because it affects _value_, but it's not the only thing to worry about.
- _Deciding what is important_ above _what can fit into a sprint_.
- Making [Bets](../bets/Purpose-Development-Team):  what actions give the biggest [Payoff](/tags/Payoff) for the smallest [Stake](/tags/Stake)?

## A Scenario

I'm going to suggest a different approach to planning, which allows you to focus both on short-term goals and long term ones at the same time.  

I'll walk through what this looks like by example to show how it works and then we can see if it addresses some of the issues with Scrum planning we've looked at.  

![Use-Cases](/img/generated/estimating/planner/use-cases.svg)

In the diagram above, there are four tasks pulled off the backlog for consideration.  (Obviously, we're keeping this simple - you might be looking at plenty more than this in a big team).  We've got four simple ones for our product here:  
 
 - **Fix a rendering bug** that showed up when doing a demo a week or so back.
 - **Building a search function into the product**, something the users have been asking for for a while.
 - **Refactoring the subscription** system, after some stats revealed that a lot of users don't make it all the way through the process of upgrading from the free tier to the premium tier.
 - **Fix the Continuous Integration Pipeline**:  developers are complaining that the state of the build isn't being reported correctly, and some tests are failing randomly.
 
As it stands, it is impossible to say what we should be tackling next.  In order to get to that, we have to answer three questions first.  Let's look at those.

## Question 1: What Do We Lose?

![Rendering Bug](/img/generated/estimating/planner/rendering.svg)

On a Risk-First diagram, tasks - or actions as we call them - are shown in "sign-post" style boxes, as shown above.

By fixing the rendering bug, we are trying to deal the problem that the software _demos badly_ and the resulting risk that the potential customers don't trust the quality of our product.  Risk-First diagrams show chronology from left-to-right.  That is, on the left of the action is the world as it is now, whereas on the right is the world as it will be _after_ taking some action.  To show that our action will eliminate some existing risk, we can strike it out by drawing a line through it.

So, this diagram encapsulates the reason why we might fix the rendering bug:  it's about addressing potential [Reputational Risk](/tags/Reputational-Risk) in our product.  

## Question 2: What Do We Gain?

![Search Function](/img/generated/estimating/planner/search.svg)

Let's move on to task 2, the **Search Function**, as shown in the above diagram.

As with the **Rendering Bug**, above, we lose something:  [Feature Fit Risk](/tags/Feature-Fit-Risk), which is the risk (to us) that the features our product is supplying don't meet the client's (or the market's) requirements.  Writing code is all about identifying and removing [Feature Fit Risk](/tags/Feature-Fit-Risk), and building products that fit the needs of their users.

So as in the Rendering Bug example, we can show [Feature Fit Risk](/tags/Feature-Fit-Risk) being eliminated by showing it on the left with a strike-out line.   However, it's been established during analysis that the way to implement this feature is to introduce [ElasticSearch](https://www.elastic.co), a third-party piece of software.  This in itself is an [Attendant Risk](/tags/Attendant-Risk) of taking that action:  

- Are we going to find that easy to deploy and maintain?  
- What impact will this have on hosting charges?  
- Will it return useful results, or require endless "tuning"?  
- Will we be "tied in" to this dependency going forwards?

##### If an action leads to new risks, show them on the right side of the action.

So, on the right side of the action, we are showing the [Attendant Risks](/tags/Attendant-Risk) we _gain_ from taking the action.

## Question 3:  What Is The Expected Return?

If we know what we lose and what we gain from each action we take, then it's simple maths to work out what the best actions to take on a project are simply pick the ones with the greatest [Expected Return](/tags/Expected-Return) (as shown in the above diagram).

### Upside Risk

It's worth noting - not all risks are bad!  [Upside Risk](/tags/Upside-Risk) captures this concept well.  If I buy a lottery ticket, there's a big risk that I'll have wasted some money buying the ticket.  But there's also the [Upside Risk](/tags/Upside-Risk) that I might win!  Both upside and downside risks should be captured in your analysis of [Payoff](/tags/Payoff).

While some projects are expressed in terms of addressing risks (e.g. installing a security system, replacing the tyres on your car) a lot are expressed in terms of _opportunities_ (e.g. create a new product market, win a competition).  It's important to consider these longer-term objectives in the [Payoff](/tags/Payoff).

![Goals, Anti-Goals, Risks and Upside Risks](/img/generated/estimating/planner/focus.svg)

The diagram above lays these out:  We'll work hard to _improve the probability_ of [Goals](/tags/Goal) and [Upside Risks](/tags/Upside-Risk) occurring, whilst at the same time taking action to prevent [Anti-Goals](https://riskfirst.org/post/news/2020/01/17/Anti-Goals) and [Downside Risks](/tags/Risk).

(There's a gentle introduction to the idea of _Anti-Goals_ [here](https://riskfirst.org/post/news/2020/01/17/Anti-Goals) which might be worth the diversion).

### "Refactoring Subscriptions"

Let's go on to the third action, **Refactoring Subscriptions** to see this in action.

![Refactoring Subscriptions](/img/generated/estimating/planner/refactoring.svg)

In the above diagram, we are showing that by removing [Communication Risk](/tags/Communication-Risk) around our product, we are _improving_ our chances of reaching the goal of 50K subscribers.  That's a big assumption - it could well be that the users don't complete the upgrade for other reasons.  Maybe they find out the price during the upgrade and are put off, or they are being forced onto the upgrade screen by some dark patterns, but actually have no intention of upgrading the product at all.

### "Fix The CI Pipeline"

Let's look at the last example:  the action to fix the Continuous Integration Pipeline.  A lot of development teams might consider this a no-brainer:  "How can we possibly do useful work with an unreliable process?"  Equally, a lot of product owners might feel the opposite:  "why is the Development Team spending time on making their own lives easier when we have a marketing event next week and there are incomplete features?"  

![Fixing The CI Pipeline, v1](/img/generated/estimating/planner/ci-impact.svg)

The above diagram tries to show how this is:  on the left side, we have the [Coordination Risk](/tags/Coordination-Risk) experienced by the Development Team.  (Note the use of round-cornered boxes to show _who_ the risks apply to).  On the right side, we have the [Deadline Risk](/tags/Deadline-Risk) experienced by the Sales Team.

On the face of it, it's clear why the Sales Team might feel annoyed - there is a transfer of risk _away_ from the Development Team _to_ them.  That's not fair!  But the Development Team Lead might counter by saying:  "Look, this issue is slowing down development, which might mean this startup runs out of funding before the product is ready for launch. Plus it's causing a loss of morale in our team and we're having trouble retaining good staff as it is".  

![Fixing The Build, v2](/img/generated/estimating/planner/ci-impact-2.svg)

The above diagram models that.  Fixing the CI Pipeline is now implicated in reducing [Agency Risk](/tags/Agency-Risk), [Coordination Risk](/tags/Coordination-Risk) and [Funding Risk](/tags/Funding-Risk) for the whole business and therefore seems like it might have a better [Expected Return](/tags/Expected-Return).

## Judgement

But is that a fair assessment?  How would you determine [Expected Return](/tags/Expected-Return) in this situation?  It's clear that even though we might be able to _describe_ the risks, it might not be all that easy to _quantify_ them.  

Luckily, we don't really have to.   If I am trying to evaluate a single action on my own, all I really need to do is answer one question:  do I lose more risk than I gain?

All I need to do is "weigh up" the change in risks as best as I can.  A lot of the time, the [Payoff](/tags/Payoff) will be obviously worth it, or obviously not.

## Ensemble

So far, we've been looking at each task individually, working out which risks we're addressing, and which ones we're exposed to as a result.  If you have plenty of spare talent and only a few tasks, then maybe that's enough and you can get to work on all the tasks that have a positive [Payoff](/tags/Payoff).   But if you're constrained, then you should be hunting for the [actions](/tags/Take-Action) with the biggest [Payoff](/tags/Payoff) and doing those first.

Things change too when you have a whole team engaged in the planning process.  Although people will generally agree on what the risks _are_, they often will disagree on the [Probability they will occur, or the impact if they do](/thinking/Track-Risk#risk-registers).   In cases like these, you might want to allow each stakeholder to "vote up" the risks they consider significant, or vote up the actions they consider to have high [Payoff](/tags/Payoff).  

## Some Points To Note

Let's talk about in which ways this is better or worse than Planning Poker.

![Instead of Estimates](/img/generated/estimating/planner/estimates.svg)

- **We've made explicit the trade-offs for carrying out pieces of work**.  If [building the right thing](Fixing-Scrum#10x) is the most important thing we can do, then making sure the whole team are on the same page with respect to what the pros or cons might be.
- **This isn't user stories**:  we're not describing a piece of work and asking how long it'll take.  We're very clearly figuring out what the advantages and disadvantages are to attempting something.  This is fundamentally a different discussion to a Scrum planning session.
- **Estimates are de-emphasised**:  We're not coming up with hard estimates, but we _are_ considering risks to deadlines, to budgets, to funding.  As shown in the diagram above, there are _plenty_ of risks associated with tasks taking too long.
- **We're not planning, so much as weighing risks**: A lot of project plans fall to pieces because they insist on certain events occurring at certain times.  By talking about risk, we're acknowledging what we don't know.

## Some Objections

### Hard Work?

At this point, you might be thinking "this is a lot of work compared to Planning Poker, where I just have to pull a number out of my a**e every few minutes, representing how hard something is to do".  Well, yes.  I'm not going to sugar-coat this:  _product planning is actually really hard_.  

What we've developed here is a way to visually represent the trade-offs in the decision making process, so that we can engage the whole team in discussing them and charting the right developmental course.

### This is Just Design

The model we are describing here is just _a graphic representation of a discussion_.  It doesn't represent some "ground truth" about what to develop next - it merely gets everyone onto the same page to discuss what happens next.  

### The Participation Problem

One argument made _for_ the Scrum planning game is that it gives everyone on the development team a voice.  For many, this might be the biggest contribution of Planning Poker and we definitely don't want to lose that.

We've not looked at how Risk-First Analysis can be _gamified_ in the way that Planning Poker is - we'll get to that.  But first, let's look in more detail at the [Story Point](On-Story-Points) idea and see if it can be improved.