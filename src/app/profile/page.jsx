"use client";

import { Popover } from "@headlessui/react";
import AskLeave from "./AskLeave";
import EditProfile from "./AskLeave";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { AreaChart, Sparkline } from "@mantine/charts";
// import Calendar from "react-calendar";
const ProfileDashboard = () => {
  // export const data = [
  //   {
  //     date: "Mar 22",
  //     Apples: 2890,
  //     Oranges: 2338,
  //     Tomatoes: 2452,
  //   },
  //   {
  //     date: "Mar 23",
  //     Apples: 2756,
  //     Oranges: 2103,
  //     Tomatoes: 2402,
  //   },
  //   {
  //     date: "Mar 24",
  //     Apples: 3322,
  //     Oranges: 986,
  //     Tomatoes: 1821,
  //   },
  //   {
  //     date: "Mar 25",
  //     Apples: 3470,
  //     Oranges: 2108,
  //     Tomatoes: 2809,
  //   },
  //   {
  //     date: "Mar 26",
  //     Apples: 3129,
  //     Oranges: 1726,
  //     Tomatoes: 2290,
  //   },
  // ];
  const [isModalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  //TODO date
  const tileContent = ({ date, view }) => {
    if (view === "month" && date.getTime() === selectedDate?.getTime()) {
      return (
        <div className='bg-blue-500 text-white p-2 rounded-full'>
          {date.getDate()}
        </div>
      );
    }
    return null;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Handle other actions if needed
  };

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  function onPanelChange(value, mode) {
    console.log(value, mode);
    console.log(mode);
    console.log(mode);
  }
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  //date
  return (
    <div className='mt-4 '>
      <div className=''>
        <div className='mt-16 flex justify-center  '>
          <div className='  mx-2  md:mx-8 rounded-2xl md:shadow-xl ring-1  md:w-1/4 ring-slate-200'>
            <div className='flex flex-col gap-5 w-full'>
              <span className='bg-white rounded-lg '>
                <span className='text-2xl flex justify-center  -mt-12 text-center'>
                  <Link href='/profile' className='w-14 md:w-auto'>
                    <Image
                      src='/elsabet.jpeg'
                      alt=''
                      width={120}
                      height={120}
                      className='rounded-lg rounded-image text-center'
                    />
                  </Link>

                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex cursor-pointer justify-start z-50 text-slate-400 opacity-80'>
                            <i className='fa fa-ellipsis-h'></i>
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-3 md:p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col text-xs md:w-40 md:text-sm gap-4 text-slate-600 '>
                              <span
                                className='cursor-pointer '
                                onClick={() => setStatus("leave")}
                              >
                                ask for leavee
                              </span>
                              <span
                                className='cursor-pointer text-sm'
                                onClick={() => setStatus("leave")}
                              >
                                edit profile
                              </span>
                            </div>
                          </>{" "}
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>

                  {/*  */}

                  {/* </Popover> */}
                </span>
                <span className='text-xs my-2  font-bold md:text-2xl md:mx-2 flex justify-center'>
                  Misrak Berhanu
                </span>
                <span className='text-xs text-slate-700 flex justify-center'>
                  TF 100000329
                </span>
                <span className='bg-slate-200  font-thin text-sm p-2 px-3 rounded-2xl text-slate-600  md:mx-11 my-2 flex justify-center text-center'>
                  Trainer
                </span>
                <span className='text-slate-800  font-thin text-sm p-2 px-3 flex justify-center md:mb-11 text-center'>
                  IT department
                </span>
              </span>
              <div className='text-slate-600 font-md bg-slate-200 h-full text-sm  md:p-2 gap-2 md:px-9 flex flex-col justify-center  text-center'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17].map(
                  (item) => (
                    <div
                      key={item}
                      className='flex  text-xs md:text-lg justify-start gap-1 md:gap-4 pb-1 items-center  flex-row'
                    >
                      <span>
                        <i className='fa fa-save'></i>
                      </span>
                      <span>addis ababa</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/* <div className='w-4/5 bg-slate-200'> */}
          {status === "" ? (
            <div className='w-full flex flex-col md:flex-row'>
              <div className='md:w-2/3 mx-2 md:mx-8 rounded-2xl  '>
                <div className='flex flex-col flex-wrap my-2  md:shadow-lg rounded-xl ring-1 md:mb-9 ring-slate-200'>
                  <span className='text-xl p-3 md:p-7'>data</span>
                  <div className='flex  flex-wrap '>
                    {[22, 16, 134, 6, 4].map((item) => (
                      <div
                        key={item}
                        className='flex text-slate-500 p-2 md:p-4  '
                      >
                        <div className='flex text-xs flex-col'>
                          <span className='md:text-2xl'>{item}</span>
                          <span>work days this month</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-end '>
                    <span className='flex justify-end bg-green-400 text-green-100 text-center text-xs h-6 px-3 rounded-xl m-3 '>
                      payroll
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap md:h-2/3 rounded-xl md:shadow-lg ring-1  ring-slate-200'>
                  <div className='flex md:mt-9 w-full md:h-56 flex-wrap flex-row justify-center gap-2 md:gap-20'>
                    <div className=' rounded-md md:ring-1 ring-slate-200  p-3 md:p-9 shadow-md'>
                      <span className='text-1xl pb-3 mb-4'>issues</span>
                      {[1, 2, 3, 4].map((item) => (
                        <span
                          key={item}
                          className='flex flex-row  text-sm justify-between mb-3 gap-5 text-slate-600'
                        >
                          <span>landing page</span>
                          <span className='p-1 px-3 text-xs rounded-md bg-blue-400 text-blue-200'>
                            landing
                          </span>
                        </span>
                      ))}
                    </div>
                    <div className=' rounded-md md:ring-1 ring-slate-200  p-3 md:p-9  shadow-md'>
                      <span className='text-1xl '>accomplishments</span>
                      {[1, 2, 3].map((item) => (
                        <span
                          key={item}
                          className='flex flex-row text-sm justify-between mb-3 gap-5 text-slate-600'
                        >
                          <span
                            className={`p-1 px-3 w-full text-center text-xs h-10 rounded-xl ${
                              item === 2 && "bg-fuchsia-500"
                            }
                                bg-blue-400 text-blue-200`}
                          >
                            certified in database design
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='flex w-full justify-end p-3 md:p-9'>
                    <span className='p-1  h-6  px-4 text-xs rounded-xl bg-blue-600 text-blue-200'>
                      log
                    </span>
                  </div>
                  <div className='flex mx-2 flex-col md:flex-row md:w-full justify-center gap-1 md:gap-11 p-0'>
                    <span
                      className={` p-1 px-3 md:w-52 text-center text-lg md:h-52 rounded-xl bg-blue-400
                       text-blue-200`}
                    >
                      performance
                      <Sparkline
                        w={200}
                        h={60}
                        data={[0, 20, 40, 20, 40, 10, 50]}
                        curveType='linear'
                        color='green'
                        fillOpacity={0.6}
                        strokeWidth={2}
                      />
                      <Sparkline
                        w={200}
                        h={60}
                        data={[100, 20, 40, 20, 40, 10, 50]}
                        curveType='linear'
                        color='blue'
                        fillOpacity={0.6}
                        strokeWidth={2}
                      />
                    </span>
                    <span
                      className={`p-1 px-3 md:w-52 text-center text-lg h-52 rounded-xl bg-fuchsia-500 text-blue-200`}
                    >
                      time management
                      <Sparkline
                        w={200}
                        h={60}
                        data={[0, 20, 40, 20, 40, 10, 50]}
                        curveType='bump'
                        color='red'
                        fillOpacity={0.6}
                        strokeWidth={2}
                      />
                      <Sparkline
                        w={200}
                        h={60}
                        data={[100, 20, 40, 20, 40, 10, 50]}
                        curveType='bump'
                        color='blue'
                        fillOpacity={0.6}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className='md:w-2/3 md:h-64  mx-2 md:mx-8 rounded-2xl   '>
                <div className='flex mt-2 flex-wrap md:h-full justify-center md:text-xl  w-full  md:mb-9 '>
                  <div className='flex  flex-wrap '>
                    <div
                      className='w-full '
                      style={{ border: "  ", borderRadius: 4 }}
                    >
                      <span className='flex gap-3 text-slate-500 md:h-64 w-full'>
                        <div
                          className='md:w-96 md:h-96'
                          style={{ border: "  ", borderRadius: 4 }}
                        >
                          <Calendar
                            onChange={handleDateClick}
                            value={selectedDate}
                            tileContent={tileContent}
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                <div className='flex ring-1 md:ring-0 rounded-xl flex-wrap md:h-72 w-full mt-3 md:mt-32 md:mb-9 ring-slate-200'>
                  <div className='flex flex-row justify-between w-full'>
                    <span className='md:text-xl p-3 md:p-7'>
                      Todays Appointment
                    </span>
                    <span className='md:text-xl p-3 md:p-7 text-blue-600'>
                      see all
                    </span>
                  </div>
                  <div className='flex flex-col w-full gap-2 md:gap-5 p-2 md:p-6  flex-wrap '>
                    {[1, 2, 3, 4].map((appointment) => (
                      <div key={appointment} className='flex '>
                        <span
                          className={`p-1 px-3 w-full text-center text-xs shadow-lg md:h-20 border-l-8 ${
                            appointment === 2
                              ? "border-green-300"
                              : " border-yellow-300"
                          } rounded-xl text-slate-400`}
                        >
                          <div className='flex flex-row justify-between'>
                            <span className='flex flex-col gap-2 md:gap-4 '>
                              <span className='text-lg text-black'>
                                meeting
                              </span>
                              <span>my list</span>
                            </span>
                            <span className='flex flex-row gap-4  pt-5'>
                              <span className='pt-2'>4:00 pm</span>
                              <span
                                className={`rounded-full h-5 md:h-9 w-5 md:w-9 ${
                                  appointment === 1 && "bg-red-300"
                                } bg-slate-300`}
                              ></span>
                            </span>
                          </div>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : status === "leave" ? (
            <AskLeave />
          ) : (
            <EditProfile />
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
