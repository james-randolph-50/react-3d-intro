import React from 'react';
import { Canvas } from "react-three-fiber";
// import './App.css';

function Cube() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1,1,1]} />
      <meshStandardMaterial attach="material" color="pink" />
    </mesh>
  );
}

// args = [width, height, depth]

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight position={[-1,2,4]} />

    </>
  )
}

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;
