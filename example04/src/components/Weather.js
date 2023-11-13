import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion-3d";

const Weather = (props) => {
    const { position, rotation, weather } = props;
    const glb = useLoader(GLTFLoader, '/models/weather.glb')
    const ref = useRef(null)

    const weatherModel = useMemo(() => {
        const clonedModel = glb.nodes[weather] || glb.nodes.cloud
        return clonedModel.clone()
    }, [weather])

    useFrame((_,delta)=>{
        ref.current.rotation.y += delta;
    })

    return(
        <motion.mesh ref={ref}
            whileHover={{scale:1.5, transition:{duration:0.5}}} 
            position={position} 
            rotation={rotation}>
            <primitive object={weatherModel} />
        </motion.mesh>
    )
}

export default Weather;