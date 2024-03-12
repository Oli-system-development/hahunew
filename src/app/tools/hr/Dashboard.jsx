"use client";
import React, { useState } from "react";
// import Chart from "./Chart2";
// import { Calendar } from "antd";
import Image from "next/image";
import Calendar from "react-calendar";
import { BarChart, LineChart } from "@mantine/charts";
import { data } from "./data";
import { data2 } from "./linechartData";
import Link from "next/link";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
const Dashboard = () => {
  const [showChart, setShowChart] = useState(false);

  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
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

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='flex w-full  p-3 md:px-7 mx-0 md:mx-4 md:ml-20 flex-col gap-8 md:shadow-xl rounded-xl'>
      <div className='flex w-full flex-row justify-between '>
        <div className='flex text-slate-500 text-md md:text-xl font-bold'>
          <i className='fa fa-home px-3 pt-1 text-md md:text-xl'></i> Dashboard
        </div>
        <div className='flex justify-end'>
          <i className='fa-solid fa-earth-africa text-slate-500 font-bold text-md md:text-3xl '></i>
        </div>
      </div>

      <div className='flex  mx-1 md:mx-8 justify-between'>
        <div className='flex h-32   justify-center md:h-auto md:flex-row gap-7 flex-col flex-wrap overflow-x-scroll md:gap-11 text-slate-700 shadow-lg p-2 md:p-5 ring-1 ring-slate-200   rounded-xl w-full md:justify-around '>
          <span className='flex gap-3 text-green-400'>
            <span>
              <i className='fa fa-user rounded-full bg-slate-200 p-2 text-lg md:p-4'></i>
            </span>
            <span className='flex flex-col text-xs'>
              <span className='text-xs font-bold text-slate-600 '>
                Total trains
              </span>
              120
            </span>
          </span>{" "}
          <span className='flex gap-3 text-pink-600'>
            <span>
              <i className='fa fa-home rounded-full bg-slate-200 p-2 text-lg md:p-4'></i>
            </span>
            <span className='flex flex-col text-xs'>
              <span className='text-xs font-bold text-slate-600 '>
                Total trains
              </span>
              120
            </span>
          </span>{" "}
          <span className='flex gap-3 text-cyan-600'>
            <span>
              <i className='fa fa-shop rounded-full bg-slate-200 p-2 text-lg md:p-4'></i>
            </span>
            <span className='flex flex-col text-xs'>
              <span className='text-xs font-bold text-slate-600 '>
                Total trains
              </span>
              11
            </span>
          </span>{" "}
          <span className='flex gap-3 text-yellow-500'>
            <span>
              <i className='fa fa-add rounded-full bg-slate-200 p-2 text-lg md:p-4'></i>
            </span>
            <span className='flex flex-col text-xs'>
              <span className='text-xs font-bold text-slate-600 '>
                Total trains
              </span>
              19
            </span>
          </span>
        </div>
      </div>
      <div
        className='flex justify-end'
        onClick={() => setShowChart((prev) => !prev)}
      >
        <i className='fa fa-eye'></i>
      </div>

      <div
        className={`${
          showChart && "hidden"
        } flex flex-row mx-1 md:mx-8 justify-between`}
      >
        <div className='flex justify-around flex-col md:flex-row gap-2 md:gap-10 text-slate-700  md:w-full w-auto sm:w-[calc(50vh-4vh)] rounded-xl   '>
          <div className='  md:w-96 bg-blue-500 text-white text-xl font-bold p-6 rounded-2xl '>
            <span className='text-white font-bold text-xl '>
              Attendance summery
            </span>
            <LineChart
              h={300}
              data={data2}
              dataKey='date'
              series={[
                { name: "Apples", color: "pink.3" },
                { name: "Oranges", color: "red" },
                { name: "Tomatoes", color: "yellow" },
              ]}
              curveType='bump'
            />
          </div>

          <div className='flex flex-col gap-3 p-1 md:p-6 sm:w-80 md:w-96  shadow-lg rounded-xl text-xl font-bold text-slate-500'>
            <span>Financial summery</span>
            <BarChart
              h={300}
              data={data}
              dataKey='month'
              series={[
                { name: "Smartphones", color: "black" },
                { name: "Laptops", color: "blue.6" },
              ]}
              tickLine='y'
            />
          </div>
          <div className='flex gap-3 flex-col text-xl sm:w-80 md:w-96 font-bold text-slate-500'>
            <span>Calander</span>
            <div
              className='md:w-96 h-64 md:h-96 pt-9'
              style={{ border: "  ", borderRadius: 4 }}
            >
              <div className='flex w-full text-sm font-thin md:font-normal h-96'>
                <Calendar
                  onChange={handleDateClick}
                  value={selectedDate}
                  tileContent={tileContent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex  mx-1  justify-between'>
        <div className='flex h-32   justify-center md:h-auto md:flex-row gap-7 flex-col flex-wrap overflow-x-scroll md:gap-11 text-slate-700  p-2 md:p-5    w-full md:justify-around '>
          <span className='flex flex-row gap-2 px-2 md:px-11 py-0 md:py-2 md:w-96 rounded-lg shadow-md text-slate-800 '>
            <span>
              <i
                className='fa fa-graduation-cap rounded-full bg-slate-200 text-md md:text-xl p-2 md:p-4 font-bold'
                aria-hidden='true'
              ></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-sm md:text-lg font-bold'>
                AT OFFICE
              </span>{" "}
              <span className='text-sm flex flex-row gap-2 md:gap-4 p-0 md:p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i>male
                </span>
                <span>
                  <i className='fa fa-female'></i> female
                </span>
              </span>
              380
            </span>
          </span>{" "}
          <span className='flex flex-row gap-2 px-2 md:px-11 py-0 md:py-2 md:w-96 rounded-lg text-slate-900 shadow-md'>
            <span>
              <i
                className='fa fa-desktop rounded-full bg-slate-200 text-md md:text-xl p-2 md:p-4 font-bold'
                aria-hidden='true'
              ></i>{" "}
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-sm md:text-lg font-bold'>
                ON LEAVE
              </span>{" "}
              <span className='text-sm flex flex-row gap-2 md:gap-4 p-0 md:p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i>male
                </span>
                <span>
                  <i className='fa fa-female'></i> female
                </span>
              </span>
              100
            </span>
          </span>{" "}
          <span className='flex flex-row gap-2 px-2 md:px-11 py-0 md:py-2 md:w-96 rounded-lg text-black shadow-md'>
            <span>
              <i
                className='fa fa-desktop rounded-full bg-slate-200 text-md md:text-xl p-2 md:p-4 font-bold'
                aria-hidden='true'
              ></i>{" "}
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-sm md:text-lg font-bold'>
                SICK LEAVE
              </span>{" "}
              <span className='text-sm flex flex-row gap-2 md:gap-4 p-0 md:p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i> male
                </span>
                <span>
                  <i className='fa fa-female'></i> female
                </span>
              </span>
              50
            </span>
          </span>{" "}
        </div>
      </div>

      <div className='flex flex-col shadow-xl rounded-md ring-1 ring-slate-200 px-1 md:px-7'>
        <span className='text-lg mx-1 md:mx-9 md:m-5 text-slate-500 font-bold'>
          Todays Log
        </span>
        {/* <div className='flex  flex-row flex-wrap gap-0 md:gap-24 text-sm font-thin overflow-x-scroll justify-around'>
          {["Employe name", "age", "tasks", "postion", "date", "status"].map(
            (tab) => (
              <span key={tab} className=' text-slate-500 gap-0  '>
                {tab}
              </span>
            )
          )}
        </div>

        <span className='h-1 bg-slate-100 md:w-full my-3' />
        <div className='flex flex-row flex-wrap gap-1 md:gap-4 w-full overflow-y-scroll h-96 justify-between'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
            <div
              key={item}
              className='flex  text-slate-500 flex-row  gap-3 w-72 md:gap-20 md:w-full justify-between'
            >
              <span htmlFor='' className='flex flex-row'>
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
                  <span className='text-slate-600 font-thin'>
                    melakabebeee@gmail.com
                  </span>
                </span>
              </span>

              <span>23</span>
              <span>stock request</span>
              <span>30,mar,21</span>
              <span>Leader</span>

              {item === 4 ||
              item === 3 ||
              item === 6 ||
              item === 11 ||
              item === 15 ? (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-white ring-1 bg-red-300 h-5 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-0 `}
                >
                  absent{" "}
                </button>
              ) : (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-white ring-1 h-7 bg-green-300  rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-1 `}
                >
                  present
                </button>
              )}
            </div>
          ))}
        </div> */}
        <div className='table-container overflow-scroll'>
          <table>
            <tbody>
              <tr className='text-xs md:text-base sm:text-sm md:w-80'>
                <th>Employe name</th>
                <th>Age</th>
                <th>Tasks</th>
                <th>Position</th>
                <th>Date</th>
                <th>Status</th>
              </tr>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 13, 14, 15].map((item) => (
                <tr key={item} className='text-sm text-gray-900'>
                  <td className='w-32 px-1 sm:w-40 md:w-72'>
                    <span className='flex flex-row gap-0'>
                      <span className='w-10 md:w-20 h-10 '>
                        <Image
                          src='/elsabet.jpeg'
                          alt=''
                          width={50}
                          height={50}
                          className='rounded-lg rounded-image text-center'
                        />
                      </span>
                      <span className='flex md:-mx-3 flex-col text-start'>
                        <span>Melak ab </span>
                        <span className=' text-xs md:text-base text-slate-600 font-thin'>
                          melakabebeee@gmail.com
                        </span>
                      </span>
                    </span>
                    {/* <span className='flex  flex-row gap-1'>
                    <Image
                      src='/elsabet.jpeg'
                      alt=''
                      width={50}
                      height={50}
                      className='rounded-lg rounded-image text-center'
                    />
                    <span className='text-xs md:text-normal flex flex-col justify-start items-start '>
                      <span>Melak ab </span>
                      <span className='text-slate-600 font-thin'>
                        melakabebeee@gmail.com
                      </span>
                    </span>
                  </span> */}
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>23</td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                    stock request
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                    30,mar,21
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>Leader</td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                    {item === 4 ||
                    item === 3 ||
                    item === 6 ||
                    item === 11 ||
                    item === 15 ? (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-white ring-1 bg-red-300 h-5 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0'
                      >
                        absent
                      </button>
                    ) : (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-white ring-1 h-7 bg-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1'
                      >
                        present
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
