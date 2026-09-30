import { Sky } from "@react-three/drei";

export default function Environment() {
  return (
    <>
      {/* Nordic sky */}
      <Sky
        distance={450000}
        sunPosition={[8, 4, 6]}
        inclination={0.48}
        azimuth={0.25}
      />

      {/* Atmospheric depth */}
      <fog
        attach="fog"
        args={["#c9d8e2", 35, 110]}
      />
    </>
  );
}