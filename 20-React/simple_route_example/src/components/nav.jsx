
import { Link } from 'react-router-dom';

function Nav() {

    const style={
        navContainer:{
            width:'800px', 
            display:'flex', 
            justifyContent:'center'
        },
        linkStyle:{
            padding:'20px'
        }
    }
    
    return (
    <>
       <div style={style.navContainer}>
       <Link style={style.linkStyle} to={`/`}>HOME</Link>
       <Link style={style.linkStyle} to={`/page1`}>PAGE 1</Link>
       <Link style={style.linkStyle} to={`/page2`}>PAGE 2</Link>
       <Link style={style.linkStyle} to={`/page3`}>PAGE 3</Link>
       <Link style={style.linkStyle} to={`/profiles`}>Profiles</Link>
       </div>
    </>
    )
}



export default Nav
