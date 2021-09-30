import React, { useState } from 'react';
import './index.css';

// My initial thought was to use 'useForm' as that is a custom hook for managing forms in an easier manner.  However, I settled to try and create an ideal form using the hook useState.

function App() { 
  const [values, setValues] = useState ({
    fullName: "",
    message: "",
  });
  
  const [email, setEmail] = useState("");

  // I first placed email with fullName and message under values. However, I was having toruble validating the form and it recognising the email format. After a few tries I seprated the email from them and instead defined it seperately under the returns in onChange. It now needed an actual email with an '@' for the field to be valid. 

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFullNameInputChange = (event) => {
    setValues({...values, fullName: event.target.value})
  }

  const handleMessageInputChange = (event) => {
    setValues({...values, message: event.target.value});
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    if(values.fullName && email && values.message) {
      setValid(true);
    }
    setSubmitted(true);
  }
  // A problem here I was having that I yet to have figure out, due to the timeframe, is when the 'event.preventDefault();' was live in the code, it left the thank you message onscreen with the details that was inputed into the field. It was not refreshing and removing it.


  return (
    // As it all has to go under one parent element, I always resort to the fragment elements. To me it seems to present a cleaner code. I also always use simple class names easy to know which field is being styled. 
   <>
    <img class="logo" src={'./images/logo.jpg'} alt="logo"/>
    <div class="form-container">
     <form class="form-register" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="message">Thank you! Message received.</div> : true}
      <input
        value={values.fullName}
        onChange={handleFullNameInputChange}
        placeholder="Full name"
        type="text"
        name="full Name"
        class="form-field-one"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        class="form-field-two"
        required
      />
      <textarea
        value={values.message}
        onChange={handleMessageInputChange}
        placeholder="Message"
        type="text"
        name="message"
        class="form-field-three"
        required
      />
      {/* "required" at the end of each of the element fields  creates an error message for each of the fields if nothing is written in them. */}
        <button class="submit-button" type="submit">
          Submit
        </button>
      </form>
     </div>
  </>
  );
}
export default App;

