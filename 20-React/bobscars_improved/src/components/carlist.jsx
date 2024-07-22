import Car from './car';
import carData from '../data.json'


function CarList() {

    return (

       <table>
        {carData.map(car => (<Car key={car.id} car={car}/>))}
       </table>
     )
}


CarList.propTypes = {
    cars:Array
}

export default CarList
