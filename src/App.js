import React from 'react';
import { Canvas } from "react-three-fiber";
import './App.css';

function Cube(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" args={[2,1,4]} />
      <meshStandardMaterial attach="material" color="pink" />
    </mesh>
  );
}

// args = [width, height, depth]

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight  intensity={0.5} position={[-1,2,4]} />
      <Cube rotation={[10,10,0]} position={[0,0,0]}/>
      <Cube rotation={[10,20,0]} position={[2,2,0]}/>
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
