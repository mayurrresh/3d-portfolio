export default function Path() {
  return (
    <group>
      {/* Main trail */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.46, -50]}
        receiveShadow
      >
        <planeGeometry args={[5, 125]} />

        <meshStandardMaterial
          color="#4f504d"
          roughness={1}
        />
      </mesh>

      {/* Darker worn center */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.455, -50]}
        receiveShadow
      >
        <planeGeometry args={[3.1, 125]} />

        <meshStandardMaterial
          color="#444542"
          roughness={1}
        />
      </mesh>

      {/* Left trail edge */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-2.7, -1.45, -50]}
      >
        <planeGeometry args={[0.35, 125]} />

        <meshStandardMaterial
          color="#62615d"
          roughness={1}
        />
      </mesh>

      {/* Right trail edge */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[2.7, -1.45, -50]}
      >
        <planeGeometry args={[0.35, 125]} />

        <meshStandardMaterial
          color="#62615d"
          roughness={1}
        />
      </mesh>
    </group>
  );
}