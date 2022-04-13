import Pie from "./pie";
import React from 'react';

const Pokemon = ({pokemon}) => {
    const statItems = pokemon.stats.map((element) => {
        return <li>{getPrettyStatName(element.stat.name)}: {element.base_stat}</li>
    });

    const typeItems = pokemon.types.map((element) => {
        return <li>{element.type.name.capitalized()}</li>
    });

    return <div>
        <h3>{pokemon.name.capitalized()}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <ul>
            {typeItems.length > 1 ? <li>Types:</li> : null}
            {typeItems.length > 1 ? <ul>{typeItems}</ul> : <li>Type: {pokemon.types[0].type.name.capitalized()}</li>}
            <li>Stats:</li>
            <ul>{statItems}</ul>
            <li>Weight: {pokemon.weight}</li>
        </ul>
        <br />
        <h3>Stats Ratio</h3>
        <Pie
            data={convertPokemonToPieData(pokemon)}
            width={350}
            height={350}
            innerRadius={15}
            outerRadius={175}
            cornerRadius={5}
        />
    </div>
};

const convertPokemonToPieData = (pokemon) => {
    return pokemon.stats.map((element) => ({
        label: getPrettyStatName(element.stat.name),
        value: element.base_stat
    }));
}

const getPrettyStatName = (stat) => {
    if (stat === "hp") {
        return "HP"
    }

    return stat.capitalized()
}

Object.defineProperty(String.prototype, 'capitalized', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

export default Pokemon