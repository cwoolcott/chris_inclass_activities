
import './App.css'
import Header from './component/header'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


import { Outlet } from 'react-router-dom';

// Apollo Client Instance
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


function App() {

  return (
    <ApolloProvider client={client}>
      <Header/>
      <Outlet/>
    </ApolloProvider>
  )
}

export default App
