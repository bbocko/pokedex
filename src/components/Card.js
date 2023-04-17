import React from 'react';

const Card = () => {
    return (
        <div className="tc bg-washed-red ba dib br3 pa3 ma2 bw1 shadow-5">
            {/* <img src="{url from API}" alt='{pokemon name or ID} sprite' /> */}
            <div>
                {/* <h2>{pokemon ID} {pokemon name}</h2> */}
                {/* <h3>{pokemon species} Pokemon</h3> */}
            </div>
            <div>
                {/* <button className='f4 br3 dib ph2 pv1 bg-light-red'>{pokemon type}</button> */}
            </div>
            <div className='tl'>
                {/* <p>HT {pokemon height}</p> */}
                {/* <p>WT {pokemoon weighz} lbs</p> */}
                {/* <p className='tc lh-copy measure-narrow'>{pokemon description}</p> */}
            </div>
        </div>
    );
}

export default Card;