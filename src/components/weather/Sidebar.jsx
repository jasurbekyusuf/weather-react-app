import React from 'react';
import "./assets/sidebar.css"
import {RegionsList} from "./RegionsList";
import {Search} from "./Search";
import {WeatherInfoBody} from "./WeatherInfoBody";
import {WeatherDetails} from "./WeatherDetails";

export function Sidebar({data, onRegionClick, onSearch, loading, error}) {
    return (
        <div className="sidebar">
            <Search onSearch={onSearch}/>
            <div className="sidebar_weather-info">
                {loading ? <h1>Loading...</h1> : (
                    !data ? (
                        <h2>{error?.message}</h2>
                    ) : (
                        <WeatherInfoBody data={data} />
                    )
                )}
            </div>
            <div className="sidebar_list-root">
                <div className="list-container">
                    <RegionsList onItemClick={onRegionClick}/>
                </div>
            </div>
            <div className="sidebar_list-root">
                <div className="list-container">
                    <h2>Weather Details</h2>
                    {data && <WeatherDetails data={data}/>}
                </div>
            </div>
        </div>
    );
}

