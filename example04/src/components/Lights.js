import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const drectRef = useRef()
    // useHelper(drectRef, DirectionalLightHelper, 'cyan')
    return(
        <>
            <directionalLight ref={drectRef} position={[0,5,5]} intensity={1.4} castShadow />
            <ambientLight intensity={2} color="white" />
        </>
    )
}

export default Lights;