import { useQuery } from "@apollo/client"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { CAR_SINGLE } from "../utils/queries"


function CarDetail() {
    const {carId} = useParams();

    const {loading, data} = useQuery(CAR_SINGLE, {
        variables:{singleCarId:carId}
    })

    const car = data?.getCarById || {};

    if (loading){
        return <div>Loading...</div>
    }

    return (
        
        <div style={{color:'gray'}}>
        <div><Link  to={"/editcar/" + car.id}><button>Edit Car</button></Link></div>
        <h1>Car Detail</h1>
        <h3>{car.year}</h3>
        <h3>{car.make}</h3>
        <h3>{car.model}</h3>
        <br/><br/>
        <div><Link  to={"/"}><button>Go Back</button></Link></div>
        </div>
    )
}



export default CarDetail
