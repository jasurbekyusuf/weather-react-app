import React, {useState} from 'react';
import {weekday} from "../../assets/constants";

export function WeatherInfoBody({data}) {
    const [date] = useState(new Date());

    return (
        <div className="weather_info-body">
            <div className="current_temp">
                <h1 >{data.main.temp}°</h1>
            </div>
            <div className="weather_info-content_item">
                <h2 className="info_name">{data.name}</h2>
                <p>{date.getHours()}:{date.getMinutes()}{" "}{weekday[date.getDay()]}</p>
            </div>
            <div className="weather_info-content_item">
                <div>
                    <img width={50} height={50} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/>
                </div>
                <p>{data.weather[0].main}</p>
            </div>
        </div>
    );
}

