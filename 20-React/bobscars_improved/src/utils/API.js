import axios from 'axios';

const quote = async () =>{
    return axios.get(`https://type.fit/api/quotes`);
}

const photo = async (make, model) =>{
    const token = 'NEqSEG6M0ti11Dq0CkAdgcFZMrTarjoVOYOq9fMTerBvaqo2qn1eaq4s';
    const config = {
        headers: { Authorization: token }
    };

    const url = 'https://api.pexels.com/v1/search?query='+ make + ' '+ model + '&per_page=1';
    return axios.get(url, config);

}
export default { quote, photo };
