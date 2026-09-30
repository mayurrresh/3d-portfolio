Mayuresh Kahar --- 3D Developer Portfolio
An immersive 3D developer portfolio built with React, Vite, Three.js,
and React Three Fiber.
This portfolio turns a traditional developer website into a cinematic
Nordic-inspired journey. Visitors follow an arrow through a 3D world
while portfolio sections appear along the path.
✨ Concept
``` text
🏹 START
   │
🌲 FOREST
   │
🏛️ NORDIC GATE       ← About
   │
🪨 RUNE MONUMENT     ← Skills
   │
🌲 DEEP FOREST
   │
🏕️ PROJECT LANDMARK  ← Projects
   │
🔥 FINAL AREA        ← Contact
   │
🎯 TARGET            ← Final destination
```
The arrow travels in a straight line toward the final target while the
camera follows an independent cinematic path.
🚀 Features
Immersive 3D portfolio experience
React Three Fiber powered scene
Scroll-controlled arrow journey
Cinematic camera movement
Nordic-inspired environment
Procedural landmarks
GLB pine-tree models
Mountains, forest, terrain, rocks and particles
Dynamic portfolio panels
Section-aware HUD navigation
Side-positioned information panels
Atmospheric lighting and fog
Animated arrow and final target
🛠️ Tech Stack
Frontend
React
Vite
JavaScript
HTML
CSS
Tailwind CSS
3D
Three.js
React Three Fiber
React Three Drei
Animation
GSAP
Lenis
React Three Fiber `useFrame`
Scroll-driven scene progression
UI
Lucide React
📁 Project Structure
``` text
src/
├── experience/
│   ├── Experience.jsx
│   ├── animation/
│   │   ├── ArrowController.jsx
│   │   ├── CameraController.jsx
│   │   └── flightpath.js
│   ├── models/
│   │   └── PineTree.jsx
│   ├── overlay/
│   │   ├── LoadingScreen.jsx
│   │   ├── JourneyHUD.jsx
│   │   ├── HeroPanel.jsx
│   │   ├── AboutPanel.jsx
│   │   ├── SkillsPanel.jsx
│   │   ├── ProjectsPanel.jsx
│   │   └── ContactPanel.jsx
│   ├── scene/
│   │   ├── Environment.jsx
│   │   ├── Lighting.jsx
│   │   ├── Mountains.jsx
│   │   ├── Forest.jsx
│   │   └── Particles.jsx
│   └── world/
│       ├── ArcheryCamp.jsx
│       ├── SkillMonument.jsx
│       ├── Path.jsx
│       ├── Rocks.jsx
│       └── Target.jsx
├── hooks/
├── components/
└── App.jsx

public/
└── models/
    └── trees/
        └── pine.glb
```
🎬 Experience Flow
1. Hero / Introduction
The visitor starts at the beginning of the trail with the developer
introduction and the arrow visible in the foreground.
2. About
The arrow moves deeper into the forest while the camera sweeps through
the environment. The About panel appears alongside the journey.
3. Skills
The journey reaches a Nordic-inspired rune monument. The Skills panel
introduces the technologies used to build modern applications.
4. Projects
The environment becomes deeper and more expansive as the journey moves
toward the project section.
5. Contact
The final stretch prepares the visitor for the final call to action.
6. Final Target
The journey ends at an archery target, representing completion of the
portfolio journey.
🏹 Animation Architecture
The arrow and camera intentionally use separate movement systems.
Arrow
The arrow follows a straight `THREE.LineCurve3` path:
``` text
🏹
│
│
│
│
🎯
```
Camera
The camera follows an independent `CatmullRomCurve3`.
This allows the camera to:
sweep left and right
reveal landmarks
create depth
change visual focus
keep the arrow moving straight
🌲 World Design
The environment is built in layers:
Main terrain
Central travel path
Forest zones
Distant mountain backdrop
Portfolio landmarks
Atmospheric particles
Final target
The central arrow corridor is intentionally kept open so landmarks frame
the journey instead of blocking it.
🎨 Design Direction
The visual direction combines:
Nordic fantasy
Archery
Ancient stone structures
Cold mountain environments
Warm firelight
Cinematic camera movement
Minimal glassmorphism UI
The goal is to make the portfolio feel like an interactive world rather
than a conventional website.
⚙️ Getting Started
Requirements
Node.js
npm
Install
``` bash
npm install
```
Development
``` bash
npm run dev
```
Production build
``` bash
npm run build
```
Preview production build
``` bash
npm run preview
```
🔧 Customization
Portfolio content
Edit:
``` text
src/experience/overlay/
```
Important files:
`HeroPanel.jsx`
`AboutPanel.jsx`
`SkillsPanel.jsx`
`ProjectsPanel.jsx`
`ContactPanel.jsx`
Arrow path
Edit:
``` text
src/experience/animation/flightpath.js
```
Camera
Edit:
``` text
src/experience/animation/CameraController.jsx
```
Environment
Edit:
``` text
src/experience/scene/
src/experience/world/
```
3D assets
Place GLB models under:
``` text
public/models/
```
🧭 Development Approach
The experience is being developed incrementally:
``` text
WebGL foundation
      ↓
Arrow movement
      ↓
Camera movement
      ↓
Long-distance world
      ↓
Terrain and forest
      ↓
Major landmarks
      ↓
Portfolio UI
      ↓
Atmosphere and lighting
      ↓
Cinematic polish
```
This keeps the 3D scene manageable and makes performance or WebGL
problems easier to isolate.
📌 Current Status
The core experience currently includes:
React Three Fiber scene
Scroll-driven progression
Straight arrow flight path
Long-distance camera journey
Forest environment
Mountain backdrop
Extended terrain
Nordic gateway
Rune monument
Final target
Portfolio HUD
About, Skills, Projects and Contact panels
The next phase focuses on stronger landmarks, environmental
storytelling, atmospheric effects and final cinematic polish.
👨‍💻 About
Mayuresh Kahar
Full Stack Developer focused on building modern web applications and
interactive digital experiences.
This portfolio explores the combination of software engineering,
real-time 3D and cinematic storytelling.
📄 License
This is a personal portfolio project. Add your preferred license here if
you publish the project as open source.
