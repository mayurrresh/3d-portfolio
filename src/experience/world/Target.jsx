import { Clone, useGLTF } from "@react-three/drei";

export default function Target() {
  const { scene } = useGLTF("/models/target/target.glb");

  return (
    <group
      position={[-0.1, -1.5, -108]}
      rotation={[0, 0, 0]}
      scale={2.2}
    >
      <Clone
        object={scene}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("/models/target/target.glb");