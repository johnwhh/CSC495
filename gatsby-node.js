const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)

const getPokemonData = ids =>
  Promise.all(
    ids.map(async id => {
      const {data: pokemon} = await get(`/pokemon/${id}`)
      return {...pokemon}
    })
  )

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const ids = Array.from(new Array(20), (x, i) => i + 1);
  const allPokemonData = await getPokemonData(ids);

  createPage({
    path: "/pokemon",
    component: require.resolve("./src/pages/pokedex.js"),
    context: {
      allPokemon: allPokemonData
    }
  });
};