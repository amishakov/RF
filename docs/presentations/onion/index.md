---
template: post
title: The Agile Onion
permalink: /presentations/onion/onion.html
description: Light-hearted presentation for Deutsche Bank on Risk First and Agile, June 2019.
author: rob
url: https://riskfirst.org/presentations/onion/onion.html
featured: 
  class: bg1
  element: '<image-artifact imgsrc="/public/templates/risk-first/posts/onion.svg">The Agile Onion</image-artifact>'
date: 2019-07-24 16:32:03 +0000
tags: 
 - Presentations
 - Popular
sidebar_position: 6
hide_table_of_contents: true
---

    <h1>The Agile Onion</h1>
    
    <i>These slides and text are based on notes I made for a presentation at Deutsche Bank's "Agile Month", covering Risk-First and Agile. Delivered in June 2019.</i>

    <div class="slides">
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.001.jpg" alt="Image of slide number 1" />
            </div>
            <div class="slide-notes">
                      <p>My name is Rob Moffat.  I am a Java and Javascript software developer working in London.  </p>

      <p>So, the reason this talk is called “Peeling The Agile Onion” is because I really want to do is get at the heart of what makes agile work.  </p>

      <p>Hopefully this won’t be an onion that makes us cry.  We’ll see.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.002.jpg" alt="Image of slide number 2" />
            </div>
            <div class="slide-notes">
                      <p>So, what am I going to talk about today.   </p>

      <p>I’ve been working in banking for nearly 20 years, and so really, I thought it would be interesting to look at couple of things:</p>

      <p>One, I want to look at a “personal” history of agile - how it’s affected me, and what I’ve learned in those 20-odd years.  </p>

      <p>I also want to look at the history of Agile within, really, the banking industry, and also look at where that’s going, and how we can expect it to develop.</p>

      <p>But beware: this is all a personal viewpoint, and as we know, those are all flawed in some way.  </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.003.jpg" alt="Image of slide number 3" />
            </div>
            <div class="slide-notes">
                      <p>Now, a third element to what I’m going to cover in my talk is an introduction to Risk First.  </p>

      <p>This is a website, which you can go and check out after the presentation.  I’m going to introduce a few of the concepts from Risk-First today.</p>

      <p>Because I really want to explore in this talk the dynamics of Agile.  That is, try to understand the forces that get us to where we are, and where we’re going.  What’s working, and what isn’t. And Risk-First happens to be a fairly useful way to frame that, so I am going to make use of it a bit. </p>

            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.004.jpg" alt="Image of slide number 4" />
            </div>
            <div class="slide-notes">
                      <p> Ok, let’s start at the start.  My first job in finance was at Deutsche Bank (this is a picture of their main London office, on London Wall).</p>

      <p>I actually worked here from about 2002 - 2005.  Which is a really long time ago.  Amazingly, some of the software I wrote then is still running in the bank, somewhere.</p>

      <p>So actually DB is when I first learnt about “Agile” as a thing.  The system I built had a suite of automated tests.  We released every couple of weeks.  We met with our users every couple of weeks, we prioritised work.</p>

      <p>Also, more because of when it was being done, we didn’t have a project plan, or a release date, or a signed off specification.  Because back in 2002, that was just the way we rolled building banking IT!   In a way, this was “Accidentally Agile”.</p>

      <p>You could just log into production systems and change things.  Root access on machines and databases.  And so on.  I personally managed to fry one of our production databases once.  </p>

      <p>So, actually, there was a lot of what we call “Operational Risk” back then.  Individuals could either deliberately or accidentally mess things up really, really badly.  </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.005.jpg" alt="Image of slide number 5" />
            </div>
            <div class="slide-notes">
                      <p>Around 2005 Basel 2 was introduced, which actually addressed this Operational Risk in banks, and forced them to start doing something about it. </p>

      <p>As you can see here in the diagram, Basel 2 addressed Operational Risks, Market Risks and Credit Risks, with new regulations for each.  Basel 1 had just been about those bottom two, so Operational Risk was a new concern.  </p>

      <p>Audits started coming in, and break glass accounts, and change requests, and all this stuff.  </p>

      <p>Which made it harder to do the wrong things, but also made it harder to do the right things.</p>

      <p>So, some of those "Accidentally-Agile" practices were going to get harder to do.  For good reason.  Having systems like that was just dangerous.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.006.jpg" alt="Image of slide number 6" />
            </div>
            <div class="slide-notes">
                      <p>Now, it turns out, bankers weren’t the only people thinking about risk.</p>

      <p>The quote above is actually the first sentence from Chapter One of a fairly famous book on Software Development.  </p>

      <p>Does anyone know which one?</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.007.jpg" alt="Image of slide number 7" />
            </div>
            <div class="slide-notes">

      <p>It's this one.  This is the first Agile book I read, whilst at Deutsche Bank that first time. </p>

      <p>This seemed like a breath of fresh air compared with what I’d learnt at university about software development.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.008.jpg" alt="Image of slide number 8" />
            </div>
            <div class="slide-notes">
                      <p>Kent had a bunch of ideas in this book, that really deviated from the accepted “norms” of software development, like Pair Programming.</p>

      <p>This is a picture of some guys Pair Programming.</p>

      <p>Some people love it.   A lot of developers grew to hate XP because of this.  They didn’t want to share a keyboard and mouse with someone, and work together.</p>

      <p>But what is the point of Pair Programming?  </p>

      <p>What Kent is trying to avoid by enforcing this is Key Person Risk.  That is, having individuals on a team who are the only people who know about a thing.  </p>

      <p>And if they leave or go on holiday, your project is down the toilet.  </p>

      <p>That’s the idea, anyway:  Pair Programming is a risk-management technique.  Specifically, trying to address Key Person Risk.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.009.jpg" alt="Image of slide number 9" />
            </div>
            <div class="slide-notes">
                      <p>Kent Beck also co-invented JUnit.  As a Java developer, I use this all the time.</p>

      <p>I actually can't imagine coding now without building tests as I go, and having tools to at least understand my coverage..  It just seems so helpful now to have this.</p>

      <p>Now, why do we write tests?  Why are Unit tests such an integral part of Agile? </p>

      <p>I would say, they are managing risk.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.010.jpg" alt="Image of slide number 10" />
            </div>
            <div class="slide-notes">
                      <p>They are managing a couple of risks:  First, you want to test your code before you put it in production.  Putting untested code into production is an Operational Risk right there!</p>

      <p>But also, there is a Regression Risk:  our code is going to change in the future, we want to change it, and if we have tests, we have some more certainty that when we do change it, we haven’t introduced new bugs.  </p>

      <p>And, it’s a tradeoff - that’s what’s being shown here.  In order to address regression risk, and operational risk, I have to own some extra code in my codebase.  So, that’s complexity risk.  And building those tests, and maintaining them, that’s going to take some of my schedule up, so there’s a risk to the schedule in writing tests.</p>

      <p>Now, if you’re good at Unit Testing, this is a great deal. The trick is to write <i>just enough</i> tests to address the risks on the left. But if you go crazy, you end up turning it into an industry, which blows up those risks on the right.</p>

      <p>So, it’s back to this again.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.011.jpg" alt="Image of slide number 11" />
            </div>
            <div class="slide-notes">
                      <p>It seems weird that Kent started his book with this statement, but what people really remember about XP is just Pair Programming, Unit Tests and eating pizza.</p>

      <p>I think he was actually on to something really powerful right then and he didn't develop it further.</p>

      <p>The reason is, he had these other fish to fry:  he'd developed XP which, to him and many other people, was demonstrably better than the way we had been doing software development.  </p>

      <p>And so his book was just a catalog of all these "better" techniques, and how they could be used together.   </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.012.jpg" alt="Image of slide number 12" />
            </div>
            <div class="slide-notes">
                      <p>These approaches are more popular than XP nowadays.  </p>

      <p>Who uses Scrum at work? We’re going to talk a bunch about how Scrum has been accepted in Software Development.  </p>

      <p>Anyone use Lean or Kanban?  </p>

      <p>Does anyone still use Waterfall?  </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.013.jpg" alt="Image of slide number 13" />
            </div>
            <div class="slide-notes">
                      <p>I’m not here to rag on Waterfall.  </p>

      <p>Sometimes, Waterfall is the right way to go!  </p>

      <p>We'll dive into that in more detail in a minute, but it feels like collectively, as an industry, or a practice, software development has been on a path of discovery.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.014.jpg" alt="Image of slide number 14" />
            </div>
            <div class="slide-notes">
                      <p>Waterfall leads to XP and Scrum and Lean and Kanban, lately DevOps and so on.</p>

      <p>Exactly as described in the Agile Manifesto.</p>

      <p>But, Banking in particular seems to lag on these trends.  Now, is there a reason why?</p>

      <p>I think there is, and I’m going to explain that.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.015.jpg" alt="Image of slide number 15" />
            </div>
            <div class="slide-notes">
                      <p>Who know’s what this curve is?  </p>

      <p>It’s called a Hype Cycle.  </p>

      <p>Basically in a Hype-Cycle we have early adopters of a new idea picking up on it on the left hand side, and using it, and reporting success.  And that leads to more awareness.  </p>

      <p>And more people pile in, using that technology for things that are maybe, not exactly what it was intended for. (The Peter Principle)</p>

      <p>And after a while, we end up in this “Peak Of Inflated Expectations” where everyone is raving about a thing, without necessarily knowing all that much about it.  So, like Bitcoin a year ago, or fidget spinners two years ago.  </p>

      <p>Well anyway, it turns out that the more awareness increases beyond people’s actual knowledge of a thing, the bigger the hype is, and then the worse this crash into the “Trough of Disillusionment”.</p>

      <p>Eventually, the knowledge of the thing increases in the population, and people pull out of the hype cycle into the slope of enlightenment and the plateau of productivity, because they know when something is useful, they’re not just jumping on a bandwagon.</p>

      <p>They’ve figured out what that thing is useful for, and what it’s not for.</p>

      <p>So people like Kent Beck were the far-left adopters on this curve.  </p>

      <p>So, I guess the question is, why has that taken so long in Banking?  Why weren’t they earlier on on this adoption curve?</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.016.jpg" alt="Image of slide number 16" />
            </div>
            <div class="slide-notes">
                      <p>I think there are a few reasons.  </p>

      <p>First, big organisations are always slower to adapt, and banks are large organisations.   This is often because the people in charge already have their ways of doing things.  It’s taken 20 years - a whole generation - for those ideas to change.  </p>

      <p>But I also suspect that it’s partly to do with the 2007 Financial Crisis.  Certainly, in the risk departments I worked in, regulations started flying in from all directions.  </p>

      <p>The regulations always had a delivery date, and they generally required coordination across a large number of very disparate groups of people.</p>

      <p>And, they were generally very clear in what they wanted to see.</p>

      <p>I personally felt for a long while that those kinds of projects didn’t really lend themselves to an Agile approach.  </p>

      <p>You were given a bunch of money, and told to make something happen across a large organisation, by a certain date.</p>

      <p>You couldn’t put together a small team in a room, you couldn’t apply a process of iterating in two weeks.   </p>

      <p>So banking (and especially Risk, which I worked in) stuck with Waterfall for far longer than many other industries, I think.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.017.jpg" alt="Image of slide number 17" />
            </div>
            <div class="slide-notes">
                      <p>OK, so all this talk of Financial Crises and Waterfall is a bit tedious.  Let’s mix things up a bit and do a quick Risk-First introduction.  </p>

      <p>When I was at school, I took Economics.  We were 17 or 18 years old.  And one of the guys just asks:</p>

      <p>"What's the point of all this?  Surely the markets are just people buying and selling stuff?  They don't know about demand curves and price elasticity and all of these things!"</p>

      <p>My economics teacher had to take quite a lot of shit actually.  We were young and political and pretty annoying teenagers.  But he gave a great answer:</p>

      <p>"When footballers are playing a match of football, they have an understanding of how the ball works.  But they don't need to be good physicists.  Nevertheless, physical rules underpin the game they play.”</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.018.jpg" alt="Image of slide number 18" />
                <small>From <a href="https://xkcd.com">XKCD</a></small>
            </div>
            <div class="slide-notes">
                      <p>Now, that might be overselling Economics, "the dismal science", as a discipline, comparing it to Physics.</p>

      <p>It seems to me that Kent Beck understood that something similar was true in Software.  </p>

      <p>Risk was that underlying physics of building software.</p>

      <p>I’ve come to the same realisation, and I’m going to spend a couple of minutes now trying to persuade you why that’s true.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.019.jpg" alt="Image of slide number 19" />
            </div>
            <div class="slide-notes">
                      <p>That is, methodologies like Scrum, XP, Waterfall are collections of practices like Unit Testing, Stand-Ups and so on. And these practices are meant to manage risk.  </p>

      <p>Risk is the underlying "physics" that we're dealing with.  </p>

      <p>And risks are all the things that can go wrong on your project, preventing you from hitting the goal, the vision of reality that you wanted.</p>

      <p>I am going to try and make that case in various ways, and then we can try to apply that principle in a number of different scenarios and see where it gets us.</p>

      <p>You could argue, like a footballer might, that understanding that lower level isn't going to make a jot of difference to how you do the higher level stuff.  How do you run a good retro?  How do you do estimating?  How do you code a feature?  </p>

      <p>You can know all that stuff separately.</p>

      <p>Actually though, I think, like economics, not only that it is useful, but that we're already doing this stuff anyway, we just don't talk about it.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.020.jpg" alt="Image of slide number 20" />
            </div>
            <div class="slide-notes">
                      <p>So, in order to convince you of this statement, I'm first going to try and convince you of some more specific statements.  </p>

      <p>Let’s start with..</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.021.jpg" alt="Image of slide number 21" />
            </div>
            <div class="slide-notes">
                      <p>So instead of looking at Software Development for a moment, I’m just going to talk about the board game, Risk.</p>

      <p>My son Charlie and I love to play risk. </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.022.jpg" alt="Image of slide number 22" />
            </div>
            <div class="slide-notes">
                      <p>This is actually the board from the last time we played.  He is Yellow and I am Grey. </p>

      <p>If you understand the game risk, you'll know that basically, it's a regressive game. </p>

      <p>The person winning has the most land, and they get the most troops.  </p>

      <p>The only nod at progressive game play (that is, trying to even everyone out) is that attacking is harder than defending.  </p>

      <p>In this game, I won on the next turn, because I could see Charlie's position was over-extended, and I had a bunch of cards and you get lots of troops for continents - I’ve got 3.  North and South America, and Australasia.  </p>

      <p>Why did I know I was going to win?  Basically, I have an Internal Model of Risk that's better than his.   I could see the danger areas.  For example, I knew that by holding Thailand down here, I would prevent him from owning Asia, which would gives him 7 extra troops each go.  And by defending Kamchatka up the top I can stop him marching into the US.</p>

      <p>But I'm taking risks too: Africa is a huge open back-door, and Charlie could have taken South America and beaten me.  </p>

      <p>In the same way as banks have Operational Risk, and Market Risk and Credit Risk, I have Africa Risk, and a bit of Kamchatka Risk.  </p>

      <p>That is, I can identify specific types of risk that’ll cause me to lose the game.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.023.jpg" alt="Image of slide number 23" />
            </div>
            <div class="slide-notes">
                      <p>So, to win at risk, I was managing a balance of risks.  And those risks are the ones I know about, in my "Internal Model".   </p>

      <p>It's possible that there are things that I'm not seeing, that a better Risk player would.  The reason I beat Charlie is I am 44 and my Internal Model is a bit better developed than his.  </p>

      <p>And, I've played more Risk.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.024.jpg" alt="Image of slide number 24" />
            </div>
            <div class="slide-notes">
                      <p>Roulette is another game that's all about risk.  Generally, most people have the same internal model of this game:  If I put a chip down on number 12, I will get back 36 chips if it comes up.. but there are 37 slots on the wheel, because of the zero.   The bank always wins on that, and so it’s everso slightly rigged against you. </p>

      <p>So, overall, over time, I’m going to lose.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.025.jpg" alt="Image of slide number 25" />
            </div>
            <div class="slide-notes">
                      <p>But this guy, Joseph Jagger, made a ton of money in the 1880's out of Roulette because he had a better Internal Model.  He sent stooges to casinos to record the results of each spin of the wheel.  And he found that some wheels were biased and so certain numbers came up more often than others.</p>

      <p>All he had to do was bet on those numbers to win.</p>

      <p>And all he had to do to get this "improved" Internal Model, was to go out and experiment in the real world, and record some observations.  He had to do what I call "Meeting Reality".  </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.026.jpg" alt="Image of slide number 26" />
            </div>
            <div class="slide-notes">
                      <p>So, we all know feedback loops are important right?</p>

      <p>I’ve listed some here.  The “tightest” loops are at the top, the “longest” loops at the bottom.  But these top ones give you “less” than the bottom ones - the Reality you meet isn’t the full, gory reality of those ones at the bottom.</p>

      <p>Just because your code compiles, doesn’t mean people are going to enjoy using it.</p>

      <p>But, you can find that out in a few seconds.</p>

      <p>It might take weeks to get a feature request back from a user, or a bug report. </p>

      <p>When you play the Risk game or learn about the Roulette wheels, you "Meet Reality” - your Internal Model improves.  This is the general process whereby experience gives you a better understanding of the risks.  </p>

      <p>Does that apply to software development?  </p>

      <p>I would argue it does.  Going back to Charlie, we were doing some revision for his Computer Science exam the other day, and he had to understand HTML.  </p>

      <p>He wrote a webpage that looked like this, to start with.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.027.jpg" alt="Image of slide number 27" />
            </div>
            <div class="slide-notes">
                      <p>Now, for most of us... this just hurts our eyes.   We can see all of the problems right off.  I have no idea what a browser would do with this.   Browsers are very lenient so maybe some of it would work.</p>

      <p>But the reason this sets off alarm bells for us, is that we have really well developed Internal Models of HTML and the rest.  </p>

      <p>Whereas this is Charlie's first webpage.</p>

      <p>By loading this up in a browser, he is Meeting Reality.  He’s closing a feedback loop, because he’ll see the results of his efforts.  </p>

      <p>And, his Internal Model will improve.</p>

      <p>The next time he writes a webpage, his Internal Model will warn him about the risks of it going wrong, and he’ll make fewer mistakes.</p>

      <p>And that process of Meeting Reality, Improving Your Internal Model, and having tight feedback loops is the essential characteristic of Agile.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.028.jpg" alt="Image of slide number 28" />
            </div>
            <div class="slide-notes">
                      <p>So let's look again at Waterfall.  As I said earlier, a lot of the “Financial Crisis era” regulation projects, we got through them with something like this:</p>

		<ul>
     <li>Requirements Capture</li>

      <li>Specification</li>

      <li>Up-Front Plans and Budgets</li>
		
		</ul>
 
      <p>Why these practices?</p>

      <p>Because Waterfall methodologies are borrowed from the construction industry, they manage the risks that you would care about in a construction project, specifically, minimising the risk of rework, and the risk of costs spiralling during the physical phase of the project. </p>

      <p>For example, pouring concrete is significantly easier than digging it out again after it sets.</p>

      <p>Construction projects are often done by tender which means that the supplier will bid for the job of completing the project, and deliver it to a fixed price. </p>

      <p>This is a risk-management strategy for the client: they are transferring the risk of construction difficulties to the supplier, and avoiding the Agency Risk that the supplier will “pad” the project and take longer to implement it than necessary, charging them more in the process. </p>

      <p>In order for this to work, both sides need to have a fairly close understanding of what will be delivered, and this is why a specification is created.</p>

      <p>In this diagram, the risks on the left are addressed by the actions on the right: requirements capture, specification, fixed price contracts.  That’s why they have a bar through them.  </p>

      <p>Those actions are doing something to address those risks.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.029.jpg" alt="Image of slide number 29" />
            </div>
            <div class="slide-notes">
                      <p>But, a lot of the time, waterfall was addressing the wrong risks.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.030.jpg" alt="Image of slide number 30" />
            </div>
            <div class="slide-notes">
                      <p>So, here we have the full equation.  By taking these actions in the middle, we address the risks on the left.</p>

      <p>But… we end up with the risks on the right.</p>

      <p>We have the risk that the requirements change, or that the project takes longer than expected. </p>

      <p>For big government IT projects, done to tender, this usually meant that the government ended up bailing out the supplier, and shouldering the extra expense.</p>

      <p>So as you can see, some of the risks on the left are the same as the ones on the right: the actions taken to manage them made no difference (or made things worse). </p>

      <p>The inability to manage these risks led to the identification of a “Software Crisis”, in the 1970’s.</p>

      <p>This is how we end up with Agile.</p>

      <p>Scrum is probably the most popular Agile methodology, so let’s have a quick look at how that works for a second.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.031.jpg" alt="Image of slide number 31" />
            </div>
            <div class="slide-notes">
                      <p>So one of the key features - maybe the key feature - of Scrum is that you work in Sprints.</p>

      <p>These are like little 2 or 3-week windows of time, where you deliver something to production.</p>

      <p>You can see that practice in the middle there.   The reason Scrum recommends this is to address those risks on the left:</p>

      <p>- The Risk that you don’t build what the customers want the first time, </p>

      <p>- and the risk that what the customers want changes while the project is in progress.</p>

      <p>But in order to do a Sprint, everyone needs to be given just enough work to do to fill that time, otherwise they’re going to blow out of the end of the Sprint, or be sitting around with nothing to do.  </p>

      <p>(Well, there’s always something to do, but…) </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.032.jpg" alt="Image of slide number 32" />
            </div>
            <div class="slide-notes">
                      <p>So, that Coordination Risk is the major problem with doing Sprints.  </p>

      <p>How do we address that Risk?</p>

      <p>Well, Scrum recommends a bunch more practices to fix that.</p>

      <p>Like Retrospectives, where you try and learn what went wrong in the previous sprint.</p>

      <p>Daily standup meetings, where you keep track of where everyone is, and check they’re all going to arrive on time.</p>

      <p>Planning Poker:  this is a kind of estimating game which is done to figure out how much work is going to be put in the Sprint</p>

      <p>And a Scrum goal, where everyone commits to achieving some kind of goal with the Sprint, and working towards that.   </p>

      <p>Having a goal is a great way of Coordinating people so they don’t accidentally work antagonistically, with one person doing something that undoes what another is doing.</p>

      <p>But obviously, all that stuff takes time and effort, which may be better spent elsewhere.  </p>

      <p>If you didn’t have that Coordination Risk problem, you might not have to do some of this other stuff.</p>

      <p>And the Coordination Risk problem is there because you’re doing Sprints.  </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.033.jpg" alt="Image of slide number 33" />
            </div>
            <div class="slide-notes">
                      <p>Another Agile Practice then: Refactoring.</p>

      <p>What is the value of it?  Refactoring is addressing Complexity Risk in your code-base.  </p>

      <p>That is, the weight of complexity in the codebase, and its resistance to change and comprehension.</p>

      <p>Projects can sometimes drown in their own complexity, the so-called “big balls of mud”.  So this is a Risk.</p>

      <p>And Technical Debt is an unnecessary excess of this.  A lot of the Complexity Risk is risk you’ve taken on because you want to deliver functionality to people, quickly.  But sometimes, it accrues accidentally, or because you take short-cuts.  </p>

      <p>Ideas gets removed, but the code stays complicated.  That’s Technical Debt.</p>

      <p>So, you refactor.</p>

      <p>But that can take time and sometimes it doesn’t work out.  </p>

      <p>So like the game of Roulette, I’ve labelled these parts of the diagram as the “Payoff” and the “Stake”:  it’s like a bet.</p>

      <p>You’re betting that you can move to this new place on the Risk Landscape where there is less Complexity Risk.   </p>

      <p>But sometimes, that place isn’t better.  We’re not all-seeing oracles.  Our Internal Models are limited. </p>

      <p>Sometimes, your refactor doesn’t work out and your amazing simplifying assumption doesn’t pay off.</p>

      <p>Let’s look one last one.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.034.jpg" alt="Image of slide number 34" />
            </div>
            <div class="slide-notes">
                      <p>How should we look at DevOps?</p>

      <p>The promise of devops is that we can apply automation of processes, and automated testing, to reduce schedule risk and deliver value faster.  </p>

      <p>On the one hand, this feels quite agile-y, but it’s taken a lot less time to come about.  So, in a way, it feels like banks are learning faster than they were before… we’ve gone from 15-20 years for an Agile revolution to about 3 or 4 years for Devops revolution.</p>

      <p>This is a massive improvement!</p>

      <p>However, it also feels like a way to “strip back” a lot of those Operational Risk controls that were mandated by Basel 2 and later regulations.   </p>

      <p>Because automation means sacrificing human oversight:  we’re going to end up with more agency risk as a result.  That is: the chance that people maliciously or accidentally do things in production we don’t want them to.</p>

      <p>I have a colleague at Morgan Stanley who basically believes that DevOps is illegal for banks, that Development and Operations should not be joined because it breaks regulations.</p>

      <p>It’s like the see-saw went too far in the direction of locking down production environments, and has now had to go back the other way.</p>

      <p>There is obviously no “right answer” to this… we might see this pendulum swing back and forth a bit more.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.035.jpg" alt="Image of slide number 35" />
            </div>
            <div class="slide-notes">
                      <p>So, we’ve basically been looking at JUnit, DevOps, Waterfall, and Scrum from the perspective of what risks they manage.</p>

      <p>And, as we saw, this was something Kent Beck was on about a lot.</p>

      <p>But it’s easy to lose sight of this as the underlying physics while you are working in an agile team, and just focus on doing the agile. </p>

      <p>That is - applying agile practices in places where they aren’t really relevant.</p>

      <p>We have to make sure we use the right tools for the job.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.036.jpg" alt="Image of slide number 36" />
            </div>
            <div class="slide-notes">
                      <p>—Different Practices are useful for dealing with different risks.</p>

      <p>So, both Waterfall and Scrum have different practices, and those practices address different risks… and also lead to new risks.</p>

      <p>Hopefully, the new risks are more palatable than the old ones.  If this doesn’t materialise, then we feel the methodology is failing us. </p>

      <p>So the practices need to fit the risks.  </p>

      <p>It feels like this happens a lot in life already.  </p>

      <p>I can buy Car Insurance, to cover risks related to my car.</p>

      <p>Or Travel Insurance, for risks I face going abroad.</p>

      <p>I don’t want my house built in an Agile way.  I want someone to design it up-front, and give me a quote, and show me what it will look like. </p>

      <p>A friend I know went on an agile course last year, and during it, they asked him and his team on the day to build a lego house in an Agile way.  He was massively enthusiastic about this task.  “The requirements changed so we added an extra bit and some new windows, and then they asked for a bit for the dog…” and so on.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.037.jpg" alt="Image of slide number 37" />
            </div>
            <div class="slide-notes">
                      <p>I found this image online of some people doing the same thing.  If anything this woman’s house is better than his.  </p>

      <p>But honestly, I don’t think this is a great advertisement for Agile techniques.  It’s totally the wrong domain.</p>

      <p>Agile techniques are appropriate for managing certain risks. </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.038.jpg" alt="Image of slide number 38" />
            </div>
            <div class="slide-notes">
                      <p>So, maybe what Risk-First is, is that I’m now sliding back down that Hype Cycle curve, into the “Trough of Disillusionment”, and I’m trying to figure out what’s useful and what’s not, in the Agile world.</p>

      <p>Because the idea came a couple of years ago when I was on a project using Scrum:</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.039.jpg" alt="Image of slide number 39" />
            </div>
            <div class="slide-notes">
                      <p>—-</p>

      <p>So, Risk-First is like a reaction to the Agile Hype-Cycle, applying agile wherever we can.</p>

      <p>But there’s another problem nowadays, which is the changing nature of agile.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.040.jpg" alt="Image of slide number 40" />
            </div>
            <div class="slide-notes">
                      <p>There’s a movement now called post-agile, which you can read about on-line.  </p>

      <p>And here are two examples.  On the left, Ron Jeffries, one of the original founders of the agile manifesto.</p>

      <p>On the right, Martin Fowler, also having a problem with “The Agile Industrial Complex”.</p>

      <p>Agile is big business.  It’s not just a set of principles now, it’s an industry that wants to sell you training courses, books, accreditation.   </p>

      <p>These guys are kind of mourning that change.</p>

            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.041.jpg" alt="Image of slide number 41" />
            </div>
            <div class="slide-notes">
                      <p>When Kent Beck and Ron Jeffries and Martin Fowler got together to write the agile manifesto, the software landscape was very different than today.</p>

      <p>JUnit was a really early open-source library!  You could use Tomcat or Apache… or, maybe that was about it.</p>

      <p>The landscape has changed. </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.042.jpg" alt="Image of slide number 42" />
            </div>
            <div class="slide-notes">
                      <p>Working in IT is really interesting.  Every day is Christmas Eve.  There are always new technologies to play with, new ideas to look at new practices to try.  This is one of the reasons why it’s such a fun, crazy career to work in.</p>

      <p>But, people get carried away with things, as we’ve seen in the hype-cycle.</p>

      <p>It’s easy to get caught up in hype: Blockchain, AI, Big Data, etc.</p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.043.jpg" alt="Image of slide number 43" />
            </div>
            <div class="slide-notes">
                      <p>What’s getting harder and harder now, is figuring out which tools to use.  Not just methodologies, or practices, like we’ve looked at today, but tools of all kinds. </p>

      <p>Because there are so many languages, so many libraries.   A lot of them are really good.</p>

      <p>It’s easy for me to stand here and say: use the libraries or tools or languages that help you address the most risk.  This seems like the underlying physics of software development, agile being one way of doing that.  </p>

      <p>But what’s a much harder problem now is curation.  How do I figure out which tool or library to use?   How do I know it’ll solve my problems?  </p>


            </div>
        </div>
        
        <div class="slide slide--bordered">
            <div class="slide-image">
                <img src="images/images.044.jpg" alt="Image of slide number 44" />
            </div>
            <div class="slide-notes">
                      <p>Who’s seen this game?  </p>

      <p>This is some screenshots from a game you can play on the internet called “Pokemon or Big Data”.  It’s literally poking fun at this exact problem I’m talking about.</p>

      <p>You have to decide whether the name of something, like “Vulpix” is the name of a piece of Big Data software, or a Pokemon. </p>
      
      <p>So at the moment, we have maybe a few million developers on the internet.  I’m guessing.   What happens when we have a few hundred million, or a few billion, as we might in 10 years time.</p>

      <p>How do I go the right way?  How do I choose the right thing to use?</p>

      <p>For me, this is a big, and growing risk, and I think this is something that we’re going to need to address over the next 20 years.</p>


            </div>
        </div>
        
    </div>

    <p class="credits">Made with <a href="https://keynote-extractor.com">Keynote Extractor</a>.</p>
