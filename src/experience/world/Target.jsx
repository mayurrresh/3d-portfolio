function TargetRing({
  radius,
  tube,
  color,
}) {
  return (
    <mesh>
      <torusGeometry args={[radius, tube, 12, 32]} />

      <meshStandardMaterial
        color={color}
        roughness={0.8}
      />
    </mesh>
  );
}

export default function Target() {
  return (
    <group position={[0, 1.8, -110]}>
      
      
      {/* Target backing */}
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <cylinderGeometry args={[2.5, 2.5, 0.5, 32]} />

        <meshStandardMaterial
          color="#6b432d"
          roughness={1}
        />
      </mesh>

      {/* Outer ring */}
      <TargetRing
        radius={2}
        tube={0.25}
        color="#3d2a20"
      />

      {/* Red ring */}
      <TargetRing
        radius={1.45}
        tube={0.22}
        color="#9b4033"
      />

      {/* Gold ring */}
      <TargetRing
        radius={0.85}
        tube={0.18}
        color="#d09b4a"
      />

      {/* Center */}
      <mesh position={[0, 0, 0.3]}>
        <circleGeometry args={[0.42, 32]} />

        <meshStandardMaterial
          color="#6d2525"
          roughness={0.8}
        />
      </mesh>

      {/* Support */}
      <mesh
        position={[0, -3, 0]}
        castShadow
      >
        <cylinderGeometry args={[0.25, 0.35, 6, 8]} />

        <meshStandardMaterial
          color="#3d2a20"
          roughness={1}
        />
      </mesh>

    </group>
  );
}