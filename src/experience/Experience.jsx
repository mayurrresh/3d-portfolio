import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useScrollProgress } from "../hooks/useScrollProgress";
import Environment from "./scene/Environment";
import Lighting from "./scene/Lighting";
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
import FinalPanel from "./overlay/FinalPanel";
import Terrain from "./scene/Terrain";

function Ground() {
  return (
    <group>
      {/* Main snowy world */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, -75]}
        receiveShadow
      >
        <planeGeometry args={[120, 180, 1, 1]} />
        <meshStandardMaterial
          color="#d8d4c8"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Left snow bank */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-25, -1.47, -75]}
        receiveShadow
      >
        <planeGeometry args={[35, 180]} />
        <meshStandardMaterial
          color="#c9c5b9"
          roughness={1}
        />
      </mesh>

      {/* Right snow bank */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[25, -1.47, -75]}
        receiveShadow
      >
        <planeGeometry args={[35, 180]} />
        <meshStandardMaterial
          color="#c9c5b9"
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
        <Environment />

        {/* World */}
        <Mountains progress={progress} />
        <Forest />
        <Rocks />
        <Terrain />
        <Path />
        <ArcheryCamp />
        <SkillMonument />
        {progress > 0.88 && <Target progress={progress} />}

        {/* Atmospheric particles */}
        <Particles />

        {/* Scroll-controlled Arrow */}
        <ArrowController progress={progress} />

        {/* Cinematic Camera */}
        <CameraController progress={progress} />

        {/* Lighting */}
        <Lighting />

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

      <FinalPanel
        progress={progress}
      />
    </div>
  );
}