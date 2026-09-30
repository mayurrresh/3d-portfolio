import PineTree from "../models/PineTree";

const trees = [
  // HERO / CAMP
  { position: [-7.5, -1.5, -5], scale: 1.0, rotation: 0.2 },
  { position: [-9.5, -1.5, -9], scale: 0.82, rotation: -0.35 },
  { position: [-11.5, -1.5, -14], scale: 0.95, rotation: 0.45 },
  { position: [-8.5, -1.5, -18], scale: 0.72, rotation: -0.25 },

  { position: [7.5, -1.5, -5], scale: 0.95, rotation: -0.2 },
  { position: [9.5, -1.5, -9], scale: 0.82, rotation: 0.35 },
  { position: [11.5, -1.5, -14], scale: 1.0, rotation: -0.45 },
  { position: [8.5, -1.5, -18], scale: 0.72, rotation: 0.25 },

  // FOREST
  { position: [-10.5, -1.5, -24], scale: 0.92, rotation: 0.25 },
  { position: [-13.0, -1.5, -29], scale: 0.72, rotation: -0.3 },
  { position: [-9.0, -1.5, -34], scale: 0.82, rotation: 0.4 },
  { position: [-13.5, -1.5, -40], scale: 0.95, rotation: -0.2 },

  { position: [10.5, -1.5, -24], scale: 0.9, rotation: -0.25 },
  { position: [13.0, -1.5, -29], scale: 0.72, rotation: 0.3 },
  { position: [9.0, -1.5, -34], scale: 0.82, rotation: -0.4 },
  { position: [13.5, -1.5, -40], scale: 0.95, rotation: 0.2 },

  // DEEP FOREST
  { position: [-11.5, -1.5, -46], scale: 1.0, rotation: 0.3 },
  { position: [-8.5, -1.5, -51], scale: 0.72, rotation: -0.35 },
  { position: [-14, -1.5, -57], scale: 0.9, rotation: 0.2 },
  { position: [-10, -1.5, -63], scale: 0.78, rotation: -0.4 },

  { position: [11.5, -1.5, -46], scale: 0.98, rotation: -0.3 },
  { position: [8.5, -1.5, -51], scale: 0.72, rotation: 0.35 },
  { position: [14, -1.5, -57], scale: 0.9, rotation: -0.2 },
  { position: [10, -1.5, -63], scale: 0.78, rotation: 0.4 },

  // FAR FOREST
  { position: [-13, -1.5, -70], scale: 0.85, rotation: 0.25 },
  { position: [-9, -1.5, -76], scale: 0.65, rotation: -0.3 },
  { position: [-12, -1.5, -82], scale: 0.78, rotation: 0.4 },

  { position: [13, -1.5, -70], scale: 0.85, rotation: -0.25 },
  { position: [9, -1.5, -76], scale: 0.65, rotation: 0.3 },
  { position: [12, -1.5, -82], scale: 0.78, rotation: -0.4 },

  // DISTANT SILHOUETTES
  { position: [-16, -1.5, -90], scale: 0.72, rotation: 0.2 },
  { position: [-11, -1.5, -96], scale: 0.58, rotation: -0.3 },

  { position: [16, -1.5, -90], scale: 0.72, rotation: -0.2 },
  { position: [11, -1.5, -96], scale: 0.58, rotation: 0.3 },
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