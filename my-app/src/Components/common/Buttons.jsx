import React from 'react'

const Buttons = ({ name, others,type, style,icon,iconStyle}) => {
    return ( 
        <button
        style={style}
        type={type}
        className={`w-fit  rounded-[30px] center ${
          others ? " bg-edify-blue  hover:bg-edify-Gray  ml-72 mt-4 " : "flex bg-edify-grey ml-60 hover:bg-edify-blue "
       } text-sm rounded-[5px] font-medium py-2 px-4 text-white `} 
      >
        {name}
        <span className={`${ iconStyle ? iconStyle : "" }`}>{icon}</span>
      </button>
    );
}
 
export default Buttons;