import Earth from "./Earth";
import Lights from "./Lights";
import { Canvas } from "@react-three/fiber"
import Weather from "./Weather";

const Scene = () => {
    return(
        <Canvas camera={{ position: [0, 0, -1] }}>
            <color attach="background" args={["skyblue"]} />
            <Lights/>
            <Earth position={[0,-2,0]}/>
            <Weather position={[0.5,0,0]} weather={'rain'}/>
            <Weather position={[0,0,0]} weather={'clear'}/>
            <Weather position={[-0.5,0,0]} weather={'snow'} />
        </Canvas>
    )
}

export default Scene;