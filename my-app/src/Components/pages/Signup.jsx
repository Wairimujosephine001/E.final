import React, { useState, useEffect } from "react";
import Buttons from "../common/Buttons";
import Inputs from "../common/Inputs";
import bgImg from "../Img/img1.png";
import { FcGoogle } from "react-icons/fc";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const handleClick = () => {
    console.log("hello,josephine");
  };
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
    window.location("/homepage");
    <Navigate to="/homepage" />;
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
    <div className="flex items-center justify-center w-full h-full bg-edify-gray ">
    <div className="flex items-center justify-center w-full flex-col bg-edify-white gap-[2px] rounded-[5px]">
          <h1 className="text-center font-bold ">Create Account</h1>
          <span>Welcome to Edify, Please enter your details</span>
          <form className=" w-[90%] flex items-center gap-4 justify-center flex-col"
          onSubmit={handleSubmit}>
          <Inputs
    label="Name"
    type="text"
    placeholder="enter name"
    name=" first name"
    required=""
    value={formValues.Name}
    onChange={handleChange}
  />
  <p>{formErrors.username}</p>

  <Inputs
      label="Name"
      type="text"
      placeholder="enter name"
      name=" last name"
      required=""
      value={formValues.Name}
      onChange={handleChange}
    />
  
  <p>{formErrors.username}</p>
  
    <Inputs
      label="EMail"
      type="text"
      placeholder="enter Email"
      name="email address"
      required=""
      value={formValues.email}
      onChange={handleChange}
    />
  
  <p>{formErrors.email}</p>
  
    <Inputs
      label="Password"
      type="text"
      placeholder="enter password"
      name=" password"
      required=""
      value={formValues.password}
      onChange={handleChange}
    />
    <p>{formErrors.password}</p>
  
  
    <Inputs
      label="Password"
      type="text"
      placeholder="enter password"
      name=" confirm password"
      required=""
      value={formValues.password}
      onChange={handleChange}
    />
  
  <p>{formErrors.password}</p>
  
    <Buttons
      type="submit"
      others={false}
      icon={<FcGoogle size={12} />}
      name="continue with google."
    />
  
  
    <Buttons
      type="submit"
      others={true}
      onClick={handleClick}
      name="sign up"
    />{" "}
          </form>
        
    </div>
    <div className="bg-edify-grey rounded-[5px] w-[90%] flex items-center justify-center h-[425px] flex-col bg-edify-blue gap-[2px] ">
    <div className="flex items-center justify-center">
          <img className="w-full h-full object-cover " src={bgImg} alt="" />
        </div>
      </div>
    </div>

   
  );
};

export default Signup;



