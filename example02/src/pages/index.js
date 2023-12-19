import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import Lights from "../components/Lights"

function Home() {
  return (
    <Canvas camera={{position: [0, 0, 2], fov: 45}}>
        <color attach="background" args={["rgb(67, 127, 240) 100%)"]} />
        <Lights/>
        <Scene/>
    </Canvas>
  );
}

export default Home;