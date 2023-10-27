import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Weather = (props) => {
    const { position, weather } = props;
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
        <mesh position={position}>
            <primitive object={weatherModel} />
        </mesh>
    )
}

export default Weather;