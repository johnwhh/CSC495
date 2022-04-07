import React from "react"
import Layout from '../components/layout'
import Pokemon from "../components/pokemon";
import useEndpoint from "../hooks/useEndpoint"

const PokedexPage = () => {
  const {data, setData} = useEndpoint();
  return (
    <Layout pageTitle="Pokédex">
      <p>Welcome to my Pokédex.</p>
      <main>
        <input
          type="search"
          placeholder="Enter a pokemon..."
          value={data.slug}
          onChange={(e) => setData({...data, slug: e.target.value})}
        />
        <br />
        {data.result != null ? <Pokemon pokemon={data.result} /> : null}
      </main>
    </Layout>
  )
}

export default PokedexPage