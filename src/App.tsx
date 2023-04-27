import { useGetAllAbilitiesQuery } from './store/slices/abilities'

function App() {
  const { isLoading, data } = useGetAllAbilitiesQuery()

  return (
    <>
      {isLoading ? <span>loading...</span> : <span>{data?.count}</span>}
    </>
  )
}

export default App
