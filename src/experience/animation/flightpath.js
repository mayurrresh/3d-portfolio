import * as THREE from "three";

/*
  STRAIGHT ARROW FLIGHT PATH

  Long cinematic journey:
  START → FOREST → LANDMARKS → GATES → CAMP → TARGET
*/

export const flightCurve = new THREE.LineCurve3(
  new THREE.Vector3(0, 2.2, 9),
  new THREE.Vector3(0, 1.8, -110)
);