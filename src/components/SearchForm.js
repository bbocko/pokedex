import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [pokemonName, setPokemonName] = useState('');

    const handleChange = (e) => {
        setPokemonName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(pokemonName.toLowerCase());
    }

    return (
        <div className='mb3'>
            <form id='searchForm' onSubmit={handleSubmit}>
                <input
                    className='ba b--black-20 pa2 mb2 w-100"'
                    type='text'
                    placeholder='Pokemon name or ID'
                    value={pokemonName}
                    onChange={handleChange}
                />
                <button
                    className='f5 br2 ba ph2 pv2 ml2 dib dark-blue pointer'
                    type='submit'
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchForm;