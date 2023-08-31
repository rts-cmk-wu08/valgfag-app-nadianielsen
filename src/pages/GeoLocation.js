import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const APIEndpoint = `https://api.openweathermap.org/data/2.5/weather?`
const APIKey = `442a81c4f1406a8c0fac4a5aad6874aa`

const GeoLocation = () => {

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [resData, setResData] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        // console.log(`${API_endpoint}lat=${latitude}&lon=${longtitude}&exclude=hourly,daily&appid=${API_key}`)
    }, []);

    useEffect(() => {
        //laver en if statement hvor den tjekker om latitude og longitude er der
        if(latitude && longitude) {
            let finalAPIEndPoint = `${APIEndpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${APIKey}&units=metric`
            // console.log(finalAPIEndPoint)
            axios.get(finalAPIEndPoint)
                .then((response) => {
                       setResData(response.data)
                    console.log(response.data)
                })
        }

    }, [latitude, longitude]);

    //resData er her, fordi man ved ikke hvornår dataen kommer fra useEffecten, hvis resdata ikke står der i returnet
    return !resData ? (<p>Finding location...</p>) : (
    <article className="grid gap-y-6 my-4">
        {/* <article className="flex flex-col gap-y-2 justify-center items-center place-self-center bg-neutral-300/30 w-60 py-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">{resData.name}</h2>
            <p>{resData.sys.country}</p>
            <p className="text-lg font-semibold">{resData.main.temp} C&deg;</p>
            <p>{resData.weather[0].main}</p>
        </article> */}
            <h2 className="text-xl font-bold place-self-center">{resData.name}</h2>
        <article className="w-60 h-60 bg-neutral-300/50 border-2 rounded-full place-self-center flex flex-col justify-center items-center gap-y-3 shadow-md">
            <p>{resData.weather[0].main}</p>
            <p className="text-3xl font-semibold">{resData.main.temp} C&deg;</p>
            <img className="w-16 h-16" src={`https://openweathermap.org/img/wn/${resData.weather[0].icon}@2x.png`} alt="weatherIcon" />
        </article>
        <article className="w-[18rem] h-[17rem] bg-white/40 place-self-center rounded-2xl border-2">
        </article>
    </article>
    );
}

export default GeoLocation;