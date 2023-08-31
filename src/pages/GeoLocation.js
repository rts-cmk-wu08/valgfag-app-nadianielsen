import axios from "axios";
import { useEffect, useState } from "react";
import { BsWind } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import DateComponent from "../components/DateComponent";

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

    }, []);

    useEffect(() => {
        //laver en if statement hvor den tjekker om latitude og longitude er der
        if (latitude && longitude) {
            let finalAPIEndPoint = `${APIEndpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${APIKey}&units=metric`
            // console.log(finalAPIEndPoint)
            axios.get(finalAPIEndPoint)
                .then((response) => {
                    setResData(response.data)
                    // console.log(response.data)
                })
        }

    }, [latitude, longitude]);

    //resData er her, fordi man ved ikke hvornår dataen kommer fra useEffecten, hvis resdata ikke står der i returnet
    return !resData ? (<p className="p-2">Finding location...</p>) : (
        <article className="grid gap-y-6 my-4">
            {/* <article className="flex flex-col gap-y-2 justify-center items-center place-self-center bg-neutral-300/30 w-60 py-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold">{resData.name}</h2>
            <p>{resData.sys.country}</p>
            <p className="text-lg font-semibold">{resData.main.temp} C&deg;</p>
            <p>{resData.weather[0].main}</p>
        </article> */}
            <DateComponent />
            <h2 className="text-xl font-bold place-self-center">{resData.name}</h2>
            <article className="w-60 h-60 bg-neutral-300/40 rounded-full place-self-center flex flex-col justify-center items-center gap-y-3 shadow-md border-2">
                <p>{resData.weather[0].main}</p>
                <p className="text-3xl font-semibold">{resData.main.temp.toFixed()} &deg;C</p>
                <img className="w-16 h-16" src={`https://openweathermap.org/img/wn/${resData.weather[0].icon}@2x.png`} alt="weatherIcon" />
            </article>
            <article className="w-[18rem] h-auto bg-neutral-300/40 place-self-center rounded-2xl shadow-md grid grid-cols-2 gap-4 py-6">
                {resData.main ? <section className="px-8">
                    <h2 className="flex gap-1 font-semibold">Feels like</h2>
                    <p>{resData.main.feels_like.toFixed()} &deg;C</p>
                </section> : null}
                {resData.main ? <section className="px-8">
                    <h2 className="flex gap-1 font-semibold">Min <FaArrowDown className="my-1" /></h2>
                    <p>{resData.main.temp_min.toFixed()} &deg;C</p>
                </section> : null}
                {resData.main ? <section className="px-8">
                    <h2 className="flex gap-1 font-semibold">Max <FaArrowUp className="my-1" /></h2>
                    <p>{resData.main.temp_max.toFixed()} &deg;C</p>
                </section> : null}
                {resData.main ? <section className="px-8">
                    <h2 className="flex gap-1 font-semibold">Pressure</h2>
                    <p>{resData.main.pressure}</p>
                </section> : null}
                {resData.main ? <section className="px-8">
                    <h2 className="font-semibold">Humidity</h2>
                    <p className="flex gap-1">{resData.main.humidity} <WiHumidity className="my-1 text-lg" /></p>
                </section> : null}
                {resData.main ? <section className="px-8">
                    <h2 className="font-semibold">Wind</h2>
                    <p className="flex gap-1">{resData.wind.speed} <BsWind className="my-1" /></p>
                </section> : null}
            </article>
        </article>
    );
}

export default GeoLocation;