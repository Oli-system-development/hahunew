"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";

const Teams = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(Array(5).fill(false));
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const tileContent = ({ date, view }) => {
    if (view === "month" && date.getTime() === selectedDate?.getTime()) {
      return (
        <div className='bg-green-500 text-white p-2 rounded-full'>
          {date.getDate()}
        </div>
      );
    }
    return null;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = (index) => {
    setButtonClicked((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <div className='m-4 mx-6 flex flex-col'>
      <div className='flex flex-row justify-between'>
        <div className='flex gap-20'>
          <span className='mt-3'>
            <div className='w-10 h-10 rounded-full shadow-lg relative'>
              <Link href={"/dashboard/"}>
                <Image
                  src={"/logo.png"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </Link>
            </div>
          </span>
        </div>
        <Link href={"/profile"}>
          <Image
            src={"/elsabet.jpeg"}
            alt=''
            width={50}
            height={40}
            className='rounded-full rounded-image  ring-1 ring-slate-400 -pb-2'
          />
        </Link>
      </div>
      <div className='flex bg-slate-200 rounded-xl mx-20'>
        <div className='flex flex-row p-14 justify-between w-full'>
          <div className='flex flex-col w-full'>
            <span className='font-bold text-xl'>My teams</span>
            <div className='-mx-5'>
              <button className='bg-white text-slate-400 shadow-md gap-14 rounded-lg m-5 p-2 px-4'>
                Store office1
              </button>
              <button className='bg-white text-slate-400 shadow-md gap-14 rounded-lg m-5 p-2 px-4'>
                Store office1
              </button>
              <button className='bg-white text-slate-400 shadow-md gap-14 rounded-lg m-5 p-2 px-4'>
                Store office1
              </button>
              <button className='bg-white text-slate-400 shadow-md gap-14 rounded-lg m-5 p-2 px-4'>
                Store office1
              </button>
            </div>
            <span>team announcements</span>
            <div className=' rounded-md ring-1 ring-slate-200 p-9 flex flex-row gap-10 '>
              {[1, 2, 3].map((item) => (
                <span
                  key={item}
                  className='flex flex-row  text-sm justify-between mb-3 gap-5 text-slate-600'
                >
                  <span
                    className={`p-1 rounded-lg px-3 w-full text-center text-xs h-24  ${
                      (item === 2 && "bg-black") ||
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
            <span className='mt-1 mb-1 text-xl'> store office 1</span>
            <span className='my-1'> assigned position store manager </span>
            <div className=' rounded-md shadow-sm bg-slate-50 p-9 flex flex-row gap-10 '>
              {[5, 2, 3].map((item) => (
                <span
                  key={item}
                  className='flex flex-row  text-sm justify-between mb-3 gap-5 text-slate-600'
                >
                  <span
                    className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-10   text-slate-500`}
                  >
                    <span className='flex justify-start font-bold text-lg'>
                      {item}
                    </span>
                    <span> certified in database design</span>
                  </span>
                </span>
              ))}
            </div>
            <span className='my-1 mx-3'> members </span>
            <div className='flex flex-row gap-10 w-full justify-around'>
              <div className='flex flex-col w-64'>
                <div className='flex flex-row   flex-wrap gap-4  overflow-y-scroll h-64 justify-between'>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className='flex w-full  flex-wrap text-slate-500 flex-row justify-between ring-2 ring-slate-300  shadow-md rounded-md bg-slate-200 p-1'
                    >
                      <span className='flex flex-row justify-between w-64'>
                        <span className='flex flex-row '>
                          <span>
                            <i className='fa fa-user rounded-full text-blue-400 text-2xl p-2'></i>
                          </span>
                          <span className='flex flex-col'>
                            <span>Melak ab </span>
                            <span className='text-slate-600 text-xs'>
                              store office1 manager{" "}
                            </span>
                          </span>
                        </span>

                        <Popover className='relative'>
                          {({ open }) => (
                            <>
                              <Popover.Button className=''>
                                <span className='flex cursor-pointer justify-start z-100 text-slate-400 opacity-80'>
                                  <i className='fa-solid fa-ellipsis-vertical mr-4'></i>{" "}
                                </span>
                              </Popover.Button>
                              <Popover.Panel
                                className={`${
                                  open ? "block" : "hidden"
                                } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                              >
                                <>
                                  <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                                    <span className='cursor-pointer '>
                                      allocate task{" "}
                                    </span>
                                    <span className='cursor-pointer '>
                                      onleave/return{" "}
                                    </span>

                                    <span className='cursor-pointer '>
                                      set a meeting{" "}
                                    </span>
                                    <span className='cursor-pointer '>
                                      assign position{" "}
                                    </span>

                                    <span className='cursor-pointer '>
                                      remove{" "}
                                    </span>
                                  </div>
                                </>{" "}
                              </Popover.Panel>
                            </>
                          )}
                        </Popover>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <span className='flex flex-row  text-sm   text-slate-600'>
                <span
                  className={`p-1 rounded-lg px-3 w-full text-center text-xs h-32   bg-blue-400 text-blue-200`}
                >
                  performance management
                </span>
              </span>
              <span className='flex flex-row  text-sm   text-slate-600'>
                <span
                  className={`p-1 rounded-lg px-10 w-full text-center text-xs h-32   bg-pink-600 text-blue-200`}
                >
                  time management
                </span>
              </span>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-center w-full'>
              <div className='flex flex-row bg-slate-300 gap-10 p-8'>
                <div className='mt-8 -ml-3 pr-4'>
                  <Image
                    src='/elsabet.jpeg'
                    alt=''
                    width={150}
                    height={150}
                    className='rounded-full rounded-image -ml-4'
                  />
                </div>
                <div className='flex flex-col gap-5 text-slate-500'>
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
              <div className='flex flex-col gap-5 pt-4 pr-3 pl-20 bg-blue-400 text-right '>
                <span className='text-xl font-bold'>your teams</span>
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

            <div className=' flex justify-end px-10 pt-9'>
              <button className='bg-pink-900 text-white shadow-md gap-14  rounded-full m-5 p-2 px-10'>
                resign
              </button>
              <button className='bg-blue-300 text-white shadow-md gap-14 rounded-full m-5 p-2 px-6'>
                new team{" "}
              </button>

              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button className=''>
                      <span className='flex cursor-pointer justify-start z-100 text-slate-400 opacity-80'>
                        <button
                          className='bg-slate-500 text-white shadow-md gap-14 rounded-full m-5 p-2 px-4'
                          onClick={toggleModal}
                        >
                          explore teams{" "}
                        </button>{" "}
                      </span>
                    </Popover.Button>
                    <Popover.Panel
                      className={`${
                        open ? "block" : "hidden"
                      } absolute z-10 bg-white border border-gray-200 right-0 p-2 rounded-md`}
                    >
                      <>
                        <div className='flex flex-row flex-wrap gap-4  mt-2 overflow-y-scroll h-64 justify-between'>
                          {[1, 2, 3, 4, 5].map((item) => (
                            <div
                              key={item}
                              className='flex  text-slate-500 flex-row justify-between    p-1'
                            >
                              <span className='flex flex-row justify-between w-64'>
                                <span className='flex flex-row '>
                                  <span className=' text-3xl font-thin text-slate-300 px-5'>
                                    {/* <i className='fa fa-user rounded-full text-blue-400 text-2xl p-2'></i> */}
                                    |
                                  </span>
                                  <span className='flex flex-col'>
                                    <span>Electronics </span>
                                    <span className='text-slate-400 text-xs'>
                                      23,jan,2022
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </>{" "}
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            </div>

            <span className='font-bold px-20 text-xl pt-9 flex justify-end'>
              schedule and tasks
            </span>
            <div className='flex flex-row justify-center w-full '>
              <div className='flex flex-row bg-white gap-10 p-8'>
                <div className='flex flex-col gap-5 text-slate-500'>
                  <span className='text-md font-bold text-slate-500'>2015</span>
                  <span className='text-md font-bold text-green-500'>
                    AUGUST
                  </span>
                  <div className='flex w-80'>
                    <Calendar
                      onChange={handleDateClick}
                      value={selectedDate}
                      tileContent={tileContent}
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-1 pt-4 pr-3 pl-20 bg-white text-right '>
                <div className='flex flex-col gap-1 pt-4 pr-3 pl-20 bg-white text-right '>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <button
                      key={index}
                      className={`${
                        buttonClicked[index - 1]
                          ? "bg-blue-200"
                          : "bg-slate-200"
                      } text-black shadow-md ring-1 text-xs m-1 p-2 px-9`}
                      onClick={() => handleButtonClick(index - 1)}
                    >
                      {buttonClicked[index - 1]
                        ? "task already done"
                        : "review input data"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
// const [selectedDate, setSelectedDate] = useState(null);

// const tileContent = ({ date, view }) => {
//   if (view === "month" && date.getTime() === selectedDate?.getTime()) {
//     return (
//       <div className="bg-green-500 text-white p-2 rounded-full">
//         {date.getDate()}
//       </div>
//     );
//   }
//   return null;
// };

// const handleDateClick = (date) => {
//   setSelectedDate(date);
// };
