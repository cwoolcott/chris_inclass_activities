import { useState, useEffect } from 'react';

const validateEmail = (email) =>{
    //anystring@anystring.anystring
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [displayForm, setDisplayForm] = useState(true);

  useEffect(() => {
    document.title = `Bob's ${displayForm ? " Not Registered" : "Registered"}`;
  }, [displayForm]);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const inputType = e.target.name;
    const inputValue = e.target.value;
    setErrorMessage('');
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is not valid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    alert(`Thank you ${email}!`);
    setDisplayForm(false)
    setEmail('');
  };

  return (
    <>
    {displayForm && (
    <div className="container text-center">
    <h5 style={{color:'black'}}>Get updates to your email!</h5>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          style={{height:'30px', marginRight: '10px',color:'white'}}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <button type="submit">Add to Newsletter</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    )}
    </>
  )
}

export default Form;
