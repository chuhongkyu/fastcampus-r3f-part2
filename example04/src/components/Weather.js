import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion-3d";

const Weather = (props) => {
    const { position, rotation, weather } = props;
    const glb = useLoader(GLTFLoader, '/models/weather.glb')

    const weatherModel = useMemo(() => {
        const clonedModel = glb.nodes[weather] || glb.nodes.cloud
        return clonedModel.clone()
    }, [weather])

    return(
        <motion.mesh whileHover={{scale:1.5, transition:{duration:0.5}}} position={position} rotation={rotation}>
            <primitive object={weatherModel} />
        </motion.mesh>
    )
}

export default Weather;