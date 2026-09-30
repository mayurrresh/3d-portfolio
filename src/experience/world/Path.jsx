export default function Path() {
  return (
    <group>
      {/* Main trail */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.46, -55]}
        receiveShadow
      >
        <planeGeometry args={[5.5, 135]} />
        <meshStandardMaterial
          color="#51483d"
          roughness={1}
        />
      </mesh>

      {/* Snow edges */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-3.05, -1.45, -55]}
        receiveShadow
      >
        <planeGeometry args={[0.35, 135]} />
        <meshStandardMaterial
          color="#eeeae0"
          roughness={1}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[3.05, -1.45, -55]}
        receiveShadow
      >
        <planeGeometry args={[0.35, 135]} />
        <meshStandardMaterial
          color="#eeeae0"
          roughness={1}
        />
      </mesh>

      {/* Subtle inner trail */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.455, -55]}
        receiveShadow
      >
        <planeGeometry args={[3.4, 135]} />
        <meshStandardMaterial
          color="#40382f"
          roughness={1}
        />
      </mesh>
    </group>
  );
}