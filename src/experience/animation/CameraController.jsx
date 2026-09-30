import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

/*
  CINEMATIC CAMERA JOURNEY

  The arrow travels straight.
  The camera independently sweeps around the journey
  to create the cinematic movement.
*/

const cameraCurve = new THREE.CatmullRomCurve3([
  // START
  new THREE.Vector3(0, 3.5, 12),

  // Opening forest
  new THREE.Vector3(-3.5, 3.8, -5),

  // About
  new THREE.Vector3(3.5, 4.0, -20),

  // Skills / first major landmark
  new THREE.Vector3(-4.0, 4.2, -38),

  // Projects
  new THREE.Vector3(3.5, 4.4, -58),

  // Deeper world
  new THREE.Vector3(-3.0, 4.5, -78),

  // Final approach
  new THREE.Vector3(2.0, 4.3, -95),

  // Target approach
  new THREE.Vector3(0, 4.0, -101),
]);

const lookAtCurve = new THREE.CatmullRomCurve3([
  // START
  new THREE.Vector3(0, 1.0, 0),

  // Forest
  new THREE.Vector3(0, 1.2, -10),

  // About
  new THREE.Vector3(0, 1.3, -25),

  // Skills
  new THREE.Vector3(0, 1.4, -42),

  // Projects
  new THREE.Vector3(0, 1.5, -62),

  // Deeper journey
  new THREE.Vector3(0, 1.6, -82),

  // Final approach
  new THREE.Vector3(0, 1.7, -98),

  // Target
  new THREE.Vector3(0, 1.8, -110),
]);

export default function CameraController({ progress = 0 }) {
  const { camera } = useThree();

  const currentPosition = useRef(
    new THREE.Vector3(0, 3.5, 12)
  );

  const currentLookTarget = useRef(
    new THREE.Vector3(0, 1.0, 0)
  );

  useFrame(() => {
    const t = THREE.MathUtils.clamp(progress, 0, 1);

    const desiredPosition = cameraCurve.getPointAt(t);
    const desiredLookTarget = lookAtCurve.getPointAt(t);

    // Smooth cinematic camera movement
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