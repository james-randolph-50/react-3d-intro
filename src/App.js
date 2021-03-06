import * as THREE from "three";
import React, { useState, useRef, useEffect } from 'react';
import { OrbitControls } from 'drei';
import { Canvas, useFrame } from "react-three-fiber";
import './App.css';

const tempObject = new THREE.Object3D();

function  Boxes() {

  const ref = useRef();

  useFrame(() => {
    let i = 0;
    for (let x = 0; x <  10; x++) {
      for (let y = 0; y <  10; y++) {
        for (let z = 0; z <  10; z++) {
          const id = i++;
          tempObject.position.set(5-x * 2, 5-y*2, 5-z*2);
          tempObject.updateMatrix();
          ref.current.setMatrixAt(id, tempObject.matrix);
        }
      }
    }
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 1000]}>
      <boxBufferGeometry attach="geometry" args={[0.7,0.7,0.7]} />
      <meshPhongMaterial attach="material" color="teal" />
    </instancedMesh>
  )
}


function Scene() {

  return (
    <>
      <ambientLight />
      <pointLight intensity={0.5} position={[0,10,4]} />
      <Boxes />
      <OrbitControls />
    </>
  )
}

function App() {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
