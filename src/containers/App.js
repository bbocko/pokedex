import React, { useState } from 'react';
import './App.css';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';
import axios from 'axios';

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = response.data;
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  }

  return (
    <div className='tc'>
      <h1>Pokedex</h1>
      <h3>Search your favourite pokemon and find more about it!</h3>
      <SearchForm onSearch={handleSearch} />
      {pokemonData && <Card pokemonData={pokemonData} />}
    </div>
  );
}

export default App;