import {useState} from 'react';
import { Link } from 'react-router-dom';

const carStyle = {
    cell:{
        border:'1px solid gray',
        color:'black'
    }
};

function Car(props) {

    const [interest, setInterest] = useState("Not Interested");


    const toggle = (value) => {
        if (value === "Not Interested") {
            setInterest("Interested");
         } else {
            setInterest("Not Interested")
         } 
         
    }
    
    return (
       <tr>
        <td style={carStyle.cell}><Link key={props.car.id}  to={"/car/" + props.car.id}><button>View</button></Link></td>
        <td style={carStyle.cell}>{props.car.year}</td>
        <td style={carStyle.cell}>{props.car.make}</td>
        <td style={carStyle.cell}>{props.car.model}</td>
        <td style={carStyle.cell}><button onClick={() => toggle(interest)}>{interest}</button></td>
       </tr>
    )
}

Car.propTypes = {
    car:Object
}

export default Car
