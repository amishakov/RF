"use strict";(self.webpackChunkrf_website=self.webpackChunkrf_website||[]).push([[2397],{25931:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(74848),i=s(28453);const o={title:"Debugging Bets",description:"Making use of risk and odds while debugging",date:"2019-11-10 16:32:03 +0000",featured:{class:"c",element:'<image-artifact imgsrc="/public/templates/risk-first/posts/cards.svg">Debugging Bets</image-artifact>'},tags:["Bet"],sidebar_position:3,tweet:"yes"},a="Debugging Bets",r={id:"bets/Debugging-Bets",title:"Debugging Bets",description:"Making use of risk and odds while debugging",source:"@site/docs/bets/Debugging-Bets.md",sourceDirName:"bets",slug:"/bets/Debugging-Bets",permalink:"/bets/Debugging-Bets",draft:!1,unlisted:!1,editUrl:"https://github.com/risk-first/website/blob/master/docs/bets/Debugging-Bets.md",tags:[{inline:!1,label:"Bet",permalink:"/tags/Bet"}],version:"current",sidebarPosition:3,frontMatter:{title:"Debugging Bets",description:"Making use of risk and odds while debugging",date:"2019-11-10 16:32:03 +0000",featured:{class:"c",element:'<image-artifact imgsrc="/public/templates/risk-first/posts/cards.svg">Debugging Bets</image-artifact>'},tags:["Bet"],sidebar_position:3,tweet:"yes"},sidebar:"tutorialSidebar",previous:{title:"Coding Bets",permalink:"/bets/Coding-Bets"},next:{title:"On Estimating",permalink:"/estimating/Start"}},h={},l=[{value:"The Problem",id:"the-problem",level:2},{value:"Flow",id:"flow",level:2},{value:"Facts",id:"facts",level:2},{value:"Hypotheses",id:"hypotheses",level:2},{value:"Tests",id:"tests",level:2},{value:"First Test",id:"first-test",level:3},{value:"Second Test",id:"second-test",level:3},{value:"Third Test",id:"third-test",level:2},{value:"Fourth Test",id:"fourth-test",level:2},{value:"Outcome",id:"outcome",level:2},{value:"Some Notes",id:"some-notes",level:2},{value:"Suitability",id:"suitability",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"debugging-bets",children:"Debugging Bets"}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.a,{href:"Purpose-Development-Team",children:"The Purpose Of The Development Team"})," we looked at how a development team is all about trying to shift the risk profile in favour of the business.  Perhaps by removing the risk of customers not having the features they want, or not signing up, or not learning about the product."]}),"\n",(0,n.jsxs)(t.p,{children:["Then, in ",(0,n.jsx)(t.a,{href:"Coding-Bets",children:"Coding Bets"})," we considered the same thing at task level. That is, in choosing to spend time on a given task we are staking our time to improve our risk position.  And, it\u2019s definitely a bet, because sometimes, a piece of coding simply doesn\u2019t end up working the way you want."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Article Series",src:s(32966).A+"",width:"663",height:"212"})}),"\n",(0,n.jsx)(t.p,{children:"Now, we\u2019re going to consider the exact same thing again but from the point of view of debugging. I\u2019ve been waiting a while to write this, because I\u2019ve wanted a really interesting bug to come along to allow me to go over how you can apply risk to cracking it."}),"\n",(0,n.jsxs)(t.p,{children:["Luckily one came along today, giving me a chance to write it up and go over this.  If you've not looked at Risk-First articles before, you may want to review ",(0,n.jsx)(t.a,{href:"/thinking/Risk-First-Diagrams",children:"Risk-First Diagrams Explained"}),", since there'll be lots of diagrams to demonstrate the bets I'm making."]}),"\n",(0,n.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://symphony.com",children:"Symphony"}),' is a secure chat platform used mainly by banks.  I have been writing an app ("Tables App") which runs within Symphony and allows you to share and edit tabular data with people in a chat room.    It\u2019s a nice little piece of functionality, allowing banks and their clients to sign off on things in tables (like purchase orders) imported from Excel.  This is way more elegant than email trails.']}),"\n",(0,n.jsx)(t.p,{children:"In order to make this work, we made use of functionality within Symphony called \u201cOn-Behalf-Of\u201d, which allows Tables App to post messages as a user, if the user has given prior authorisation."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Table Editing In Symphony",src:s(98363).A+"",width:"1130",height:"766"})}),"\n",(0,n.jsx)(t.p,{children:'But something wasn\u2019t working - whenever I clicked "post" - no table!'}),"\n",(0,n.jsxs)(t.p,{children:["To make matters worse, I was supposed to be doing a presentation on this within ",(0,n.jsx)(t.strong,{children:"two hours"}),".  I\u2019d need to make good use of my available time."]}),"\n",(0,n.jsx)(t.h2,{id:"flow",children:"Flow"}),"\n",(0,n.jsx)(t.p,{children:"So, what is supposed to happen?"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flow of Action",src:s(72235).A+"",width:"1500",height:"908"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'The user clicks the "post" button in Tables App.'}),"\n",(0,n.jsx)(t.li,{children:"Tables App then makes a request to the Symphony Server for an On-Behalf-Of token."}),"\n",(0,n.jsx)(t.li,{children:"With this token, Tables App then makes a request to the Encryption Agent to post a message."}),"\n",(0,n.jsx)(t.li,{children:"The Encryption Agent encrypts the message, and forwards it on to the Symphony Server."}),"\n",(0,n.jsx)(t.li,{children:"If that goes well, the message is added to the chat, and is delivered from the Symphony Server to the user's screen."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"However, things go south around step 4:   I see the On-Behalf-Of token in Tables App, but using it with the Encryption Agent fails."}),"\n",(0,n.jsx)(t.h2,{id:"facts",children:"Facts"}),"\n",(0,n.jsx)(t.p,{children:"Bubbling around in my mind were a number of hypotheses about why the demo wasn\u2019t working.  Could it be my code?  Could it be something to do with connectivity? Could it be something on the Symphony side?"}),"\n",(0,n.jsxs)(t.p,{children:["For now, I ignored those voices in my head.  I wanted to use my limited time wisely, so first, I enumerated what I ",(0,n.jsx)(t.em,{children:"did"})," know:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["I knew the Encryption Agent worked.  I have a bot that uses it to post messages - but it\u2019s not doing it On-Behalf-Of anyone, it just posts messages which are ",(0,n.jsx)(t.em,{children:"from the bot"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The error message in Table App\u2019s log pertained to certificates.  So, there was likely to be some issue with certificates (good work, Sherlock)."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Using ",(0,n.jsx)(t.code,{children:"curl"})," (a command line program for doing HTTP requests), I could perform the same tasks locally, connecting to the Encryption Agent from my PC.  However there, I got a message saying ",(0,n.jsx)(t.code,{children:"not able to obtain session"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Another part of Tables App was also trying to pull back details of who was in a chat room.  This was also failing with a message saying ",(0,n.jsx)(t.code,{children:"You need [MANAGE_ROOMS] role"}),".  But this connected to the Symphony Server directly (not the Encryption Agent), because it didn\u2019t need to encrypt anything."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Two week\u2019s prior, I had tested some other On-Behalf-Of functionality out in a different application.  And it had worked fine.  I had scripts and logs to prove it.   But I had two hours left and digging up these scripts and running them again would be expensive."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"hypotheses",children:"Hypotheses"}),"\n",(0,n.jsx)(t.p,{children:"In order to figure out how to use my time, I\u2019d need to enumerate all the hypotheses about what the problem might be, and then work out how best to use my time to test these hypotheses."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Hypotheses",src:s(63616).A+"",width:"1278",height:"342"})}),"\n",(0,n.jsx)(t.p,{children:"In order to generate the list of hypotheses, you have to find the last-known good place, and work forward through all the steps after that that could have failed.  So this is what I came up with:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"H1"}),":  The security token being used was corrupted somehow, in my ",(0,n.jsx)(t.code,{children:"curl"})," test.  (unlikely)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"H2"}),":  Again pertaining to ",(0,n.jsx)(t.code,{children:"curl"}),", maybe I had a very short life-span of token, and it had expired? (likely)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"H3"}),":  Perhaps Tables App didn\u2019t have the privileges it needed to operate?  (somewhat likely)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"H4"}),":  Maybe there was some ",(0,n.jsx)(t.em,{children:"new"})," problem with the Encryption Agent?  (very likely)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"H5"}),":  Maybe I was somehow creating the security token wrongly?   (likely)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"H6"}),":  The fact that ",(0,n.jsx)(t.code,{children:"curl"})," and my server code got different responses is suspicious.  Was my server using the wrong certificate? (quite likely)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"H7"}),": Alternatively, since I was running ",(0,n.jsx)(t.code,{children:"curl"})," locally, and the server was running remotely, could it be a connection problem? (somewhat likely)"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Were there other things that could have gone wrong?  Maybe, but they didn\u2019t occur to me at that point in time.  Could there be multiple things going wrong?  Quite likely."}),"\n",(0,n.jsx)(t.h2,{id:"tests",children:"Tests"}),"\n",(0,n.jsx)(t.p,{children:"If we test each hypothesis, we learn something about the system.  But that has a (time) cost:  I had a limited amount of time to try and learn as much as possible."}),"\n",(0,n.jsx)(t.h3,{id:"first-test",children:"First Test"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Test 1: Curl With Broken Token",src:s(22167).A+"",width:"874",height:"434"})}),"\n",(0,n.jsxs)(t.p,{children:["Although ",(0,n.jsx)(t.code,{children:"H1"})," was unlikely (and therefore I probably wasn\u2019t going to learn much) it was really easy to test.  All I needed to do was try the ",(0,n.jsx)(t.code,{children:"curl"})," command again with a deliberately broken token.  What would the message be?  What came back was a ",(0,n.jsx)(t.code,{children:"401 error - unauthorised"}),".  So it definitely wasn\u2019t ",(0,n.jsx)(t.code,{children:"H1"}),", because the error message was different."]}),"\n",(0,n.jsx)(t.h3,{id:"second-test",children:"Second Test"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"H6"})," / ",(0,n.jsx)(t.code,{children:"H7"})," were a fairly easy thing to check.  I could fire up the server locally and test the code there.   I did this and discovered the certificate problem persisted.  I tinkered around a bit with the code, and eventually, it went away.  Instead, I got the ",(0,n.jsx)(t.code,{children:"curl"})," \u201cnot able to obtain session\u201d error  message."]}),"\n",(0,n.jsxs)(t.p,{children:["So, although I did have an issue with certificates, it wasn\u2019t the main problem, just a side-show.  ",(0,n.jsx)(t.code,{children:"H6"})," was now ruled out."]}),"\n",(0,n.jsxs)(t.p,{children:["Since the code was returning the same result locally and on the server, that really ruled out ",(0,n.jsx)(t.code,{children:"H7"}),".  Also ",(0,n.jsx)(t.code,{children:"H2"})," was ruled out, because the server ran really fast - there wasn\u2019t time for the token to expire."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Test 2:  Run Locally",src:s(17572).A+"",width:"1229",height:"464"})}),"\n",(0,n.jsx)(t.h2,{id:"third-test",children:"Third Test"}),"\n",(0,n.jsxs)(t.p,{children:["Down to just ",(0,n.jsx)(t.code,{children:"H3"}),",",(0,n.jsx)(t.code,{children:"H4"})," and ",(0,n.jsx)(t.code,{children:"H5"}),".  I had definitely seen On-Behalf-Of working two weeks\u2019 ago, but in that other app.  A fairly quick thing to do would be to try and post the message with that other app, but it wasn't installed.  Instead, I could try my same code out again, but ",(0,n.jsx)(t.em,{children:"using the other app's identity"}),".  I did this, and lo!  I still get the \u201cnot able to obtain session\u201d error."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Test 3:  Post With Other App",src:s(95589).A+"",width:"917",height:"459"})}),"\n",(0,n.jsxs)(t.p,{children:["This ruled out ",(0,n.jsx)(t.code,{children:"H3"}),".  But there was still a chance I was creating the token wrongly (",(0,n.jsx)(t.code,{children:"H5"}),")."]}),"\n",(0,n.jsx)(t.h2,{id:"fourth-test",children:"Fourth Test"}),"\n",(0,n.jsxs)(t.p,{children:["If I could use this token for an an On-Behalf-Of operation on the Symphony Server (rather than the Encryption Agent), it would prove the token was good, and rule out ",(0,n.jsx)(t.code,{children:"H5"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This was another simple thing to test, since all I had to do was call a \u201cRoom Lookup\u201d function on the Symphony Server, something that didn\u2019t need encryption, and therefore use the Encryption Agent.  Now, although Tables App couldn't do this (fact 4), my other app could, so I could continue with the new identity and try that."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Test 4:  On-Behalf-Of Against Server",src:s(60666).A+"",width:"932",height:"387"})}),"\n",(0,n.jsx)(t.h2,{id:"outcome",children:"Outcome"}),"\n",(0,n.jsxs)(t.p,{children:["Sadly, this meant that I\u2019d actually had to test and rule out ",(0,n.jsx)(t.em,{children:"all of the other hypotheses"})," in order to arrive at the correct one (",(0,n.jsx)(t.code,{children:"H4"}),").  I guess it happens.   And the problem at this point is that I can\u2019t fix it on my own: although I found (and fixed) a certificates-related bug in my own code, this one is going to require some support calls.  So, this is a bad outcome:  I couldn't do the presentation but ",(0,n.jsx)(t.em,{children:"I did"})," manage to figure this all out within an hour."]}),"\n",(0,n.jsx)(t.h2,{id:"some-notes",children:"Some Notes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["I started by writing down all the things I knew, and all of my hypotheses.  Why?  Surely, time was short!  I did this ",(0,n.jsx)(t.em,{children:"because"})," time was short.  The reason was, by having all of the facts and hypotheses to hand I was setting up my ",(0,n.jsx)(t.a,{href:"/tags/Internal-Model",children:"Internal Model"})," of the problem, with which I could reason about the new information as I came across it."]}),"\n",(0,n.jsx)(t.li,{children:"I performed four tests, and ended up ruling out six different hypotheses.   That feels like good value-for-time."}),"\n",(0,n.jsxs)(t.li,{children:["In each case, I am trading ",(0,n.jsx)(t.em,{children:"time"})," to change the risk profile of the problem.  By reducing to zero the likelihood of some risks, I am increasing the likelihood of those left.  So a good test would:"]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"a.  Bisect probability space 50/50.  That way the information is maximised."}),"\n",(0,n.jsx)(t.li,{children:"b.  Require the least time-stake up-front in order to learn the information."}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Could I have tested ",(0,n.jsx)(t.code,{children:"H4"})," first?  It was, after all the most likely thing in the first place.  If I could have proved that straight off, it would definitely have been better, but I don't think I ",(0,n.jsx)(t.em,{children:"could have"}),", since I also had the certificates issue in play."]}),"\n",(0,n.jsxs)(t.li,{children:["What would have definitely been ",(0,n.jsx)(t.em,{children:"worse"})," would have been trying something long-winded out that doesn't end up proving anything.  A long-running bet which doesn't prove a hypothesis one way or the other is the biggest loss of all."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"suitability",children:"Suitability"}),"\n",(0,n.jsxs)(t.p,{children:["I have a feeling that this is really the process I use for ",(0,n.jsx)(t.em,{children:"every"})," bug, whether I am conscious of it or not:  generating hypotheses, ruling some of them out by comparing to the facts I know, and then testing the remaining ones.  However, I think most of the time (maybe as a result of being a developer for a long period) I don't have to do this consciously.  It just ",(0,n.jsx)(t.em,{children:"happens"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Also, I am super-lazy.  I'm always trying to rule of out the hypotheses with the least effort.  Usually, that means lashing together some arrangement of stuff just so see what happens (like the switching identities stuff above).  If testing a hypothesis starts to look onerous, I'll try and find some clever trick to reduce that effort."}),"\n",(0,n.jsx)(t.p,{children:"Perhaps you have a different process?  Is there another one?  I'd really like to know about it if so.   Please join the GitHub Risk-First team and tell me about it!"})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},72235:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/debugging_flow-cc5f4af7dca05b8c2a5e28a74c362fc7.png"},98363:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/tables-e729bec5055693bdf4198a140d62e8f1.jpg"},32966:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/bets-fc3c0635cc9452ac312dce3a7e1cf4c1.svg"},63616:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/hypotheses-e11014f1057ec98bd309281fcd2edd34.svg"},22167:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/test1-d307908cd1880621d55e1d04a7c261de.svg"},17572:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/test2-080367a7298cc79c814282cb37c13d63.svg"},95589:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/test3-f4ebfa094befe798460886a52791436d.svg"},60666:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/test4-e39f456645cfaa6b73863af34275cd56.svg"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);