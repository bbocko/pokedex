import React from 'react';

const Card = () => {
    return (
        <div className="tc bg-washed-red ba dib br3 pa3 ma2 bw1 shadow-5">
            <img src='https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/chimchar.png' alt='chimchar sprite' />
            <div>
                <h2>390 CHIMCHAR</h2>
                <h3>Chimp Pokemon</h3>
            </div>
            <div>
                <button className='f4 br3 dib ph2 pv1 bg-light-red'>FIRE</button>
            </div>
            <div className='tl'>
                <p>HT 1'08''</p>
                <p>WT 13.7 lbs</p>
                <p className='tc lh-copy measure-narrow'>The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.</p>
            </div>
        </div>
    );
}

export default Card;