import { Link } from "react-router-dom"


export function Content(props){
    const { data } = props;

    return(
        <div className="container">
            <Link to="/"><div className="x-btn"></div></Link>
            <h1>{data?.name}</h1>
            <h2>{data?.weather[0].main}</h2>
            <div className="texts-group">
                <div className="texts">
                    <p>기온 <span className="temp"/> : {data?.main.temp}</p>
                    <p>max <span className="temp"/> : {data?.main.temp_max}</p>
                    <p>min <span className="temp"/> : {data?.main.temp_min}</p>
                </div>
                <div className="texts">
                    <p>풍향 <span className="wind"/> : {data?.wind.deg} 도</p>
                    <p>속도 <span className="wind"/> : {data?.wind.speed} m/s</p>
                </div>
            </div>
        </div>
    )
}