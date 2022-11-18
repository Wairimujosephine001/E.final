import React from 'react'

const Buttons = ({ name, others, style,goo,icon,iconStyle}) => {
    return ( 
        <button
        style={style}
        className={`w-fit  rounded-[30px] center ${
          others ? " bg-edify-blue  hover:bg-edify-Gray " : "flex bg-edify-grey hover:bg-edify-blue "
       } text-sm rounded-[5px] font-medium py-2 px-4 text-white `} 
      >
        {name}
        <span className={`${ iconStyle ? iconStyle : "" }`}>{icon}</span>
      </button>
    );
}
 
export default Buttons;