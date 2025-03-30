+++
title = 'Gesture and Sign Language'
featured_image = 'images/handsthatspeak.png'
draft = false
weight = 6
+++

## Overview

- Extending the infrastructure used from [Lab In A Box](../labinabox), I combined Kinect and Lead Motion to quantify the differences between sign-language and co-speech gesture.
- I built novel 3D visualizations and analytics of hand motion data collected during experiments from Kinect, showing the differences between how people move when using American Sign Language vs. co-speech gesture (moving while speaking a verbal language).

## Outcomes

- Integrated Leap Motion hand tracking and data capture into the Lab In A Box software infrastucture.
- Generated findings that ASL signers use a much less dense area of hand motion than non-signers, spreading out around their upper chest and lower face.

## Details

- While extending the Lab In A Box infrastructure to support additional devices (Leap Motion) I learned a lot about software design across Operating Systems. Initially only built for Windows, I began working with more and more Mac OS users, this planted seeds that would lead to [ChronoSense](../chronosense) being designed as an OS-agnostic platform.
- I built out a number of visualizations and analysis approaches for making sense of the data being collected. Most notable was my 3D density maps, which showed that ASL signers use a much more widely spread out space to communicate than non-signeers. This is shown below with the ASL signer on the left and the non-signer on the right.

![ASL and Gesture 3D Point Cloud GIF](../../images/asl_gesture_combine.gif)
![ASL and Gesture 3D Point Cloud](../../images/asl_gesture_combine.png)

## Artifacts

- [Hands That Speak: An Integrated Approach to Studying Complex Human Communicative Body Movements](https://ieeexplore.ieee.org/abstract/document/7427258)

## Skills

- Multimodal Data Analysis (Python)
- Information Visualization (Python)
- Body Tracking and Hand Tracking 
- Software Development (C#)
