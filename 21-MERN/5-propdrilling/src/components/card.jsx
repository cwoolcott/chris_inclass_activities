
import Button from './button'

function Card(props) {

  
    return (
      <>
        <Button  count={props.count} handleCount={props.handleCount}/>
      </>
    )
  }
  
  export default Card
  