import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoPersonOutline, IoCalendarNumberSharp} from "react-icons/io5";
import { IoMdPeople} from "react-icons/io";
import { GiBookCover} from "react-icons/gi";
import { HiCurrencyDollar} from "react-icons/hi";
import { BiCalendarEvent} from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" overflow-y-auto w-64 h-screen  ml-10 mt-[50px]  bg-edify-white ">
      <ul className=" space-y-8">

        <li className=" flex-auto text-center text-edify-black  hover:text-edify-skyblue font-bold whitespace-nowrap">
          <Link to='/'>
            <span className="flex ml-20 ">
            <span className=" text-edify-black mr-2">
              {<AiFillHome size={16}/>}
            </span>{" "}
            Home
            
          </span>
          </Link>
        </li>
        <li className="flex-auto text-center text-edify-black  hover:text-edify-skyblue font-bold whitespace-nowrap">
          <Link to='/profile'>
            <span className="flex ml-20 ">
            <span className=" text-edify-black mr-2">
              {<IoPersonOutline size={16}/>}
            </span>{" "}
            Profile     
          </span>
          </Link>
        </li>

        <li className="flex-auto text-center text-edify-black  hover:text-edify-skyblue font-bold whitespace-nowrap">
          <Link to='/calendar'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-black mr-2">
              {<IoCalendarNumberSharp size={16}/>}
            </span>{" "}
            Calendar          
          </span>
          </Link>
        </li>
        <li className="flex-auto text-center text-edify-black  hover:text-edify-skyblue font-bold whitespace-nowrap">
          <Link to='/class'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-black mr-2">
              {<IoMdPeople size={16} />}
            </span>{" "}
            Class
            
          </span>
          </Link>
        </li>
        <li className="flex-auto text-center text-edify-black hover:text-edify-skyblue font-bold whitespace-nowrap">
          <Link to='/homework'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-black mr-2">
              {<GiBookCover size={16} />}
            </span>{" "}
            Homework
            
          </span>
          </Link>
        </li>

        <li className="flex-auto text-center text-edify-black  hover:text-edify-skyblue font-bold whitespace-nowrap">
          <Link to ='payment'>
            <span className="flex ml-20 ">
            <span className=" text-edify-black mr-2">
            {<HiCurrencyDollar size={16}/>}
            </span>{" "}
            Payment
          </span>
          </Link>
        </li>
        <li className="flex-auto text-center text-edify-black  hover:text-edify-skyblue font-bold whitespace-nowrap">
          <Link to='/event'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-black mr-2">
             { <BiCalendarEvent size={16}/>}
            </span>{" "}
            Event
           
          </span>
           </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;