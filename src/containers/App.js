import React from 'react';
import './App.css';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';

function App() {
  return (
    <div className='tc'>
      <h1>Pokedex</h1>
      <h3>Search your favourite pokemon and find more about it!</h3>
      <SearchForm />
      <Card />
    </div>
  );
}

export default App;
