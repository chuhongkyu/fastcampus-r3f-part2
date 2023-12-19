
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html, Sparkles } from "@react-three/drei"; 
import { useBodyClass } from "../utils/hook";


const Earth = () => {
    const glb = useLoader(GLTFLoader, '/models/earth.glb')
    const ref = useRef(null)
    const [isHover, setHover] = useState(false);

    useFrame((_, delta)=>{
        ref.current.rotation.y += delta * 0.1;
    })

    useBodyClass(isHover, "drag")

    return(
        <group position={[0,-1.5,0]}>
            <Sparkles position={[0,0,0]} 
            count={80}
            scale={2.8}
            size={5}
            speed={0.4}
            />
            <mesh 
                onPointerEnter={()=> setHover(true)}
                onPointerOut={()=> setHover(false)}
                scale={1.3} 
                rotation-x={Math.PI/2} 
                ref={ref} >
                <primitive object={glb.scene} />
            </mesh>
            <Html
                center
                >
                <span className="rotation-icon">
                    <img src="/icons/rotation.png" alt="icon"/>
                </span>
            </Html>
        </group>
    )
}

export default Earth;