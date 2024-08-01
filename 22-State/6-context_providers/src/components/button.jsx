import { useCountContext } from '../utils/countcontext';


function Button() {

  const { count, handleCount } = useCountContext();

  
    return (
      <>

          <button onClick={handleCount}>
            count is {count}
          </button>
      </>
    )
  }
  
  export default Button
  