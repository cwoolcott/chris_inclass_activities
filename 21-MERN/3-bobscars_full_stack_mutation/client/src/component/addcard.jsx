import { useQuery } from "@apollo/client"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function AddCar() {

    return (
        
        <div style={{color:'gray'}}>
        <h1>Add Car</h1>
        <form onSubmit={handleFormSubmit}>
      
        <table>
            <tr>
                <td>Year</td><td>
                    <input
                    name="carYear"
                    placeholder="Year"
                    value={formState.carYear}
                    onChange={handleChange}
                    />
                </td>
                <td>Make</td><td>
                    <input
                    name="carMake"
                    placeholder="Make"
                    value={formState.carMake}
                    onChange={handleChange}
                    />
                </td>
                <td>Model</td><td>
                    <input
                    name="carModel"
                    placeholder="Model"
                    value={formState.carModel}
                    onChange={handleChange}
                    />
                </td>
                <td>Price</td><td>
                    <input
                    name="carYear"
                    placeholder="Year"
                    value={formState.carYear}
                    onChange={handleChange}
                    />
                </td>
                <td>Sold?</td>
                <td>
                    <select
                    name="carSold"
                    value={formState.carYear}
                    onChange={handleChange}
                    >
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </td>
            </tr>
        </table>
        </form>
        <br/><br/>
        <div><Link  to={"/"}><button>Go Back</button></Link></div>
        </div>
    )
}



export default CarDetail
