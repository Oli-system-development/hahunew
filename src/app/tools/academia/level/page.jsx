"use client";
import Image from "next/image";
import AddLevel from "./AddLevel";
import React, { useState } from "react";
import { useGetAllLevelsQuery } from "../../../../services/api/academia/academiaApi";
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
const Level = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddLevel, setOpenAddLevel] = useState(false);
  const { data: levels } = useGetAllLevelsQuery();
  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };
  console.log("levels", levels);
  return (
    <>
      <div className='flex w-full  p-2 md:p-7 md:mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-lg md:text-xl font-bold justify-between'>
          <span>
            <i className='fa-solid fa-temperature-empty px-3 pt-1 text-xl'></i>{" "}
            Level
          </span>
          <button
            className='bg-blue-600 text-blue-50 text-sm rounded-full px-6 p-2'
            onClick={() => setOpenAddLevel(!openAddLevel)}
          >
            add level
          </button>
        </div>
        {openAddLevel && (
          <div className='flex w-full flex-row gap-2 shadow-xl rounded-xl p-4 bg-slate-200'>
            <AddLevel levelStatus={() => setOpenAddLevel(false)} />
          </div>
        )}
        <span className='text-md font-bold text-black'>
          department name / occupation name
        </span>
        <div
          className={`flex  ${
            openAddLevel && "hidden"
          } w-full flex-col md:flex-row gap-2 shadow-xl  rounded-xl p-4  `}
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
                {levels?.map((item, index) => (
                  <tr
                    key={item}
                    className={`text-sm text-gray-900 ${
                      item === selectedItem ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <td className='w-32 px-3 sm:w-40 md:w-72 py-1 md:py-3 cursor-pointer'>
                      <span className='flex  flex-col text-start'>
                        <span>
                          {index + 1}. {item.name}
                        </span>
                        <span
                          className={`text-sm font-thin ${
                            item === selectedItem
                              ? "text-white"
                              : "text-slate-600 mx-3"
                          }`}
                        >
                          {item.classId}
                        </span>
                      </span>
                    </td>
                    <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                      {item?.department?.head?.user?.firstName}
                    </td>
                    <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                      2
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex  rounded-xl w-full'>
            {selectedItem && (
              <div className='flex flex-col w-full'>
                <div className='flex flex-row shadow-md justify-around w-full bg-white rounded-lg mb-3'>
                  <div className='flex flex-col  gap-4 md:gap-10 p-3 md:p-8 w-full'>
                    <div className='book_items flex flex-col flex-wrap gap-4 md:gap-6 w-full  h-64 justify-around '>
                      {/* {[1, 2, 3, 4].map((item) => ( */}
                      <div
                        // key={item}
                        className={`flex text-slate-500 flex-col gap-1 md:gap-6 w-full justify-around cursor-pointer `}
                        onClick={handleBackToItems}
                      >
                        <span className='text-xl font-bold'>
                          {selectedItem.name}
                        </span>

                        <div className='flex flex-col text-sm md:text-normal  text-slate-500'>
                          <p>{selectedItem.description}</p>
                        </div>
                        <div className='-mt-5'>
                          <Image
                            src='/book1.jpeg'
                            alt=''
                            width={290}
                            height={150}
                          />
                        </div>
                      </div>
                      {/* ))} */}
                    </div>
                  </div>
                  <div className='flex flex-col gap-1 md:gap-3  justify-center text-center bg-blue-600  w-40 md:w-64  text-sm md:text-normal text-slate-100'>
                    <span>department :{selectedItem.department?.name}</span>
                    <span>occupation : </span>
                    <span>UCS : 5</span>
                    <span>Date : </span>
                    <span>Id :{selectedItem.classId} </span>
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='flex flex-col md:flex-row -mt-7 gap-7 w-full shadow-xl'>
                    <div className='flex flex-col w-full'>
                      <div className='flex flex-col justify-start  rounded-md pt-4 pr-3 pl-10   flex-wrap bg-white text-start md:w-72 mt-14 mb-1 text-slate-500 shadow-xl '>
                        <span className='font-bold text-xl '> LEVel | UCS</span>
                        <div className='flex justify-start text-start flex-col w-full py-2 flex-wrap text-sm gap-4 text-slate-600 '>
                          {[1, 2, 3, 4].map((course) => (
                            <span key={course}>
                              <span className='flex flex-row justify-around w-full text-start'>
                                <button className='bg-sky-600 text-sm p-4 text-white w-full text-start  rounded-full'>
                                  webdesign
                                </button>
                                <span className='cursor-pointer px-4 text-red-600'>
                                  <i className='fa fa-minus text-2xl'></i>{" "}
                                </span>
                              </span>
                            </span>
                          ))}
                          <div className='flex flex-row mt-5'>
                            <input
                              name=''
                              onChange={() => alert("wait for form data ")}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border   rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='search'
                            />
                            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
                          </div>
                          <span>
                            <span className='flex flex-row justify-around w-full text-start'>
                              <button className='bg-slate-700 text-sm p-4 text-white w-full text-start  rounded-full'>
                                data structure
                              </button>
                              <span className='cursor-pointer px-4 mt-3 text-slate-600'>
                                <i className='fa fa-plus text-2xl rounded-full bg-blue-300 p-2'></i>{" "}
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col w-full md:mt-3'>
                      <div className='flex flex-col gap-2   md:h-60  w-full text-start  md:mt-3 mb-1 text-slate-200'>
                        <div className='flex flex-col  rounded-md justify-start  text-start  md:mt-4 mb-1 text-slate-500  w-full'>
                          <div className='flex flex-row text-slate-500 text-xl font-bold  justify-between md:px-5 w-full'>
                            <span>Data</span>
                          </div>

                          <div className='flex justify-start mt-4 mb-2 '>
                            <div className=' rounded-md shadow-xl bg-white  ring-1 ring-slate-200 w-full p-4 md:p-7 flex flex-row gap-4 md:gap-10  '>
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
                              <span
                                onClick={() => setShowCalander((prev) => !prev)}
                              >
                                <i className='fa fa-eye pr-7'></i>
                              </span>
                            </div>
                          </div>

                          <div className='flex flex-col md:w-96 bg-white md:mt-6 mb-4 md:mb-1 mt-2 md:mx-4'>
                            <span className='my-1 mx-3 mb-4'> Instructors</span>
                            <div className='flex flex-row gap-10 w-full justify-around'>
                              <div className='flex flex-col'>
                                <div className='flex flex-row   flex-wrap gap-4   justify-between'>
                                  {[1, 2, 3].map((item) => (
                                    <div
                                      key={item}
                                      className='flex w-full  flex-wrap text-slate-500 ring-1 ring-slate-200 rounded-sm flex-row justify-between   p-1'
                                    >
                                      <span className='flex flex-row justify-between w-72 '>
                                        <span className='flex flex-row '>
                                          <span>
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
                                            <span className='text-slate-600 text-xs'>
                                              store office1 manager{" "}
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Level;
