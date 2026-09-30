function Stone({
  position,
  scale = [1, 1, 1],
}) {
  return (
    <mesh
      position={position}
      scale={scale}
      rotation={[0, 0.08, 0]}
      castShadow
    >
      <boxGeometry args={[1.2, 3.2, 0.8]} />

      <meshStandardMaterial
        color="#555b5c"
        roughness={1}
        flatShading
      />
    </mesh>
  );
}

function Rune() {
  return (
    <mesh
      position={[0, 1.8, 0.45]}
      rotation={[0, 0, 0]}
    >
      <torusGeometry
        args={[0.55, 0.07, 8, 16]}
      />

      <meshStandardMaterial
        color="#a68b52"
        emissive="#6d5428"
        emissiveIntensity={1}
        roughness={0.5}
      />
    </mesh>
  );
}

export default function SkillMonument() {
  return (
    <group position={[5.5, -1.5, -45]}>
      {/* Main rune stone */}
      <Stone
        position={[0, 1.8, 0]}
        scale={[0.9, 1.2, 0.8]}
      />

      {/* Smaller supporting stone */}
      <Stone
        position={[1.8, 0.9, 0.2]}
        scale={[0.55, 0.7, 0.6]}
      />

      {/* Rune */}
      <Rune />

      {/* Small mystical light */}
      <pointLight
        position={[0, 2, 1]}
        intensity={1.5}
        distance={7}
      />
    </group>
  );
}