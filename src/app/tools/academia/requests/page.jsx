"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Tutition from "../../trainees/trainee/Tutition";
import FilterModal from "../../trainees/trainee/FilterModal";
// import Tutition from "../trainee/Tutition";
// import FilterModal from "../trainee/FilterModal";

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
  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
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
          <div className='flex flex-col md:flex-row'>
            <div
              className={`flex  w-full flex-col md:flex-row gap-2   rounded-xl p-4 `}
            >
              <div className='table-container overflow-scroll ring-1 ring-slate-200 shadow-sm bg-white rounded-lg  h-[calc(40vh)] md:h-[calc(60vh)]'>
                <table>
                  <tbody>
                    <tr className='text-sm font-thin'>
                      <th>Name</th>
                      <th>HEAD</th>
                      <th>STREAMS</th>
                    </tr>
                    <tr className='h-1 bg-slate-100 w-full' />
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <tr
                        key={item}
                        className={`text-sm text-gray-900 ${
                          item === selectedItem ? "bg-blue-500 text-white" : ""
                        }`}
                        onClick={() => handleItemClick(item)}
                      >
                        <td className='w-32 px-3 sm:w-40 md:w-72 py-1 md:py-3 cursor-pointer'>
                          <span className='flex text-slate-600 flex-col text-start'>
                            <span>{item}. Information Technology</span>
                            <span
                              className={`text-sm font-thin ${
                                item === "selectedItem"
                                  ? "text-slate-300"
                                  : "text-slate-600 mx-3"
                              }`}
                            >
                              TF02230300
                            </span>
                          </span>
                        </td>
                        <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                          Fashion C2{" "}
                        </td>
                        <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                          2{" "}
                        </td>{" "}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex  rounded-sm w-full shadow-lg p-3 text-slate-500'>
                <form action=''>
                  <div className='flex flex-col w-full gap-2 md:gap-5'>
                    <span className='font-bold text-slate-400'>
                      Applicant admision data{" "}
                    </span>
                    <div className='flex flex-col justify-around w-full mt-4 text-sm  '>
                      <span>required point for natural science </span>
                      <div className='flex flex-col md:flex-row gap-3 mt-2'>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>female</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>disability</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-around w-full mt-4 '>
                      <span>required point for social science </span>
                      <div className='flex flex-col md:flex-row gap-3 mt-2'>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>female</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>disability</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-around w-full mt-1 md:mt-4 '>
                      <span>required cumulative point </span>
                      <div className='flex flex-col md:flex-row gap-3 mt-2'>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex text-xs flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-around w-full mt-2 md:mt-16 gap-4 '>
                      <span>current year applicant limit </span>
                      <input
                        type='number'
                        placeholder='0 '
                        className='text-xs font-normal text-slate-900 ring-1 ring-slate-300 rounded-md p-2 w-20 '
                      />
                    </div>
                    <div className='flex  justify-end  mt-10  '>
                      <button className='bg-blue-600 text-blue-100 p-3 px-7 rounded-full '>
                        finish
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
