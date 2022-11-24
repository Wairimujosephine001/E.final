import react from "react";
import Buttons from "../common/Buttons";
import bgImg from "../Img/img1.png";
import { FcGoogle } from "react-icons/fc";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "../common/Form";

class Signup extends Form {
  state = {
    data: {
      fullname: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmpassword: "",
    },
    errors: {},
  };

  schema = {
    fullname: Joi.string().required().label("User Name").min(5),
    email: Joi.string().required().label("User Email").email(),
    phonenumber: Joi.string().required().label("Phone Number").min(10),
    password: Joi.string().required().label("Password").min(5),
    confirmpassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .label("Confirm Password")
      .options({ language: { any: { allowOnly: "must match password" } } }),
  };

  doSubmit = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(this.state.data),
      });
      const perseRes = await response.json();
      console.log(perseRes.data)
      localStorage.setItem("token", perseRes.token);
      if (!perseRes.token) {
        this.setState({ error: perseRes.error });
        return;
      }
      window.location = "/homepage";
    } catch (err) {
      console.log(err.response.data.error);
    }
  console.log("user register")
  };



  render() {
  return (
    <div>
    <div className="flex items-center p-28 justify-center w-full h-full bg-edify-gray ">
    <div className="flex items-center justify-center w-full h-[425px] flex-col bg-edify-white gap-[2px] rounded-[5px]">
          <h1 className="text-center mt-16 font-bold ">Create Account</h1>
          <span>Welcome to Edify, Please enter your details</span>
          <form className=" w-[90%] flex items-center gap-4 justify-center flex-col  h-[90%] pt-[40px] pl-[100px]"
          onSubmit={this.handleSubmit}
        >
          {this.renderInputs("fullname", "text")}
          {this.renderInputs("email", "text")}
          {this.renderInputs(
            "phonenumber",
          )}
          <div className="flex grid-cols-2 gap-3">
            {this.renderInputs(
              "password",
              "password"
            )}
            {this.renderInputs(
              "confirmpassword",
              "password"
            )}
          </div>
          <Link to={"signin"} className="ml-60">signin</Link>
    <div className="flex grid-cols-2 gap-3 mt-5 w-[450px] justify-between ">
    <Buttons
      type="submit"
      others={false}
      icon={<FcGoogle size={12} />}
      name="continue with google."
    />

    <Buttons
      others={true}
      name="sign up"
      type="submit"
    />

  </div>
  
   </form>
        
    </div>
    <div className="bg-edify-grey rounded-[5px] w-[90%] flex items-center justify-center h-[425px] flex-col gap-[2px] ">
    <div className="flex items-center justify-center">
          <img className="w-full h-full object-cover " src={bgImg} alt="" />
        </div>
      </div>
    </div>
    </div> 
  );
   }
};

export default Signup;






