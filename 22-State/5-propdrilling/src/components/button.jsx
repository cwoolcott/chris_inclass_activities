

function Button(props) {

  
    return (
      <>

          <button onClick={props.handleCount}>
            count is {props.count}
          </button>
      </>
    )
  }
  
  export default Button
  