import React from 'react';

const SearchForm = () => {
    const handleClick = async function (e) {
        e.preventDefault();
    }
    return (
        <div className='mb3'>
            <form id='searchForm'>
                <input className='ba b--black-20 pa2 mb2 w-100"' type='text' placeholder='Pokemon name or ID' />
                <button className='f5 br2 ba ph2 pv2 ml2 dib dark-blue pointer' onClick={handleClick}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;