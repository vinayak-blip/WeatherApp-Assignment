import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(query));
    setQuery('');
  };

  return (
    <Form  onSubmit={handleSubmit} className="mb-2 d-flex align-items-center">
      <Form.Control
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter location..."
        className="mr-2 "
        style={{ borderRadius: '20px 0 0 20px' }}
      />
      <Button type="submit" variant="primary" style={{ borderRadius: '0 20px 20px 0' }}>Search</Button>
    </Form>
  );
};

export default SearchBar;
