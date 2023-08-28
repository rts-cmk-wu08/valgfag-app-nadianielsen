import { useState } from "react";
import axios from "axios";

const Home = () => {

    const [data, setData] = useState();
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WA_KEY}`

    const searchLocation = (event) => {
        if(event.key === "Enter")
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }

    return ( 
        <article className="grid gap-y-4">
            <input type="search" name="" id="" className="w-[70%] h-12 rounded-full bg-neutral-300/40 border-2 relative placeholder:text-neutral-100" value={location} onChange={event => setLocation(event.target.value)} placeholder=" Enter Location"/>
            <article className="flex flex-col justify-center items-center">
                <h2>Roskilde</h2>
                <p>20 C&deg;</p>
                <p className="">clouds</p>
                {/* <p className="relative -rotate-90 -right-20">clouds</p> */}
            </article>
            <article className="grid grid-flow-col place-content-center gap-x-6">
                <section>
                    <p>20 C&deg;</p>
                </section>
                <section>
                    <p>50%</p>
                </section>
                <section>
                    <p>12 MPH</p>
                </section>
            </article>
        </article>
     );
}
 
export default Home;