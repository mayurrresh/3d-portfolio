import PineTree from "../models/PineTree";

const trees = [
  // =========================================================
  // ZONE 1 — OPENING FOREST
  // =========================================================

  // Left
  {
    position: [-7, -1.5, -6],
    scale: 0.85,
    rotation: 0.25,
  },
  {
    position: [-10, -1.5, -12],
    scale: 0.7,
    rotation: -0.35,
  },
  {
    position: [-8, -1.5, -19],
    scale: 0.8,
    rotation: 0.5,
  },

  // Right
  {
    position: [7, -1.5, -7],
    scale: 0.8,
    rotation: -0.25,
  },
  {
    position: [10, -1.5, -13],
    scale: 0.7,
    rotation: 0.35,
  },
  {
    position: [8, -1.5, -20],
    scale: 0.85,
    rotation: -0.45,
  },

  // =========================================================
  // ZONE 2 — ABOUT / FIRST JOURNEY SECTION
  // =========================================================

  // Left
  {
    position: [-11, -1.5, -27],
    scale: 0.65,
    rotation: -0.2,
  },
  {
    position: [-7, -1.5, -32],
    scale: 0.55,
    rotation: 0.4,
  },
  {
    position: [-12, -1.5, -38],
    scale: 0.75,
    rotation: -0.3,
  },

  // Right
  {
    position: [11, -1.5, -28],
    scale: 0.65,
    rotation: 0.2,
  },
  {
    position: [7, -1.5, -33],
    scale: 0.55,
    rotation: -0.35,
  },
  {
    position: [12, -1.5, -39],
    scale: 0.7,
    rotation: 0.3,
  },

  // =========================================================
  // ZONE 3 — SKILLS / DEEP FOREST
  // =========================================================

  // Left
  {
    position: [-10, -1.5, -48],
    scale: 0.8,
    rotation: 0.25,
  },
  {
    position: [-13, -1.5, -55],
    scale: 0.65,
    rotation: -0.4,
  },
  {
    position: [-8, -1.5, -62],
    scale: 0.75,
    rotation: 0.35,
  },

  // Right
  {
    position: [10, -1.5, -49],
    scale: 0.75,
    rotation: -0.25,
  },
  {
    position: [13, -1.5, -56],
    scale: 0.65,
    rotation: 0.4,
  },
  {
    position: [8, -1.5, -63],
    scale: 0.8,
    rotation: -0.3,
  },

  // =========================================================
  // ZONE 4 — PROJECTS / LATE JOURNEY
  // =========================================================

  // Left
  {
    position: [-12, -1.5, -72],
    scale: 0.85,
    rotation: -0.2,
  },
  {
    position: [-8, -1.5, -79],
    scale: 0.65,
    rotation: 0.35,
  },
  {
    position: [-13, -1.5, -87],
    scale: 0.75,
    rotation: -0.3,
  },

  // Right
  {
    position: [12, -1.5, -73],
    scale: 0.8,
    rotation: 0.25,
  },
  {
    position: [8, -1.5, -80],
    scale: 0.65,
    rotation: -0.4,
  },
  {
    position: [13, -1.5, -88],
    scale: 0.75,
    rotation: 0.3,
  },

  // =========================================================
  // ZONE 5 — FINAL APPROACH
  // Sparse trees so the target can become visible.
  // =========================================================

  {
    position: [-11, -1.5, -96],
    scale: 0.65,
    rotation: 0.2,
  },
  {
    position: [11, -1.5, -97],
    scale: 0.65,
    rotation: -0.25,
  },
];

export default function Forest() {
  return (
    <group>
      {trees.map((tree, index) => (
        <PineTree
          key={index}
          position={tree.position}
          rotation={[0, tree.rotation, 0]}
          scale={tree.scale}
        />
      ))}
    </group>
  );
}