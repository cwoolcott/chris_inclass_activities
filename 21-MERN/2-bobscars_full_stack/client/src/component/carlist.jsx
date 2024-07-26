import { useQuery } from "@apollo/client"
import { Link } from 'react-router-dom';

import { CAR_LIST } from "../utils/queries"

function CarList() {

const {loading, data} = useQuery(CAR_LIST);

const cars = data?.allCars || [];

const style = {
    carCard: {
        width:'200px',
        height:'200px',
        margin:'10px',
        borderRadius:'10px',
        backgroundColor:'white',
        color:'black',
        display: 'inline-block'
    }
}

  return (
    <>
    <h1>Cars</h1>
    {loading ? (
        <div>LOADING....</div>
    ) : (
        <div>

       
        {cars && //if true {}
            cars.map((car) => (
                <div style={style.carCard} key={car.id}>
                    <div><br/>{car.year}</div>
                    <div>{car.make} {car.model}</div>
                    <div>${car.price}</div><br/><br/>
                    <Link key={car.id}  to={"/car/" + car.id}><button>View</button></Link> 
                </div>
            ))}
        
        
        </div>
    )
}
    </>
  )
}

export default CarList
