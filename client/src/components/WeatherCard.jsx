import { useEffect, useState } from "react"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { weatherSuccess } from "../app/slice/weatherSlice";
import Clock from "./Clock";


export default function WeatherCard() {
    const weatherData = useSelector(state => state.weather.weatherData);
    const dispatch = useDispatch();
    const [day, setDay] = useState('');
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [time, setTime] = useState("");
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();



    useEffect(() => {
        const today = new Date();
        const options = { weekday: 'long' };
        const options2 = { month: 'long' };
        const day = today.toLocaleDateString('en-US', options);
        const getDate = today.getDate();
        const getMonth = today.toLocaleString('en-us', options2);
        setDate(getDate);
        setMonth(getMonth);
        setDay(day);
        setTime(today.getHours());
    }, []);
    useEffect(() => {
        const getLocation = () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {

                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                        setLatitude(latitude)
                        setLongitude(longitude)
                    },
                    (error) => {
                        console.error("Error getting location:", error.message);
                    }
                );
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        };


        getLocation();
    }, []);
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d6aba077a0d63d6c988afd1c347f6ac5`)
            .then(response => {
                dispatch(weatherSuccess(response.data));
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [latitude, longitude, dispatch]);

    return (
        <>
            <div className=" text-[#787878] shadow-lg bg-[#101010]  rounded-lg max-w-md mx-auto p-4">
                <div className="flex justify-between">
                    <div className="">
                        <span className="">
                            <Clock />
                        </span>
                        <div className="text-xl"> {day.toUpperCase()}</div>
                        <div>

                            <span className="mr-1">
                                {month}
                            </span>
                            <span className="mx-1">
                                {date}
                            </span>
                        </div>
                        <div className="font-bold">
                            {weatherData.name}
                        </div>
                    </div>
                    <div className="my-auto">
                        {time > 18 ? <img src="./img/Moon.png" className="w-8" /> : <img src="./img/Sun.png" className="w-10" />}

                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <div className="text-xl"><span>{weatherData && weatherData.main && (weatherData.main.temp - 273.15).toFixed(2)}</span>c</div>
                        <div>
                            <span className="mr-1">
                                {weatherData && weatherData.weather && weatherData.weather[0].main}
                            </span>
                            {/* <span className="mx-1">
                                {date}
                            </span> */}
                        </div>
                    </div>
                    <div className="my-auto">
                        <img src={`https://openweathermap.org/img/wn/${weatherData && weatherData.weather && weatherData.weather[0].icon}.png`} className="w-20" />
                    </div>
                    <div className="my-auto">
                        <div className="flex flex-row items-center my-1">
                            <img src="./img/WindSpeed.png" className="w-5" />
                            <span className="mx-1"> {weatherData && weatherData.wind && weatherData.wind.speed}</span>
                        </div>
                        <div className="flex flex-row items-center my-1">
                            <img src="./img/Humidity.png" className="w-5" />
                            <span className="mx-1"> {weatherData && weatherData.main && weatherData.main.humidity}</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}