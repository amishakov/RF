"use strict";(self.webpackChunkrf_website=self.webpackChunkrf_website||[]).push([[1973],{59516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const a={title:"Design",description:"Designing the high-level structure of the software.",tags:["Practice","Design"],featured:{class:"c",element:"<action>Design</action>"},practice:{aka:["System Design","Software Architecture","Design Patterns","Architecture"],mitigates:[{tag:"Conceptual Integrity Risk",reason:"Provides a clear structure and organization, making the system easier to understand and use."},{tag:"Implementation Risk",reason:"Guides the development process, ensuring that the system meets requirements and design specifications."},{tag:"Operational Risk",reason:"Ensures that the system architecture supports operational requirements and scalability."}],attendant:[{tag:"Boundary Risk",reason:"Design decisions can create boundaries that limit flexibility and adaptability."},{tag:"Software Dependency Risk",reason:"Creates dependencies on software components and design patterns."},{tag:"Feature Fit Risk",reason:"Too much design up-front can create problems meeting feature requirements."}],related:["../Planning-and-Management/Requirements-Capture","../Development-and-Coding/Coding","../Development-and-Coding/Refactoring","../Communication-and-Collaboration/Documentation"]}},r=void 0,o={id:"practices/Planning-And-Management/Design",title:"Design",description:"Designing the high-level structure of the software.",source:"@site/docs/practices/Planning-And-Management/Design.md",sourceDirName:"practices/Planning-And-Management",slug:"/practices/Planning-And-Management/Design",permalink:"/practices/Planning-And-Management/Design",draft:!1,unlisted:!1,editUrl:"https://github.com/risk-first/website/blob/master/docs/practices/Planning-And-Management/Design.md",tags:[{inline:!1,label:"Practice",permalink:"/tags/Practice"},{inline:!1,label:"Design",permalink:"/tags/Design"}],version:"current",frontMatter:{title:"Design",description:"Designing the high-level structure of the software.",tags:["Practice","Design"],featured:{class:"c",element:"<action>Design</action>"},practice:{aka:["System Design","Software Architecture","Design Patterns","Architecture"],mitigates:[{tag:"Conceptual Integrity Risk",reason:"Provides a clear structure and organization, making the system easier to understand and use."},{tag:"Implementation Risk",reason:"Guides the development process, ensuring that the system meets requirements and design specifications."},{tag:"Operational Risk",reason:"Ensures that the system architecture supports operational requirements and scalability."}],attendant:[{tag:"Boundary Risk",reason:"Design decisions can create boundaries that limit flexibility and adaptability."},{tag:"Software Dependency Risk",reason:"Creates dependencies on software components and design patterns."},{tag:"Feature Fit Risk",reason:"Too much design up-front can create problems meeting feature requirements."}],related:["../Planning-and-Management/Requirements-Capture","../Development-and-Coding/Coding","../Development-and-Coding/Refactoring","../Communication-and-Collaboration/Documentation"]}},sidebar:"tutorialSidebar",previous:{title:"Delegation",permalink:"/practices/Planning-And-Management/Delegation"},next:{title:"Estimating",permalink:"/practices/Planning-And-Management/Estimating"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Discussion",id:"discussion",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"See Also",id:"see-also",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{PracticeIntro:n,TagList:r}=t;return n||g("PracticeIntro",!0),r||g("TagList",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{details:a}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:['"Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures and systems. Each structure comprises software elements, relations among them, and properties of both elements and relations." - ',(0,i.jsxs)(t.a,{href:"https://en.wikipedia.org/wiki/Software_architecture",children:["Software architecture, ",(0,i.jsx)(t.em,{children:"Wikipedia"})]})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Architecture / Design in software development involves creating the high-level structure of the system. This practice defines the components, their relationships, and how they interact to achieve the desired functionality. Effective architecture and design provide a blueprint for development, ensuring that the system is scalable, maintainable, and meets the requirements."}),"\n",(0,i.jsx)(t.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsxs)(t.p,{children:["Design is what you do every time you think of an action to mitigate a risk.  And ",(0,i.jsx)(t.strong,{children:"Big Design Up Front"})," is where you do a lot of it in one go, for example:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Where you think about the design of all (or a set of) the requirements in one go, in advance."}),"\n",(0,i.jsxs)(t.li,{children:["Where you consider a ",(0,i.jsxs)(t.em,{children:["set of ",(0,i.jsx)(t.a,{href:"/tags/Attendant-Risk",children:"Attendant Risks"})]})," all at the same time."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['Compare with "little" design, where we consider just the ',(0,i.jsx)(t.em,{children:"next"})," requirement, or the ",(0,i.jsx)(t.em,{children:"most pressing"})," risk."]}),"\n",(0,i.jsxs)(t.p,{children:["Although it's fallen out of favour in Agile methodologies, there are benefits to doing this ",(0,i.jsx)(t.em,{children:"sometimes"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(t.p,{children:["As we saw in ",(0,i.jsx)(t.a,{href:"/thinking/Meeting-Reality",children:"Meet Reality"}),', "Navigating the ',(0,i.jsx)(t.a,{href:"/risks/Risk-Landscape",children:"Risk Landscape"}),'", meant going from a position of high risk, to a position of lower risk.  ',(0,i.jsx)(t.a,{href:"/tags/Agile",children:"Agile Design"})," is much like ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Gradient_descent",children:"Gradient Descent"}),": each day, one small step after another ",(0,i.jsx)(t.em,{children:"downwards in risk"})," on the ",(0,i.jsx)(t.a,{href:"/risks/Risk-Landscape",children:"Risk Landscape"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["But the problem with this is you can get trapped in a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Maximum_and_minimum#Search",children:"Local Minima"}),", where there are ",(0,i.jsx)(t.em,{children:"no"})," easy steps to take to get you to where you want to be."]}),"\n",(0,i.jsxs)(t.p,{children:["In these cases, you have to ",(0,i.jsx)(t.em,{children:"widen your horizon"})," and look at where you want to go:  and this is the process of ",(0,i.jsx)(t.em,{children:"design"}),".  You're not necessarily now taking steps on the ",(0,i.jsx)(t.a,{href:"/risks/Risk-Landscape",children:"Risk Landscape"}),", but imagining a place on the ",(0,i.jsx)(t.a,{href:"/risks/Risk-Landscape",children:"Risk Landscape"})," where you want to be, and checking it against your ",(0,i.jsx)(t.a,{href:"/tags/Internal-Model",children:"Internal Model"})," for validity."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,i.jsx)(r,{tag:"Design"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function g(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);