"use client";
import Image from "next/image";
import React, { useState } from "react";
// import "./table.css";
import AddPosition from "./AddPosition";
const topBar = [
  "Staff Name/ID",
  "Sex",
  "Position",
  "Department",
  "Experience",
  "GPA",
  "Education",
  "Contact Number",
  "interview data",
  "exam date",
  "Status",
  "action",
];
const Position = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };

  return (
    <>
      {selectedButton && (
        <div className='flex flex-col md:flex-row w-full md:bg-slate-200  p-1 md:p-7 mx-1 md:mx-32 gap-1 md:gap-8  md:rounded-xl'>
          <AddPosition positionStatus={() => setSelectedButton(false)} />
        </div>
      )}
      {!selectedButton && (
        <div className='flex w-full  p-3 md:px-7 mx-0 md:mx-4 md:ml-20 flex-col gap-6 md:gap-8  shadow-xl rounded-xl'>
          <div className='flex text-slate-500 text-xl font-bold'>
            <i className='fa-solid fa-notes-medical px-3 pt-1 text-xl'></i>{" "}
            Position
          </div>
          <div className='flex   md:mx-8 justify-between shadow-lg md:shadow-none p-3 md:p-1 ring-1 md:ring-0 ring-slate-200 rounded-xl'>
            <div className='flex flex-row gap-5 md:gap-11 text-slate-700'>
              <span className='flex gap-0 md:gap-3 text-green-400'>
                <span>
                  <i className='fa fa-user'></i>
                </span>
                <span>120</span>
              </span>{" "}
              <span className='flex gap-0 md:gap-3 text-pink-600'>
                <span>
                  <i className='fa fa-plane'></i>
                </span>
                <span>120</span>
              </span>{" "}
              <span className='flex gap-0 md:gap-3 text-cyan-600'>
                <span>
                  <i className='fa fa-shop'></i>
                </span>
                <span>11</span>
              </span>{" "}
              <span className='flex gap-0 md:gap-3 text-yellow-500'>
                <span>
                  <i className='fa fa-add'></i>
                </span>
                <span>9</span>
              </span>
            </div>
            <div className='flex justify-end'>
              <span className='flex gap-1 md:gap-3'>
                <span>
                  <i className='fa fa-add bg-green-500 p-1 md:p-2 text-white rounded-full'></i>
                </span>
                <span>
                  <i className='fa fa-list bg-green-500 p-1 md:p-2 text-white rounded-full'></i>
                </span>
              </span>
            </div>
          </div>

          {/* ! perfect table */}
          <div className='table-container h-[calc(70vh-1vh)] overflow-scroll ring-1 ring-slate-100 rounded-lg  p-3 '>
            <table>
              <tbody>
                <tr className=' text-xs md:text-base sm:text-sm md:w-80 text-slate-400'>
                  <th></th>
                  <th>POSITION</th>
                  <th>OFFICIAL</th>
                  <th>PERMISSIONS</th>
                  <th>READ ONLY</th>
                  <th>GROWTH REQUIREMENT</th>
                  <th>MEMBERS</th>
                  <th>REQUIREMENTS</th>
                </tr>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 14].map((item) => (
                  <tr key={item} className='text-sm text-gray-900'>
                    <td className='w-32 px-7 pt-4 md:pt-16 md:px-1 sm:w-40 md:w-72 '>
                      {item}
                    </td>
                    <td
                      className='w-32 px-7 pt-4 md:pt-16 md:px-1 sm:w-40 md:w-72 cursor-pointer  '
                      onClick={() => handleButtonClick(item)}
                    >
                      trainer
                    </td>
                    <td className='w-32 px-7 pt-4 md:pt-16 md:px-1 sm:w-40 md:w-72 '>
                      department head
                    </td>
                    <td className='w-32 px-7 pt-4 md:pt-16 md:px-1 sm:w-40 md:w-72 '>
                      position
                    </td>
                    <td className='w-32 px-7 pt-4 md:pt-16 md:px-1 sm:w-40 md:w-72 '>
                      position
                    </td>
                    <td className='w-32 px-7 pt-4 md:pt-16 md:px-1 sm:w-40 md:w-72 '>
                      <i className='fa fa-file'></i> registry growtd doc{" "}
                      <i className='fa fa-download'></i>
                    </td>
                    <td className='w-32 px-7 pt-4 md:pt-16 md:px-1 sm:w-40 md:w-72  text-gray-500'>
                      {item}
                    </td>
                    <td className='w-32 px-7 pt-4 md:pt-16 md:px-1 sm:w-40 md:w-72   text-gray-500'>
                      university
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Position;
