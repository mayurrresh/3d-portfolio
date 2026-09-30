import { Clone, useGLTF } from "@react-three/drei";

function MountainAsset({
  position,
  scale,
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF(
    "/models/mountains/snowy_mountain_web.glb"
  );

  return (
    <Clone
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
      castShadow
      receiveShadow
    />
  );
}

export default function Mountains() {
  return (
    <group>
      {/* Main hero mountain */}
      <MountainAsset
        position={[0, -2.8, -152]}
        scale={[20, 20, 20]}
      />

      {/* Left mountain */}
      <MountainAsset
        position={[-28, -3.0, -165]}
        scale={[14, 14, 14]}
        rotation={[0, 0.12, 0]}
      />

      {/* Right mountain */}
      <MountainAsset
        position={[29, -3.0, -165]}
        scale={[14, 14, 14]}
        rotation={[0, -0.12, 0]}
      />
    </group>
  );
}

useGLTF.preload(
  "/models/mountains/snowy_mountain_web.glb"
);