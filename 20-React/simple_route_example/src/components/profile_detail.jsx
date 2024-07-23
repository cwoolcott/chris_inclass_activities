
import { Link, useParams } from 'react-router-dom';

function Profiles() {
    const {id} = useParams()
    return (
    <>
       <h3>Profile Detail for <b>user {id}</b></h3>

       <br/><br/>
       <Link to={`/`} >Back to Home</Link>
    </>
    )
}



export default Profiles
