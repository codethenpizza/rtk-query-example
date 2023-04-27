import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// here we define api, base url, prepare headers if needed
export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: () => ({}),
  reducerPath: 'pokemon'
})

