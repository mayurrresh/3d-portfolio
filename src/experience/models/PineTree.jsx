import { Clone, useGLTF } from "@react-three/drei";

export default function PineTree({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}) {
  const { scene } = useGLTF("/models/trees/pine.glb");

  return (
    <Clone
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow
      receiveShadow
    />
  );
}

useGLTF.preload("/models/trees/pine.glb");