
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import WeatherDisplay from './WeatherDisplay';

const mockStore = configureStore([]);

describe('WeatherDisplay component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      weather: {
        weather: {
          name: 'London',
          main: { temp: 20, feels_like: 18, humidity: 70 },
          weather: [{ main: 'Clear', description: 'clear sky' }],
        },
        loading: false,
        error: null,
      },
    });
  });

  it('renders weather information', () => {
    render(
      <Provider store={store}>
        <WeatherDisplay />
      </Provider>
    );

    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('Temperature: 20°C')).toBeInTheDocument();
    expect(screen.getByText('Feels like: 18°C')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 70%')).toBeInTheDocument();
    expect(screen.getByText('Condition: Clear')).toBeInTheDocument();
    expect(screen.getByText('Description: clear sky')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    store = mockStore({
      weather: { loading: true, error: null },
    });

    render(
      <Provider store={store}>
        <WeatherDisplay />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    store = mockStore({
      weather: { loading: false, error: 'An error occurred' },
    });

    render(
      <Provider store={store}>
        <WeatherDisplay />
      </Provider>
    );

    expect(screen.getByText('Error: An error occurred')).toBeInTheDocument();
  });
});
