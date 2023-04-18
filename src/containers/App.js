import React, { useState } from 'react';
import './App.css';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';
import axios from 'axios';

const App = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);

  const handleSearch = async (pokemonName) => {
    try {
      // Fetch pokemon data
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = response.data;
      setPokemonData(data);

      // Fetch pokemon species data
      const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
      const speciesData = speciesResponse.data;
      setSpeciesData(speciesData);
    } catch (error) {
      alert('Something went wrong, please try again')
      console.error('Error fetching data:', error);
    }
  }


  return (
    <div className='tc'>
      <h1>Pokedex</h1>
      <h3>Search your favourite pokemon and find more about it!</h3>
      <SearchForm onSearch={handleSearch} />
      {pokemonData && <Card pokemonData={pokemonData} speciesData={speciesData} />}
    </div>
  );
}

export default App;