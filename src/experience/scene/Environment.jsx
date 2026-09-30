import { Sky } from "@react-three/drei";

export default function Environment() {
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[8, 4, 6]}
        inclination={0.48}
        azimuth={0.25}
      />

      <fog
        attach="fog"
        args={["#c9d8e2", 45, 240]}
      />
    </>
  );
}