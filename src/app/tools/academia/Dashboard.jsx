"use client";
import React, { useState } from "react";

import Image from "next/image";
import Calendar from "react-calendar";
import { BarChart, LineChart } from "@mantine/charts";
import { data2 } from "./linechartData";
import { data } from "./data";
// import { BarChart, LineChart } from "@mantine/charts";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedItem, setSelectedItem] = useState(1);
  const [showChart, setShowChart] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
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

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='flex w-full  p-3 md:px-7 mx-0 md:mx-4 md:ml-20 flex-col gap-8 md:shadow-xl rounded-xl'>
      <div className='flex w-full flex-row justify-between '>
        <div className='flex text-slate-500 text-xl font-bold'>
          <i className='fa fa-home px-3 pt-1 text-xl'></i> Dashboard
        </div>
        <div className='flex justify-end'>
          <i className='fa-solid fa-earth-africa text-slate-500 font-bold text-3xl '></i>
        </div>
      </div>

      <div className='flex  mx-1 md:mx-8 justify-between'>
        <div className='flex h-32   justify-center md:h-auto md:flex-row gap-7 flex-col flex-wrap overflow-x-scroll md:overflow-hidden md:gap-11 text-slate-700 shadow-lg p-2 md:p-5 ring-1 ring-slate-200   rounded-xl w-full md:justify-around '>
          <span className='flex gap-3 text-green-400'>
            <span>
              <i className='fa-solid fa-arrow-right-to-city rounded-full bg-slate-200 md:p-4'></i>
            </span>
            <span className='flex flex-col text-xs'>
              <span className='text-sm text-slate-400 '>Total departments</span>
              8
            </span>
          </span>{" "}
          <span className='flex gap-3 text-pink-600'>
            <span>
              <i className='fa-solid fa-arrow-right-to-city rounded-full bg-slate-200 md:p-4'></i>
            </span>
            <span className='flex flex-col text-xs'>
              <span className='text-sm text-slate-400 '>Total occupations</span>
              12
            </span>
          </span>{" "}
          <span className='flex gap-3 text-cyan-600'>
            <span>
              <i className='fa-solid fa-temperature-three-quarters rounded-full bg-pink-200 md:p-4'></i>
            </span>
            <span className='flex flex-col text-xs'>
              <span className='text-sm text-slate-400 '>levels</span>
              16
            </span>
          </span>{" "}
          <span className='flex gap-3 text-slate-600'>
            <span>
              <i className='fa-brands fa-stack-overflow rounded-full bg-green-200 md:p-4'></i>
            </span>
            <span className='flex flex-col text-xs'>
              <span className='text-sm text-slate-400 '>sections</span>
              46
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
                className='fa fa-graduation-cap rounded-full bg-yellow-200 text-xl p-4 font-bold'
                aria-hidden='true'
              ></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-lg font-bold'>
                STUDENTS{" "}
              </span>{" "}
              <span className='text-sm flex flex-row gap-4 p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i>male
                </span>
                <span>
                  <i className='fa fa-female'></i>female
                </span>
              </span>
              380
            </span>
          </span>{" "}
          <span className='flex flex-row gap-2 px-2 md:px-11 py-0 md:py-2 md:w-96 rounded-lg shadow-md text-slate-800 '>
            <span>
              <i
                className='fa fa-desktop rounded-full bg-pink-200 text-xl p-4 font-bold'
                aria-hidden='true'
              ></i>{" "}
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-lg font-bold'>
                PASS AND FAIL
              </span>{" "}
              <span className='text-sm flex flex-row gap-4 p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i>male
                </span>
                <span>
                  <i className='fa fa-female'></i>female
                </span>
              </span>
              100
            </span>
          </span>{" "}
          <span className='flex flex-row gap-2 px-2 md:px-11 py-0 md:py-2 md:w-96 rounded-lg shadow-md text-slate-800 '>
            <span>
              <i
                className='fa fa-desktop rounded-full bg-slate-200 text-xl p-4 font-bold'
                aria-hidden='true'
              ></i>{" "}
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-lg font-bold'>
                RETENTION
              </span>{" "}
              <span className='text-sm flex flex-row gap-4 p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i>male
                </span>
                <span>
                  <i className='fa fa-female'></i>female
                </span>
              </span>
              50
            </span>
          </span>{" "}
        </div>
      </div>
      <div className='flex flex-col shadow-xl rounded-md ring-1 ring-slate-200 px-7 -mt-2'>
        <span className='text-lg mx-9 m-5 text-slate-500 font-bold'>
          Todays Log
        </span>
        <div className='table-container overflow-scroll  h-[calc(50vh-1vh)] md:h-[calc(60vh-1vh)] pb-9'>
          <table>
            <tbody>
              <tr className='text-sm font-thin text-slate-500'>
                {[
                  "Trainee name/ID",
                  "Section",
                  "Last Update",
                  "Student Status",
                  "Tuition Status",
                  "GPA",
                  "Grade Status",
                  "",
                  "",
                ].map((tab, index) => (
                  <th key={index}>{tab}</th>
                ))}
              </tr>
              <tr className='h-1 bg-slate-100 w-full my-3' />
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                <tr
                  key={item}
                  className={`text-sm text-gray-900 cursor-pointer ${
                    item === selectedItem ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <td className='w-32 px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    <span className='flex flex-row gap-0'>
                      <span className='w-10'>
                        <Image
                          src='/elsabet.jpeg'
                          alt=''
                          width={50}
                          height={50}
                          className='rounded-full rounded-image text-center'
                        />
                      </span>
                      <span className='flex flex-col'>
                        <span>Melak ab </span>
                        <span className='text-slate-600 font-thin'>
                          TF010233{" "}
                        </span>
                      </span>
                    </span>
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    electronics C1
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    april 21,2022
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    {item === 4 ||
                    item === 3 ||
                    item === 6 ||
                    item === 11 ||
                    item === 15 ? (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0'
                      >
                        withdrawn
                      </button>
                    ) : (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 -py-3'
                      >
                        active
                      </button>
                    )}
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    {item === 4 ||
                    item === 3 ||
                    item === 6 ||
                    item === 11 ||
                    item === 15 ? (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0'
                      >
                        withdrawn
                      </button>
                    ) : (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 -py-3'
                      >
                        paid
                      </button>
                    )}
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    3.4
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    {item === 4 ||
                    item === 3 ||
                    item === 6 ||
                    item === 11 ||
                    item === 15 ? (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0'
                      >
                        incomplete
                      </button>
                    ) : (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 -py-3'
                      >
                        pass
                      </button>
                    )}
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    {item === 4 ||
                    item === 3 ||
                    item === 6 ||
                    item === 11 ||
                    item === 15 ? (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0'
                      >
                        pending
                      </button>
                    ) : (
                      <button
                        data-modal-hide='default-modal'
                        type='button'
                        className='text-slate-400 ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 -py-3'
                      >
                        checked
                      </button>
                    )}
                  </td>
                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                    <span className='flex flex-col'>
                      <span>zenebech bale </span>
                      <span className='text-slate-600 font-thin'>
                        TF0320032{" "}
                      </span>
                    </span>
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
