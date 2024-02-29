"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import PayrollProfile from "./PayrollProfile";
import React, { useState } from "react";
const topBar = [
  "Staff Name/ID",
  "Sex",
  "Position",
  "Department",
  "Experience",
  "payment/ETB",
  "reception no",
  "status",
  "action",
  "handled by ",
];
const Payroll = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [payrollStatus, setPayrollStatus] = useState(false);

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };
  const handlePayrollStatus = () => {
    setPayrollStatus(!payrollStatus);
  };
  if (payrollStatus) {
    return <PayrollProfile payrolStatus={() => setPayrollStatus(false)} />;
  }

  return (
    <>
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 shadow-xl rounded-xl'>
        <div className='flex text-slate-500 text-xl font-bold'>
          <i className='fa-solid fa-money-bill px-3 pt-1 text-xl'></i> Payroll
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
              {`${
                tab === "payment/ETB"
                  ? "payment/ETB"
                  : //   `${(
                    //       <span className='flex flex-col'>
                    //         <span>payment/ETB</span>
                    //         <span className='flex flex-row gap-1'>
                    //           <span>salary</span>
                    //           <span>bonus</span>
                    //           <span>salary</span>
                    //           <span>salary</span>
                    //           <span>total</span>
                    //         </span>
                    //       </span>
                    //     )}`
                    `${tab}`
              }`}
            </span>
          ))}
        </div>
        <div className='flex flex-col flex-wrap gap-1 w-full overflow-x-scroll justify-around'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
            <div
              key={item}
              className='flex  text-slate-500 flex-row gap-6 w-full justify-around'
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
              <span className='flex flex-row gap-2'>
                <span>400</span>
                <span>0</span>
                <span>100</span>
                <span>400</span>
                <span>5000</span>
              </span>
              <span>RT/03290</span>

              {item === 4 ||
              item === 3 ||
              item === 6 ||
              item === 11 ||
              item === 15 ? (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-0 `}
                  onClick={handlePayrollStatus}
                >
                  overdue
                </button>
              ) : (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-slate-400  ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-8 -py-3 `}
                  onClick={handlePayrollStatus}
                >
                  paid
                </button>
              )}

              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button className=''>
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className={`text-white ring-1 h-6 bg-green-300  rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-1 `}
                      >
                        pay
                      </button>
                    </Popover.Button>
                    <Popover.Panel
                      className={`${
                        open ? "block" : "hidden"
                      } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                    >
                      <>
                        <div className='flex justify-center flex-col text-sm gap-4 text-slate-600 w-80 '>
                          <span className='cursor-pointer text-blue-600 font-bold '>
                            payment
                          </span>
                          <div className='flex flex-row  mb-2 gap-2 '>
                            <span className='text-sm   text-slate-500'>
                              receip number
                            </span>
                            <span className='flex  flex-row gap-2'>
                              <input
                                name=''
                                // onChange={"onChange"}
                                className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-1 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='description'
                                type='text'
                                placeholder='R1039233 '
                              />
                            </span>
                          </div>
                          <div className='flex flex-row  mb-2 gap-2 '>
                            <span className='text-sm   text-slate-500'>
                              detail
                            </span>
                            <span className='flex  flex-col gap-1 ml-3'>
                              total expected 900
                              <span>due date 21/3/2023</span>
                            </span>
                          </div>
                          <div className='flex flex-row  mb-9 gap-2 '>
                            <span className='text-sm   text-slate-500'>
                              pay amount
                            </span>
                            <span className='flex  flex-row gap-2'>
                              <input
                                name=''
                                // onChange={"onChange"}
                                className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-1 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='description'
                                type='text'
                                placeholder='9000 '
                              />
                            </span>
                          </div>
                          <div className='flex flex-row  mb-9 gap-2 '>
                            <span className='text-sm   text-slate-500'>
                              remark
                            </span>
                            <span className='flex  flex-row gap-2 ml-9'>
                              <textarea
                                name=''
                                // onChange={"onChange"}
                                className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-8 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='description'
                                type='text'
                                placeholder='type in if there is any remark '
                              />
                            </span>
                          </div>

                          <span className='cursor-pointer bg-blue-500 text-white flex justify-center text-center w-16 rounded-full'>
                            done
                          </span>
                        </div>
                      </>
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              <span>Angel</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Payroll;
