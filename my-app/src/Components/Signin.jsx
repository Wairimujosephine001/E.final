import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Buttons from "./common/Buttons";
import Inputs from "./common/Inputs";



const Signin = () => {
  const initialValues ={ email:"" , password:""};
  const [formValues , setFormValues] = useState(initialValues);
  const [formErrors , setFormErrors] = useState({});
  const [isSubmit, setIsSubmit]= useState(false);
  
  const handleChange =(e)=>{
    console.log(e.target);
    const { name, value} = e.target;
    setFormValues({...formValues , [name]:value});
    console.log(formValues);
  };
  const handleSubmit = (e)=> {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues); 
    }
  },[formErrors]);

  const validate =(values) =>{
    const errors ={};
    const regex = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.";
    if (!values.email){
      errors.email ="Email is required!";
    }else if (!regex.test(values.email)){
      errors.email ="Invalid Email format!"; 
    }
    if (!values.password){
      errors.password ="Password is required!";
    }else if (values.password.length <4){
      errors.password ="password must be more than 4 characters!"; 
    }
    else if (values.password.length >10){
      errors.password ="password must not exceed more than 10 characters!"; 
    }
    return errors;
  };

  return (
    <div>
    <h1>Welcome back</h1>
       {Object.keys(formErrors).length===0 && isSubmit ? (<div className="ui message success">Welcome back! Please enter your details.</div>):(<pre>(JSON.stringify(formValues,undefined,2))</pre>)}

     <form onSubmit={handleSubmit}>

      <h4 className=" font-semibold mt-24">login</h4>
      <p className=" font-normal mt-10">
        Are you new?
        <Link to ='/signup'>
        <span className=" font-semibold ml-2  hover:text-lishe-green">
          create an account
        </span></Link>
      </p>
     
      <div className="mt-5">
        <div className="mr-20">
          
        <Inputs
        label="Email"
        type="text"
        placeholder="enter email address"
        name="Email adress"
        required=''
        value={formValues.email}
        onChange={handleChange}
        />
        
        </div>
       <p>{formErrors.email}</p>
        <div className="mt-5 mr-20" >
        
        <Inputs
        label="Password"
        type="text"
        placeholder="enter password"
        name=" Password"
        required=''
        value={formValues.password}
        onChange={handleChange}
        />
        
        </div>
         <p>{formErrors.password}</p>
        
<div class="flex items-center ml-96">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-edify-blue bg-edify-gray rounded border-edify-black   "/>
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-edify-black dark:text-edify-black">Remember me? </label>
    <p className="ml-60">forgot password</p>
</div>

      </div>
      <div className="mt-5 mr-24">
      <Buttons others={true} name="Login" />{" "}
</div>
</form>
    </div>
  );
};

export default Signin;