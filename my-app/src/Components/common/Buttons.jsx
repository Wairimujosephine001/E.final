import React from 'react'

const Buttons = ({ name, others, style,goo}) => {
    return ( 
        <button
        style={style}
        className={`w-fit  rounded-[30px] center ${
          others ? "  bg-edify-blue  hover:bg-edify-Gray " : " bg-edify-grey hover:bg-edify-blue "
       } text-sm rounded-[5px] font-medium py-1 px-4 text-white `} 

        
  
      >
        {name}
      </button>
    );
}
 
export default Buttons;