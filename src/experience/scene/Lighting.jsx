export default function Lighting() {
  return (
    <>
      {/* Soft overall light */}
      <ambientLight intensity={0.35} />

      {/* Sky / ground bounce */}
      <hemisphereLight
        skyColor="#c9def0"
        groundColor="#52606d"
        intensity={0.7}
      />

      {/* Main sunlight */}
      <directionalLight
        castShadow
        position={[8, 14, 6]}
        intensity={2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={100}
      />
    </>
  );
}