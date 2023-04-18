import React from 'react';

const Card = ({ pokemonData, speciesData }) => {
    const imageUrl = pokemonData.sprites.other['official-artwork']?.front_default || pokemonData.sprites.front_default;
    const pokemonID = pokemonData.id;

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const pokemonName = capitalizeFirstLetter(pokemonData.name);

    const pokemonType = pokemonData.types[0].type.name.toUpperCase();

    const convertToMeters = (height) => {
        return (height / 10).toFixed(1);
    };
    const height = pokemonData.height;
    const heightInMeters = convertToMeters(height);

    const weight = pokemonData.weight / 10;

    const flavorText = speciesData ? speciesData.flavor_text_entries[9]?.flavor_text || '' : '';
    const description = flavorText.replace(/POKéMON/g, 'Pokemon')

    return (
        <div className="tc bg-washed-blue ba dib br3 pa3 ma2 bw1 shadow-5">
            <img src={imageUrl} alt='Pokemon Sprite' />
            <div>
                <h2>{pokemonID} {pokemonName}</h2>
            </div>
            <div>
                <button style={{ pointerEvents: 'none' }} className='f4 br3 dib ph2 pv1'>{pokemonType}</button>
            </div>
            <div className='tl'>
                <p>HT {heightInMeters} m</p>
                <p>WT {weight} kg</p>
                <p className='tc lh-copy'>{description}</p>
            </div>
        </div>
    );
}

export default Card;
