"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Tutition from "../trainee/Tutition";
import FilterModal from "../trainee/FilterModal";

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
const Requests = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [trainee, setSelectedTrainee] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleButtonClick = (item) => {
    setSelectedTrainee(item);
  };

  if (trainee) {
    return <Tutition payrolStatus={() => setSelectedTrainee(false)} />;
  }

  return (
    <>
      <div className='flex w-full  p-2 md:p-7 md:mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-lg md:text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-glasses px-3 pt-1 text-xl'></i> Requests
          </span>
        </div>

        <div className='flex w-full flex-col gap-2 shadow-2xl rounded-xl p-1 md:p-4  ring-2 ring-slate-100 '>
          <div className='flex flex-col md:flex-row md:justify-between w-full md:px-20  text-md font-thin text-slate-500 md:m-3 gap-2 '>
            <div className='flex flex-row gap-3 md:gap-11 text-slate-700'>
              <i className='fa fa-search mt-2  text-slate-400 text-2xl '></i>
              <button
                className='bg-slate-200 md:px-6 h-7 md:h-auto p-1 font-bold text-sm text-slate-600 md:rounded-full cursor-pointer'
                onClick={toggleModal}
              >
                {" "}
                filter
              </button>

              <span className='font-thin text-slate-400 pt-1 text-xs md:text-normal'>
                {" "}
                COMPUTER DEPARTMENT/DATABASE STREAM / SECTION 3E
              </span>
            </div>
            {isModalVisible && (
              <FilterModal visibleModal={() => setModalVisible(false)} />
            )}
            <div className='flex justify-around gap-2 md:gap-16'>
              <i className='fa fa-tag mt-2  text-yellow-700 bg-slate-100 ring-1 ring-yellow-500 rounded-full px-1  text-lg md:text-2xl py-1 '></i>
              <i className='fa fa-plus mt-2  text-white bg-green-600 rounded-full px-1  text-lg md:text-2xl py-1'></i>
              <span className='flex gap-3'>
                <span>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                            Current trainees
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                              <span className='cursor-pointer '>select</span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                current trainees{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                applications{" "}
                              </span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                registry requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                withdraw requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                transfer and upgrades
                              </span>
                              <hr className=' text-black' />
                            </div>
                          </>{" "}
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </span>
              </span>
              <span className='flex gap-3'>
                <span>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex cursor-pointer justify-start z-50 text-slate-400 opacity-80'>
                            <i className='fa-solid fa-bars text-xl  p-2 text-slate-500 font-bold rounded-sm'></i>
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                              <span className='cursor-pointer '>select</span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>select </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                send announcement{" "}
                              </span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                generate report{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                send issue{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                export cvs{" "}
                              </span>
                              <hr className=' text-black' />
                            </div>
                          </>{" "}
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </span>
              </span>
            </div>
          </div>
          {/* <div className='flex flex-col md:flex-row gap-2'> */}
          <div className='table-container overflow-scroll h-[calc(70vh)]'>
            <table>
              <tbody>
                <tr className='text-sm font-thin text-slate-500'>
                  {[
                    "Trainee name",
                    "Request",
                    "Remark",
                    "Student Status",
                    "Tuition Status",
                    "GPA",
                    "Grade Status",
                    "Dept Review Status",
                    "Handled By",
                  ].map((tab, index) => (
                    <th key={index}>{tab}</th>
                  ))}
                </tr>
                <tr className='h-1 bg-slate-100 w-full' />
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                  <tr key={item} className='text-sm text-gray-900'>
                    <td className='w-32 px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                      <span
                        className='flex flex-row gap-0'
                        onClick={() => handleButtonClick(item)}
                      >
                        <span className='w-10'>
                          <Image
                            src='/elsabet.jpeg'
                            alt=''
                            width={50}
                            height={50}
                            className='rounded-full rounded-image text-center'
                          />
                        </span>
                        <span className='flex flex-col text-start'>
                          <span>Melak ab </span>
                          <span className='text-slate-600 font-thin'>
                            melak@gmail{" "}
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>grade change </td>
                    <td className=' w-20  rounded-md'>
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-800 ring-1 h-5 ring-slate-600 rounded-sm focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0'
                      ></button>{" "}
                    </td>
                    <td>
                      {item === 4 ||
                      item === 3 ||
                      item === 6 ||
                      item === 11 ||
                      item === 15 ? (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-slate-800 ring-1 h-5 ring-red-600 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0'
                        >
                          dropped
                        </button>
                      ) : (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-slate-800  ring-1 h-5 ring-green-600 font-thin rounded-full focus:ring-4 focus:outline-none focus:ring-green-300   text-sm px-8 -py-3'
                        >
                          active
                        </button>
                      )}
                    </td>
                    <td>
                      {item === 4 ||
                      item === 3 ||
                      item === 6 ||
                      item === 11 ||
                      item === 15 ? (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-slate-800 ring-1 h-5 ring-red-600 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0'
                        >
                          overdue
                        </button>
                      ) : (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-slate-800  ring-1 h-5 ring-green-600 font-thin rounded-full focus:ring-4 focus:outline-none focus:ring-green-300   text-sm px-8 -py-3'
                        >
                          paid
                        </button>
                      )}
                    </td>
                    <td>3.4</td>
                    <td>
                      {item === 4 ||
                      item === 3 ||
                      item === 6 ||
                      item === 11 ||
                      item === 15 ? (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-slate-800 ring-1 h-5 ring-red-600 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0'
                        >
                          incomplete
                        </button>
                      ) : (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-slate-800  ring-1 h-5 ring-green-600 font-thin rounded-full focus:ring-4 focus:outline-none focus:ring-green-300   text-sm px-8 -py-3'
                        >
                          pass
                        </button>
                      )}
                    </td>
                    <td>
                      {item === 4 ||
                      item === 3 ||
                      item === 6 ||
                      item === 11 ||
                      item === 15 ? (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-slate-800 ring-1 h-5 ring-red-600 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0'
                        >
                          rejected
                        </button>
                      ) : (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-slate-800  ring-1 h-5 ring-green-600 font-thin rounded-full focus:ring-4 focus:outline-none focus:ring-green-300   text-sm px-8 -py-3'
                        >
                          checked
                        </button>
                      )}
                    </td>
                    <td className=''>
                      <i className='fa-solid fa-circle-check text-green-400 font-bold text-lg'></i>
                      <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Requests;
