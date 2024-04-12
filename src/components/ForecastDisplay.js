import React from 'react';
import { useSelector } from 'react-redux';

const ForecastDisplay = () => {
  const { forecast, loading, error } = useSelector((state) => state.weather);

  if (loading) return <div>Loading forecast...</div>;
  if (!forecast) return null;

  return (
    <div>
        <h2 className="text-center mb-4">Forecast</h2>
    </div>
  );
};

export default ForecastDisplay;
