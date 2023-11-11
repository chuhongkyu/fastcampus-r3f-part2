import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import React, { Suspense } from "react";
import { Loader } from "@react-three/drei";

function Home() {
  return (
    <>
    <Canvas camera={{position: [0, 0, 5], fov: 45}}>
        <color attach="background" args={["rgb(67, 127, 240) 100%)"]} />
        <Suspense fallback={null}>
          <Scene/>
        </Suspense>
    </Canvas>
    <Loader />
    </>
  );
}

export default Home;