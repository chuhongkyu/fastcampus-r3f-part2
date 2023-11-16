import { useHelper } from "@react-three/drei";
import { useRef } from "react";

const Lights = () => {
    const drectRef = useRef()
    // useHelper(drectRef, DirectionalLightHelper, 'cyan')
    return(
        <>
            <directionalLight ref={drectRef} position={[0,5,5]} intensity={1.4} castShadow />
            <ambientLight intensity={0.5} color="#ffffff" />
        </>
    )
}

export default Lights;