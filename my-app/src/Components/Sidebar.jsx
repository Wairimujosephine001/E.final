import React from "react";
import { AiFillHome, AiOutlineCalendar } from "react-icons/ai";
import { IoPersonOutline, IoMdPeople} from "react-icons/io";
import { GiBookCover} from "react-icons/gi";
import { HiCurrencyDollar} from "react-icons/hi";
import { BiCalendarEvent} from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" overflow-y-auto w-64 h-screen  ml-10 mt-[50px]  bg-edify-white ">
      <ul className=" space-y-24">

        <li className=" flex-auto text-center text-edify-black hover:text-edify-black font-bold mt-20 whitespace-nowrap">
          <Link to='/'>
            <span className="flex ml-20 ">
            <span className=" text-white mr-2">
              <AiFillHome />
            </span>{" "}
            Home
            
          </span>
          </Link>
        </li>
        <li className="flex-auto text-center text-edify-white  hover:text-edify-blue font-bold whitespace-nowrap">
          <Link to='/profile'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-white mr-2">
              <IoPersonOutline />
            </span>{" "}
            Profile
            
          </span>
          </Link>
        </li>

        <li className="flex-auto text-center text-edify-white  hover:text-edify-blue font-bold whitespace-nowrap">
          <Link to='/calendar'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-white mr-2">
              <AiOutlineCalendar />
            </span>{" "}
            Calendar          
          </span>
          </Link>
        </li>
        <li className="flex-auto text-center text-edify-white  hover:text-edify-blue font-bold whitespace-nowrap">
          <Link to='/class'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-white mr-2">
              <IoMdPeople />
            </span>{" "}
            Class
            
          </span>
          </Link>
        </li>
        <li className="flex-auto text-center text-edify-white  hover:text-edify-blue font-bold whitespace-nowrap">
          <Link to='/homework'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-white mr-2">
              <GiBookCover />
            </span>{" "}
            Homework
            
          </span>
          </Link>
        </li>

        <li className="flex-auto  text-center text-lwhite hover:text-green font-bold  whitespace-nowrap">
          <Link to ='payment'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-black mr-2">
              <HiCurrencyDollar />
            </span>{" "}
            Payment
          </span>
          </Link>
        </li>
        <li className="flex-auto  text-center text-white hover:text-green font-bold  whitespace-nowrap">
          <Link to='/event'>
            <span className="flex ml-20 ">
            
            <span className=" text-edify-white mr-2">
              <BiCalendarEvent />
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