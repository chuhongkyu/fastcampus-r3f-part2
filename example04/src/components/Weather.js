import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion-3d";

const Weather = (props) => {
    const { position, rotation, weather } = props;
    const glb = useLoader(GLTFLoader, '/models/weather.glb')

    const weatherModel = useMemo(() => {
        if (glb.nodes[weather]) {
            const clonedModel = glb.nodes[weather].clone();
            return clonedModel;
        }else{
            const clonedModel = glb.nodes.cloud.clone();
            return clonedModel;
        }
    }, [weather])

    return(
        <motion.mesh whileHover={{scale:1.5, transition:{duration:0.5}}} position={position} rotation={rotation}>
            <primitive object={weatherModel} />
        </motion.mesh>
    )
}

export default Weather;