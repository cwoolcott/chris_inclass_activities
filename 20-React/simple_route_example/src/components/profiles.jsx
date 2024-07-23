
import { Link } from 'react-router-dom';

function Profiles() {
    
    return (
    <>
       <h3>Profiles</h3>
       <div>
        <b>Click on a Profile</b><br/>
            <Link to={`/profile/1`}>user 1</Link><br/>
            <Link to={`/profile/2`}>user 2</Link><br/>
            <Link to={`/profile/3`}>user 3</Link><br/>
       </div>
       <br/><br/>
       <Link to={`/`} >Back to Home</Link>
    </>
    )
}



export default Profiles
