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
            setLocation('')
        })
        }
    }

    // console.log(data)

    return ( 
        <article className="grid gap-y-6 my-4">
            <input type="text" name="" id="" className="h-10 w-72 place-self-center rounded-full shadow-md bg-neutral-300/30 border-2 placeholder:text-white" 
            value={location} 
            onChange={event => setLocation(event.target.value)} 
            onKeyUpCapture={searchLocation} 
            placeholder="  Enter Location"/>
            {data.main ? 
            <article className="flex flex-col gap-y-2 justify-center items-center place-self-center bg-neutral-300/30 w-60 py-4 rounded-2xl shadow-md">
                <h2 className="text-3xl">{data.name}</h2>
                {data.main ? <h1 className="text-lg">{data.main.temp} C&deg;</h1> : null}
                {data.weather ? <p>{data.weather[0].main}</p> : null}
                {/* <p className="relative -rotate-90 -right-20">clouds</p> */}
            </article>
            : null
            }
            {data.main ?
            <article className="grid grid-flow-col gap-x-6 bg-neutral-300/30 shadow-md rounded-2xl w-72 place-self-center py-4">
                <section className="place-self-center">
                    <h2>Feels like:</h2>
                    {data.main ? <p>{data.main.feels_like} C&deg;</p> : null }
                </section>
                <section >
                    <h2>Minium:</h2>
                    {data.main ? <p>{data.main.temp_min} C&deg;</p> : null }
                </section>
                <section>
                    <h2>Maxium:</h2>
                    {data.main ? <p>{data.main.temp_max} C&deg;</p> : null }
                </section>
            </article>
            : null
            }
        </article>
     );
}
 
export default Home;