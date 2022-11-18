import React from "react";
import { BiCalculator, BiDownload, BiSearch } from "react-icons/bi";
import { GiElvenCastle } from "react-icons/gi";
import { IoAddCircle, IoNotifications, IoSettings } from "react-icons/io5";
import Sidebar from "../common/Sidebar";
import logo from "../Img/img1.png";
import Buttons from "../common/Buttons";

function HomePage() {
  return (
    <div className=" relative">
      <div className=" absolute top-0 h-[100px] w-[100%] bg-edify-white items-center justify-between px-[100px] flex">
        <div className="h-[150px]">
          <img src={logo} alt="edify" className="w-[100%] h-[100%] " />
        </div>
        <div className="relative w-[400px] h-[50px] ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch size={25} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-full outline-none bg-edify-gray "
          />
        </div>
        <div className="w-[300px]  h-[120px] flex justify-end gap-x-6 items-center text-edify-blue">
          <div className="cursor-pointer text-edify-skyblue hover:bg-edify-blue p-1 rounded">
            <IoSettings size={30} />
          </div>
          <div className="text-edify-blue cursor-pointer hover:bg-edify-skyblue p-1 rounded">
            <IoNotifications size={30} color="edify-blue" />
          </div>
        </div>
      </div>
      <div className=" flex grid-cols-4 pt-[130px] pr-[100px]">
        <div className=" col-span-1 basis-1/4 block">
          <Buttons
            name={"Add new event"}
            style={{
              width: "150px",
              height: "100px",
              marginLeft: "100px",
              display: "flex",
              paddingTop: "30px",
            }}
            icon={<IoAddCircle size={30} />}
          />
          <Sidebar />
          <Buttons
            name={"Download all our online classes"}
            style={{
              width: "150px",
              height: "100px",
              marginLeft: "100px",
              marginTop: "-130px",
              display: "flex",
              paddingTop: "30px",
            }}
            icon={<BiDownload size={30} />}
          />
        </div>

        <div className=" col-span-2 h-[800px] rounded-[10%] bg-edify-gray basis-1/2">
          <div className="h-[32%] w-[100%]  justify-center gap-[130px] flex pt-6 ">
            <div className="w-[200px] h-[200px] rounded-[10%] grid place-items-center">
              <img
                className="rounded-[10%]"
                src="data:image/jpeg;base64,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"
                alt="edify"
              />
            </div>
            <div className="w-[200px] h-[200px] bg-edify-white  rounded-[10%] grid place-items-center">
              <img
                src="data:image/png;base64,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"
                alt="edify"
                className="w-[90%]"
              />
              <h1 className="px-12 text-sm font-bold">
                Your class Progress is pretty good!
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] px-[30px] block">
            <h1 className="font-bold text-md px-[25px]">Today’s schedule</h1>
            <div children="block gap-y-6 z-50">
              <TimeBadge />

              <div className="ml-[150px] -mt-6">
                <SubjectCard />
              </div>

              <div className="-mt-[50px] z-1">
                <TimeBadge />
              </div>

              <TimeBadge />
              <div className="ml-[150px] -mt-8">
                <SubjectCard />
              </div>
              <div className="-mt-[45px] z-1">
                <TimeBadge />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 block pl-8 pt-6 h-screen ml-3 w-[100%] basis-1/4">
          <img src="data:image/jpeg;base64,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" />
          <h1 className="font-bold text-md text-left pt-10 pb-6 pl-8">
            Homework Progress
          </h1>
          <div className="block gap-y-4">
            <DateBadge badgename={"mathematics"} date="september 21 2022" />
            <DateBadge badgename={"Biology"} date="october 21 2022" />
            <DateBadge badgename={"English"} date="may 21 2022" />
            <DateBadge badgename={"Kiswahili"} date="June 21 2022" />
            <DateBadge badgename={"Kikamba"} date="dec 21 2022" />
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full mt-10 pt-6 flex justify-center gap-[200px]">
        <div className="rounded-[20%]  h-fit p-10 w-fit bg-edify-gray">
          <table className="text-sm text-left bg-edify-gray border rounded-[10%] px-10 py-4">
            <caption className=" bg-edify-gray text-lg font-bold">
              Latest transactions
            </caption>
            <thead className="text-xs uppercase bg-edify-gray border-b-2">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Numbers
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Amount
                </th>
                <th scope="col" className="py-3 px-6">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-left bg-edify-gray">
              <tr className="bg-edify-white">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  1.
                </th>
                <td className="py-4 px-6">Alex</td>
                <td className="py-4 px-6">ksh 2000</td>
                <td className="py-4 px-6">11:00 pm</td>
              </tr>
              <tr className="bg-edify-white">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap dark:text-white"
                >
                  2.
                </th>
                <td className="py-4 px-6">Alex</td>
                <td className="py-4 px-6">ksh 2000</td>
                <td className="py-4 px-6">11:00 pm</td>
              </tr>
              <tr className="bg-edify-white">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  3.
                </th>
                <td className="py-4 px-6">Alex</td>
                <td className="py-4 px-6">ksh 2000</td>
                <td className="py-4 px-6">11:00 pm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="block w-[300px] h-[300px] rounded-[20%] bg-edify-gray pl-4">
          <div className="pl-[60px] w-full flex h-[50px] place-items-center">
            <GiElvenCastle size={30} />
            <h1 className="text-lg font-extrabold ml-5">Events</h1>
          </div>
          <Buttons
            name={"Add new Event"}
            style={{
              width: "150px",
              height: "100px",
              marginLeft: "60px",
              marginTop: "10px",
              display: "flex",
              paddingTop: "30px",
            }}
            icon={<IoAddCircle size={30} />}
          />
          <DateBadge badgename={"Castle forest"} date="september 21 2022" />

          <Buttons
            name={"viewAll"}
            style={{
              marginLeft: "160px",
              marginTop: "10px",
              height: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

export function TimeBadge() {
  return (
    <div className=" flex w-[100%] h-[70px] items-center mt-3">
      <div className=" bg-edify-Gray grid place-items-center w-[20%] rounded-full  text-md font-bold px-3 py-1.5">
        10 pm
      </div>
      <div className=" bg-edify-black grid place-items-center z-0 w-[100%] h-[1px]  text-md font-bold"></div>
    </div>
  );
}

export function DateBadge({ badgename, date }) {
  return (
    <div className=" flex w-[100%] h-[60px] items-center mt-3 cursor-pointer">
      <div className=" bg-edify-gray grid place-items-center w-[90%] rounded-full  text-md font-bold px-3 py-1.5">
        <h1 className="text-xl font-bold">{badgename}</h1>
        <h1 className="text-sm font-thin">{date}</h1>
      </div>
    </div>
  );
}

export function SubjectCard() {
  return (
    <div className="block space-x-1 w-[300px] h-[130px] bg-edify-white px-6 py-3 place-items-center rounded-[30%]">
      <div className="h-[50px] block">
        <div className="flex items-center gap-4 text-lg font-bold">
          <BiCalculator /> Mathematics
        </div>
        <h1 className="text-sm font-thin">properties of number</h1>
      </div>
      <div className="flex">
        <img
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0am6vvSDwoPj631_X8QTN-EZfHCOr3QOAA&usqp=CAU"
          alt=""
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0am6vvSDwoPj631_X8QTN-EZfHCOr3QOAA&usqp=CAU"
          alt=""
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0am6vvSDwoPj631_X8QTN-EZfHCOr3QOAA&usqp=CAU"
          alt=""
        />
        <a
          className="flex justify-center items-center w-10 h-10 text-md font-bold text-white"
          href="#"
        >
          +13
        </a>
        <div className="mt-[30px]">
          <Buttons name={"Invite"} />
        </div>
      </div>
    </div>
  );
}
