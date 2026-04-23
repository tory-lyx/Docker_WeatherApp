import { useEffect, useState } from 'react'
import './App.css'

type Weather = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

function App() {
  const [weather, setWeather] = useState<Weather[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/weatherforecast")
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Weather Forecast</h1>

      <div className="weather-list">
        {weather.map((item, index) => (
          <div key={index} className="weather-card">
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Temp:</strong> {item.temperatureC}°C</p>
            <p><strong>Summary:</strong> {item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;