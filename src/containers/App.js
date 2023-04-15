import React from 'react';
import './App.css';
// import Card from '../components/Card';
import SearchForm from '../components/SearchForm';

function App() {
  return (
    <div className='tc'>
      <h1>Pokedex</h1>
      <h3>Search your favourite pokemon and find more about it!</h3>
      <SearchForm />
      {/* <Card /> card component needs to be requested via API (implement it on searchbox) */}
    </div>
  );
}

export default App;
