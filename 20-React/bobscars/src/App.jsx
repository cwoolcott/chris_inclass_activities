import Header from './components/header';
import CarList from './components/carlist';

import './App.css'

const cars = [
  {
    id:1,
    make:"Mazda",
    model:"Rx-7",
    year:1993
  },
  {
    id:2,
    make:"Toyota",
    model:"Celica",
    year:1996
  },
  {
    id:3,
    make:"Ferrari",
    model:"Modena",
    year:2001
  },
  {
    id:4,
    make:"Ford",
    model:"Mustang",
    year:2022
  },
  {
    id:5,
    make:"Bugatti",
    model:"Chiron",
    year:2019
  }
];
function App() {
  
  return (
    <div style={{background:'#f7f7f7', padding:'20px'}}>
      <Header />
      <CarList cars={cars}/>
    </div>
  )
}

export default App
