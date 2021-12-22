import sunnyImage from "../components/weather/assets/sunny.jpg"
import ThunderstormImage from "../components/weather/assets/Thunderstorm.jpg"
import DrizzleImage from "../components/weather/assets/rain.jpg"
import SnowImage from "../components/weather/assets/snow.jpg"
import MistImage from "../components/weather/assets/mist.jpg"
import CloudImage from "../components/weather/assets/cloud.jpg"
import SmokeImage from "../components/weather/assets/smoke.jpg"

export const api = {
    baseApi: "https://api.openweathermap.org/data/2.5/",
    apiKey: "3b64cd38ec9cbfdfeaffcb512197041b"
};

export const weatherMain = [
    {
        value: "Clouds",
        media: CloudImage
    },
    {
        value: "Thunderstorm",
        media: ThunderstormImage
    },
    {
        value: "Drizzle",
        media: DrizzleImage
    },
    {
        value: "Haze",
        media: SmokeImage
    },
    {
        value: "Rain",
        media: DrizzleImage
    },
    {
        value: "Snow",
        media: SnowImage
    },
    {
        value: "Clear",
        media: sunnyImage
    },
    {
        value: "Mist",
        media: MistImage
    },
    {
        value: "Smoke",
        media: SmokeImage
    },
];

export const uzbRegions = [
    "Tashkent",
    "Namangan",
    "Jizzakh",
    "Andijan",
    "Fergana",
    "Nukus",
    "Urgench",
    "Bukhara",
    "Navoiy",
    "Qarshi",
    "Guliston",
    "Nurafshon",
    "Termez",
    "Samarkand",
];

export const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];