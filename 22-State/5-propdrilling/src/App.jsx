import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Card count={count} handleCount={handleCount}/>
    </>
  )
}

export default App
