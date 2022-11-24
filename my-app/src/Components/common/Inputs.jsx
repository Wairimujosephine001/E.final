import React from "react";

const Inputs = ({ name, placeholder ,errors, type, onChange } ) => {
  return (
    <>
    <div className=" w-full text-sm font-normal   ">
      <label
        className=" text-md text-start font-bold mb-1 "
        htmlFor= {name}
      >
        {name}
      </label>
      <br/>
      <input
        className=" outline outline-1 border-black text-black bg-white p-2 w-full h-[30px] rounded-[5px] "
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
    {errors && (
      <div className="text-[12px] w-[100%] font-bold text-[#FF3000]">
        {errors}
      </div>
    )}
    </>
  );
};

export default Inputs;