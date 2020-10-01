import React from 'react';
import { Canvas } from "react-three-fiber";
import './App.css';

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
    <mesh rotation={[10,10,0]} position={[0,0,0]}>
      <ambientLight />
      <pointLight  intensity={0.5} position={[-1,2,4]} />
      <Cube />
    </mesh>
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
