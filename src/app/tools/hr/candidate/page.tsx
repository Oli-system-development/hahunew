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
  "interview data",
  "exam date",
  "Status",
  "action",
];
const Candidate = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };

  return (
    <>
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 shadow-xl rounded-xl'>
        <div className='flex text-slate-500 text-xl font-bold'>
          <i className='fa-solid fa-user-plus px-3 pt-1 text-xl'></i> Candidate
        </div>
        <div className='flex flex-row justify-between p-4'>
          <div className='flex flex-row gap-11 text-slate-700'>
            <span className='flex gap-3 text-green-400'>
              <span>
                <i className='fa fa-user'></i>
              </span>
              <span>120</span>
            </span>{" "}
            <span className='flex gap-3 text-pink-600'>
              <span>
                <i className='fa fa-home'></i>
              </span>
              <span>120</span>
            </span>{" "}
            <span className='flex gap-3 text-cyan-600'>
              <span>
                <i className='fa fa-shop'></i>
              </span>
              <span>11</span>
            </span>{" "}
            <span className='flex gap-3 text-yellow-500'>
              <span>
                <i className='fa fa-add'></i>
              </span>
              <span>9</span>
            </span>
          </div>
          <div className='flex justify-end'>
            <span className='flex gap-3'>
              <span>
                <i className='fa fa-add bg-green-500 p-2 text-white rounded-full'></i>
              </span>
              <span>
                <i className='fa fa-list bg-green-500 p-2 text-white rounded-full'></i>
              </span>
            </span>
          </div>
        </div>
        <div className='flex flex-row gap-20'>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='search'
            />
            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
          </div>
          <span className='flex justify-end mt-2 text-slate-600'>filter</span>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='department'
            />
          </div>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              // onChange={"onChange"}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='stream'
            />
          </div>
        </div>
        <div className='flex flex-wrap gap-7 flex-row'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((btn) => (
            <span
              key={btn}
              className={`p-1 px-8 text-lg cursor-pointer rounded-md ${
                selectedButton === btn
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200"
              } py-3 text-slate-400`}
              onClick={() => handleButtonClick(btn)}
            >
              Leave request
            </span>
          ))}
        </div>
        <div className='flex flex-row flex-wrap gap-6  overflow-x-scroll justify-around'>
          {topBar.map((tab) => (
            <span key={tab} className='font-bold text-slate-500 gap-0  '>
              {tab}
            </span>
          ))}
        </div>
        <div className='flex flex-col flex-wrap gap-4 w-full overflow-x-scroll justify-around'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
            <div
              key={item}
              className='flex  text-slate-500 flex-row gap-10 w-full justify-around'
            >
              <span className='flex flex-row'>
                {/* {item}.Melak */}
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
              <span>2020</span>
              <span>2023</span>
              {item === 4 ||
              item === 3 ||
              item === 6 ||
              item === 11 ||
              item === 15 ? (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-0 `}
                >
                  on leave
                </button>
              ) : (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-slate-400 ring-1 h-5 ring-blue-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 -py-3 `}
                >
                  at work
                </button>
              )}
              <span className='flex gap-2'>
                <i className='fa-solid fa-circle-check text-green-400 font-bold text-lg'></i>
                <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Candidate;
