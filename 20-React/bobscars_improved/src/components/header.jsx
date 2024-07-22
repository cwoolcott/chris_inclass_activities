import { useState, useEffect } from 'react';
import BobsLogo from '/bobs_logo.png';
import API from '../utils/API';

function Header() {
    const [quote, setQuote] = useState('');

    const getQuote = () => {
        API.quote()
        .then((res) => {
            setQuote(res.data[0].text);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        getQuote()
    }, [quote]);

    
    return (
        <>
        <img src={BobsLogo} style={{width:'200px'}}/>
        <div style={{maxWidth:'330px', color:'grey'}}>{quote}</div>
        </>
    )
}

export default Header
