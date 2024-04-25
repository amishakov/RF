---
title: Derisking
description: What can you do with the risks on a software project?
url: https://riskfirst.org/thinking/De-Risking

featured: 
  class: bg3
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/de-risking.svg">De-Risking</image-artifact>'
tags:
 - Thinking Risk-First
 - Take Action
 - Risk Landscape
 - Language (Track)
sidebar_position: 8
redirect_from: 
 - /De-Risking
tweet: yes
---

# Derisking

In this section, we're going to more closely at [Taking Action](Glossary.md#taking-action) and separate out the ways in which this can be done.   Along the way, I'll introduce the correct risk management terms and we'll see how each of these apply to software development.

So far in Risk-First, we've talked about [Taking Action](Glossary.md#taking-action) as having two effects:

 1. It's the way in which we [Meet Reality](Glossary.md#meet-reality) to learn about the world and uncover [Hidden Risks](Glossary.md#hidden-risk).
 2. It's the way we change our position on the [Risk Landscape](Glossary.md#risk-landscape) via actions with a positive [Payoff](Glossary.md#payoff).
 
As we saw in the discussion of [Payoff](Consider-Payoff.md), any time you take action you are accruing [attendant risk](Glossary.md#attendant-risk), and we want to take actions with the most favourable payoff.  In this section, we are going to look at common ways in which we can lean the payoff in our favour.  This is called _derisking_:   

> "To remove the risk from; to make safe. " - [Derisk, _Wiktionary_](https://en.wiktionary.org/wiki/derisk)

There are a set of _generic strategies_ for derisking which we'll look at below.  I'll give general examples for each and then we'll turn them into tactics you can use in software development specifically.

## Mitigate (or Reduce)

**Mitigating** risk is taking steps towards minimising the **impact** (as we discussed in the [Evaluating Risk](Evaluating-Risk.md) section) of a risk arising.  

> "To reduce, lessen, or decrease and thereby to make less severe or easier to bear." - [Mitigate, _Wiktionary_](https://en.wiktionary.org/wiki/mitigate) 

### General Examples

- **Safety-nets and ropes** mitigates some of the risks of climbing.  The fall damage you'll take when you lose your grip is hopefully much reduced but the activity of climbing itself is otherwise much unchanged.  

- **Backups and Source-Control** mitigates the impact of computer failure.  Hardware _still fails_ but the impact is less if we can restore from a recent backup.  Our process is changed _slightly_ by this imposition but we're not massively inconvenienced.

- **Using Commonly-Known Languages** mitigates the impact of highly specialised staff quitting and leaving you hunting for replacements.  Whilst hiring people is hard work at the best of times, hiring PL/1 programmers is _really hard_.

### Specific Tactics

1.  **Do Risky Things Early**.  If you are building some software process which has ten steps in it, and the 9th step has a high probability of not being implementable, then _build the 9th step first_.  If you succeed, you've massively reduced the risk of the process construction.  IF you fail, you'll only have lost the time it took to build that one step.

2.  **Choose Popular Technologies**.  Popular technologies are easier to get support for, easier to staff and you're less likely to uncover novel edge conditions that stop your progress.  They're also likely to be popular for a reason.

3.  **

## Avoid

**Avoiding** risk, means taking a route on the [Risk Landscape](../thinking/Glossary.md#risk-landscape) _around_ the risk.  

### General Examples

- **Avoiding flying** 

For example, if you are working in a team which has no experience of relational databases, then _storing data in files_ might be a way to avoid the [Learning Curve Risk](../risks/Communication-Risk.md#learning-curve-risk) associated with this technology.  Of course, you may pick up other, more serious risks as a result: Relational Databases are software solutions to many kinds of [Coordination Risk](../risks/Coordination-Risk.md) problem, such as concurrent writes or consistency.

_Not_ launching an online service _avoids_ the [Operational Risk](../risks/Operational-Risk.md) involved in running one.  Although you avoid the upsides too.

## Transfer (sometimes Share)

**Transferring** risk means _making it someone else's problem_.  

For example, when I buy home insurance, the personal consequence of my house burning down is reduced.  It hasn't gone away completely, but at least the financial element of it is handled by the insurance company.
- **Insurance** de-risks owning a house, going on holiday or driving a car.  Usually, the payment is small enough not to impact us too much.

- **The National Health Service (NHS)** de-risks medical expense by pooling health-care costs across the entire population.  If you were struck down with a debilitating illness, then at least you wouldn't also have to pay to get better. 


**Transfer** of risk is an essential feature of [Software-as-a-Service (SaaS)](../risks/Software-Dependency-Risk.md):  someone else is responsible for making sure the service is up-and-running, backed up, etc.  

Inside organisations, **Transfer** of risk can become a political game:

> "... ownership results in ‘one throat to choke’ for audit functions [and] from ownership comes responsibility. A lot of the political footwork in an enterprise revolves around trying to not own technologies. Who wants to be responsible for Java usage across a technology function of dozens of thousands of staff, any of whom might be doing crazy stuff? You first, mate. " - [Why Are Enterprises So Slow?, _zwischenzugs.com_](https://zwischenzugs.com/2018/10/02/why-are-enterprises-so-slow/)

## Ignore / Accept

**Accepting** risk is to deal with it when it arises.  

One example is the [Key Person Risk](../risks/Scarcity-Risk.md#staff-risk) involved in having a super-star programmer on the team.  Although there would be fall-out if they left, often they are a risk worth accepting because of the value they bring.

Another example is using particular software dependencies:   building a mobile application which requires a Facebook account to log in might give rise to the risk that people without Facebook accounts can't log in, but might simplify the software to such an extent that it's worthwhile.

Whereas **Accepting** a risk seems to imply an eyes-wide-open examination; **Ignoring** seems to imply that either the risk is so insignificant it doesn't warrant evaluation, or so daunting that it can't be stared down.  Either way, **Ignoring** a risk amounts to the same thing as **Accepting** it, since you're not doing anything about it. 

**Accepting** a risk has to occur _before_ we can **Mitigate** it.  



### A Nice Problem To Have

**Ignoring** or **Accepting** risks is a lot less work than **Mitigating** them, so sometimes it can feel negligent to just add them to the backlog or risk-register without doing anything immediately about them.  One useful test I have found is whether "This would be a nice problem to have".  For example:

> "Running out of space in the database would be a nice problem to have, because it would mean we have lots of users"

> "Users complaining about lacking function X would be a nice problem to have, because it would mean they were using the system"

Applying this kind of logic at the start of a project leads you towards building a [Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product).

### Learned Helplessness

Sometimes risks just go away on their own.  [Learned Helplessness](https://en.wikipedia.org/wiki/Learned_helplessness), on the other hand, is where we _could_ do something about the risk, but fail to see that as an option:

> "Learned helplessness is behaviour typical of animals, and in rare cases humans, that occurs when the subject endures repeatedly painful or otherwise aversive stimuli which it is unable to escape or avoid. After such experience, the organism often fails to learn or accept "escape" or "avoidance" in new situations where such behavior would likely be effective. " - [Learned Helplessness, _Wikipedia_](https://en.wikipedia.org/wiki/Learned_helplessness)

## Contain

**Containing** risks means setting aside sufficient time or money to deal with them if they occur.    

Whenever a project-manager builds slack into a project plan, this is **Containment**.   "Time-Boxing" is also containment: this is where you give a piece of work a week (say) to prove itself.  If it can't be done in this time, we move on and try a different approach.

In the section on [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) we are going to look in detail at how this works. 

### Specific Tectics

1.  **Time-Boxing**


## Exploit

**Exploiting** as a strategy usually means taking advantage of the upside of a risk.   For example, ensuring enough stock is available to mitigate the risk of a rush on sales over the Christmas period, or ensuring your website has enough bandwidth to capture all the traffic headed towards it after it's featured on television.  

Going back to the example of home insurance, the insurance company is **exploiting** the risk of my house burning down by selling me insurance.  This is a common pattern:  wherever there is risk, there is likely to be a way to profit from it.  

Later, in the section on [Process Risk](../risks/Process-Risk.md) we'll be looking at how **exploiting risk** can happen organically within a company. 

## A Vocabulary

Here we've been building towards a vocabulary with which to communicate to our team-mates about which risks are important to us, which actions we believe are the right ones, and which tools we should use.

In the next section we will see [an example of this in action](A-Conversation.md).


