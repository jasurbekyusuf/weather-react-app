import React from 'react';

export function WeatherDetails({data}) {
    return (
        <ul className="list">
            <li className="list_item">
                <span>Wind</span>
                <span className="info">{data.wind.speed}km/h</span>
            </li>
            <li className="list_item">
                <span>Feels Like</span>
                <span className="info">{data.main.feels_like}</span>
            </li>
            <li className="list_item">
                <span>Humidity</span>
                <span className="info">{data.main.humidity}%</span>
            </li>
            <li className="list_item">
                <span>Rain</span>
                <span className="info">{data.rain && data.rain["1h"]}</span>
            </li>
        </ul>
    );
}

