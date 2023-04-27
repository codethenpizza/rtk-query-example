import { pokemonApi } from "../api/pokemon";

type Ability = {
  name: string
  url: string
}

type AbilityListReponse = {
  count: number;
  next: Nullble<string>
  previous: Nullble<string>
  resutls: Ability[]
}

// here we can define a slice - usually it's an entity from your api
const abilitiesApi = pokemonApi
  .enhanceEndpoints({ addTagTypes: ['Abilities'] })
  .injectEndpoints({
    endpoints: builder => ({
      getAllAbilities: builder.query<AbilityListReponse, void>({
        providesTags: ['Abilities'],
        query: () => '/ability'
      })
    })
  })

const { useGetAllAbilitiesQuery } = abilitiesApi

export {
  useGetAllAbilitiesQuery
}
