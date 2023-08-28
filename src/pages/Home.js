import { useState } from "react";
import axios from "axios";

const Home = () => {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=442a81c4f1406a8c0fac4a5aad6874aa`

    const searchLocation = (event) => {
        if(event.key === "Enter") {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
            setLocation('')
        })
        }
    }

    console.log(data)

    return ( 
        <article className="grid gap-y-4">
            <input type="text" name="" id="" className="w-[70%] h-12 rounded-full bg-neutral-300/40 border-2 relative placeholder:text-neutral-100" 
            value={location} 
            onChange={event => setLocation(event.target.value)} 
            onKeyUpCapture={searchLocation} 
            placeholder=" Enter Location"/>
            <article className="flex flex-col justify-center items-center">
                <h2>{data.name}</h2>
                {data.main ? <h1>{data.main.temp} C&deg;</h1> : null}
                {data.weather ? <p>{data.weather[0].main}</p> : null}
                {/* <p className="relative -rotate-90 -right-20">clouds</p> */}
            </article>
            
            <article className="grid grid-flow-col place-content-center gap-x-6">
                <section>
                    {data.main ? <p>{data.main.feels_like} C&deg;</p> : null }
                </section>
                <section>
                    {data.main ? <p>{data.main.temp_min} C&deg;</p> : null }
                </section>
                <section>
                    {data.main ? <p>{data.main.temp_max} C&deg;</p> : null }
                </section>
            </article>
        </article>
     );
}
 
export default Home;