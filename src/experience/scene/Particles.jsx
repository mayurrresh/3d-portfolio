import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 120;

export default function Particles() {
  const meshRef = useRef();

  const { positions, speeds, offsets, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const speeds = new Float32Array(PARTICLE_COUNT);
    const offsets = new Float32Array(PARTICLE_COUNT);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    const goldColor = new THREE.Color("#d7b56d");
    const warmColor = new THREE.Color("#f5e6c8");
    const whiteColor = new THREE.Color("#e8ddd0");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Scatter particles along the flight path corridor
      positions[i * 3] = (Math.random() - 0.5) * 24; // X: wide spread
      positions[i * 3 + 1] = Math.random() * 6 - 1; // Y: ground to above
      positions[i * 3 + 2] = Math.random() * -60 + 8; // Z: along the path

      speeds[i] = 0.1 + Math.random() * 0.3;
      offsets[i] = Math.random() * Math.PI * 2;

      // Mix between gold, warm, and white particles
      const mixColor = Math.random();
      const color =
        mixColor < 0.4
          ? goldColor
          : mixColor < 0.7
            ? warmColor
            : whiteColor;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, speeds, offsets, colors };
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const positionAttr = meshRef.current.geometry.attributes.position;
    const time = clock.getElapsedTime();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Gentle upward drift
      positionAttr.array[i3 + 1] += speeds[i] * 0.008;

      // Subtle horizontal sway
      positionAttr.array[i3] +=
        Math.sin(time * 0.5 + offsets[i]) * 0.003;

      // Subtle Z drift
      positionAttr.array[i3 + 2] +=
        Math.cos(time * 0.3 + offsets[i]) * 0.002;

      // Reset particles that drift too high
      if (positionAttr.array[i3 + 1] > 7) {
        positionAttr.array[i3 + 1] = -1;
      }
    }

    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
