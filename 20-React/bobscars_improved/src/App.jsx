import Header from './components/header';
import Form from './components/form'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  
  return (
    <div style={{background:'#f7f7f7', padding:'20px'}}>
      <Header />
      <Outlet />
      <Form />
    </div>
  )
}

export default App
