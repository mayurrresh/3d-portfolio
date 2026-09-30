function Post({ position }) {
  return (
    <mesh position={position} castShadow>
      <cylinderGeometry args={[0.28, 0.38, 5, 8]} />

      <meshStandardMaterial
        color="#33251e"
        roughness={1}
      />
    </mesh>
  );
}

function Beam({ position, scale = [1, 1, 1] }) {
  return (
    <mesh
      position={position}
      scale={scale}
      castShadow
    >
      <boxGeometry args={[5.5, 0.45, 0.5]} />

      <meshStandardMaterial
        color="#403027"
        roughness={1}
      />
    </mesh>
  );
}

function RuneStone({ position, scale = 1 }) {
  return (
    <mesh
      position={position}
      scale={scale}
      castShadow
    >
      <boxGeometry args={[1.2, 3.2, 0.6]} />

      <meshStandardMaterial
        color="#555b5c"
        roughness={1}
        flatShading
      />
    </mesh>
  );
}

function Banner({ position }) {
  return (
    <group position={position}>
      <mesh
        position={[0, -1.5, 0]}
        castShadow
      >
        <cylinderGeometry
          args={[0.08, 0.1, 3, 8]}
        />

        <meshStandardMaterial
          color="#30231d"
          roughness={1}
        />
      </mesh>

      <mesh position={[0.5, -0.7, 0]}>
        <planeGeometry args={[1.1, 1.7]} />

        <meshStandardMaterial
          color="#39251f"
          side={2}
          roughness={1}
        />
      </mesh>
    </group>
  );
}

function FireBowl({ position }) {
  return (
    <group position={position}>
      {/* Bowl */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.45, 0.3, 0.35, 12]} />

        <meshStandardMaterial
          color="#292522"
          roughness={0.9}
        />
      </mesh>

      {/* Fire */}
      <mesh position={[0, 0.75, 0]}>
        <coneGeometry args={[0.3, 0.8, 8]} />

        <meshStandardMaterial
          color="#d47a32"
          emissive="#b84b20"
          emissiveIntensity={2}
          roughness={0.5}
        />
      </mesh>

      {/* Warm light */}
      <pointLight
        position={[0, 1, 0]}
        intensity={2}
        distance={7}
      />
    </group>
  );
}

export default function ArcheryCamp() {
  return (
    <group position={[0, -1.5, -25]}>
      {/* Main gateway */}
      <Post position={[-2.8, 2.5, 0]} />
      <Post position={[2.8, 2.5, 0]} />

      <Beam position={[0, 5, 0]} />

      <Beam
        position={[0, 5.8, 0]}
        scale={[1.1, 1, 1]}
      />

      {/* Rune stones */}
      <RuneStone
        position={[-4.2, 0.2, 0]}
        scale={1.1}
      />

      <RuneStone
        position={[4.2, 0.2, 0]}
        scale={1.1}
      />

      {/* Banners */}
      <Banner position={[-3.8, 4, 0]} />
      <Banner position={[3.8, 4, 0]} />

      {/* Fire bowls */}
      <FireBowl position={[-4.8, 0, 0]} />
      <FireBowl position={[4.8, 0, 0]} />
    </group>
  );
}