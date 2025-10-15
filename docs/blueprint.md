# **App Name**: Veritas AI

## Core Features:

- Multi-Source Data Ingestion & Preprocessing: Accepts and processes various file formats (images, videos, audio, documents) to extract key information like EXIF data, timestamps, and geolocation; includes audio transcription and data validation/normalization.
- AI-Powered Crime Scene Reconstruction: Reconstructs crime scenes in 3D from images and videos using COLMAP, generates spatial models, and estimates depth using MiDaS, providing a comprehensive visualization.
- Object Detection & Identification: Uses advanced object detection (YOLOv8/Detectron2) and multi-object tracking (DeepSORT/ByteTrack) to identify weapons, clues, traces, and movements within the crime scene.
- Forensic Analysis and Weapon Prediction Tool: Analyzes bloodstain patterns and wound segmentation to infer weapon types and trajectories, aided by Bayesian inference for probabilistic reasoning.
- NLP-Based Statement Analysis: Transcribes speech to text using Whisper, performs named entity recognition, and detects contradictions or deception in witness statements using fine-tuned RoBERTa models, serving as a fact-checking tool to identify inconsistencies.
- Relational Graph Visualization: Generates an interactive graph connecting victims, suspects, and other involved parties, displaying relationships and potential motives for a visual analysis.
- Automated Report Generation: Produces clear, exportable reports with visual and textual summaries of the evidence, AI's reasoning, confidence scores, suspect rankings by motive and opportunity, and highlighted escape routes, streamlining investigative workflows.

## Style Guidelines:

- Primary color: Deep indigo (#4B0082) to evoke a sense of authority, intelligence, and investigation.
- Background color: Light gray (#E0E0E0) for a neutral and clean interface.
- Accent color: Bright cyan (#00FFFF) for highlighting important information and interactive elements.
- Body and headline font: 'Inter' (sans-serif) for a modern and neutral look.
- Code font: 'Source Code Pro' for displaying code snippets.
- Use minimalist and clear icons to represent data types, actions, and evidence categories.
- Prioritize a modular and well-organized layout to ensure a structured flow between evidence review, scene analysis, and report generation.
- Subtle transitions and animations for user interactions (e.g., loading data, revealing details) to maintain user engagement and system feedback.