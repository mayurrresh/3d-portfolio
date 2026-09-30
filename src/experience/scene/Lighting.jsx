export default function Lighting() {
  return (
    <>
      {/* Cold ambient fill */}
      <ambientLight
        intensity={0.12}
        color="#b8c9d6"
      />

      {/* Cold sky / snow bounce */}
      <hemisphereLight
        skyColor="#8faec5"
        groundColor="#252b2d"
        intensity={0.38}
      />

      {/* Warm Nordic sunset */}
      <directionalLight
        castShadow
        position={[-22, 16, 18]}
        intensity={1.55}
        color="#ffd0a0"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={160}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-camera-top={60}
        shadow-camera-bottom={-60}
      />

      {/* Cool rim light from behind */}
      <directionalLight
        position={[18, 10, -35]}
        intensity={0.22}
        color="#8faec9"
      />
    </>
  );
}