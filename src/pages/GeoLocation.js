// import axios from "axios";
// import { useEffect, useState } from "react";

// const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`
// const API_key = `442a81c4f1406a8c0fac4a5aad6874aa`

const GeoLocation = () => {

    // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');
    // const [resData, setResData] = useState();

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         setLatitude(position.coords.latitude)
    //         setLongitude(position.coords.longitude)
    //     })

    //     // console.log(`${API_endpoint}lat=${latitude}&lon=${longtitude}&exclude=hourly,daily&appid=${API_key}`)

    //     let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
    //     // console.log(finalAPIEndPoint)
    //     axios.get(finalAPIEndPoint)
    //         .then((response) => {
    //                setResData(response.data)
    //             // console.log(response.data)
    //         })

    // }, []);

    return (
        <article className="">
            {/* <h1>{resData.name}</h1>
            <p>{resData.sys.country}</p> */}
        </article>
    );
}

export default GeoLocation;