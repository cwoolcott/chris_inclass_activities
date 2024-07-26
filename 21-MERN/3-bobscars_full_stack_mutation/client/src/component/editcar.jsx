import { useState, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { Link, useParams } from 'react-router-dom';

import { CAR_SINGLE} from "../utils/queries";
import { EDIT_CAR } from "../utils/mutations";

function CarEdit() {
  const { carId } = useParams();
  const [formState, setFormState] = useState({
    carId: '',
    carYear: '',
    carMake: '',
    carModel: '',
    carPrice: '',
    carSold: 'no'
  });

  const { loading, data } = useQuery(CAR_SINGLE, {
    variables: { singleCarId: carId }
  });
  
  const car = data?.getCarById || {};

  useEffect(() => {
    
    if (car.id !== formState.carId) {
      setFormState({
        carId: car.id,
        carYear: car.year,
        carMake: car.make,
        carModel: car.model,
        carPrice: car.price,
        carSold: car.sold ? "yes" : "no",
      });
    }
  }, [car, formState]);

  const [status, setStatus] = useState();

  const [editCar, { error }] = useMutation(EDIT_CAR);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const carData = {
      id: parseInt(formState.carId),
      year: formState.carYear,
      make: formState.carMake,
      model: formState.carModel,
      price: parseInt(formState.carPrice),
      sold: (formState.carSold === 'yes')
    };



    try {
      await editCar({ variables: carData });
      console.log("carData", carData)
      setStatus(`Edited ${carData.make} ${carData.model}!`);
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ color: 'gray' }}>
      <h1>Edit Car</h1>
      {status && (
        <div>{status}</div>
      )}
      <form onSubmit={handleFormSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Manual ID:</td>
              <td>
                <input
                  name="carId"
                  value={formState.carId}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Year</td>
              <td>
                <input
                  name="carYear"
                  placeholder="Year"
                  value={formState.carYear}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Make</td>
              <td>
                <input
                  name="carMake"
                  placeholder="Make"
                  value={formState.carMake}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Model</td>
              <td>
                <input
                  name="carModel"
                  placeholder="Model"
                  value={formState.carModel}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Price $</td>
              <td>
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
            Edit Car
          </button>
        </div>
        {error && (
          <div style={{ color: 'red' }}>
            {JSON.stringify(error)}
            Something went wrong...
          </div>
        )}
      </form>
      <br /><br />
      <div><Link to={"/"}><button>Go Back</button></Link></div>
    </div>
  );
}

export default CarEdit;
