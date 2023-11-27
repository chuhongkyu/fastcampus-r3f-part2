import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion-3d";
import { CityName } from "./CityName";
import { useNavigate } from "react-router-dom";

const Weather = (props) => {
    const { position, cityName, rotation, weather } = props;
    const glb = useLoader(GLTFLoader, '/models/weather.glb')
    const ref = useRef(null)
    const [isHover, setHover] = useState(false)

    const weatherModel = useMemo(() => {
        const clonedModel = glb.nodes[weather] || glb.nodes.cloud
        return clonedModel.clone()
    }, [weather])

    useFrame((_,delta)=>{
        ref.current.rotation.y += delta;
    })
    
    const navigate =  useNavigate()
    const [path, setPath] = useState('');

    useEffect(()=> {
        if (cityName) {
            const formattedName = cityName.replace(/\s/g, '').toLowerCase();
            setPath(formattedName);
        }
    },[cityName])

    const onClick = () => {
        navigate(`/${path}`)
    }

    return(
        <group
            position={position} 
            rotation={rotation}
            >
            <motion.mesh 
                ref={ref}
                onPointerEnter={()=> setHover(true)}
                onPointerOut={()=> setHover(false)}
                onClick={onClick}
                whileHover={{scale:1.5, transition:{duration:0.5}}} 
                >
                <primitive object={weatherModel} />
            </motion.mesh>
            {isHover && <CityName name={cityName}/>}
        </group>
    )
}

export default Weather;