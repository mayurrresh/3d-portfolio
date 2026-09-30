import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { flightCurve } from "./flightpath";

const currentPos = new THREE.Vector3();
const currentTangent = new THREE.Vector3();
const lookAheadPos = new THREE.Vector3();
const upVector = new THREE.Vector3(0, 1, 0);

export default function ArrowController({ progress = 0 }) {
  const arrowRef = useRef();

  const smoothPos = useRef(
    new THREE.Vector3(0, 1.2, 10)
  );

  const smoothQuat = useRef(new THREE.Quaternion());
  const targetQuat = useRef(new THREE.Quaternion());
  const lookMatrix = useRef(new THREE.Matrix4());

  useFrame(() => {
    if (!arrowRef.current) return;

    const t = THREE.MathUtils.clamp(progress, 0, 0.9999);

    flightCurve.getPointAt(t, currentPos);
    flightCurve.getTangentAt(t, currentTangent);
    currentTangent.normalize();

    /*
      The arrow model points along local -Z.
      Keep the arrowhead toward the target.
    */

    const arrowLengthToTip = 0.75;

    const adjustedPosition = currentPos
      .clone()
      .addScaledVector(
        currentTangent,
        -arrowLengthToTip
      );

    adjustedPosition.y -= 0.35;

    smoothPos.current.lerp(
      adjustedPosition,
      0.14
    );

    arrowRef.current.position.copy(
      smoothPos.current
    );

    /*
      Look in the direction of travel.
    */
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
      0.12
    );

    arrowRef.current.quaternion.copy(
      smoothQuat.current
    );
    arrowRef.current.rotateX(-0.08);
  });

  return (
    <group ref={arrowRef}>

      {/* Arrow shaft */}
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <cylinderGeometry
          args={[0.025, 0.025, 2.5, 8]}
        />

        <meshStandardMaterial
          color="#3b2418"
          roughness={0.85}
        />
      </mesh>

      {/* ARROWHEAD — points toward target */}
      <mesh
        position={[0, 0, -1.42]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
      >
        <coneGeometry
          args={[0.10, 0.38, 6]}
        />

        <meshStandardMaterial
          color="#b9b1a2"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* FLETCHING — stays toward camera */}
      <mesh
        position={[0, 0, 1.22]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <coneGeometry
          args={[0.11, 0.25, 4]}
        />

        <meshStandardMaterial
          color="#4c1715"
          roughness={0.8}
        />
      </mesh>

    </group>
  );
}