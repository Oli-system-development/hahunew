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
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-glasses px-3 pt-1 text-xl'></i> Requests
          </span>
        </div>

        <div className='flex w-full flex-col gap-2 shadow-2xl rounded-xl p-4  ring-2 ring-slate-100 '>
          <div className='flex flex-row justify-between w-full px-20  text-md font-thin text-slate-500 m-3 '>
            <div className='flex flex-row gap-11 text-slate-700'>
              <i className='fa fa-search mt-2  text-slate-400 text-2xl '></i>
              <button
                className='bg-slate-200 px-6  p-1 font-bold text-sm text-slate-600 rounded-full cursor-pointer'
                onClick={toggleModal}
              >
                {" "}
                filter
              </button>

              <span className='font-thin text-slate-400 pt-1'>
                {" "}
                COMPUTER DEPARTMENT/DATABASE STREAM / SECTION 3E
              </span>
            </div>
            {isModalVisible && (
              <FilterModal visibleModal={() => setModalVisible(false)} />
            )}
            <div className='flex justify-around gap-16'>
              <i className='fa fa-plus mt-2  text-white bg-green-600 rounded-full px-1  text-2xl '></i>
              <span className='flex gap-3'>
                <span>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                            2020
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
          <div className='flex flex-row'>
            <div
              className={`flex  w-full flex-row gap-2   rounded-xl p-4 `}
            >
              <div className='flex rounded-sm  w-full'>
                <div className='flex flex-wrap  flex-row  '>
                  <div className='flex flex-col '>
                    <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md  shadow-lg'>
                      <div className='flex flex-row justify-around w-full gap-52 text-sm font-thin text-slate-500 m-3 '>
                        <span>
                          <span>Name</span>
                        </span>
                        <span className='flex gap-20'>
                          <span>HEAD</span>
                          <span> STREAMS</span>
                          {/* <span>
                        <i className='fa fa-list'></i>
                      </span> */}
                        </span>
                      </div>
                      <div className=' all_items flex flex-row flex-wrap gap-6 w-full overflow-y-scroll h-[80%] justify-around '>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                          <div
                            key={item}
                            className={`flex text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                              item === selectedItem
                                ? "bg-blue-500 text-white"
                                : ""
                            }`}
                            onClick={() => handleItemClick(item)}
                          >
                            <span className='flex flex-col font-bold'>
                              {item}. &nbsp;&nbsp;&nbsp;information technology
                              <span
                                className={`text-sm font-thin ${
                                  item === selectedItem
                                    ? "text-white"
                                    : "text-slate-600"
                                }`}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TF02230300
                              </span>
                            </span>
                            <span>fashion C2</span>
                            <span>2</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex  rounded-sm w-full shadow-lg p-3 text-slate-500'>
                <form action=''>
                  <div className='flex flex-col w-full gap-5'>
                    <span className='font-bold text-slate-400'>
                      applicant admision data{" "}
                    </span>
                    <div className='flex flex-col justify-around w-full mt-4 '>
                      <span>required point for natural science </span>
                      <div className='flex flex-row gap-3 mt-2'>
                        <div className='flex flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex flex-row gap-3'>
                          <label htmlFor=''>female</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex flex-row gap-3'>
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
                      <div className='flex flex-row gap-3 mt-2'>
                        <div className='flex flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex flex-row gap-3'>
                          <label htmlFor=''>female</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex flex-row gap-3'>
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
                      <span>required cumulative point </span>
                      <div className='flex flex-row gap-3 mt-2'>
                        <div className='flex flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                        <div className='flex flex-row gap-3'>
                          <label htmlFor=''>male</label>
                          <input
                            type='text'
                            placeholder='entrance  examination point '
                            className='text-xs font-thin text-slate-300 ring-1 ring-slate-300 rounded-md p-2 w-44 '
                          />
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-around w-full mt-16 gap-4 '>
                      <span>current year applicant limit </span>
                      <input
                        type='number'
                        placeholder='0 '
                        className='text-xs font-normal text-slate-900 ring-1 ring-slate-300 rounded-md p-2 w-20 '
                      />
                    </div>
                    <div className='flex  justify-end  mt-10  '>
                      <button className="bg-blue-600 text-blue-100 p-3 px-7 rounded-full ">finish</button>
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
