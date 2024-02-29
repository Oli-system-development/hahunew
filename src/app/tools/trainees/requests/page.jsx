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
              <i className='fa fa-tag mt-2  text-yellow-700 bg-slate-100 ring-1 ring-yellow-500 rounded-full px-1  text-2xl '></i>
              <i className='fa fa-plus mt-2  text-white bg-green-600 rounded-full px-1  text-2xl '></i>
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
          <div className='flex flex-row'>
            <div className='flex rounded-sm  w-full'>
              <div className='flex flex-wrap  flex-row  '>
                <div className='flex flex-col  ring-1 ring-slate-100  mx-2 rounded-2xl w-full'>
                  <div className='flex  justify-center  flex-wrap flex-row bg-white  px-10'>
                    <div
                      className='flex w-full flex-row flex-wrap gap-16 ml-10 text-sm font-thin -mb-7
                      justify-between'
                    >
                      {[
                        "Trainee name",
                        "request",
                        "remark",
                        "student status",
                        "tuition status",
                        "gpa",
                        "grade status",
                        "dept review status",
                        "handled by",
                      ].map((tab) => (
                        <span
                          key={tab}
                          className={`${
                            tab === "Trainee name" && "mr-36"
                          } text-slate-500 gap-10  `}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>

                    <div className='flex -mt-7 flex-row flex-wrap gap-4 w-full overflow-y-scroll h-[80%] justify-between'>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map(
                        (item) => (
                          <div
                            key={item}
                            className='flex  text-slate-500 flex-row gap-10 w-full justify-between'
                          >
                            <span
                              className='flex flex-row cursor-pointer'
                              onClick={handleButtonClick}
                            >
                              <span className='mt-2 px-2'>{item}.</span>{" "}
                              <span>
                                <Image
                                  src='/elsabet.jpeg'
                                  alt=''
                                  width={50}
                                  height={50}
                                  className='rounded-full rounded-image text-center'
                                />
                              </span>
                              <span className='flex flex-col text-black'>
                                <span>Melak ab </span>
                                <span className='text-slate-600 text-sm font-thin'>
                                  melakab@gmail.com
                                </span>
                              </span>
                            </span>
                            <span>grade change </span>
                            <span className='ring-1 ring-slate-400 w-20 h-5 rounded-md'></span>
                            {item === 4 ||
                            item === 3 ||
                            item === 6 ||
                            item === 11 ||
                            item === 15 ? (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-800 ring-1 h-5 ring-red-600 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0 `}
                              >
                                dropped
                              </button>
                            ) : (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-800  ring-1 h-5 ring-green-600 font-thin rounded-full focus:ring-4 focus:outline-none focus:ring-green-300   text-sm px-8 -py-3 `}
                              >
                                active
                              </button>
                            )}{" "}
                            {item === 4 ||
                            item === 3 ||
                            item === 6 ||
                            item === 11 ||
                            item === 15 ? (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-800 ring-1 h-5 ring-red-600 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0 `}
                              >
                                overdue
                              </button>
                            ) : (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-800  ring-1 h-5 ring-green-600 font-thin rounded-full focus:ring-4 focus:outline-none focus:ring-green-300   text-sm px-8 -py-3 `}
                              >
                                paid
                              </button>
                            )}
                            <span>3.4</span>
                            {item === 4 ||
                            item === 3 ||
                            item === 6 ||
                            item === 11 ||
                            item === 15 ? (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-800 ring-1 h-5 ring-red-600 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0 `}
                              >
                                incomplete
                              </button>
                            ) : (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-800  ring-1 h-5 ring-green-600 font-thin rounded-full focus:ring-4 focus:outline-none focus:ring-green-300   text-sm px-8 -py-3 `}
                              >
                                pass
                              </button>
                            )}
                            {item === 4 ||
                            item === 3 ||
                            item === 6 ||
                            item === 11 ||
                            item === 15 ? (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-800 ring-1 h-5 ring-red-600 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin  text-sm px-5 py-0 `}
                              >
                                rejected
                              </button>
                            ) : (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-800  ring-1 h-5 ring-green-600 font-thin rounded-full focus:ring-4 focus:outline-none focus:ring-green-300   text-sm px-8 -py-3 `}
                              >
                                checked
                              </button>
                            )}
                            <span className='flex gap-2'>
                              <i className='fa-solid fa-circle-check text-green-400 font-bold text-lg'></i>
                              <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
                            </span>
                          </div>
                        )
                      )}
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

export default Requests;
