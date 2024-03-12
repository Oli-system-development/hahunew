"use client";
import Image from "next/image";
import React, { useState } from "react";

const Log = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };
  return (
    <>
      <div className='flex w-full  p-3 md:px-7 mx-0 md:mx-4 md:ml-20 flex-col gap-6 md:gap-8  shadow-xl rounded-xl'>
        <div className='flex text-slate-500 text-xl font-bold'>
          <i className='fa fa-rotate-right px-3 pt-1 text-xl'></i> Log
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
        <div className='flex flex-wrap gap-2 md:gap-7 flex-row w-full'>
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
        <div className='table-container overflow-scroll ring-1 ring-slate-200 rounded-xl md:ring-0'>
          <table>
            <tbody>
              <tr className='text-sm font-thin text-slate-500'>
                {[
                  "Employe name",
                  "age",
                  "tasks",
                  "position",
                  "date",
                  "status",
                ].map((tab, index) => (
                  <th key={index}>{tab}</th>
                ))}
              </tr>
              <tr className='h-1 bg-slate-100 w-full' />
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                <tr key={item} className='text-sm text-gray-900'>
                  <td className='w-32 px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    <span className='flex flex-row gap-0'>
                      <span className='w-10'>
                        <Image
                          src='/elsabet.jpeg'
                          alt=''
                          width={50}
                          height={50}
                          className='rounded-lg rounded-image text-center'
                        />
                      </span>
                      <span className='flex flex-col text-start text-md'>
                        <span>Melak ab </span>
                        <span className='text-slate-600 font-thin'>
                          melakabebeee@gmail.com
                        </span>
                      </span>
                    </span>
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    23
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    stock request
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    30,mar,21
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    Leader
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
                        className='text-white ring-1 h-6 bg-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0'
                      >
                        absent
                      </button>
                    ) : (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-white ring-1 h-6 bg-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1'
                      >
                        present
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

export default Log;
