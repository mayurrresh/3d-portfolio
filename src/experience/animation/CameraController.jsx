import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

/*
  CINEMATIC CAMERA JOURNEY

  The arrow travels essentially straight.
  The camera stays low and close to the journey,
  while making controlled cinematic side-to-side movements.
*/

const cameraCurve = new THREE.CatmullRomCurve3([
  // =====================================================
  // HERO — close to arrow
  // =====================================================

  new THREE.Vector3(0, 2.35, 11.5),

  // =====================================================
  // OPENING FOREST
  // =====================================================

  new THREE.Vector3(-1.8, 2.45, -4),

  // =====================================================
  // ABOUT
  // =====================================================

  new THREE.Vector3(2.2, 2.55, -20),

  // =====================================================
  // SKILLS
  // =====================================================

  new THREE.Vector3(-2.5, 2.7, -38),

  // =====================================================
  // PROJECTS
  // =====================================================

  new THREE.Vector3(2.8, 2.85, -58),

  // =====================================================
  // DEEPER JOURNEY
  // =====================================================

  new THREE.Vector3(-2.0, 3.0, -78),

  // =====================================================
  // FINAL APPROACH
  // =====================================================

  new THREE.Vector3(1.5, 3.0, -95),

  // =====================================================
  // TARGET
  // =====================================================

  new THREE.Vector3(0, 2.8, -101),
]);


const lookAtCurve = new THREE.CatmullRomCurve3([
  // =====================================================
  // HERO
  // =====================================================

  new THREE.Vector3(0, 1.8, -18),

  // =====================================================
  // OPENING FOREST
  // =====================================================

  new THREE.Vector3(0, 1.7, -10),

  // =====================================================
  // ABOUT
  // =====================================================

  new THREE.Vector3(0, 1.7, -25),

  // =====================================================
  // SKILLS
  // =====================================================

  new THREE.Vector3(0, 1.8, -42),

  // =====================================================
  // PROJECTS
  // =====================================================

  new THREE.Vector3(0, 1.9, -62),

  // =====================================================
  // DEEPER JOURNEY
  // =====================================================

  new THREE.Vector3(0, 2.0, -82),

  // =====================================================
  // FINAL APPROACH
  // =====================================================

  new THREE.Vector3(0, 2.0, -98),

  // =====================================================
  // TARGET
  // =====================================================

  new THREE.Vector3(0, 2.0, -110),
]);


export default function CameraController({
  progress = 0,
}) {
  const { camera } = useThree();

  const currentPosition = useRef(
    new THREE.Vector3(0, 2.35, 11.5)
  );

  const currentLookTarget = useRef(
    new THREE.Vector3(0, 1.8, -3)
  );

  useFrame(() => {
    const t = THREE.MathUtils.clamp(
      progress,
      0,
      1
    );

    const desiredPosition =
      cameraCurve.getPointAt(t);

    const desiredLookTarget =
      lookAtCurve.getPointAt(t);

    // Smooth camera movement
    currentPosition.current.lerp(
      desiredPosition,
      0.08
    );

    currentLookTarget.current.lerp(
      desiredLookTarget,
      0.08
    );

    camera.position.copy(
      currentPosition.current
    );

    camera.lookAt(
      currentLookTarget.current
    );
  });

  return null;
}