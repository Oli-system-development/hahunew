"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
// import CourseDetails from "./CourseDetail";
import AddOccupation from "./AddOccupation";
import React, { useState } from "react";

const Occupation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddDepartment, setOpenAddDepartment] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };
  // if (selectedItem) {
  //   return <CourseDetails courseStatus={() => setSelectedCourse(false)} />;
  // }
  // if (openAddDepartment) {
  //   return <AddDepartment deptStatus={() => setSelectedCourse(false)} />;
  // }

  return (
    <>
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
          <span>
            <i className='fa-regular fa-envelope px-3 pt-1 text-xl'></i>{" "}
            Occupation
          </span>
          <button
            className='bg-blue-600 text-blue-50 text-sm rounded-full px-6 p-2'
            onClick={() => setOpenAddDepartment(!openAddDepartment)}
          >
            add occupation
          </button>
        </div>
        {openAddDepartment && (
          <div className='flex w-full flex-row gap-2 shadow-xl rounded-xl p-4 bg-slate-200'>
            <AddOccupation addOccupation={() => setOpenAddDepartment(false)} />
          </div>
        )}
        <div
          className={`flex  ${
            openAddDepartment && "hidden"
          } w-full flex-row gap-2   rounded-xl p-4  gap-6`}
        >
          <div className='flex  rounded-xl w-full shadow-xl r-2 ring-slate-200 '>
            <div className='flex flex-col w-full'>
              <div className='flex flex-row justify-around w-full bg-white'>
                <div className='flex flex-col  gap-10 p-8 w-full'>
                  <div className='book_items flex flex-col shadow-xl flex-wrap gap-6 w-full overflow-y-scroll h-64 justify-around '>
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
                <div className='flex flex-col gap-3  justify-center text-center bg-blue-600  w-64  text-slate-100'>
                  <span>ID : ETS0392/12</span>
                  <span>DATA : 12-12,2022</span>
                  <span>CGPA : 3.5</span>
                  <span>UNITS : 5</span>
                </div>
              </div>
              {/* <span className='font-bold text-xl'> Stats</span>
              <div className='flex flex-row  gap-1 w-full'>
                <div className='flex flex-col w-full '>
                  <div className='flex flex-col w-full gap-5 p-6  flex-wrap '>
                    {[1, 2, 3, 4].map((appointment) => (
                      <div key={appointment} className='flex flex-row w-full'>
                        <span className='flex text-slate-100 font-thin flex-col  bg-indigo-400 rounded-lg px-1 w-20 -mr-2 opacity-75 z-10'>
                          <span className='text-lg font-medium  text-black'>
                            242
                          </span>
                          <span>staff</span>
                        </span>
                        <span
                          className={`p-1  w-full text-center text-xs shadow-lg h-20   bg-slate-100 rounded-md gap-3`}
                        >
                          <div className='flex flex-row gap-3 text-slate-600 text-sm w-full justify-around'>
                            <span className='flex text-slate-500 font-thin flex-col gap-4 '>
                              <span className='text-lg font-medium  text-black'>
                                11
                              </span>
                              <span>Trainee</span>
                            </span>
                            <span className='flex text-slate-500 font-thin flex-col gap-4 '>
                              <span className='text-lg font-medium  text-black'>
                                43
                              </span>
                              <span>staff</span>
                            </span>
                            <span className='flex text-slate-500 font-thin flex-col gap-4 '>
                              <span className='text-lg font-medium  text-black'>
                                242
                              </span>
                              <span>my list</span>
                            </span>
                          </div>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col '>
                  <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start w-64  mb-1 text-slate-500 shadow-md '>
                    <span className='text-xl px-3 font-bold text-black'>
                      streams
                    </span>
                    <span>1.introduction</span>
                    <span>2.design of algorism</span>
                    <span>3.system training </span>
                    <span>2.field study </span>
                  </div>
                  <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start w-64 mt-3 mb-1 text-slate-500 shadow-md '>
                    <span className='text-xl px-3 font-bold text-black'>
                      teams
                    </span>

                    <span>1.assignment 25%</span>
                    <span>2. field study 10%</span>
                    <span>3.test 20%</span>
                    <span>4. project 30%</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className='flex rounded-sm  w-full'>
            <div className='flex flex-row gap-8 '>
              <div className='flex flex-col rounded-md pt-4 pr-3 pl-10 mt-3  h-48 bg-white text-start w-64  mb-1 text-slate-500 shadow-md ring-2 ring-slate-200 '>
                <span className='text-xl px-3 font-bold text-black'>
                  streams
                </span>
                <span>1.introduction</span>
                <span>2.design of algorism</span>
                <span>3.system training </span>
                <span>2.field study </span>
              </div>
              <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start w-64 mt-3 mb-1 text-slate-500 shadow-md ring-2 ring-slate-200'>
                <span className='text-xl px-3 font-bold text-black'>teams</span>

                <span>1.assignment 25%</span>
                <span>2. field study 10%</span>
                <span>3.test 20%</span>
                <span>4. project 30%</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex ${openAddDepartment &&"hidden"} flex-wrap  flex-row  w-full  `}>
          <div className='flex flex-row gap-5 '>
            <div className='flex p-1 gap-16 justify-center shadow-xl   flex-wrap overflow-y-scroll flex-row bg-white rounded-md '>
              <div className='flex flex-col justify-around w-full mb-5 gap-2 text-sm font-thin text-slate-500 m-3 '>
                <span className='text-xl font-bold text-black'>Requests </span>
                <span className='flex  flex-row justify-between'>
                  <div className='flex flex-row justify-between w-full px-20  text-md font-thin text-slate-500 mx-3 '>
                    <div className='flex flex-row justify-start text-start gap-2 text-slate-700'>
                      <i className='fa fa-search mt-2  text-slate-400 text-2xl '></i>
                      <button className='bg-slate-200 px-6  p-1 font-bold text-sm text-slate-600 rounded-full cursor-pointer'>
                        {" "}
                        filter
                      </button>
                    </div>

                    <div className='flex justify-around '>
                      <span className='flex gap-3'>
                        <span>
                          <Popover className='relative'>
                            {({ open }) => (
                              <>
                                <Popover.Button className=''>
                                  <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                                    12/32/23
                                  </span>{" "}
                                </Popover.Button>
                                <Popover.Panel
                                  className={`${
                                    open ? "block" : "hidden"
                                  } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                                >
                                  <>
                                    <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                                      <span className='cursor-pointer '>
                                        select
                                      </span>
                                      <hr className=' text-black' />
                                      <span className='cursor-pointer '>
                                        current trainees{" "}
                                      </span>
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
                </span>
              </div>
              <div className=' all_items flex flex-row flex-wrap gap-6 w-full  overflow-y-scroll h-5/6 justify-around -mt-20'>
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <div
                    key={item}
                    className={`flex text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                      item === selectedItem ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <span className=''>{item}.</span>

                    <span>grade change</span>
                    <span>amanuel aregaye</span>
                    <span>samri aregaye</span>
                    <span>mistake by instruct</span>
                    <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                      resolved
                    </button>
                    <span className="w-32 bg-slate-200 rounded-md h-6"></span>
                    <span className='flex gap-2'>
                <i className='fa-solid fa-circle-check text-blue-400 font-bold text-lg'></i>
                <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
              </span>
                    <i className="fa fa-eye text-lg text-slate-600"></i>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col w-96 bg-slate-200 mx-4'>
              <span className='my-1 mx-3 mb-4'> top performing trainers </span>
              <div className='flex flex-row gap-10 w-full justify-around'>
                <div className='flex flex-col'>
                  <div className='flex flex-row   flex-wrap gap-4   justify-between'>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className='flex w-full  flex-wrap text-slate-500 flex-row justify-between     bg-slate-200 p-1'
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
    </>
  );
};

export default Occupation;
