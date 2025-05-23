---
title: Monitoring
description: Continuous observation and tracking of a system, team or person, perhaps with respect to performance, security or availability.
tags: 
  - Monitoring
  - Practice
  - AI Practice
featured: 
  class: c
  element: '<action>Monitoring</action>'
practice:
  aka: 
   - "Network Monitoring"
   - "System Monitoring"
   - "Performance Monitoring"
  mitigates:
   - tag: Operational Risk
     reason: "Ensures continuous observation to maintain operational stability."
   - tag: Reliability Risk
     reason: "Identifies and addresses potential issues before they impact system reliability."
   - tag: Security Risk
     reason: "Monitors for security breaches and anomalies."
   - tag: Process Risk
     reason: "Monitoring a process can ensure that when it misbehaves the issues are quickly caught."  
   - tag: Agency Risk
     reason: "Monitoring the behaviour of agents, whether people or processes, helps identify when behaviour becomes counter-productive."
   - tag: Emergent Behaviour
     reason: "Implementing real-time monitoring of AI behaviour in deployment to detect and intervene in emergent risks."
   - tag: Unintended Cascading Failures
     reason: "Developing real-time oversight mechanisms to detect anomalies before they cascade into large-scale failures."
  attendant:
   - tag: Complexity Risk
     reason: "Implementing comprehensive monitoring solutions can add complexity."
   - tag: Reliability Risk
     reason: "Creates dependency on monitoring tools and their accuracy."
   - tag: Funding Risk
     reason: "High-quality monitoring tools and systems can be costly."
  related:
   - ../Deployment-and-Operations/Incident-Management
   - ../Tools-and-Standards/Prototyping
   - ../Communication-and-Collaboration/Documentation
   - ../External-Relations/Analysis
---

<PracticeIntro details={frontMatter} /> 

## Description

> "Network monitoring is the use of a system that constantly monitors a computer network for slow or failing components and that notifies the network administrator (via email, SMS or other alarms) in case of outages or other trouble. Network monitoring is part of network management." - [Network monitoring, _Wikipedia_](https://en.wikipedia.org/wiki/Network_monitoring)

Monitoring encompasses a wide range of practices designed to ensure that systems operate efficiently and without interruption. This includes tracking the performance, availability, and security of networks, systems, and applications. Effective monitoring helps in early detection of issues, allowing for prompt resolution and minimizing the impact on operations.

## See Also

<TagList tag="Monitoring" />
