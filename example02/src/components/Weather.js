import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Weather = (props) => {
    const glb = useLoader(GLTFLoader, '/models/weather.glb')
    console.log(glb.nodes)
    return(
        <mesh position={props.position}>
            <primitive object={glb.nodes[props.weather]} />
        </mesh>
    )
}

export default Weather;