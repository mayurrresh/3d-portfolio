import * as THREE from "three";

function WoodenPost({ position, height = 4.8 }) {
  return (
    <mesh
      position={position}
      castShadow
      receiveShadow
    >
      <cylinderGeometry args={[0.22, 0.32, height, 8]} />
      <meshStandardMaterial
        color="#302018"
        roughness={0.92}
      />
    </mesh>
  );
}

function WoodenBeam({
  position,
  scale = [1, 1, 1],
}) {
  return (
    <mesh
      position={position}
      scale={scale}
      castShadow
    >
      <boxGeometry args={[5.8, 0.32, 0.38]} />
      <meshStandardMaterial
        color="#3a251a"
        roughness={0.9}
      />
    </mesh>
  );
}

function Banner({ position, rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh castShadow>
        <cylinderGeometry
          args={[0.045, 0.055, 3.8, 8]}
        />
        <meshStandardMaterial
          color="#2b211c"
          roughness={0.9}
        />
      </mesh>

      <mesh
        position={[0.42, -0.65, 0]}
        rotation={[0, 0, -0.03]}
        castShadow
      >
        <planeGeometry args={[0.85, 1.65]} />

        <meshStandardMaterial
          color="#713c32"
          roughness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Banner emblem */}
      <mesh
        position={[0.42, -0.65, 0.012]}
        rotation={[0, 0, -0.03]}
      >
        <torusGeometry args={[0.2, 0.025, 8, 16]} />

        <meshStandardMaterial
          color="#d7b56d"
          emissive="#6d5428"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function FireBowl({ position }) {
  return (
    <group position={position}>
      <mesh
        position={[0, 0.3, 0]}
        castShadow
      >
        <cylinderGeometry
          args={[0.52, 0.36, 0.32, 12]}
        />

        <meshStandardMaterial
          color="#25211e"
          roughness={0.9}
        />
      </mesh>

      <mesh position={[0, 0.78, 0]}>
        <coneGeometry args={[0.32, 0.85, 8]} />

        <meshStandardMaterial
          color="#d46b2d"
          emissive="#c44c1c"
          emissiveIntensity={2.2}
          roughness={0.5}
        />
      </mesh>

      <mesh position={[0, 0.65, 0]}>
        <sphereGeometry args={[0.16, 8, 8]} />

        <meshStandardMaterial
          color="#f4b24f"
          emissive="#ff7b20"
          emissiveIntensity={2.5}
        />
      </mesh>

      <pointLight
        position={[0, 1, 0]}
        intensity={2.5}
        distance={8}
      />
    </group>
  );
}

function RuneStone({ position, rotation = [0, 0, 0] }) {
  return (
    <mesh
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.9, 2.5, 0.55]} />

      <meshStandardMaterial
        color="#515353"
        roughness={1}
        flatShading
      />
    </mesh>
  );
}

function SnowRock({ position, scale = 1 }) {
  return (
    <mesh
      position={position}
      scale={scale}
      rotation={[0.15, 0.4, 0.08]}
      castShadow
    >
      <icosahedronGeometry args={[0.75, 1]} />

      <meshStandardMaterial
        color="#747778"
        roughness={1}
        flatShading
      />
    </mesh>
  );
}

export default function ArcheryCamp() {
  return (
    <group position={[0, -1.5, -10]}>
      {/* Main wooden structure */}
      <WoodenPost position={[-2.8, 2.4, 0]} />
      <WoodenPost position={[2.8, 2.4, 0]} />

      <WoodenBeam
        position={[0, 4.8, 0]}
      />

      <WoodenBeam
        position={[0, 5.35, 0]}
        scale={[0.88, 1, 1]}
      />

      {/* Inner crossbeam */}
      <mesh
        position={[0, 3.95, 0]}
        castShadow
      >
        <boxGeometry args={[5.4, 0.25, 0.32]} />

        <meshStandardMaterial
          color="#281b15"
          roughness={0.95}
        />
      </mesh>

      {/* Nordic banners */}
      <Banner
        position={[-3.25, 3.9, 0]}
      />

      <Banner
        position={[3.25, 3.9, 0]}
        rotation={[0, Math.PI, 0]}
      />

      {/* Rune stones */}
      <RuneStone
        position={[-4.1, 0.35, 0.1]}
        rotation={[0, 0.12, -0.03]}
      />

      <RuneStone
        position={[4.1, 0.35, 0.1]}
        rotation={[0, -0.12, 0.03]}
      />

      {/* Fire */}
      <FireBowl
        position={[-4.8, 0, 0.1]}
      />

      <FireBowl
        position={[4.8, 0, 0.1]}
      />

      {/* Foreground stones */}
      <SnowRock
        position={[-3.9, -0.7, 1.4]}
        scale={0.9}
      />

      <SnowRock
        position={[3.9, -0.7, 1.4]}
        scale={0.75}
      />

      {/* Small rear stones */}
      <SnowRock
        position={[-4.7, -0.8, -1.2]}
        scale={0.55}
      />

      <SnowRock
        position={[4.7, -0.8, -1.2]}
        scale={0.5}
      />
    </group>
  );
}