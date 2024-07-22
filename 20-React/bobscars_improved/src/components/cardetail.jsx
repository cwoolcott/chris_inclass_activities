import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import carData from '../data.json'
import API from '../utils/API';

function CarDetail() {
    const { id } = useParams();
    const carSingle = carData.find((car)=>car.id==id);
    
    const [photo, setPhoto] = useState("");
    const getPhoto = (make, model) => {
        API.photo(make, model)
        .then((res) => {
            console.log("test", res.data.photos[0].src.small)
            setPhoto( res.data.photos[0].src.portrait);
        })
        .catch((err) => console.log(err));
    }
    

    useEffect(() => {
        getPhoto(carSingle.make, carSingle.model)
    }, []);


    return (
        
        <div style={{color:'gray'}}>
        <h1>Car Detail</h1>
        <img id='carPhoto' src={photo} style={{width:'200px'}} />
        <h3>{carSingle.year}</h3>
        <h3>{carSingle.make}</h3>
        <h3>{carSingle.model}</h3>
        <br/><br/>
        <a href="/">Back To Cars</a>
        </div>
    )
}



export default CarDetail
