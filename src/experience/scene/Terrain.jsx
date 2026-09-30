import { useMemo } from "react";

function createTerrainGeometry(width, depth, widthSegments, depthSegments) {
  const positions = [];

  for (let z = 0; z <= depthSegments; z++) {
    const zRatio = z / depthSegments;
    const zPosition = (zRatio - 0.5) * depth;

    for (let x = 0; x <= widthSegments; x++) {
      const xRatio = x / widthSegments;
      const xPosition = (xRatio - 0.5) * width;

      /*
       * Keep the center corridor relatively flat.
       * Terrain rises gradually toward the sides.
       */
      const sideDistance = Math.abs(xPosition);

      /*
       * Keep the entire central road corridor flat.
       */
      const roadWidth = 3.8;

      const outsideRoad =
        Math.max(0, sideDistance - roadWidth);

      /*
       * Terrain rises only outside the road.
       */
      const sideRise =
        outsideRoad * 0.035;

      /*
       * Natural variation, but fade it out
       * completely near the road.
       */
      const variation =
        Math.sin(xPosition * 0.55) *
        Math.cos(zPosition * 0.09) *
        0.08 *
        Math.min(1, outsideRoad / 3);

      /*
       * Very subtle longitudinal terrain movement.
       */
      const longWave =
        Math.sin(zPosition * 0.055) *
        0.06 *
        Math.min(1, outsideRoad / 3);

      /*
       * Keep terrain below the existing Path.
       */
      const y =
        -1.52 +
        sideRise +
        variation +
        longWave;

      positions.push(
        xPosition,
        y,
        zPosition
      );
    }
  }

  const indices = [];

  for (let z = 0; z < depthSegments; z++) {
    for (let x = 0; x < widthSegments; x++) {
      const a =
        z * (widthSegments + 1) + x;

      const b = a + 1;

      const c =
        a + (widthSegments + 1);

      const d = c + 1;

      indices.push(a, c, b);
      indices.push(b, c, d);
    }
  }

  return {
    positions: new Float32Array(positions),
    indices: new Uint32Array(indices),
  };
}

export default function Terrain() {
  const geometryData = useMemo(
    () =>
      createTerrainGeometry(
        90,
        145,
        32,
        48
      ),
    []
  );

  return (
    <mesh
      position={[0, 0, -55]}
      receiveShadow
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={geometryData.positions}
          count={geometryData.positions.length / 3}
          itemSize={3}
        />

        <bufferAttribute
          attach="index"
          array={geometryData.indices}
          count={geometryData.indices.length}
          itemSize={1}
        />
      </bufferGeometry>

      <meshStandardMaterial
        color="#d2d7d8"
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}