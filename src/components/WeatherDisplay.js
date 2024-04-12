import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const WeatherDisplay = () => {
  const { weather, loading, error } = useSelector((state) => state.weather);

  if (loading) return <Spinner animation="border" role="status"></Spinner>;
  if (error) return <div className="alert alert-danger mt-2">Error: No Results Found</div>;
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const { temp, feels_like, humidity } = main;
  const { main: condition, description } = weatherDetails[0];

  return (
    <div className="weather-display">
      <h2 className="text-center mb-4">{name}</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td><strong>Temperature</strong></td>
            <td>{temp}°C</td>
          </tr>
          <tr>
            <td><strong>Feels like</strong></td>
            <td>{feels_like}°C</td>
          </tr>
          <tr>
            <td><strong>Humidity</strong></td>
            <td>{humidity}%</td>
          </tr>
          <tr>
            <td><strong>Condition</strong></td>
            <td>{condition}</td>
          </tr>
          <tr>
            <td><strong>Description</strong></td>
            <td>{description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherDisplay;
