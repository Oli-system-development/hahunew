"use client";
import Image from "next/image";
import AddLevel from "./AddLevel";
import React, { useState } from "react";
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
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddLevel, setOpenAddLevel] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };

  return (
    <>
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
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
          {/* <Button>add level</Button> */}
        </div>
        {openAddLevel && (
          <div className='flex w-full flex-row gap-2  rounded-xl p-4 bg-slate-200'>
            <AddLevel levelStatus={() => setOpenAddLevel(false)} />
          </div>
        )}
        <div
          className={`flex  ${
            openAddLevel && "hidden"
          } w-full flex-row gap-2   rounded-xl p-4 bg-white`}
        >
          <div className='flex rounded-sm  w-full shadow-2xl'>
            <div className='flex flex-wrap  flex-row  '>
              <div className='flex flex-col '>
                <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md '>
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
                  <div className=' all_items flex flex-row flex-wrap gap-6 w-full overflow-y-scroll h-5/6 justify-around -mt-20'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <div
                        key={item}
                        className={`flex text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                          item === selectedItem ? "bg-blue-500 text-white" : ""
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
                        <span className='flex gap-10'>
                          <span>fashion C2</span>
                          <span>2</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex  rounded-sm w-full'>
            <div className='flex flex-col w-full'>
              <div className='flex flex-row justify-around w-full shadow-xl'>
                <div className='flex flex-col  gap-10 p-8 w-full'>
                  <div className='book_items flex flex-col flex-wrap gap-6 w-full overflow-y-scroll h-64 justify-around '>
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className={`flex text-slate-500 flex-col gap-6 w-full justify-around cursor-pointer `}
                        onClick={handleBackToItems}
                      >
                        <span className='text-xl font-bold'>
                          Information technology{" "}
                        </span>

                        <div className='flex flex-col  text-slate-500'>
                          <p>
                            some details about the course like the quick brown
                            fox jumped over the lazy dog . well that was not as
                            long as i had hoped
                          </p>
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
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-3  justify-center text-center bg-blue-600  w-64 h-52  text-slate-100'>
                  <span>ID : ETS0392/12</span>
                  <span>DATA : 12-12,2022</span>
                  <span>CGPA : 3.5</span>
                  <span>UNITS : 5</span>
                </div>
              </div>
              <span className='font-bold text-xl mt-4'> Stats</span>
              <div className='flex flex-row'>
                <div className='flex flex-row -mt-7 gap-7 w-full'>
                  <div className='flex flex-col '>
                    <div className='flex flex-col justify-start  rounded-md pt-4 pr-3 pl-10   flex-wrap bg-white text-start w-72 mt-14 mb-1 text-slate-500 shadow-xl '>
                      <span>Current courses</span>
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
                  <div className='flex flex-col w-full mt-3'>
                    <div className='flex flex-col gap-2  h-60  w-full text-start  mt-3 mb-1 text-slate-200'>
                      <div className='flex flex-col  rounded-md justify-start  text-start  mt-4 mb-1 text-slate-500  w-full'>
                        <div className='flex flex-row text-slate-500 text-xl font-bold  justify-between px-5 w-full'>
                          <span>Data</span>
                        </div>

                        <div className='flex justify-start mt-4 mb-2 '>
                          <div className=' rounded-md shadow-xl bg-white p-7 flex flex-row gap-10  '>
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

                        <div className='flex flex-col w-96 bg-white mt-6 mx-4'>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Level;
