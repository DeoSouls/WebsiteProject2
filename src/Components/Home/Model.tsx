import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    pCube1: THREE.Mesh;
  };
  materials: {
    standardSurface1: THREE.MeshStandardMaterial;
  };
};

type ActionName = "All Animations";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("http://localhost:5000/ccc.glb") as GLTFResult;
//   const { actions } = useAnimations<GLTFActions>(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="pCube1"
          castShadow
          receiveShadow
          geometry={nodes.pCube1.geometry}
          material={materials.standardSurface1}
          position={[0, 0.02, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("http://localhost:5000/ccc.glb");