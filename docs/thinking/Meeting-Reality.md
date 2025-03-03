---
title: Meeting Reality
description: Are you living in an ivory tower, or do you have boots on the ground?


featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/tree.svg">Meeting Reality</image-artifact>'
tags:
 - Feedback Loop
 - Take Action
 - Risk Landscape
 - Payoff
 - Meeting Reality
 - Internal Model
definitions:
 - name: Meeting Reality
   description: Testing out the predictive power of an Internal Model by exposing it to reality. 
   own_term: true
 - name: Internal Model
   description: The risk model of reality held by an individual, team, software system or other Agent. 
   anchor: different-internal-models
sidebar_position: 4
redirect_from: 
 - /Meeting-Reality
tweet: yes
---

# Meeting Reality

Of the new terminology we've looked at so far, [Meeting Reality](/tags/Meeting-Reality) might be one of the most baffling.  However, it is a crucial concept in risk management. 

Here we look at how exposing your [Internal Model](/tags/Meeting-Reality) to reality is in itself a good risk management technique.  

![Meeting Reality](/img/generated/principles/meet-reality.svg)

## Different Internal Models

The world is too complex to understand at a glance.  It takes years of growth and development for humans to build a useful [internal model](/tags/Internal-Model) of reality in our heads in order to understand the risks they face.  Even then, we need domain experts to understand _specific_ kinds of risk in specific areas (like software development, for example).

Within a development team, that model is split amongst people, documents, email, tickets, code... but it is still a model.  

This [Internal Model](/tags/Internal-Model) of reality informs the actions we take in life: we take actions based on our model, hoping to change reality with some positive outcome.

![Taking actions changes reality, but changes your model of the risks too](/img/generated/introduction/model_vs_reality_2.svg)

When we started [organising our dinner party](A-Simple-Scenario) we had an internal model of the risks we faced doing that.  You might take actions to ensure there is enough food, that you've got RSVPs and so on.

