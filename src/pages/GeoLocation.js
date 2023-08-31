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
            let finalAPIEndPoint = `${APIEndpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${APIKey}`
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
        <article className="grid gap-y-2 my-2">
            <h1 className="text-xl p-2 flex gap-x-2 font-semibold">Your location <FaArrowRight className="my-1.5"/></h1>
            <article className="w-52 py-6 bg-neutral-300/50 border-2 rounded-2xl place-self-center text-center">
                <h2 className="text-xl font-semibold">{resData.name}</h2>
                <p className="text-lg">{resData.sys.country}</p>
            </article>
        </article>
    );
}

export default GeoLocation;