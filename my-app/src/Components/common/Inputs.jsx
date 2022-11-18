import React from "react";

const Inputs = ({ label , name, placeholder , type } ) => {
  return (
    <div className=" w-full text-sm font-normal   ">
      <label
        className=" text-md text-start font-bold mb-1 "
        for= {name}
      >
        {name}
      </label>
      <br/>
      <input
        required
        className=" outline outline-1 border-black text-black bg-white p-2 w-full h-[30px] rounded-[5px] "
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputs;