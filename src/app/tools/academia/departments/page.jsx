"use client";
import Image from "next/image";
import CourseDetails from "./CourseDetail";
import AddDepartment from "./AddDepartment";
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
const Departments = () => {
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
  if (selectedItem) {
    return (
      <CourseDetails
        courseStatus={() => setSelectedCourse(false)}
        addDept={() => setOpenAddDepartment(false)}
      />
    );
  }
  // if (openAddDepartment) {
  //   return <AddDepartment deptStatus={() => setSelectedCourse(false)} />;
  // }

  return (
    <>
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-box px-3 pt-1 text-xl'></i> Departments
          </span>
          <button
            className='bg-blue-600 text-blue-50 text-sm rounded-full px-6 p-2'
            onClick={() => setOpenAddDepartment(!openAddDepartment)}
          >
            add department
          </button>
        </div>
        {openAddDepartment && (
          <div className='flex w-full flex-row gap-2 shadow-xl rounded-xl p-4 bg-slate-200'>
            <AddDepartment deptStatus={() => setOpenAddDepartment(false)} />
          </div>
        )}
        <div
          className={`flex  ${
            openAddDepartment && "hidden"
          } w-full flex-row gap-2 shadow-xl  rounded-xl p-4 bg-slate-200`}
        >
          <div className='flex rounded-sm  w-full'>
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
              <div className='flex flex-row justify-around w-full bg-white'>
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
                <div className='flex flex-col gap-3  justify-center text-center bg-blue-600  w-64  text-slate-100'>
                  <span>ID : ETS0392/12</span>
                  <span>DATA : 12-12,2022</span>
                  <span>CGPA : 3.5</span>
                  <span>UNITS : 5</span>
                </div>
              </div>
              <span className='font-bold text-xl'> Stats</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
