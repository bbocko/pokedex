import React from 'react';

const Card = ({ pokemonData }) => {
    const imageUrl = pokemonData.sprites.other['official-artwork']?.front_default || pokemonData.sprites.front_default;
    const pokemonID = pokemonData.id;
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const pokemonName = capitalizeFirstLetter(pokemonData.name);
    const pokemonType = pokemonData.types[0].type.name.toUpperCase();

    return (
        <div className="tc bg-washed-red ba dib br3 pa3 ma2 bw1 shadow-5">
            <img src={imageUrl} alt='Pokemon Sprite' />
            <div>
                <h2>{pokemonID} {pokemonName}</h2>
            </div>
            <div>
                <button className='f4 br3 dib ph2 pv1 bg-light-red'>{pokemonType}</button>
            </div>
            {/* <div className='tl'>
                <p>HT {pokemon height}</p>
                <p>WT {pokemoon weight}</p>
                <p className='tc lh-copy measure-narrow'>{pokemon description}</p>
            </div> */}
        </div>
    );
}

export default Card;
