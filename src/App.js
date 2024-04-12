import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';



function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5 text-center" style={{margin:'0 auto',maxWidth:'600px'}}>
        <h3 className='mb-2'>Weather App</h3>
        <SearchBar />
        <WeatherDisplay />
        <ForecastDisplay />
      </div>
    </Provider>
  );
}

export default App;
