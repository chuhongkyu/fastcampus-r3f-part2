import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import React, { Suspense } from "react";
import { Loader, OrbitControls } from "@react-three/drei";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedOutlet from "../components/AnimatedOutlet";

function Home() {
  const location = useLocation()
  return (
    <>
    <Canvas camera={{position: [0, 0, 5], fov: 45}}>
        <Suspense fallback={null}>
          <Scene/>
        </Suspense>
        <OrbitControls
            makeDefault
            enablePan={false}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
            maxDistance={15}
            minDistance={2}/>
    </Canvas>
    <Loader />
    <AnimatePresence>
      <AnimatedOutlet key={location.pathname}/>
    </AnimatePresence>
    </>
  );
}

export default Home;