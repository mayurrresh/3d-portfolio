export default function Terrain() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.2, 0]}
      receiveShadow
    >
      <planeGeometry args={[250, 250, 100, 100]} />

      <meshStandardMaterial
        color="#59615d" roughness={1}
        metalness={0}
      />
    </mesh>
  );
}