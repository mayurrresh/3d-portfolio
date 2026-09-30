function Mountain({
  position,
  scale = [1, 1, 1],
  color = "#71808a",
}) {
  return (
    <mesh
      position={position}
      scale={scale}
      castShadow
      receiveShadow
    >
      <coneGeometry args={[5, 7, 5]} />

      <meshStandardMaterial
        color={color}
        roughness={1}
        flatShading
      />
    </mesh>
  );
}

export default function Mountains() {
  return (
    <group>
      {/* FAR BACKGROUND */}

      <Mountain
        position={[-40, 3, -145]}
        scale={[5, 5, 2]}
        color="#aebbc3"
      />

      <Mountain
        position={[-22, 4, -155]}
        scale={[6, 6, 2]}
        color="#aebbc3"
      />

      <Mountain
        position={[0, 4, -165]}
        scale={[7, 7, 2]}
        color="#aebbc3"
      />

      <Mountain
        position={[24, 4, -155]}
        scale={[6, 6, 2]}
        color="#aebbc3"
      />

      <Mountain
        position={[42, 3, -145]}
        scale={[5, 5, 2]}
        color="#aebbc3"
      />

      {/* SIDE MOUNTAINS */}

      <Mountain
        position={[-35, 1, -105]}
        scale={[3.5, 3.5, 1.5]}
        color="#7f8c94"
      />

      <Mountain
        position={[-30, 2, -125]}
        scale={[4, 4, 1.5]}
        color="#7f8c94"
      />

      <Mountain
        position={[35, 1, -105]}
        scale={[3.5, 3.5, 1.5]}
        color="#7f8c94"
      />

      <Mountain
        position={[30, 2, -125]}
        scale={[4, 4, 1.5]}
        color="#7f8c94"
      />
    </group>
  );
}