import { Environment, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const drectRef = useRef()
    // useHelper(drectRef, DirectionalLightHelper, 'cyan')
    return(
        <>
            <Environment preset="forest"/>
            <directionalLight ref={drectRef} position={[0,5,5]} intensity={1.4} castShadow />
            <ambientLight intensity={1} color="white" />
        </>
    )
}

export default Lights;