:::info Where does the term "Internal Model" come from?
Risk-First borrows the term "Internal Model" from the finance industry, where it was used in the [2004 Basel II capital requirements rules](https://en.wikipedia.org/wiki/Basel_II) (i.e. rules to say how much money (or capital) banks needed to keep handy for any crises that might arise.  In Basel II there was an "Internal Model Method", where a bank could create _its own_ model for how much capital it needed to store.  The catch was, the bank would have to demonstrate via simulations that this would have been adequate for any crisis occurring in the previous ten years.

Sadly, the financial crisis of 2007 demonstrated very quickly that just looking at the last ten years probably wasn't enough.  

Interestingly, the term was previously used in [Cybernetics Theory](https://en.wikipedia.org/wiki/Cybernetics) which looked at concepts of feedback and control in dynamically evolving systems, which is exactly what we're looking at here too.
   
:::

The actions we take have consequences in the real world.   Hopefully, we eliminate some known risks but we might expose new [hidden risks](/tags/Hidden-Risk) as we go.  There is a _recursive_ nature about this - we're left with an updated Internal Model, and we see new actions we have to take as a result.

## Navigating the "Risk Landscape"

The diagram above shows _just one possible action_ but really, you'll have choices.  We often have multiple ways of achieving our goals.  

What's the best way?  

I would argue that the best choice of what to do is the one has the greatest [Payoff](Consider-Payoff) - the one that mitigates the most existing risk while accruing the least attendant risk to get it done.  That is, when you take an action, you are trading off a big risk for a smaller one.  

![Navigating The Risk Landscape](/img/generated/introduction/risk_landscape_1.svg)

You can think of [Taking Action](/tags/Take-Action) as moving your project on a "[Risk Landscape](/tags/Risk-Landscape)".  Ideally, when you take an action, you move from some place with worse risk to somewhere more favourable, as shown in the diagram above.

Now, that's easier said than done!  Sometimes, you can end up somewhere _worse_:  the action you took to manage a risk has made things worse.  Almost certainly, this will have been due to a hidden risk that you weren't aware of when you embarked on the action, otherwise you'd not have chosen it.  

### Example: Automation

![Hidden Risks of Automation](/img/generated/introduction/risk_landscape_2_automating.svg)

_Automating processes_ (as shown in the diagram above) is often tempting: it _should_ save time, and reduce the amount of boring, repetitive work on a project.  But sometimes, it turns into an industry in itself, consumes more effort than it'll ever pay back and needs to be maintained in the future at great expense. 

One popular type of automation is [Unit Testing](/tags/Automated-Testing).  Writing unit tests adds to the amount of development work, so on its own, it _uses up time from the schedule_.  It also creates complexity - you now have more code to manage.   However, if you write _just enough_ of the right unit tests, you should be short-cutting the time spent finding issues in the User Acceptance Testing (UAT) stage, so you're hopefully trading off a larger [Schedule Risk](/tags/Schedule-Risk) from UAT and adding a smaller [Schedule Risk](/tags/Schedule-Risk) to Development.  

### Example: MongoDB

On a previous project in a bank we had a requirement to store a modest amount of data and we needed to be able to retrieve it fast.  The developer chose to use [MongoDB](https://www.mongodb.com) for this.  At the time, others pointed out that other teams in the bank had had lots of difficulty deploying MongoDB internally, due to licensing issues and other factors internal to the bank.

Other options were available, but the developer chose MongoDB because of their _existing familiarity_ with it:   therefore, they felt that the [Hidden Risks](/tags/Hidden-Risk) of MongoDB were _lower_ than the other options.

This turned out to be a mistake:  the internal bureaucracy eventually proved too great and MongoDB had to be abandoned after much investment of time.

This is not a criticism of MongoDB: it's simply a demonstration that sometimes, the cure is worse than the disease.  Successful projects are _always_ trying to _reduce_ [Attendant Risks](/tags/Attendant-Risk).  

## The Cost Of Meeting Reality

Meeting reality _in full_ is costly.  There are lots of tasks that are _expensive_:

- The Release Process
- Training Users
- Getting users to use your system
- Gathering feedback

These steps take a lot of effort and time, but you don't have to meet the "whole of reality" in one go.  You can meet it in a limited way which is less expensive.  

To de-risk these big operations, you should try to meet reality:

- **Sooner**: so you have time to mitigate the hidden risks it uncovers.
- **More Frequently**: so the hidden risks don't hit you all at once.
- **In Smaller Chunks**: so you're not over-burdened by hidden risks all in one go.
- **With Feedback**: if you don't collect feedback from the experience of meeting reality, hidden risks _stay hidden_.

### Example: User Acceptance Testing (UAT)

Putting your software in front of users in production will definitely put you into contact with reality.  You'll learn a lot.   But sometimes, this can be dangerous: if the release contains bugs that affect the user population, your reputation may suffer and you might end up fire-fighting support issues.
 
UATs, beta-releases, incremental (small) releases and phased releasing to small populations of users also allow us to meet reality too, but dial down the stakes.  

![Testing flushes out Hidden Risk, but increases Schedule Risk](/img/generated/introduction/meeting_reality_testing.svg)

Activities like User Acceptance Testing (UAT) or incremental delivery give us some flavour of reality, but more cheaply and sooner.  

## Trade-Offs

Making a move on the [Risk Landscape](/tags/Risk-Landscape) is about accepting a trade-off.  And the examples in this section are all classic software development trade-offs.  If you're an experienced software developer, you'll understand that any technology decision (whether it's unit testing, database choices or release processes - the examples we've seen here) means accepting a trade-off.  

The Risk-First diagram gives us two things.  First, it makes this trade off clear:  what do I lose?  what do I gain? Second, by describing our trade-offs in terms of _risk_, we are also making clear the fact that up front, we're never certain whether the trade-off will be worth it.

## Summary

So, here we've looked at Meeting Reality, which basically boils down to taking actions to expose yourself to hidden risks and seeing how it turns out:

- Each action you take is a step on the [Risk Landscape](/tags/Risk-Landscape), trading off one set of risks for another.
- Each action exposes new [Hidden Risks](/tags/Hidden-Risk), changing your [Internal Model](/tags/Internal-Model).
- Ideally, each action should reduce the overall [Attendant Risk](/tags/Attendant-Risk) on the project (that is, puts it in a better place on the [Risk Landscape](/tags/Risk-Landscape).

<BoxOut title="Terms Used" link="/thinking/Glossary" linkText="View Glossary">
<TermList details={frontMatter} /> 
</BoxOut>

Could it be that _everything_ you do on a software project is risk management? This is an idea explored next in [Just Risk](Just-Risk).



 
