import { useLoaderData } from "react-router-dom";
import { Content } from "../components/Content";

const NewYork = () =>{
    const data = useLoaderData()

    return(
        <div className="layout-detail">
            <section className="left">
                <img src="/images/02.jpg" alt="NewYork"/>
            </section>
            <section className="right">
                <Content data={data.weatherData}/>
            </section>
        </div>
    )
}

export default NewYork;