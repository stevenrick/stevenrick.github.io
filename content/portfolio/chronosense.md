+++
title = 'ChronoSense'
featured_image = 'images/chronosense.png'
draft = false
weight = 3
+++

## Overview

- Combining learnings from prior work, I rebuilt the Lab In A Box software into a unified multimodal data capture system.
- ChronoSense evolved from a Windows-only application written in C# to an OS-agnostic Electron application.
- ChronoSense supports time-aligned data capture from multiple audio and video devices and has a plugin architecture to support integrating other devices via the Node.js C++ addon layer.

## Outcomes

- ChronoSense is an open-source software available at [https://chronosense.ucsd.edu/](https://chronosense.ucsd.edu/).
- ChronoSense has supported a wide range of research around multimodal human behavior analytics.

## Details

- The Lab In A Box system first used a piece of software known as Kinect4ChronoViz to capture data from a Kinect v1 and save it to disk as a series of images from the color and depth camera and all body tracking via CSV files.
- As I used Kinect4ChronoViz in different settings I learned about its utility and limitations for researchers and sought to improve the tool to be more widely accessible.
- ChronoSense was officially launched with the launch of the Kinect v2, which brought to light many shortcomings of the old software with a new device that had higher framerates and resolutions.

![ChronoSense](../../images/chrono_ui.png)

- With the launch of Azure Kinect DK, I led the final 'web-tech-ification' of ChronoSense, moving over to Typescript, Electron, and Node.js, building a truly OS-agnostic version of the software.
- The system was redesigned to support time-synchronized capture from any camera or audio source, using a combination of audio and video APIs as well as FFmpeg to handle encoding and compression.
- The Node.js C++ addon layer was used to support additional capture of other devices and data streams, such as body tracking from the Kinect, EMG or IMU from wearables, etc.

## Artifacts

These are works that I did not author that used ChronoSense:
- [Collective use of a fabric-based interactive surface to support early development in toddler classrooms](https://dl.acm.org/doi/abs/10.1145/2971648.2971695)
- [Measuring Time Gestures with the Microsoft Kinect](https://escholarship.org/uc/item/8gc886gt)
- [Stroke-associated hemiparesis detection using body joints and support vector machines](https://dl.acm.org/doi/abs/10.1145/3240925.3240979)
- [ConverSense: An Automated Approach to Assess Patient-Provider Interactions using Social Signals](https://dl.acm.org/doi/full/10.1145/3613904.3641998)

## Skills

- Software Development (Typescript, C#, C++)
- Multimodal Data Processing
- Time-Aligned Data Capture
- Multimedia Encoding (FFmpeg)
