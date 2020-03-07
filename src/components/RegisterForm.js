import React, { useState } from 'react'; 
// import the "useState" hook
const RegisterForm = props => {  
  // create the Form component
    const [ formState, setFormState ] = useState({  
      // create a "state" that we can manage within the Form component
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {  
      // define a method to update state whenever there is a change to any input field, via the "onChange" event and the "onChangeHandler". The "onChangeHandler" will accept the event as a parameter. 
        event.preventDefault();  
        // We generally want to have complete control over what our forms do, so we will prevent the default behavior of the event via event.preventDefault()
        console.log(formState);
        setFormState({
            ...formState,  
            // when we are setting state , we are going to need to keep the current state. We are spreading the current state using the "...state". This will copy the current state into the object we are sending down to setState. 
            [event.target.name]: event.target.value  
            // to check if there is a change to any input field. event.target is a object. ".name" point it to the input component we will render later, ".value" will point to the input box on the HTML page. Above "...formState" will only make a copy, however. We need to actually setState. So, we will create a new property which will correspond to the name attribute of the form. In addition, we will set the value of that property to the value of the input, event.target.value.
        })
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    return(
      <>
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
        <div>
          <h5> Your Form Data </h5>
          <p> First Name: { formState.firstName } </p>
          <p> Last Name: { formState.lastName } </p>
          <p> Email: { formState.email } </p>
          <p> Password: { formState.password } </p>
          <p> Confirm Password: { formState.confirmPassword } </p>
        </div>
      </>
    );
}

export default RegisterForm;
