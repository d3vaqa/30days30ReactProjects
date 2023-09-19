import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [units, setUnits] = useState('metric'); // Celsius by default
  const [showForecast, setShowForecast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'Your_API_key Goes_here'; // Replace with your OpenWeatherMap API key

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchFiveDayForecast = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setForecast(data.list);
      setShowForecast(true);
    } catch (err) {
      setError(err.message);
      setForecast([]);
      setShowForecast(false);
    } finally {
      setLoading(false);
    }
  };

  // Function to create or update the Chart.js chart
  const createOrUpdateChart = (forecastData) => {
    const chartCanvas = document.getElementById('weatherChart');
  
    if (!chartCanvas) {
      return; // Chart canvas not found
    }
  
    const temperatureData = forecastData.map((item) => item.main.temp);
    const dateLabels = forecastData.map((item) => new Date(item.dt * 1000).toLocaleDateString());
  
    // Check if a chart instance already exists
    if (window.weatherChart) {
      try {
        // Destroy the existing chart
        window.weatherChart.destroy();
      } catch (err) {
        // Handle the error if it occurs
      }
    }
  
    // Create a new chart instance
    window.weatherChart = new Chart(chartCanvas, {
      type: 'line', // Use a line chart
      data: {
        labels: dateLabels,
        datasets: [
          {
            label: 'Temperature (°C)', // Label for the dataset
            data: temperatureData, // Temperature data
            fill: false, // Don't fill the area under the line
            borderColor: '#007bff', // Line color
            borderWidth: 2, // Line width
          },
        ],
      },
      options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, // Maintain aspect ratio
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date', // X-axis title
            },
          },
          y: {
            title: {
              display: true,
              text: 'Temperature (°C)', // Y-axis title
            },
          },
        },
      },
    });
  };

  // Use useEffect to create or update the chart when forecast data changes
  useEffect(() => {
    if (showForecast) {
      createOrUpdateChart(forecast);
    }
  }, [forecast, showForecast]);

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
        <button onClick={fetchFiveDayForecast}>Get 5-Day Forecast</button>
        <button onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}>
          Toggle Units
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && (
        <div className="weather-data">
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p className="temperature">{weatherData.main.temp}°{units === 'metric' ? 'C' : 'F'}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Visibility: {weatherData.visibility / 1000} km</p>
          <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      )}

      {showForecast && (
        <div>
          <h2>5-Day Forecast for {city}</h2>
          <div className="chart-container">
            <canvas id="weatherChart"></canvas> {/* Canvas for the Chart.js chart */}
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
