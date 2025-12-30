🧠Interactive Mind Map Visualization

An interactive, data-driven Mind Map visualization built using React + React Flow, supporting hierarchical structures, expand/collapse interactions, hover details, side panel summaries, and export functionality.

This project is fully data-driven — updating the JSON data automatically updates the UI without changing the code.

Features
Core Functional Requirements
Interactive mindmap / graph visualization
Hierarchical parent → child relationships
Clean, readable, and visually appealing layout
Automatic graph layout using Dagre

Interactive Features
Click to expand / collapse nodes
Highlight related nodes and edges
Fit to View / Reset View
Hover interactions for quick summaries
Side panel displaying detailed node information

Data-Driven Rendering (Key Requirement)
Entire mindmap is generated from a JSON data file
No hardcoded nodes
Updating JSON automatically updates:
Node labels
Descriptions
Hierarchy
Metadata

Tech Stack
React
React Flow
Dagre (automatic layout)
CSS (custom styling)