import { useState } from 'react';
import { useMutation } from "@apollo/client"
import { Link } from 'react-router-dom';

import { ADD_CAR } from '../utils/mutations';
import { CAR_LIST } from '../utils/queries';

function AddCar() {


    const [formState, setFormState] = useState({
        carId: Math.floor(Math.random() * 10000), //random number (mongoose would provide)
        carYear: '',
        carMake: '',
        carModel: '',
        carPrice: '',
        carSold: 'no',
      });
      const [status, setStatus] = useState();

      const [addCar, { error }] = useMutation(ADD_CAR, {
        refetchQueries: [
            CAR_LIST,
          'allCars'
        ]
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
      };

      const handleFormSubmit =  (e) => {
        e.preventDefault();
        //$addCarId: Int!, $make: String!, $model: String!, $price: Int!, $sold: Boolean!

        const carData = {
            id: parseInt(formState.carId),
            year: formState.carYear,
            make: formState.carMake,
            model: formState.carModel,
            price:  parseInt(formState.carPrice),
            sold: formState.carSold === 'yes' ? true : false
        };

        console.log("carData", carData)


        addCar({
            variables: carData
        })

        setStatus(`Added ${carData.make}  ${carData.model }!`);

        setFormState({
            carYear: '',
            carMake: '',
            carModel: '',
            carPrice: '',
            carSold: 'no' 
        });
      };



    return (
        
        <div style={{color:'gray'}}>
        <h1>Add Car</h1>
        {status && (
            <div>{status}</div>
        )}
        <form onSubmit={handleFormSubmit}>
      
        <table>
            <tbody>
            <tr>
                <td>Manual ID:</td><td>
                    <input
                    name="carId"
                    value={formState.carId}
                    onChange={handleChange}
                    />
                </td>
                </tr>
                <tr>
                <td>Year</td><td>
                    <input
                    name="carYear"
                    placeholder="Year"
                    value={formState.carYear}
                    onChange={handleChange}
                    />
                </td>
            </tr>
            <tr>
                <td>Make</td><td>
                    <input
                    name="carMake"
                    placeholder="Make"
                    value={formState.carMake}
                    onChange={handleChange}
                    />
                </td>
                </tr>
                <tr>
                <td>Model</td><td>
                    <input
                    name="carModel"
                    placeholder="Model"
                    value={formState.carModel}
                    onChange={handleChange}
                    />
                </td>
                </tr>
                <tr>
                <td>Price $</td><td>
                    <input
                    name="carPrice"
                    placeholder="$Price"
                    value={formState.carPrice}
                    onChange={handleChange}
                    />
                </td>
                </tr>
                <tr>
                <td>Sold?</td>
                <td>
                    <select
                    name="carSold"
                    value={formState.carSold}
                    onChange={handleChange}
                    >
                        <option value='no'>No</option>
                        <option value='yes'>Yes</option>
                    </select>
                </td>
            </tr>
            </tbody>
        </table>
        <div>
          <button type="submit">
            Add Car
          </button>
        </div>
        {error && (
          <div style={{color:'red'}}>
            {JSON.stringify(error)}
            Something went wrong...
          </div>
        )}
        </form>
        <br/><br/>
        <div><Link  to={"/"}><button>Go Back</button></Link></div>
       
        </div>
    )
}



export default AddCar
