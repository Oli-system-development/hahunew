"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import TuitionProfile from "../tuition/TuitionProfile";

const Tutition = () => {
  const [showCalander, setShowCalander] = useState(false);
  const [tuitionStatus, setTuitionStatus] = useState(false);
  const handleTuitionStatus = () => {
    setTuitionStatus(!tuitionStatus);
  };
  if (tuitionStatus) {
    return <TuitionProfile tuitionStatus={() => setTuitionStatus(false)} />;
  }
  return (
    <>
      <div className='flex w-full  p-1 md:p-7 mx-1 md:mx-32 flex-col gap-3 bg-gray-100 rounded-2xl '>
        <div className='flex w-full flex-col gap-2 '>
          <div className='flex flex-col md:flex-row'>
            <div className='flex rounded-sm  w-full'>
              <div className='flex flex-wrap  flex-col w-full md:pr-20 gap-2 md:gap-4'>
                <div className='flex flex-row text-slate-500 text-xl font-bold  justify-between px-1 md:px-5 w-full'>
                  <span>Tuition</span>
                  <button
                    className='bg-green-600 text-white px-3  font-normal rounded-full text-sm'
                    onClick={handleTuitionStatus}
                  >
                    Tuition
                  </button>
                </div>
                <div className='flex flex-row gap-2 md:gap-20 w-full overflow-scroll md:py-2'>
                  {[5, 2, 3].map((item) => (
                    <span
                      key={item}
                      className='flex flex-row  text-sm justify-between md:mb-3 gap-5 text-slate-600'
                    >
                      <span className={`p-1  px-3 w-full flex flex-row  `}>
                        <span
                          className={`flex justify-start w-16 md:w-20 p-2 md:p-4 font-bold text-xs md:text-sm shadow-md ${
                            item === 2 && "bg-sky-500"
                          } bg-red-300 text-white border-l-2 rounded-l-full`}
                        >
                          total overdue feels
                        </span>
                        <span className='flex justify-start w-16 md:w-20 p-2 md:p-4 pt-7 font-bold text-xs md:text-sm shadow-md  bg-white text-black border-r-2 rounded-r-full'>
                          {" "}
                          302
                        </span>
                      </span>
                    </span>
                  ))}
                </div>
                <div className='flex flex-row text-slate-500 text-xl font-bold  justify-between px-5 w-full'>
                  <span>Academics</span>
                </div>

                <div className='flex justify-start mt-4 mb-2 '>
                  <div className=' rounded-md shadow-xl bg-white p-4 md:p-7 flex flex-row gap-4 md:gap-10  '>
                    {[5, 2, 3].map((item) => (
                      <span
                        key={item}
                        className='flex flex-row  text-sm justify-between mb-2 gap-3 text-slate-600'
                      >
                        <span
                          className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-6   text-slate-500`}
                        >
                          <span className='flex justify-start font-bold text-lg'>
                            {item}
                          </span>
                          <span> presents</span>
                        </span>
                      </span>
                    ))}
                    <span onClick={() => setShowCalander((prev) => !prev)}>
                      <i className='fa fa-eye pr-7'></i>
                    </span>
                  </div>
                </div>
                <div
                  className={` ${
                    showCalander === true ? "block" : "hidden"
                  } bg-white md:w-3/5 p-7 `}
                >
                  <div className='flex gap-3 flex-col'>
                    <span>daily preview</span>
                    <div
                      className=' h-72 pt-9 shadow-xl text-slate-500 w-full rounded-full ring-1 ring-slate-100 p-5'
                      style={{ border: "  ", borderRadius: 4 }}
                    >
                      <div className='flex w-full h-96'>
                        <Calendar
                        // onChange={handleDateClick}
                        // value={selectedDate}
                        // tileContent={tileContent}
                        />
                      </div>
                    </div>
                    <span className='flex flex-col font-normal   pt-2  shadow-xl text-white bg-pink-500 w-full rounded-xl ring-1 ring-slate-100 p-5'>
                      <span>databse</span>
                      <div className='flex flex-row justify-between w-full font-thin text-slate-100 text-sm'>
                        <span>3 cm</span>
                        <span>2:00 pm</span>
                      </div>
                    </span>
                    <span className='flex flex-col font-normal   pt-2  shadow-xl text-white bg-blue-500 w-full rounded-xl ring-1 ring-slate-100 p-5'>
                      <span>web design</span>
                      <div className='flex flex-row justify-between w-full font-thin text-slate-100 text-sm'>
                        <span>3 cm</span>
                        <span>2:00 pm</span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className=''>
                  <div className='flex flex-row gap-4  m-2 w-full justify-between'>
                    <span>
                      <span className='font-bold text-md text-black'>
                        Transcript{" "}
                      </span>
                      <span className='font-thin text-md text-white bg-slate-700 px-2 rounded-md mt-1 '>
                        Term | 2022{" "}
                      </span>
                    </span>
                    <span className='text-sm px-3 font-medium py-1 text-white bg-blue-600 rounded-full'>
                      generate report
                    </span>
                  </div>
                  <div className='flex flex-col w-full '>
                    <div className='flex flex-col rounded-md md:pt-4 md:pr-3 md:pl-10  h-64 flex-wrap bg-white text-start  mt-14 mb-1 text-slate-500 shadow-md '>
                      <div className='table-container overflow-scroll'>
                        <table>
                          <tbody>
                            <tr className='text-xs md:text-base sm:text-sm md:w-80'>
                              <th>COURSE</th>
                              <th>RESULT</th>
                              <th>ABSENSE</th>
                              <th>CGPA</th>
                            </tr>

                            {[1, 2, 3, 4, 5].map((item) => (
                              <tr key={item} className='text-sm text-gray-900'>
                                <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                                  {item}. database
                                </td>
                                <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                                  12{" "}
                                </td>
                                <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                                  8
                                </td>
                                <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                                  8
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex flex-col  rounded-md justify-start   text-start w-64 md:mt-4 mb-1 text-slate-500'>
                    <span className='text-sm px-3 font-bold text-black'>
                      Grade Review
                    </span>
                    <div className='flex justify-center  flex-col w-full p-3 flex-wrap text-sm gap-2 text-slate-600 '>
                      <span className='flex flex-row justify-around'>
                        <span className='cursor-pointer '>
                          Department review{" "}
                        </span>
                        <span>
                          <label className='relative inline-flex items-center cursor-pointer'>
                            <input
                              type='checkbox'
                              value=''
                              className='sr-only peer'
                            />
                            <div className="w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>{" "}
                        </span>
                      </span>
                      <span className='flex flex-row justify-around'>
                        <span className='cursor-pointer '>
                          Register review{" "}
                        </span>
                        <span>
                          <label className='relative inline-flex items-center cursor-pointer'>
                            <input
                              type='checkbox'
                              value=''
                              className='sr-only peer'
                            />
                            <div className="w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                          </label>{" "}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex  rounded-sm w-full'>
              <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-around shadow-xl w-full bg-white'>
                  <div className='flex flex-row justify-center w-full bg-slate-300 gap-0 rounded-md'>
                    <div className='flex flex-row  gap-1 md:gap-10 p-2 md:p-8'>
                      <div className='md:mt-8 w-20 md:w-auto md:-ml-3 mdpr-4'>
                        <Image
                          src='/elsabet.jpeg'
                          alt=''
                          width={150}
                          height={150}
                          className='rounded-full rounded-image md-ml-4'
                        />
                      </div>
                      <div className='flex flex-col gap-2 md:gap-5 text-slate-500'>
                        <span className='text-xl font-bold'>HANA Sirgut</span>
                        <span>store officer</span>
                        <span>department : computer</span>
                        <span>date joined : 12-12,2022</span>
                        <span>
                          <i className='fa fa-phone px-2'></i>032823323
                        </span>
                        <span>
                          <i className='fa fa-message px-2'></i>hana@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-5 pt-10 md:pt-16 md:pr-3 md:pl-10 text-xs md:text-base  md:text-left '>
                      <span>store officer</span>
                      <span>department : computer</span>
                      <span>date joined : 12-12,2022</span>
                      <span>
                        <i className='fa fa-phone px-2'></i>032823323
                      </span>
                      <span>
                        <i className='fa fa-message md:px-2'></i>hana@gmail.com
                      </span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <div className='flex flex-row mt-3 md:-mt-7 gap-2 md:gap-7 w-full'>
                    <div className='flex  '>
                      <div className='flex flex-col justify-start  rounded-md pt-2 md:pt-4 md:pr-3 md:pl-10   flex-wrap bg-white text-start md:w-72 md:mt-14 mb-1 text-slate-500 shadow-md '>
                        <span>Current courses</span>
                        <div className='flex justify-start text-start flex-col w-full py-1 md:py-2 flex-wrap text-sm gap-4 text-slate-600 '>
                          {[1, 2, 3, 4].map((course) => (
                            <span key={course}>
                              <span className='flex flex-row md:justify-around w-full text-start'>
                                <button className='bg-sky-600 text-sm p-2 md:p-4 text-white md:w-full text-start  rounded-full'>
                                  webdesign
                                </button>
                                <span className='cursor-pointer px-4 text-red-600'>
                                  <i className='fa fa-minus text-2xl'></i>{" "}
                                </span>
                              </span>
                            </span>
                          ))}
                          <div className='flex flex-row mt-3 md:mt-5'>
                            <input
                              name=''
                              onChange={() => alert("wait for form data ")}
                              className='shadow w-32 md:w-auto h-5 md:h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border   rounded-full  py-2 md:px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='search'
                            />
                            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
                          </div>
                          <span>
                            <span className='flex flex-row md:justify-around w-full text-start'>
                              <button className='bg-slate-700 text-sm p-2 md:p-4 text-white w-full text-start  rounded-full'>
                                webdesign
                              </button>
                              <span className='cursor-pointer px-2 md:px-4 mt-3 text-slate-600'>
                                <i className='fa fa-plus text-2xl rounded-full bg-orange-500 p-1 md:p-2'></i>{" "}
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col w-full mt-3'>
                      <div className='flex flex-col gap-2  h-60  w-full text-start  mt-3 mb-1 text-slate-200'>
                        <div className='flex flex-col  rounded-md justify-start  text-start  mt-4 mb-1 text-slate-500  w-full'>
                          <div className='hidden  md:flex flex-row justify-around shadow-xl w-full'>
                            <div className='flex flex-row justify-start w-full bg-slate-300 rounded-md'>
                              <div className='flex flex-row  gap-4 p-3'>
                                <div className='flex flex-col gap-2 text-start text-slate-500'>
                                  <span>disability : none</span>
                                  <span>birth date :32,332</span>
                                  <span>birth place : AA</span>
                                  <span>high school : slase catedral </span>
                                  <span>average cumulative marks :50</span>
                                  <span> total enterance exam result :40 </span>
                                  <span>
                                    emergency contact:gemechu makda haile{" "}
                                  </span>
                                  <span>
                                    gemechus emergency contact mobile :
                                    093290232098012
                                  </span>
                                  <span></span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='flex flex-col md:flex-row md:-mt-7 gap-7'>
                            <div className='flex flex-col w-full '>
                              <div className='flex flex-col gap-2  h-60  w-full text-start  mt-10  mb-1 text-slate-200'>
                                <div className='flex flex-col  rounded-md justify-start  bg-white text-start w-64 mt-4 mb-1 text-slate-500 shadow-md '>
                                  <span className='text-md px-3 font-bold text-black'>
                                    Issues
                                  </span>
                                  <div className='flex justify-center flex-col w-full p-3 flex-wrap text-sm gap-2 text-slate-600 '>
                                    <span className='flex flex-row justify-around'>
                                      <span className='cursor-pointer '>
                                        current trainees{" "}
                                      </span>
                                      <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                                        resolved
                                      </button>
                                    </span>
                                    <hr className=' text-black' />

                                    <span className='flex flex-row justify-around'>
                                      <span className='cursor-pointer '>
                                        current trainees{" "}
                                      </span>
                                      <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                                        resolved
                                      </button>
                                    </span>
                                    <hr className=' text-black' />
                                    <span className='flex flex-row justify-around'>
                                      <span className='cursor-pointer '>
                                        current trainees{" "}
                                      </span>
                                      <button className='bg-red-600 text-sm text-white px-2 rounded-md'>
                                        awaiting
                                      </button>
                                    </span>
                                    <hr className=' text-black' />

                                    <span className='flex flex-row justify-around'>
                                      <span className='cursor-pointer '>
                                        current trainees{" "}
                                      </span>
                                      <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                                        resolved
                                      </button>
                                    </span>
                                    <hr className=' text-black' />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='flex flex-col w-full '>
                              <div className='flex flex-col gap-2  h-60  w-full text-start  mt-10  mb-1 text-slate-200'>
                                <div className='flex flex-col  rounded-md justify-start  bg-white text-start w-64 mt-4 mb-1 text-slate-500 shadow-md '>
                                  <span className='text-md px-3 font-bold text-black'>
                                    Accomplishment
                                  </span>

                                  <div className=' rounded-md ring-1 ring-slate-200 p-3 flex flex-col gap-2 '>
                                    {[1, 2, 3].map((item) => (
                                      <span
                                        key={item}
                                        className='flex flex-row  text-sm justify-between mb-1 gap-5 text-slate-600'
                                      >
                                        <span
                                          className={`p-1 rounded-full px-3 w-full text-center text-xs h-10  ${
                                            (item === 2 && "bg-blue-500") ||
                                            (item === 3 && "bg-pink-700") ||
                                            (item === 1 && "bg-green-600")
                                          }
                                bg-blue-400 text-blue-200`}
                                        >
                                          certified in database design
                                        </span>
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutition;
