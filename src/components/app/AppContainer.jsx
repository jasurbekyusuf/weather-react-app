import React from 'react';
import "./assets/app.css"
import {WeatherWrapper} from "../weather/WeatherWrapper";

export function AppContainer() {
    return (
        <div className="app-wrapper">
            <WeatherWrapper />
        </div>
    );
}

