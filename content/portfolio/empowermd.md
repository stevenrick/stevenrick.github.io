+++
title = 'EmpowerMD'
featured_image = 'images/empowermd.png'
draft = false
weight = 5
+++

## Overview

- Building upon prior findings that clinical documentation can cause a lot of pain for doctors, I joined a Microsoft Research team to explore how medical notes might be automated using AI. 

## Outcomes

- In six months, my team of 5 went from an idea to a fully functional automatic clinical documentation system.
- This work led Microsoft to [acquire Nuance](https://news.microsoft.com/2022/03/04/microsoft-completes-acquisition-of-nuance-ushering-in-new-era-of-outcomes-based-ai/) to strengthen their position in conversational AI and ambient intelligence.

## Details

- We rapidly prototyped a Typescript audio transcription application using the Microsoft Kinect v2 (which has a microphone array to help with speech processing) and Azure Cognitive Services.
- We recruited doctors and patient actors to run trials and evaluate WER, finding that a lot of medical language gets misunderstood by models trained on conversational speech (i.e. "a flair up of your CPOE" became "a flavor soupy")
- In collaboration with other Microsoft Research teams, we improved the medical language understanding of language models deployed on Azure Cognitive Services by incorporating data from UMLS medical ontology with curated and annotated clinical recordings.

## Artifacts

{{< youtube jnGlOCBK3kM >}}

## Skills

- Automatic Speech Recognition
- Named Entity Recognition
- Medical Ontologies
- Full Stack Web Development (Typescript)
- Language Modelling (Data Collection, Annotation, Model Training)
- Model Evaluation (Word Error Rate)
