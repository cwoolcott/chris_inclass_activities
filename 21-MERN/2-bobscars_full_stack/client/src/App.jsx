
import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import CarList from './component/carlist'
import { Outlet } from 'react-router-dom';

// Apollo Client Instance
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


function App() {

  return (
    <ApolloProvider client={client}>
      <Outlet/>
    </ApolloProvider>
  )
}

export default App
