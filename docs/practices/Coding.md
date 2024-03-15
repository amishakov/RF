![Draft](/img/state/draft.png)

## What Is It

**Coding** is the main practice that identifies us as working on a _software project_:  Actually entering instructions in a language that the computer will understand, be it Java, C++, Matlab, Excel or _whatever_.   It is transferring the ideas in your head into steps that the computer can understand, or, as Wikipedia has it:

> "...actual writing of source code." -- [Wikipedia, _Computer Programming_](https://en.wikipedia.org/wiki/Computer_programming)

Often, this can be called "programming", "hacking" or "development", although that latter term tends to connotate more than just programming work, such as [Requirements Capture](Requirements-Capture) or [Documentation](Documentation.md), but we're considering those separately on different pages.

## How It Works

In [Development Process](../thinking/Development-Process.md) we introduced the following diagram to show what is happening when we do some coding.  Let's generalize a bit from this diagram:

- We start with a [Goal](../thinking/Glossary.md#goal) to implement _something_.
- We build an [Internal Model](../thinking/Glossary.md#internal-model) of how we're going to meet this goal (though coding, naturally)
- Then, we find out how well our idea stands up when we [Meet Reality](../thinking/Glossary.md#meet-reality) and try it out in our code-test-run-debug cycle.
- As we go, the main outcome is that we change reality, and create code, but along the way, we discover where our [Internal Model](../thinking/Glossary.md#internal-model) was wrong, in the form of surfacing [Hidden Risks](../thinking/Glossary.md#hidden-risk).

(/img/generated/practices/coding/development_process_code.png)

## Examples

As with any [Practice](Start.md), we are coding to minimize [Attendant Risks](../thinking/Glossary.md#attendant-risk).  We might want...

- **To Build** or improve some features which our clients will find useful. - _[Feature Risk](../risks/Feature-Risk.md)_
- **To Automate** some process that takes too long or is too arduous.  - _[Process Risk](../risks/Process-Risk.md)_
- **To Explore** how our tools, systems or dependencies work (also called [Hacking](https://en.wikipedia.org/wiki/Hacking)). -  _[Dependency Risk](../risks/Dependency-Risk.md)_ internal model risk
- **To Refactor** our codebase, to reduce complexity. - _[Complexity Risk](../risks/Complexity-Risk.md)_
- **To Clarify** our product, making our software more _presentable_ and _easier to understand_.  -  _[Communication Risk](../risks/Communication-Risk.md)_

... and so on.   As usual, the advice is to _reduce risk_ in the most meaningful way possible, all the time.  This might involve coding _or it might not_.

## Where Its Used

Since the focus of this site is on _software methodologies_, you shouldn't be surprised to learn that _all_ of the methodologies use **Coding** as a central focus.  

## Variations

### Building Features

Most commonly, the reason we are **Coding** is same as the one in the [Development Process](../thinking/Development-Process.md) page: we want to put features in the hands of our customers.   

That is, we believe our clients don't have the features they need to see in the software, and we have [Feature Risk](../risks/Feature-Risk.md). 

By coding, we are mitigating [Feature Risk](../risks/Feature-Risk.md) in exchange for [Complexity Risk](../risks/Complexity-Risk.md) in terms of the extra code we now have on the project, and [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk), because by spending time or money coding we now have less time or money to do other things.  Bill Gates said: 

> “Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” - Bill Gates

And you can see _why_ this is true:  the more code you write, the more [Complexity Risk](../risks/Complexity-Risk.md) you now have on the project, and the more [Dead End Risk](../risks/Complexity-Risk.md) you've picked up in case it's wrong.  This is why [The Agile Manifesto](http://agilemanifesto.org) stresses:

> "Simplicity -the art of maximizing the amount of work not done- is essential."  [Agile Manifesto](http://agilemanifesto.org/)

### Prototyping

Users often have trouble _conceiving_ of what they want in software, let alone _explaining_ that to developers in any meaningful way.  

Let's look at how that can happen.  

Imagine for a moment, that there was such a thing as **The Perfect Product**, and a **User** wants to build it with a **Coder**:
 - The **Perfect Product** might be _conceptually elusive_, and it might take several attempts for the **User** to find its form. _[Conceptual Integrity Risk](../risks/Feature-Risk.md)_
 - It might be hard for the **User** to _communicate_ the idea of it in writing or words:  where do the buttons go? What do they do?  What are the key abstractions?  _[Communication Risk](../risks/Communication-Risk.md)_
 - It might be hard too, for the **Coder** to work with this description.  Since his [Internal Model](../thinking/Glossary.md#internal-model) is different from the **User**'s, they have different ideas about the _meaning_ of what the **User** is communicating.  _[Communication Risk](../risks/Communication-Risk.md)_
 - Then, implementing the idea of whatever is in the **Coder**'s [Internal Model](../thinking/Glossary.md#internal-model) takes _effort_, and therefore involves [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).
 - Finally, we have a feedback loop, so the **User** can improve their [Internal Model](../thinking/Glossary.md#internal-model) and see the previously unforeseen [Hidden Risks](../thinking/Glossary.md#hidden-risk).
 - Then, you can go round again.

![Coding Communication Risks](/img/generated/practices/coding/perfect_product.png)

The problem here is that this is a very _protracted feedback loop_.  This is mitigated by prototyping, because that's all about shortening the feedback loop as far as possible:  
 - By working together, you mitigate [Communication Risk](../risks/Communication-Risk.md).
 - By focusing on one or two elements (such as UI design), you can minimize [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).
 - By having a tight feedback loop, you can focus on _iteration_, try lots of ideas, and work through [Conceptual Integrity Risk](../risks/Feature-Risk.md). 
 
One assumption of Prototyping is that **Users** can iterate towards **The Perfect Product**.  But it might not be so:   the Conceptual gap between their own ideas and what they really _need_ might prove too great.  

After all, bridging this gap is the job of the [Designer](Design.md):

> “It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.” — Steve Jobs 

### SkunkWorks

The [SkunkWorks](https://en.wikipedia.org/wiki/Skunk_Works) approach is one small step up from **Prototyping**.  Wikipedia describes this as:

>  A group within an organization given a high degree of autonomy and unhampered by bureaucracy, with the task of working on advanced or secret projects

The idea here is _again_ to minimize the length of the feedback loop, and focus on [Design](Design.md) to combat [Conceptual Integrity Risk](../risks/Feature-Risk.md).  It was in this kind of small, secret team that the [iPhone was invented](https://www.networkworld.com/article/2159873/smartphones/apple-s-iphone--the-untold-story.html).  

To give some idea of the [Conceptual Integrity Risk](../risks/Feature-Risk.md) involved, initially, the team were building a _tablet_ using the multi-touch technology that the iPhone introduced to the world, but pivoted towards the phones after the failure of the "Apple Phone" collaboration with Motorola.

Scott Forstall picked a small, secret team from within the ranks of Apple.  By doing this, he mitigated [Communication Risk](../risks/Communication-Risk.md) and [../risks/Coordination Risk](../risks/Coordination-Risk.md) _within his team_, but having fewer people in the room meant more [Throughput Risk](../risks/Scarcity-Risk.md#schedule-risk).

By having more people involved, the feedback loop will be longer than the two-man prototyping team, but that's the tradeoff you get for mitigating those other risks.

### Specialization

One of the problems with a **SkunkWorks** approach is that you end up with more [Coordination Risk](../risks/Coordination-Risk.md) than you'd like, as your different skunk-teams end up with different [Internal Models](../thinking/Glossary.md#internal-model) and different [Goals](../thinking/Glossary.md#goal).  

In large companies, this is called [Silo Mentality](https://en.wikipedia.org/wiki/Information_silo) - the tendency for lines of business to stop communicating and sharing with one another.  As you can imagine, this leads to a more [Complex](../risks/Complexity-Risk.md) and [bureaucratic](../risks/Process-Risk.md#bureaucracy) structure than would be optimal.

But this can happen within a single coding team, too:  by splitting up and working on different pieces of functionality within a project, the team _specialises_ and becomes expert in the parts it has worked on.  This means the team members have different [Internal Models](../thinking/Glossary.md#internal-model) of the codebase.

This is _perfectly normal_:  we _need_ people to have different opinions and points-of-view.  We _need_ specialisation, it's how humanity has [ended up on top](https://en.wikipedia.org/wiki/Division_of_labour).  It's better to have a team who, between them all, know a codebase really well, than a group of people who know it poorly.   

The reason for this is explained again by the first diagram in this section:  the closer our [Internal Model](../thinking/Glossary.md#internal-model) matches [Reality](../thinking/Glossary.md#meet-reality), the fewer [Hidden Risks](../thinking/Glossary.md#hidden-risk) we will meet, and the easier we'll have it.

The downside of specialization is [Coordination Risk](../risks/Coordination-Risk.md):  
 - If your payroll expert is off ill for a week, progress on that stops. 
 - Work is rarely evenly spread out amongst the different components of a project for long. 
 - If work temporarily dries up on a specific component, what do the component owners do in the meantime? 
 - What if the developer of a particular component makes _the wrong assumptions_ about other parts of the system or tool-set?

### Pair Programming / Mob Programming

In the main, [Review](Review.md)) is the main way to mitigate [Coordination Risk](../risks/Coordination-Risk.md). For example:
 - [Code Reviews](Review.md)
 - [Stand Up Meetings](Review.md)
 - [Presentations & Demos](Review.md)
 - [Training](Review.md)
 
**Pair Programming** however _combines_ the review with the process of coding: there are now two heads at each terminal.  What does this achieve?  
 - Clearly, we mitigate [Key-Man Risk](../risks/Coordination-Risk.md) as we've got two people doing every job.  
 - Knowledge is transferred at the same time, too, mitigating [Specialist Risk](../risks/Coordination-Risk.md).  
 - Proponents also argue that this mitigates [Complexity Risk](../risks/Complexity-Risk.md), as the software will be better quality.
 - Since the pair spend _so much time together_, the communication is very _high bandwidth_, so this mitigates [Communication Risk](../risks/Communication-Risk.md)
 
But, conversely, there is a cost to **Pair Programming**:
 - Having two people doing the job _one person could do_ intimates [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).
 - Could the same [Complexity Risk](../risks/Complexity-Risk.md) be mitigated just with more regular [Code Reviews](Review.md)?
 - Sometimes, asking members of a team to work so closely together is a recipe for disaster.  [Team Risk](../risks/Coordination-Risk.md)
 - Not every pair programmer "shares" the keyboard time evenly, especially if ability levels aren't the same.
 - There is only one **Feedback loop**, so despite the fact you have two people, you can only [Meet Reality](../thinking/Meeting-Reality.md) serially.  
   
 **Mob Programming** goes one stage further and suggests that we can write better software with _even more people around the keyboard_.  So, what's the right number?  Clearly, the usual trade-off applies:  are you _mitigating_ more risk than you're _gaining_?   
 
### Offshoring / Remote Teams

**Pairing** and **Mobbing** as mitigations to [Coordination Risk](../risks/Coordination-Risk.md) are easiest when developers are together in the same room.  But it doesn't always work out like this.   Teams spread in different locations and timezones naturally don't have the same [communication bandwidth](../risks/Communication-Risk.md) and you _will_ have more issues with [Coordination Risk](../risks/Coordination-Risk.md).  

In the extreme, I've seen situations where the team at one location has decided to "suck up" the extra development effort themselves rather than spend time trying to bring a new remote team up-to-speed.  More common is for one location to do the development, while another gets the [Support](Support) duties.  

When this happens, it's because somehow the team feel that [Coordination Risk](../risks/Coordination-Risk.md) is more unmanageable than [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).

There are some mitigations here:  video-chat, moving staff from location-to-location for face-time, frequent [show-and-tell](Review.md), or simply modularizing accross geographic boundaries, in respect of [Conway's Law](../risks/Coordination-Risk.md):

> "organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations."  - _[M. Conway](https://en.wikipedia.org/wiki/Conways_law)_

When we add **Outsourcing** into the mix, we also have to consider [Agency Risk](../risks/Agency-Risk.md):  the consultancy you've hired is _definitely_ more interested in keeping themselves solvent than solving your business problems.

### Team Size

As team sizes grow, [Coordination Risk](../risks/Coordination-Risk.md) grows fast.  

To see this, let's consider a made-up situation where all the developers are equal, and we can mitigate [Coordination Risk](../risks/Coordination-Risk.md) at the cost of a 1-hour presentation each per week.  

How many man-hours of presentations do we need?

|Team Size|Hours Of Presentations|Man-Hours In Presentations|
|---------|----------------------|--------------------------|
|1        |0                     |0                         |  
|2        |2                     |4                         |
|3        |3                     |9                         |
|4        |4                     |16                        |
|5        |5                     |25                        |
|6        |6                     |36                        |
|7        |7                     |49                        |

Adding the 7th person to the team (ceteris paribus) does absolutely _nothing_ for productivity, it makes matters worse.  Assuming everyone works a 40-hour week, we're now 9 hours worse off than before.   

This is a _toy example_, but is it better or worse than this in reality?  If the new developers are arriving on an existing project, then 1 hour-per-week of training by the existing team members might be conservative.  

This is why we get [Brooks' Law](https://en.wikipedia.org/wiki/Brooks_law): 

> "adding human resources to a late software project makes it later".  - [Fred Brooks, _The Mythical Man-Month_](https://en.wikipedia.org/wiki/Brooks_law)

You can see that this law is founded in an appreciation of [Coordination Risk](../risks/Coordination-Risk.md).  But the argument from [../risks/Coordination Risk](../risks/Coordination-Risk.md) _adds nuance_, and explains when this is true and when it isn't.

### Too Many Cooks

Sometimes, you have _too many developers_ on a project.  This is not a blessing.   As with [Student Syndrome](../risks/Scarcity-Risk.md#schedule-risk), having too many resources means that: 

> "Work expands so as to fill the time available for its completion" - [Parkinson's Law](https://en.wikipedia.org/wiki/Parkinson's_law)

One of the reasons for this is that _Developers love to develop_ and it is, after all, their job.  If they _aren't_ developing, then are they still needed?  This is [Agency Risk](../risks/Agency-Risk.md):  people who are worried about their jobs will often try to _look busy_, and if that means creating some drama on the project, then so be it.

Sadly, this usually occurs when a successful project is nearing delivery.  Ideally, you want to be _decreasing_ the amount of change on a project as it gets closer to key [Delivery Dates](../risks/Coordination-Risk.md).  This is because the risk of [Missing the Date](../risks/Coordination-Risk.md) is greater than the risk of [some features not being ready](../risks/Feature-Risk.md).

In the past, I've found it helpful to down-size the team by temporarily moving developers into other less-fortunate teams, reducing both [Coordination Risk](../risks/Coordination-Risk.md) and [Agency Risk](../risks/Agency-Risk.md) at the same time.  

This can require some guts to do:  you have to overcome your own ego (wanting to run a big team) for the sake of your project.

 
### Automating

One of the key ways to measure whether your team is doing _useful work_ is to look at whether, in fact, it can be automated.  And this is the spirit of [DevOps](DevOps) - the idea that people in general are poor at repeatable tasks, and anything people do repeatedly _should_ be automated.  

Repetitive work of any kind is a [Process Risk](../risks/Process-Risk.md), and can be mitigated at the expense of attendant [Complexity Risk](../risks/Complexity-Risk.md) and [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk).

Since this is a trade-off, you have to be careful about how you _weigh_ the [Process Risk](../risks/Process-Risk.md):  clearly, it exists _into the future_.  

You are making a bet that acting now will pay off in decreased [Process Risk](../risks/Process-Risk.md) over the lifetime of the project.  This is a hard thing to judge:
 - How much [Process Risk](../risks/Process-Risk.md) are we carrying, week-to-week?  (A good way to answer this is to look at past failures).
 - How much [Complexity Risk](../risks/Complexity-Risk.md) will we pick up?
 - How much [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) (in spent developer effort) will we pick up?
 - How long will the mitigation last before the process changes again?

### Tool Use
 
In general, unless the problem is somehow _specific to your circumstances_ it may well be better to skip direct coding and pick up some new tools to help with the job.  

Tools are a different trade off to automation.  You are mitigating [Process Risk](../risks/Process-Risk.md) or [Feature Risk](../risks/Feature-Risk.md) in return for:
 - New [Dependency Risk](../risks/Dependency-Risk.md) on the new tool.
 - [Communication Risk](../risks/Communication-Risk.md) because now the team has to understand the tool.
 - [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) in the time it takes to learn and integrate the tool.
 - [Complexity Risk](../risks/Complexity-Risk.md) because your project necessarily becomes more complex for the addition of the tool.

Tools in general are _good_ and _worth using_ if they offer you a better risk return than you would have had from not using them.  

But, this is a low bar -  some tools offer _amazing_ returns on investment.  The [Silver Bullets](../complexity/Silver-Bullets.md) article describes in general some of these: 
 - Assemblers
 - Compilers
 - Garbage Collection
 - Type Systems
 - Libraries
 - Build Tools
 - etc.

A _really good tool_ offers such advantages that not using it becomes _unthinkable_:  Linux is heading towards this point.   For Java developers, the JVM is there already.  

Picking new tools and libraries should be done **very carefully**:  you may be stuck with your choices for some time.  Here is a [short guide that might help](../risks/Dependency-Risk.md).

### Refactoring

The term "refactoring" probably stems from the mathematical concept of _(Factorization)[https://en.wikipedia.org/wiki/Factorization]_.  Factorizing _polynomial equations_ or _numbers_ means to identify and make clear their distinct components.

tbd: SoC

Most coders use the phrase "refactoring", and intuitively understand what it is.  It shouldn't have been hard to find a clear explanation for this page, but sadly it was.  There are some very woolly definitions of "refactoring" around, such as:

> "**Refactoring (n)**: a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior""  -- [Refactoring.com](https://www.refactoring.com)

What do "easier to understand" (which makes sense) and "cheaper to modify" mean?   Let's try and be more specific.   With Refactoring, we are trying to:

- Mitigate [Communication Risk](../risks/Communication-Risk.md) by making the _intent_ of the software clearer. This can be done by breaking down larger functions and methods into smaller ones with helpful names, and naming elements of the program clearly, and
- Mitigate [Complexity Risk](../risks/Complexity-Risk.md) by employing _abstraction_ and _modularization_ to remove duplication and reduce cross-cutting concerns.   By becoming less complex, the code has less [Inertia](../risks/Complexity-Risk.md).

On **Refactoring**, Kent Beck says:

> "If a programmer sees a one-minute ugly way to get a test working and a ten-minute way to get it working with a simpler design, the correct choice is to spend the ten minutes. " -- Kent Beck, _Extreme Programming Explained_

This is a bold, not-necessarily-true assertion.  How does that ratio stack up when applied to _hours_ or _days_?  But you can see how it's motivated:  Kent is saying that the nine extra minutes of [Schedule Risk](../risks/Scarcity-Risk.md#schedule-risk) are _nothing_ compared to the carry cost of [Complexity Risk](../risks/Complexity-Risk.md) on the project.

## Risks Mitigated / Attendant Risks

tbdd

## Attendant Risks

tbd

## See Also

## Debugging

## Risk-First Applied

- Do the riskiest bits first.
- Try and map out the risk landscape
- Examine Boundary Risk and Dead End Risk issues:  is this decision going to limit you 

## Spike


SIZING BETS