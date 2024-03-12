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
const Log = () => {
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
            <i className='fa fa-rotate-right px-3 pt-1 text-xl'></i> Log
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
            <div className='flex justify-end -mt-5 md:-mt-0 gap-2 md:gap-16'>
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

          <div className='table-container h-[calc(70vh-1vh)] overflow-scroll ring-1 ring-slate-100 rounded-lg  mb-9'>
            <table>
              <tbody>
                <tr className='text-sm font-thin text-slate-500'>
                  {[
                    "Trainee name/ID",
                    "Section",
                    "Last Update",
                    "Student Status",
                    "Tuition Status",
                    "",
                    "",
                    "",
                    "",
                  ].map((tab, index) => (
                    <th key={index}>{tab}</th>
                  ))}
                </tr>
                <tr className='h-1 bg-slate-100 w-full' />
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                  <tr key={item} className='text-sm text-gray-900 '>
                    <td className='w-32 px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                      <span
                        className='flex flex-row gap-0'
                        onClick={handleButtonClick}
                      >
                        <span className='w-10 md:w-20 h-10 '>
                          <Image
                            src='/elsabet.jpeg'
                            alt=''
                            width={50}
                            height={50}
                            className='rounded-full rounded-image text-center'
                          />
                        </span>
                        <span className='flex md:-mx-3 flex-col text-start'>
                          <span>Melak ab </span>
                          <span className=' text-xs md:text-base text-slate-600 font-thin'>
                            TF02030{" "}
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>fashion c2 </td>
                    <td>Apr11,2022</td>
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
                          withdrawn
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
                          withdrawn
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
                    <td className='flex gap-2 flex-col text-slate-600'>
                      <span>zenebech </span>
                      <span className='text-sm text-slate-700 font-thin'>
                        TF1220000
                      </span>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Log;
