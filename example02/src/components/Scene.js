import Earth from "./Earth";
import Weather from "./Weather";

const Scene = () => {
    return(
        <>
            <Earth position={[0,-2,0]}/>
            <Weather position={[0.5,0,0]} weather={'rain'}/>
            <Weather position={[0,0,0]} weather={'clear'}/>
            <Weather position={[-0.5,0,0]} weather={'snow'} />
        </>
    )
}

export default Scene;