---
title: A Simple Scenario
description: What is the one thing every project needs to control to be successful?

tags: 
 - Take Action
 - Internal Model
 - Goal
 - Attendant Risk
 - Hidden Risk
 - Meeting Reality
 - Risk
 - Upside Risk

definitions:
 - name: Attendant Risk
   description:  A Risk you expect to face as the result of Taking Action.
   anchor: attendant-risks
   own_term: true
   part_of: Risk
 - name: Hidden Risk
   description: Risks you aren't aware of when you consider Taking Action. i.e. an unknown unknown.
   anchor: hidden-risks
   own_term: true
   part_of: Risk
 - name: Goal
   description: A picture of the future that an individual or team carries within their Internal Model; An imagined destination on the Risk Landscape. A specific Upside Risk we'd like to nurture and realize.
   anchor: goal-in-mind
featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/redesign/risks/goal.svg">A Simple Scenario</image-artifact>'
sidebar_position: 1
redirect_from: 
 - /A-Simple-Scenario
tweet: yes
---

# A Simple Scenario

I'm going to introduce some terms for thinking about risk.

For a moment, forget about software completely and think about _any endeavour at all_ in life.  It could be passing a test, mowing the lawn or going on holiday.  Choose something now.   I'll discuss from the point of view of "organising a dinner party" but you can play along with your own example.  

## Goal In Mind

Now, in this endeavour, we want to be successful.  That is to say, we have a **[Goal](/tags/Goal)** in mind:  we want our friends to go home satisfied after a decent meal and not to feel hungry.   As a bonus, we might also want to spend time talking with them before and during the meal.  So, now to achieve our [Goal](/tags/Goal) we *probably* have to do some tasks.  

Since our goal only exists _in our head_, we can say it is part of our **[Internal Model](/tags/Internal-Model)** of the world.  That is, the model we have of reality.  This model extends to _predicting what will happen_.

If we do nothing, our friends will turn up and maybe there's nothing in the house for them to eat.   Or maybe, the thing that you're going to cook is going to take hours and they'll have to sit around and wait for you to cook it and they'll leave before it's ready.  Maybe you'll be some ingredients short, or maybe you're not confident of the steps to prepare the meal and you're worried about messing it all up.  

## Attendant Risks

These _nagging doubts_ that are going through your head are what I'll call the [Attendant Risks](/tags/Attendant-Risk):  they're the ones that will occur to you as you start to think about what will happen. 

![Goal, with the risks you know about](/img/generated/introduction/goal_in_mind.svg)

When we go about preparing for this wonderful evening, we can choose to deal with these risks:  shop for the ingredients in advance, prepare parts of the meal and maybe practice the cooking in advance.  Or, we can wing it and sometimes we'll get lucky.

How much effort we expend on these [Attendant Risks](/tags/Attendant-Risk) depends on how big we think they are.  For example, if you know there's a 24-hour shop, you'll probably not worry too much about getting the ingredients well in advance (although, the shop _could still be closed_).

## Hidden Risks

[Attendant Risks](/tags/Attendant-Risk) are risks you are aware of.  You may not be able to exactly _quantify_ them, but you know they exist.  But there are also **[Hidden Risks](/tags/Attendant-Risk)** that you _don't_ know about: if you're poaching eggs for dinner, perhaps you didn't know that fresh eggs poach best.  Donald Rumsfeld famously called these kinds of risks "Unknown Unknowns":

> "Reports that say that something hasn't happened are always interesting to me, because as we know, there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns—the ones we don't know we don't know. And if one looks throughout the history of our country and other free countries, it is the latter category that tend to be the difficult ones." - [Donald Rumsfeld, _Wikipedia_](https://en.wikipedia.org/wiki/There_are_known_knowns)

![Goal, the risks you know about and the ones you don't](/img/generated/introduction/hidden_risks.svg)

Different people evaluate risks differently and they'll also _know_ about different risks.  What is an [Attendant Risk](/tags/Attendant-Risk) for one person is a [Hidden Risk](/tags/Attendant-Risk) for another.     

Which risks we know about depends on our **knowledge** and **experience**, then. <!-- tweet-end --> And that varies from person to person (or team to team).  

## Taking Action and Meeting Reality

As the dinner party gets closer, we make our preparations and the inadequacies of the [Internal Model](/tags/Internal-Model) become apparent.  We learn what we didn't know and the [Hidden Risks](/tags/Hidden-Risk) reveal themselves.  Other things we were worried about don't materialise.  Things we thought would be minor risks turn out to be greater.   

![How Taking Action affects Reality, and also changes your Internal Model](/img/generated/introduction/model_vs_reality.svg)

Our model is forced to [Meet Reality](/tags/Meeting-Reality), and the model changes,  forcing us to deal with these risks, as shown in the diagram above.  

In Risk-First, whenever we try to _do something_ about a risk, it is called [Taking Action](/tags/Take-Action).  [Taking Action](/tags/Take-Action) _changes_ reality, and with it your [Internal Model](/tags/Internal-Model) of the risks you're facing.  That's because it's only by interacting with the world that we add knowledge to our [Internal Model](/tags/Internal-Model) about what works and what doesn't.  Even something as passive as _checking the shop opening times_ is an action, and it improves on our [Internal Model](/tags/Internal-Model) of the world.

If we had a good [Internal Model](/tags/Internal-Model) and [took the right actions](/tags/Take-Action), we should see positive outcomes.  If we failed to manage the risks, or took inappropriate actions, we'll probably see negative outcomes.

## Why The New Terms?

I know that as a reader it's annoying to have to pick up new terminology.  So you'll be pleased to learn that there are just three de novo terms to learn in the whole [Thinking](Start) part of Risk First: 

 - [Internal Model](/tags/Internal-Model): actually a term from financial risk management, which we'll be employing widely.  I'll expand on this in more detail in [Meeting Reality](Meeting-Reality).
 - [Meeting Reality](/tags/Meeting-Reality), which is the process of improving your [Internal Model](/tags/Internal-Model).  This is a totally new term.
 - [Taking Action](/tags/Take-Action) which we'll use as a general term to cover a whole range of specific techniques for dealing with risks.  We'll expand on this in [Derisking](De-Risking).

## On To Software?

Here, we've introduced some new terms that we're going to use a lot and, we've applied them in a simple scenario.

<BoxOut title="New Terms" link="/thinking/Glossary" linkText="View Glossary">
Risk-First tries as far as possible to use pre-existing terminology from the world of risk management, however sometimes new terms are necessary.  This box summarises the terms introduced in this chapter and  where it's a term Risk-First introduces, I've added a label to alert you to this novelty.  
<TermList details={frontMatter} /> 
</BoxOut>

Clearly, what we really want to get to is talking about software development, but first I want to dig a bit deeper into the visual language used here to show risks, using [Risk-First Diagrams](Risk-First-Diagrams).
