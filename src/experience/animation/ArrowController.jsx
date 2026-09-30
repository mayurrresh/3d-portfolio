import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { flightCurve } from "./flightpath";

// Reusable vectors to avoid allocation per frame
const currentPos = new THREE.Vector3();
const currentTangent = new THREE.Vector3();
const lookAheadPos = new THREE.Vector3();
const upVector = new THREE.Vector3(0, 1, 0);

export default function ArrowController({ progress = 0 }) {
  const arrowRef = useRef();
  const smoothPos = useRef(new THREE.Vector3(0, 1.3, 11)); 
  const smoothQuat = useRef(new THREE.Quaternion());
  const targetQuat = useRef(new THREE.Quaternion());
  const lookMatrix = useRef(new THREE.Matrix4());

  useFrame(() => {
    if (!arrowRef.current) return;

    const t = THREE.MathUtils.clamp(progress, 0, 0.9999);

    // ─── Get arrow position and direction ───
    flightCurve.getPointAt(t, currentPos);
    flightCurve.getTangentAt(t, currentTangent);
    currentTangent.normalize();

    // ─── Keep the TIP on the flight path ───
    // Arrow tip is approximately 2.025 units ahead of its origin.
    const arrowLengthToTip = 2.025;

    const adjustedPosition = currentPos
      .clone()
      .addScaledVector(currentTangent, -arrowLengthToTip);

    // Smooth position
    smoothPos.current.lerp(adjustedPosition, 0.12);
    arrowRef.current.position.copy(smoothPos.current);

    // ─── Rotation ───
    lookAheadPos
      .copy(smoothPos.current)
      .add(currentTangent);

    lookMatrix.current.lookAt(
      smoothPos.current,
      lookAheadPos,
      upVector
    );

    targetQuat.current.setFromRotationMatrix(
      lookMatrix.current
    );

    smoothQuat.current.slerp(
      targetQuat.current,
      0.1
    );

    arrowRef.current.quaternion.copy(
      smoothQuat.current
    );

    // ─── Subtle wobble ───
    arrowRef.current.rotation.z +=
      Math.sin(t * Math.PI * 4) * 0.015;

    arrowRef.current.rotation.x +=
      Math.sin(t * Math.PI * 3 + 1) * 0.01;
  });

  return (
    <group ref={arrowRef}>
      {/* Shaft — oriented along Z axis so it follows lookAt correctly */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry
          args={[0.045, 0.045, 3.2, 8]}
        />
        <meshStandardMaterial
          color="#6b321d"
          roughness={0.8}
        />
      </mesh>

      {/* Arrow head — at the front (-Z direction in local space) */}
      <mesh
        position={[0, 0, -1.75]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <coneGeometry args={[0.18, 0.55, 6]} />
        <meshStandardMaterial
          color="#c5b49a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Fletching — at the back (+Z direction in local space) */}
      <mesh
        position={[0, 0, 1.65]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <coneGeometry args={[0.2, 0.4, 4]} />
        <meshStandardMaterial
          color="#5a1515"
          roughness={0.7}
        />
      </mesh>
    </group>
  );
}