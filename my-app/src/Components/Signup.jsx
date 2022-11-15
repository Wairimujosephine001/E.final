import React, { useState, useEffect } from "react";
import Buttons from "./common/Buttons";
import Inputs from "./common/Inputs";
import bgImg from './Img/img1.png';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const handleClick = () => {
    console.log("hello,josephine");
  }
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    username: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.";
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email format!";
    }
    if (!values.fullname) {
      errors.fullname = "name is a Must!";
    }
    if (!values.username) {
      errors.username = "username is a Must!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "password must not exceed more than 10 characters!";
    }
    return errors;
  };
  return (
    
    <section>
    <div className="flex w-full mx-w-[1760px] p-4 h-full max-h-screen bg-edify-gray">
    <div className="flex">
            <div className="col-1 w-[50%] box-content justify-center h-[450px] m-24 mr-5 ml-7 bg-edify-white rounded-[5px]">
                <h1 className="text-center font-bold ">Create Account</h1>
                <span className="ml-72">Welcome to Edify, Please enter your details</span>
      
      <form className="m-12 space-y-6" onSubmit={handleSubmit}>
        <div className="mt-3">
          <Inputs
            label="Name"
            type="text"
            placeholder="enter name"
            name=" Full name"
            required=""
            value={formValues.Name}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>
        <div className="mt-2">
          <Inputs
            label="EMail"
            type="text"
            placeholder="enter Email"
            name="Email address"
            required=""
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="mt-2">
          <Inputs
            label="Password"
            type="text"
            placeholder="enter password"
            name=" Password"
            required=""
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
        </div>
        <div className="mt-2">
          <Inputs
            label="Password"
            type="text"
            placeholder="enter password"
            name=" Confirm password"
            required=""
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <div className="mt-2 text-center">
          <Buttons  others={false} icon={<FcGoogle size={12}/>} name="continue with google."/>
                  </div>
        <div className="mt-2 text-center">
        <Buttons others={true} onClick ={handleClick} name="sign up" />{" "}
        </div>
      </form>
    </div>
    <div className="col-2 w-[50%] h-[450px] box-content justify-center mb-5 m-24 mr-1 ml-9 bg-edify-grey rounded-[5px]">
    
    <div className="text-center"><img  src={bgImg} alt="" /></div>
</div>
</div>
</div>
</section>
  );
};

export default Signup;


