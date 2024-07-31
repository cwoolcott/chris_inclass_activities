import { useState } from 'react'
import './App.css'
import Card from './components/card'
import { CountProvider } from './utils/countcontext';

function App() {
  

  return (
    <CountProvider>
      <Card />
    </CountProvider>
  )
}

export default App
