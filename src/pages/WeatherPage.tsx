import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

interface WeatherTypes {
    feels_like: 33.46;
    humidity: 80;
    pressure: 1001;
    temp: 28.53;
}

export default function WeatherPage() {
    const [location, setLocation] = useState("kolkata");
    const [weatherData, setWeatherData] = useState<WeatherTypes>();
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    const getWeatherData = async (l: string) => {
        try {
            const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${l}&appid=${import.meta.env.VITE_OPENWEATHER_MAP_API
                }&units=metric`;
            const response = await axios.get(endPoint);
            setWeatherData(response.data.main);
        } catch (error: any) {
            setError(error.response.data.message)
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)
        }
    };

    const handelSearch = () => {
        getWeatherData(location);
    }
    useEffect(() => {
        getWeatherData(location)
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex items-center justify-center relative">
            <div className="w-[350px] p-4 rounded-md border border-gray-600">
                <h1 className="text-2xl font-bold mb-3">Weather Forecast</h1>
                <div className="flex gap-2">
                    <input
                        placeholder="Enter Location"
                        type="text"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    />
                    <button onClick={handelSearch} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex gap-2 items-center text-sm">
                        <Search />
                    </button>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                    <div>
                        <p className="flex justify-between items-center">
                            Current Temperature: <span className="font-bold">{weatherData?.temp || 0}</span>
                        </p>
                    </div>
                    <div>
                        <p className="flex justify-between items-center">
                            Feels Like: <span className="font-bold">{weatherData?.feels_like || 0}</span>
                        </p>
                    </div>
                    <div>
                        <p className="flex justify-between items-center">
                            Pressure: <span className="font-bold">{weatherData?.pressure || 0}</span>
                        </p>
                    </div>
                    <div>
                        <p className="flex justify-between items-center">
                            Humidity: <span className="font-bold">{weatherData?.humidity || 0}</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* Error Message */}
            {showError && <div className="absolute top-12 right-12 w-[300px] px-4 py-2 bg-red-200 rounded-md">
                <p>{error}</p>
            </div>}
        </div>
    );
}
