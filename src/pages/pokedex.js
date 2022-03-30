import React from "react"
import Layout from '../components/layout'

const PokedexPage = ({data, pageContext}) => {
  const {allPokemon} = pageContext;
  return (
    <Layout pageTitle="Pokédex">
      <p>Welcome to my Pokédex.</p>
      <div>
        <ul>
          {allPokemon.map(pokemon => (
            <li key={pokemon.id}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default PokedexPage