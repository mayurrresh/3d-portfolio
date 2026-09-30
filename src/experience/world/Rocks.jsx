function Rock({
  position,
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
}) {
  return (
    <mesh
      position={position}
      scale={scale}
      rotation={rotation}
      castShadow
    >
      <icosahedronGeometry args={[1, 1]} />

      <meshStandardMaterial
        color="#555b5c"
        roughness={1}
        flatShading
      />
    </mesh>
  );
}

export default function Rocks() {
  return (
    <group>
      {/* Foreground */}
      <Rock
        position={[-4, -0.7, 2]}
        scale={[1.8, 1, 1.3]}
        rotation={[0.2, 0.4, 0]}
      />

      <Rock
        position={[5, -0.8, 0]}
        scale={[1.4, 0.8, 1]}
        rotation={[0.1, 1, 0.2]}
      />

      {/* Midground */}
      <Rock
        position={[-6, -0.9, -10]}
        scale={[1.2, 0.8, 1]}
        rotation={[0.3, 0.7, 0]}
      />

      <Rock
        position={[6, -0.9, -12]}
        scale={[1.5, 0.9, 1.2]}
        rotation={[0.2, 1.4, 0]}
      />

      <Rock
        position={[-9, -0.8, -18]}
        scale={[1.4, 1, 1.2]}
      />

      <Rock
        position={[9, -0.8, -20]}
        scale={[1.2, 0.8, 1]}
      />

      {/* Near the camp */}
      <Rock
        position={[-4, -0.8, -27]}
        scale={[1.5, 0.9, 1.2]}
      />

      <Rock
        position={[4, -0.8, -28]}
        scale={[1.3, 0.8, 1]}
      />
    </group>
  );
}