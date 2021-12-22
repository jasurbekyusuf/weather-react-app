import React, {useEffect, useState} from 'react';
import "./assets/weather-wrapper.css"
import axios from "axios";
import {api, weatherMain, weekday} from "../../assets/constants";
import {Sidebar} from "./Sidebar";
import {WeatherInfoBody} from "./WeatherInfoBody";
export function WeatherWrapper() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentLocation, setCurrentLocation] = useState("Tashkent");
    const [media, setMedia] = useState("Clear");
    useEffect(() => {
        setLoading(true)
        axios.get(`${api.baseApi}weather?q=${currentLocation}&appid=${api.apiKey}&units=metric`).then(res => {
            setData(res.data);
            weatherMain?.forEach(item => {
                console.log(item.value.toLowerCase(),res.data.weather[0].main.toLowerCase())
                if (item.value.toLowerCase() === res.data.weather[0].main.toLowerCase()) {
                    setMedia(item.media);
                    console.log(item.media);
                }
            })
            setLoading(false)
        }).catch(err => {
            setLoading(false);
            setData(null)
            setError(err.response.data)
            console.log(err.response.data)
        })
    }, [currentLocation]);

    return (
        <div className="weather-wrapper" style={{
            background: `url(${media}) center center no-repeat`,
        }}>
            <div className="weather_info">
               <div className="container">
                   <h2>the.weather</h2>

                   {loading ? <h1>Loading...</h1> : (
                       !data ? (
                           <h2>{error?.message}</h2>
                       ) : (
                           <WeatherInfoBody data={data} />
                       )
                   )}
               </div>
            </div>
            <Sidebar error={error} loading={loading} data={data} onRegionClick={(regionName) => setCurrentLocation(regionName)} onSearch={(regionName) => {
                setCurrentLocation(regionName)
            }}/>
        </div>
    );
}

