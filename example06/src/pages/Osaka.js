import { useLoaderData } from "react-router-dom";
import { Content } from "../components/Content";

const Osaka = () =>{
    const data = useLoaderData()

    return(
        <div className="layout-detail">
            <section className="left">
                <img src="/images/04.jpg" alt="Osaka"/>
            </section>
            <section className="right">
                <Content data={data.weatherData}/>
            </section>
        </div>
    )
}

export default Osaka;