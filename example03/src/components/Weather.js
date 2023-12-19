// weather model by (Rob Li) - https://sketchfab.com/3d-models/weather-3d-icon-visualisation-baked-cfb4c4a6af7344f985f8b0296c67988b

import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Weather = (props) => {
    const { position, weather } = props;
    const glb = useLoader(GLTFLoader, '/models/weather.glb')

    const weatherModel = useMemo(() => {
        const clonedModel = glb.nodes[weather] || glb.nodes.cloud
        return clonedModel.clone()
    }, [weather])

    return(
        <mesh position={position}>
            <primitive object={weatherModel} />
        </mesh>
    )
}

export default Weather;