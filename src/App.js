import * as THREE from "three";
import React, { useState, useRef, useEffect } from 'react';
import { OrbitControls } from 'drei';
import { Canvas, useFrame } from "react-three-fiber";
import './App.css';

function  Boxes() {
  return (
    <instancedMesh>
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
