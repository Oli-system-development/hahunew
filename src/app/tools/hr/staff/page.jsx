"use client";
import Image from "next/image";
import React, { useState } from "react";
const topBar = [
  "Staff Name/ID",
  "Sex",
  "Position",
  "Department",
  "Experience",
  "GPA",
  "Education",
  "Contact Number",
  "Date Joined",
  "Status",
];
const Staff = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };

  return (
    <>
      <div className='flex w-full  p-3 md:px-7 mx-0 md:mx-4 md:ml-20 flex-col gap-6 md:gap-8  shadow-xl rounded-xl'>
        <div className='flex text-slate-500 text-xl font-bold'>
          <i className='fa fa-user px-3 pt-1 text-xl'></i> Staff
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
        <div className='flex flex-row gap-5 md:gap-20 w-full overflow-scroll py-2'>
          <div className='flex flex-row'>
            <input
              name=''
              onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-32 md:w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='search'
            />
            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
          </div>
          <span className='flex justify-end mt-1 mx-2 text-slate-600'>
            filter
          </span>
          <div className='flex flex-row'>
            <input
              name=''
              onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-32 md:w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='department'
            />
          </div>
          <div className='flex flex-row'>
            <input
              name=''
              // onChange={"onChange"}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-32 md:w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='stream'
            />
          </div>
        </div>
        <div className='flex flex-wrap gap-2 md:gap-7 flex-row w-full '>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((btn) => (
            <span
              key={btn}
              className={`p-1 px-1 md:px-8 text-sm md:text-lg cursor-pointer rounded-md ${
                selectedButton === btn
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200"
              } py-1 md:py-3 text-slate-400`}
              onClick={() => handleButtonClick(btn)}
            >
              Leave request
            </span>
          ))}
        </div>
        {/* <div className='flex flex-row flex-wrap gap-6  overflow-x-scroll justify-around'>
          {topBar.map((tab) => (
            <span key={tab} className='font-bold text-slate-500 gap-0'>
              {tab}
            </span>
          ))}
        </div>
        <div className='flex flex-col flex-wrap gap-4 w-full overflow-x-scroll justify-around'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
            <div
              key={item}
              className='flex  text-slate-500 flex-row gap-20 w-full justify-around'
            >
              <span className='flex flex-row'>
                <span>
                  <Image
                    src='/elsabet.jpeg'
                    alt=''
                    width={50}
                    height={50}
                    className='rounded-lg rounded-image text-center'
                  />
                </span>
                <span className='flex flex-col'>
                  <span>Melak ab </span>
                  <span className='text-slate-600 font-thin'>TF010000</span>
                </span>
              </span>
              <span>male</span>

              <span>trainer</span>
              <span>It</span>
              <span>6</span>
              <span>7</span>
              <span>university</span>
              <span>09832732</span>
              <span>12-24-2021</span>
              {item === 4 ||
              item === 3 ||
              item === 6 ||
              item === 11 ||
              item === 15 ? (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-slate-400 h-5 ring-1 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-0 `}
                >
                  on leave
                </button>
              ) : (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-slate-400 h-5 ring-1 ring-blue-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 -py-3 `}
                >
                  at work
                </button>
              )}
            </div>
          ))}
          <span className='flex justify-end text-blue-600  font-bold'>
            done
          </span>
        </div> */}
        <div className='table-container overflow-scroll'>
          <table>
            <tbody>
              <tr className='text-xs md:text-base sm:text-sm md:w-80 text-slate-500'>
                {topBar.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 90].map((item) => (
                <tr key={item} className='text-sm text-gray-900'>
                  <td className='w-32 px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    <span className='flex flex-row gap-0'>
                      <span className='w-10 md:w-20 h-10'>
                        <Image
                          src='/elsabet.jpeg'
                          alt=''
                          width={50}
                          height={50}
                          className='rounded-lg rounded-image text-center'
                        />
                      </span>
                      <span className='flex md:-mx-3 flex-col text-start'>
                        <span>Melak ab </span>
                        <span className=' text-xs md:text-base text-slate-600 font-thin'>
                          TF010000
                        </span>
                      </span>
                    </span>
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    male
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    trainer
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    It
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    6
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    7
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    university
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    09832732
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    12-24-2021
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    {item === 4 ||
                    item === 3 ||
                    item === 6 ||
                    item === 11 ||
                    item === 15 ? (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 h-5 ring-1 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0'
                      >
                        on leave
                      </button>
                    ) : (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 h-5 ring-1 ring-blue-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 -py-3'
                      >
                        at work
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Staff;
