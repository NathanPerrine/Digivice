import type { PageLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch('https://digimon-api.vercel.app/api/digimon')
  // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const json = await response.json()
  console.log(json)


  return {
    digimon: json
  }
}) satisfies PageLoad