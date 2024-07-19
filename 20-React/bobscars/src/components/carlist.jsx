import Car from './car';



  
function CarList(props) {

   // const cars = props.cars;
    // props = {
    //     cars:{make, model, year},
    // }

    return (

        //No Component
        // <ul style={{color:'black', listStyle:'none', marginLeft:'-40px'}}>
        //     {props.cars.map(car => (<li key={car.id}>{car.year} {car.make} {car.model}</li>))}
        // </ul>

        //Component
       <table>
        {props.cars.map(car => (<Car key={car.id} car={car}/>))}
       </table>
     )
}


CarList.propTypes = {
    cars:Array
}

export default CarList
