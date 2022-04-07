import React from 'react';

const Pokemon = ({pokemon}) => {
    const statItems = pokemon.stats.map((element) => {
        return <li>{element.stat.name}: {element.base_stat}</li>
    });

    const typeItems = pokemon.types.map((element) => {
        return <li>{element.type.name}</li>
    });

    return <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <ul>
            <li>Name: {pokemon.name}</li>
            {typeItems.length > 1 ? <li>Types:</li> : null}
            {typeItems.length > 1 ? <ul>{typeItems}</ul> : <li>Type: {pokemon.types[0].type.name}</li>}
            <li>Stats:</li>
            <ul>{statItems}</ul>
            <li>Weight: {pokemon.weight}</li>
        </ul>

    </div>
};

export default Pokemon