+++
title = 'Supermind Ideator'
featured_image = 'images/ideator_logo.png'
draft = false
weight = 1
+++

#### [Try Supermind Ideator Here](https://ideator.mit.edu/)

## Overview

- The project began by noting that while [Supermind Design](https://cci.mit.edu/supermind-design/) is a useful method for helping people and organizations harness collective intelligence to solve problems, as a workshop methodology it does not scale well.
- The team wanted to see if GenAI (specifically LLMs) could be used to facilitate the process online, showing people how to apply Supermnd Design to any problem they might be facing.
- I acted as lead system architect to allow us to iterate on design and innovate with new features.
- I also led the behavioral data analysis and UX research, focusing on how people used the system and where it could be improved.

## Outcomes

- Ran formative assessment of Supermind Ideator to validate the system and process for scaffolding LLM usage.
- Ran large scale empirical experiments with crowd-sourced participants from Prolific to assess Supermind Ideator vs. Chat GPT.
- Scaled up application architecture to better support prompt evaluation and evolution as well as speed up database queries.
- Oversaw model fine-tuning and RAG implementation based on a corpus of collected case studies related to Supermind Design.
- Collaborated with Accenture to evaluate how GenAI and Supermind Design could reinvent the Future of Work.

## Details

- The initial application was prototyped using AWS Amplify, with all logic for LLM API calls embedded in Amplify hooks, this was great for initial proof of concept but became difficult to work with as we iterated.
- I led the transition to a FastAPI middle layer that took care of all LLM related logic and external resource management, this improved application security and simplified the process for prompt iteration and UI redesign.
- As the application user base grew, DynamoDB queries got slower and more costly, so I moved our DB over to Sqlite and integrated it with our FastAPI layer.

![Ideator Redesigns](../../images/ideator_iterations.png)

- While our Move Sets solved initial user frustration with knowing where to start, it did not really encourage iteration or next steps, so I led the development of a recommendation engine to suggest a next Move based on prior moves, user input, and system output.
- I managed a team of student designers to explore ways to reimagne the Ideator interface and redesign our application to support people exploring, synthesizing, and recombining ideas.

## Artifacts

- [Supermind Ideator: Exploring generative AI to support creative problem-solving](https://arxiv.org/abs/2311.01937)
- [Supermind Ideator: How Scaffolding Human-AI Collaboration Can Increase Creativity](https://dl.acm.org/doi/abs/10.1145/3643562.3672611)
- [Using Supermind Design and Generative AI to reinvent the Future of Work](https://cci.mit.edu/wp-content/uploads/2024/10/CCI-AccWPpublic2024-09final.pdf)


## Skills

- Full Stack Web Application Developemnt (React, FastAPI, NGINX, AWS Amplify, Cognito, DynamoDB, Sqlite)
- Large Language Models (prompting, fine-tuning, retrieval-augmented generation)
- Recommnedation Systems
- Semantic Clustering and NLP Heuristics
- Empirical Crowdsourced Experiments (Prolific, Qualtrics)
- Usage Behavior Analysis

### This work is still ongoing! Stay tuned for more updates!
