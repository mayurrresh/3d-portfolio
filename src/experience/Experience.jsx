import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { useScrollProgress } from "../hooks/useScrollProgress";

import ArrowController from "./animation/ArrowController";
import CameraController from "./animation/CameraController";

import Mountains from "./scene/Mountains";
import Forest from "./scene/Forest";
import Particles from "./scene/Particles";

import ArcheryCamp from "./world/ArcheryCamp";
import Path from "./world/Path";
import Rocks from "./world/Rocks";
import Target from "./world/Target";

import LoadingScreen from "./overlay/LoadingScreen";
import JourneyHUD from "./overlay/JourneyHUD";
import AboutPanel from "./overlay/AboutPanel";
import SkillsPanel from "./overlay/SkillsPanel";
import ProjectsPanel from "./overlay/ProjectsPanel";
import ContactPanel from "./overlay/ContactPanel";
import HeroPanel from "./overlay/HeroPanel";
import Sunlight from "../components/Sunlight";
import SkillMonument from "./world/SkillMonument";

function Ground() {
  return (
    <group>
      {/* Main terrain */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, -50]}
        receiveShadow
      >
        <planeGeometry args={[80, 125, 1, 1]} />

        <meshStandardMaterial
          color="#747877"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Left terrain shelf */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-18, -1.42, -50]}
        receiveShadow
      >
        <planeGeometry args={[25, 125]} />

        <meshStandardMaterial
          color="#686d6b"
          roughness={1}
        />
      </mesh>

      {/* Right terrain shelf */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[18, -1.42, -50]}
        receiveShadow
      >
        <planeGeometry args={[25, 125]} />

        <meshStandardMaterial
          color="#686d6b"
          roughness={1}
        />
      </mesh>
    </group>
  );
}

export default function Experience() {
  const { progress } = useScrollProgress();
  const [sceneReady, setSceneReady] = useState(false);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        className="scroll-progress-bar"
      />

      <Canvas
        shadows
        camera={{
          position: [0, 3, 12],
          fov: 55,
        }}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        {/* Atmosphere */}
        <Sky
          distance={450000}
          sunPosition={[8, 5, 6]}
          inclination={0.48}
          azimuth={0.25}
        />

        <fog
          attach="fog"
          args={["#b9c7d0", 20, 100]}
        />

        {/* World */}
        <Mountains />
        <Forest />
        <Rocks />
        <Path />
        <ArcheryCamp />
        <SkillMonument />
        <Target />

        {/* Atmospheric particles */}
        <Particles />

        {/* Scroll-controlled Arrow */}
        <ArrowController progress={progress} />

        {/* Cinematic Camera */}
        <CameraController progress={progress} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[8, 12, 6]}
          intensity={2}
          castShadow
        />

        {/* Ground */}
        <Ground />
      </Canvas>

      {/* Loading screen */}
      <LoadingScreen
        onReady={() => setSceneReady(true)}
      />

      {/* Atmospheric sunlight */}
      <Sunlight />

      {/* Portfolio UI */}
      <HeroPanel progress={progress} />

      <JourneyHUD progress={progress} />

      <AboutPanel
        progress={progress}
        side="left"
      />

      <SkillsPanel
        progress={progress}
        side="right"
      />

      <ProjectsPanel
        progress={progress}
        side="left"
      />

      <ContactPanel
        progress={progress}
        side="right"
      />
    </div>
  );
}