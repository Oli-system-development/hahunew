import { Sparkline } from "@mantine/charts";
import Image from "next/image";
import React, { useState } from "react";
const DeptDetail = ({ courseStatus, addDept, dept }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [showBookDetails, setShowBookDetails] = useState(false);
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
  //   return <CourseDetails courseStatus={() => setSelectedCourse(false)} />
  // }
  return (
    <>
      <div className='flex w-full  p-2 md:p-7 md:mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-lg md:text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-box px-3 pt-1 text-xl'></i> Departments
          </span>
          {/* <button
            className='bg-blue-600 text-blue-50 rounded-full text-md px-6 p-2'
            onClick={() => addDept(false)}
          >
            add department
          </button> */}
        </div>

        <div className='flex w-full flex-col md:flex-row gap-4 md:gap-7 shadow-xl rounded-xl p-4 bg-slate-200'>
          <div className='flex  rounded-sm w-full'>
            <div className='flex flex-col w-full'>
              <div className='flex flex-row justify-around w-full bg-white rounded-lg mb-3'>
                <div className='flex flex-col  gap-4 md:gap-10 p-3 md:p-8 w-full'>
                  <div className='book_items flex flex-col flex-wrap gap-4 md:gap-6 w-full  h-64 justify-around '>
                    <div
                      className={`flex text-slate-500 flex-col gap-1 md:gap-6 w-full justify-around cursor-pointer `}
                      onClick={handleBackToItems}
                    >
                      <span className='text-xl font-bold'>{dept.name}</span>

                      <div className='flex flex-col text-sm md:text-normal  text-slate-500'>
                        <p>{dept.description}</p>
                      </div>

                      <div className='rounded-md w-full h-32 md:h-44 overflow-hidden relative'>
                        {dept?.file && (
                          <Image
                            src={`http://${dept.file}` || ""}
                            alt='image here'
                            layout='fill'
                            objectFit='cover'
                            className='w-full h-full'
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-1 md:gap-3  justify-center text-center bg-blue-600  w-40 md:w-64  text-sm md:text-normal text-slate-100'>
                  <span>Head : {dept.head?.user?.firstName}</span>
                  <span>Abbrv : {dept.depAbb}</span>
                  <span>Id :{dept.depId}</span>
                  <span>Register office : </span>
                  <span>Occupation : </span>
                  <span>Date : </span>
                </div>
              </div>
              <span className='font-bold text-xl'> Stats</span>
              <div className='flex flex-col md:flex-row  gap-1 w-full'>
                <div className='flex flex-col w-full '>
                  <div className='flex flex-col w-full gap-2 md:gap-5 p-3 md:p-6  flex-wrap '>
                    {[1, 2, 3, 4].map((appointment) => (
                      <div key={appointment} className='flex flex-row w-full'>
                        <span className='flex text-slate-100 font-thin flex-col  bg-indigo-400 rounded-lg px-1 md:w-20 -mr-2 opacity-75 z-10'>
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
                  <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start md:w-64  mb-1 text-slate-500 shadow-md '>
                    <span className='text-xl px-3 font-bold text-black'>
                      streams
                    </span>
                    {dept.streams?.map((stream, index) => (
                      <span key={index} span>
                        {" "}
                        {index + 1} . {stream?.name}{" "}
                      </span>
                    ))}
                  </div>
                  <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start md:w-64 mt-3 mb-1 text-slate-500 shadow-md '>
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
          <div className='flex rounded-sm  w-full'>
            <div className='flex flex-wrap  flex-col  w-full'>
              <div className='flex flex-col md:flex-row w-full gap-4'>
                <div className='flex flex-col '>
                  <div className='flex flex-col justify-start  rounded-md  pr-3 pl-10   flex-wrap bg-white text-start w-72 mb-1 text-slate-500 shadow-md '>
                    <span>associate industries </span>
                    <div className='flex justify-start text-start flex-col w-full py-2 flex-wrap text-sm gap-4 text-slate-600 '>
                      <div className='flex flex-row mt-5 w-32'>
                        <input
                          name=''
                          onChange={() => alert("wait for form data ")}
                          className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border w-32  rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='header text'
                          type='text'
                          placeholder='search'
                        />
                        <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
                      </div>
                      <span>
                        <span className='flex flex-row justify-around w-full text-start'>
                          <button className='bg-pink-400 text-sm p-4 text-white w-full text-start  rounded-md'>
                            isalnd crop
                          </button>
                          <span className='cursor-pointer px-4 mt-3 text-slate-600'>
                            <i className='fa fa-plus text-2xl rounded-full bg-blue-300 p-2'></i>{" "}
                          </span>
                        </span>
                      </span>
                      {[1, 2, 3, 4].map((course) => (
                        <span key={course}>
                          <span className='flex flex-row justify-between w-full rounded-md text-start bg-sky-400 text-white'>
                            <button className=' text-sm p-4 text-white w-full text-start  rounded-md'>
                              webdesign
                            </button>
                            <span className='mt-2'>+2523982398</span>
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-start  rounded-md  pr-3 pl-10   flex-wrap bg-white text-start w-full mb-1 text-slate-500 shadow-md '>
                  <span>occupation </span>
                  <div className='flex justify-start text-start flex-col w-full py-2 flex-wrap text-sm gap-4 text-slate-600 '>
                    {dept.streams?.map((stream, index) => (
                      <span key={index}>
                        <span className='flex flex-row justify-between w-full rounded-md text-start bg-gray-500 text-white'>
                          <button className=' text-sm p-4 text-white w-full text-start  rounded-md'>
                            {index + 1}. {stream.name}
                          </button>
                          <span className='mt-2'>{stream.head?.firstName}</span>
                          <i className='mt-2 fa fa-edit text-lg p-3'></i>
                        </span>
                      </span>
                    ))}
                    <div className='flex justify-end mt-4 '>
                      <button className='bg-blue-500 text-white rounded-full px-2 p-1'>
                        + occupation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row md:-mt-7 gap-2 md:gap-7'>
                <div className='flex flex-col w-full '>
                  <div className='flex flex-col gap-2  h-60  w-full text-start  mt-10  mb-1 text-slate-200'>
                    <div className='flex flex-col  rounded-md justify-start  bg-white text-start md:w-64 mt-4 mb-1 text-slate-500 shadow-md '>
                      <span className='text-md px-3 font-bold text-black'>
                        Issues
                      </span>
                      <div className='flex justify-center flex-col w-full p-3 flex-wrap text-sm gap-2 text-slate-600 '>
                        <span className='flex flex-row justify-around'>
                          <span className='cursor-pointer '>
                            current trainees{" "}
                          </span>
                          <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                            resolved
                          </button>
                        </span>
                        <hr className=' text-black' />

                        <span className='flex flex-row justify-around'>
                          <span className='cursor-pointer '>
                            current trainees{" "}
                          </span>
                          <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                            resolved
                          </button>
                        </span>
                        <hr className=' text-black' />
                        <span className='flex flex-row justify-around'>
                          <span className='cursor-pointer '>
                            current trainees{" "}
                          </span>
                          <button className='bg-red-600 text-sm text-white px-2 rounded-md'>
                            awaiting
                          </button>
                        </span>
                        <hr className=' text-black' />

                        <span className='flex flex-row justify-around'>
                          <span className='cursor-pointer '>
                            current trainees{" "}
                          </span>
                          <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                            resolved
                          </button>
                        </span>
                        <hr className=' text-black' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col w-full '>
                  <div className='flex flex-col gap-2  md:h-60  w-full text-start  md:mt-10  mb-1 text-slate-200'>
                    <div className='flex flex-col  rounded-md justify-start   text-start  mt-4 mb-1 text-slate-500 shadow-md '>
                      <div className='flex w-full flex-col md:flex-row justify-center gap-3 md:gap-11 p-0'>
                        <span
                          className={`p-1 px-3 md:w-52 text-center text-lg md:h-52 rounded-xl bg-blue-400
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
                          className={`p-1 px-3 md:w-52 text-center text-lg md:h-52 rounded-xl bg-fuchsia-500 text-blue-200`}
                        >
                          time management
                          <Sparkline
                            w={200}
                            h={60}
                            data={[0, 20, 40, 20, 40, 10, 50]}
                            curveType='linear'
                            color='red'
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

export default DeptDetail;
