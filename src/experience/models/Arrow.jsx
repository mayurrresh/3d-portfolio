import * as THREE from "three";

export default function Arrow({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}) {
  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {/* Arrow shaft */}
      <mesh rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 2.2, 8]} />
        <meshStandardMaterial
          color="#5b3520"
          roughness={0.8}
        />
      </mesh>

      {/* Arrow head */}
      <mesh position={[1.15, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.14, 0.35, 4]} />
        <meshStandardMaterial
          color="#b9b0a2"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Fletching */}
      <mesh position={[-1.05, 0, 0]}>
        <coneGeometry args={[0.12, 0.3, 4]} />
        <meshStandardMaterial
          color="#4d1d16"
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}