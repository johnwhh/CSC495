import React from "react"
import Layout from '../components/layout'
import Pokemon from "../components/pokemon";
import useEndpoint from "../hooks/useEndpoint"

const getNextId = (currentPokemon) => {
  return (currentPokemon.id % 898) + 1
}

const getPreviousId = (currentPokemon) => {
  return currentPokemon.id <= 1 ? 898 : currentPokemon.id - 1
}

const PokedexPage = () => {
  const {data, setData} = useEndpoint();
  return (
    <Layout pageTitle="Pokédex">
      <p>Welcome to my Pokédex.</p>
      <main>
        {data.result != null ? <button onClick={() => setData({...data, slug: getPreviousId(data.result)})}>Previous</button> : null}
        <input
          type="search"
          placeholder="Enter a pokemon..."
          value={data.slug}
          onChange={(e) => setData({...data, slug: e.target.value})}
        />
        {data.result != null ? <button onClick={() => setData({...data, slug: getNextId(data.result)})}>Next</button> : null}
        <br />
        {data.result != null ? <Pokemon pokemon={data.result} /> : null}
      </main>
    </Layout>
  )
}

export default PokedexPage