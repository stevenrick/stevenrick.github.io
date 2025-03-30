+++
title = 'Lab In A Box'
featured_image = 'images/labinabox.jpg'
draft = false
weight = 8
+++

## Overview

- As a research assistant at [VMRF](https://www.vmrf.org), I built out and deployed a portable multimodal usability lab we called _Lab In A Box_.
- The system used a web cam, Kinect RGB-D camera, SMI Remote Eyetracker, Microcone Microphone Array, and Morae software to capture keyboard and mouse activity.
- I built approaches for multimodal data analysis of doctor attention (using eye tracking and body tracking), doctor-patient communication behavior (both verbal and non-verbal), and EHR usage (via screen capture and using keyboard and mouse activity)
- I ran interviews with doctors to better understand their experiences of using the health record software and identify opportunities for improvements to be made.

## Outcomes

- I successfully deployed the Lab In A Box across 200+ outpatient clinic visits at both UCSD and VASD.
- The multimodal data I captured supported 30+ stimulated recall interviews where doctors reacted to their own workflows.
- The system inspired the [ChronoSense](../chronosense) software and generated follow-up research collaborations.
- Research findings that doctors spend most of their time in clinical notes and order entry led to the [ActiveNotes](../activenotes) prototype.

![Doctor EHR usage](../../images/ehr_flow.png)

## Details

- In order to help quantify the usability effects of Electronic Medical Record software on doctor-patient interaction, I first led requirements gathering for the research team.
- I identified a number of off-the-shelf software and hardware options that were approved by VA and UCSD IRB for clinical data capture (HIPAA compliant).
- I built out a Pelican case with cable extensions to support packing everything into the box for portability while also making sure everything was connected in advance so the case could be quickly set up in any clinical environment.
- After collecting an initial set of pilot data, I built out Python and Java applications to analyze and stitch together the multimodal data that was collected from multiple separate softwares in order to unify the data for analysis in [ChronoViz](https://chronoviz.com/).
- Time series analysis led us to learn that doctors spent the bulk of their clinic time working with the EHR, spending less than half the visit actually interacting with their patient.
- Behavior analysis also found that clinical documentation and Computerized Provider Order Entry (CPOE) activity made up the bulk of their computer use.
- Interviews confirmed that doctors spend the bulk of their time dealing with documentation, explicitly pointing to boilerplate templates and copy-pasted content from older notes being the most burdensome.

## Artifacts

- [Provider interaction with the electronic health record: The effects on patient-centered communication in medical encounters](https://doi.org/10.1016/j.pec.2014.05.004)
- [LAB-IN-A-BOX: semi-automatic tracking of activity in the medical office](https://link.springer.com/article/10.1007/s00779-014-0821-0)
- [Eyes on the clinic: Accelerating meaningful interface analysis through unobtrusive eye tracking](https://ieeexplore.ieee.org/document/7349400)
- [Strategizing EHR use to achieve patient-centered care in exam rooms: a qualitative study on primary care providers](https://doi.org/10.1093/jamia/ocv142)
- [Physician activity during outpatient visits and subjective workload](https://doi.org/10.1016/j.jbi.2017.03.011)
- [Keystrokes, Mouse Clicks, and Gazing at the Computer: How Physician Interaction with the EHR Affects Patient Participation](https://link.springer.com/article/10.1007/s11606-017-4228-2)

## Skills

- Observational Studies (fly-on-the-wall)
- Stimulated Recall Interviews
- Multimodal Data Analysis (Python)
- Information Visualization (Python)
- Eye Tracking
- Body Tracking
- Speaker Diarization
- Keyboard and Mouse Activity
- Software Development (C#, Java)
