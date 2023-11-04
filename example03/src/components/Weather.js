import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Weather = (props) => {
    const { position, weather } = props;
    const glb = useLoader(GLTFLoader, '/models/weather.glb')

    const weatherModel = useMemo(() => {
        const clonedModel = gltf.nodes[weather] || gltf.nodes.cloud
        return clonedModel.clone()
    }, [weather])

    return(
        <mesh position={position}>
            <primitive object={weatherModel} />
        </mesh>
    )
}

export default Weather;