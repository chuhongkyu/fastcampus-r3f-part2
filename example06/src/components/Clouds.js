import { Cloud } from "@react-three/drei"

const Clouds = () => {
    return(
        <group position={[0,-1.5,0]}>
            <Cloud
                position-x={-5}
                opacity={0.4}
                speed={0.4}
                width={0.1}
                depth={0.2}
                segments={3}
                color="white"
            />
            <Cloud
                position-x={5}
                opacity={0.4}
                speed={0.4}
                width={0.1}
                depth={0.2}
                segments={3}
                color="white"
            />
        </group>
    )
}

export default Clouds