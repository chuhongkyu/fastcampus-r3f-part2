import { useLoaderData } from "react-router-dom";
import { Content } from "../components/Content";

const Losangeles = () =>{
    const data = useLoaderData()

    return(
        <div className="layout-detail">
            <section className="left">
                <img src="/images/05.jpg" alt="Losangeles"/>
            </section>
            <section className="right">
                <Content data={data.weatherData}/>
            </section>
        </div>
    )
}

export default Losangeles;