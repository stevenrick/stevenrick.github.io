+++
title = 'Design AID'
featured_image = 'images/designaid.png'
draft = false
weight = 2
+++

## Overview

- In a collaborative research program with Toyota Research Institute, I led a team to explore the application of LLMs like GPT-3 with Diffusion-based image generation like Stable Diffusion to enhance divergent creativity in product design.
- Ran several studies to study how people use generative AI and what sort of effects it has on innovation outcomes.

## Outcomes

- Designed and scaled up a system for combining LLMs with Diffusion Image Generation to augment creative ideation.
- Patented our methodology for enhancing divergent search using LLMs and Semantic Embeddings.
- Ran empirical experiments to explore the effect of new ideas and diffusion-based image generation on product design.
- We found that GenAI is empowering when someone has a blank slate, but can get in the way once someone knows what they want.

## Details

- I first prototyped this system using HPC, as Stable Diffusion requires a CUDA GPU in order to create images quickly.
- After validating the generation pipeline, I moved our compute stack to AWS, using CloudFormation to spin up more EC2 instances on demand when users connected to our application.
- FastAPI provided a middle layer between our Empirica experiment and the AWS compute endpoints I was managing to react to bursty user participation from Prolific.

![Example designs from study](../../images/chair_examples.jpeg)

- We found that our LLM-based new idea mode helped people produce more inspiring output as they got started, but once users knew how to 'talk to the system' it was more likely to get in the way than help.
- This idea of scaffolding use of emerging tech follows into my work on [Supermind Ideator](../ideator) and emphasizes a need for more human autonomy, something we are actively incorporating into the next version of DesignAID.

## Artifacts

- [DesignAID: Using Generative AI and Semantic Diversity for Design Inspiration](https://dl.acm.org/doi/abs/10.1145/3582269.3615596)
- [System and method for visual content generation and iteration](https://patents.google.com/patent/US20240273308A1/en)

## Skills

- Full Stack Web Application Developemnt (React, FastAPI, NGINX, AWS CloudFormation, EC2)
- Large Language Models (GPT), Text-Image Diffusion Models (Stable Diffusion), Semantic Embedding (Universal Sentence Encoder)
- HPC (Slurm, used before moving over to AWS)
- Rapid Prototyping
- Empirical Crowdsourced Experiments (Prolific, Empirica.ly)
- Usage Behavior Analysis

### This work is still ongoing! Stay tuned for more updates!
