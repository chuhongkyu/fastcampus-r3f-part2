import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Earth = (props) => {
    const glb = useLoader(GLTFLoader, '/models/earth.glb')
    const ref = useRef(null)
    useFrame((_, delta)=>{
        ref.current.rotation.y += delta * 0.1;
    })
    return(
        <mesh rotation-x={Math.PI/2} ref={ref} {...props}>
            <primitive object={glb.scene} />
        </mesh>
    )
}

export default Earth;