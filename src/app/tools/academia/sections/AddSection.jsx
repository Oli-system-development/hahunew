"use client";
import { Calendar, Checkbox, theme, Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";

import Scheduler from "./Scheduler";
import "./scheduler.css";
const AddSection = ({ addSection, sectionStatus }) => {
  const [general, setGeneral] = useState(true);
  // const [admin, setAdmin] = useState(false);
  // const [attachIndustries, setAttachIndustries] = useState(false);
  const [student, setStudent] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  //!modal
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  const generalTab = () => {
    setStudent(false);
    // setLevel(false);
    setGeneral(true);
    setSchedule(false);
  };

  const studentTab = () => {
    setGeneral(false);

    // setLevel(false);
    setStudent(true);
    setSchedule(false);
  };

  const scheduleTab = () => {
    setGeneral(false);

    setStudent(false);
    setSchedule(true);
  };
  const levelstudentTab = () => {
    setGeneral(false);

    setStudent(false);
    // setLevel(false);
  };
  const toggleModal = () => {
    setGeneral(false);

    setStudent(false);
    // setLevel(false);
    setModalVisible((prev) => !prev);
  };
  const onChange = (e) => {
    alert(`checked = ${e.target.checked}`);
  };

  //! for calander
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const { token } = theme.useToken();
  // const wrapperStyle = {
  //   width: 280,
  //   border: `1px solid   ${token.colorBorderSecondary}`,
  //   borderRadius: token.borderRadiusLG,
  // };
  return (
    <>
      <div className='flex w-full flex-col md:flex-row gap-2 md:shadow-xl rounded-xl  md:p-4 '>
        <div className=' w-full md:w-1/3 md:h-[calc(82vh-0rem)] md:mt-3 md:mb-11 md:mx-8 rounded-2xl md:shadow-2xl ring-1 ring-slate-200 bg-white '>
          <div className='flex flex-col mb-2 md:mb-9 '>
            <span className='md:text-xl p-3 md:p-7 text-blue-600 font-bold'>
              Add Section
            </span>
            <div className='flex p-1 md:p-9 gap-0 ring-1 ring-slate-200 md:ring-0 rounded-xl md:rounded-none justify-center flex-row md:flex-col '>
              <span
                onClick={generalTab}
                className={`p-1 px-3  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  general ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                General{" "}
              </span>
              <span
                onClick={studentTab}
                className={`p-1 px-3  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  student ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Student{" "}
              </span>{" "}
              <span
                onClick={scheduleTab}
                className={`p-1 px-3  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  schedule ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Schedule{" "}
              </span>
            </div>
          </div>
        </div>

        <div className='md:w-3/4  md:mx-8 md:mt-4 rounded-2xl mb-11 ring-1 flex-wrap ring-slate-200  '>
          <>
            {general && (
              <div className='flex flex-wrap flex-row mb-9 bg-white rounded-lg'>
                <div className='flex flex-col mb-9 '>
                  <div className='flex flex-wrap  flex-row     mb-3 md:mb-9 '>
                    <div className='flex flex-col  mb-5 '>
                      <span className='md:text-xl pt-3 px-1 md:px-7 font-bold text-blue-600'>
                        General
                      </span>
                      <div className='flex p-3 md:p-9 gap-2 md:gap-5 justify-center flex-col '>
                        <div className='flex flex-col gap-3 md:gap-8 justify-around'>
                          <label htmlFor=''>Section</label>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='header text'
                            type='text'
                            placeholder='enter department name'
                          />{" "}
                        </div>
                        <div className='flex flex-col gap-2 md:gap-7'>
                          <label htmlFor=''>Department</label>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='header text'
                            type='text'
                            placeholder='suggest TCL323'
                          />{" "}
                        </div>
                      </div>
                      <form action=''>
                        <div className='flex px-2 md:px-9 gap-2 md:gap-5 justify-center flex-col '>
                          <div className='flex flex-col gap-2 md:gap-7'>
                            <label htmlFor=''>Occupation</label>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='suggested TCL1026'
                            />{" "}
                          </div>
                          <div className='flex flex-col gap-4'>
                            <label htmlFor=''>Level</label>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='select level'
                            />{" "}
                          </div>
                        </div>
                        <div className='flex p-2 md:p-9 gap-2 md:gap-5 justify-center flex-row '>
                          <div className='flex flex-col gap-2 md:gap-7'>
                            <label htmlFor=''>Trainer</label>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='select trainer'
                            />{" "}
                          </div>
                          <div className='flex flex-col gap-2 md:gap-7'>
                            <label htmlFor=''>supervisor</label>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='select supervisor'
                            />{" "}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {student && (
              <div className='flex flex-wrap  flex-col md:flex-row  md:m-9 bg-white p-2 rounded-lg '>
                <div className='flex flex-row p-7 gap-3'>
                  <span className='md:text-xl  font-bold '> Student Scope</span>
                  <input
                    type='text'
                    placeholder='all'
                    className='ring-1 ring-slate-200 w-32 h-7 rounded-md text-start'
                  />
                </div>

                <div className='table-container overflow-scroll ring-1 ring-slate-200 shadow-sm bg-white rounded-lg h-[calc(40vh)] md:h-[calc(60vh)]'>
                  <table>
                    <tbody>
                      <tr className='text-sm font-thin'>
                        <th></th>
                        <th className='flex px-14'>TraineeName</th>
                        <th className='px-7'>CGPA</th>
                        <th>COURSE</th>
                        <th>status</th>
                        <th>COURSES</th>
                        <th>promote</th>
                        <th>add/remove</th>
                      </tr>
                      <tr className='h-1 bg-slate-100 w-full' />
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <tr
                          key={item}
                          className={`text-sm text-gray-900 
                                    ${
                                      item === "selectedItem"
                                        ? "bg-blue-500 text-white"
                                        : ""
                                    }
                                    `}
                          // onClick={() => handleButtonClick(item)}
                        >
                          <td>{item}</td>
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
                          <td className='w-32 px-7 py-3'>
                            3 <i className='fa fa-edit text-blue-600'></i>
                          </td>
                          <td className='w-32 px-7 py-3'>electro C1</td>
                          <td className='w-32 px-7 py-3'>
                            {item === 4 ||
                            item === 3 ||
                            item === 6 ||
                            item === 11 ||
                            item === 15 ? (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-1 py-0 `}
                                // onClick={handlePayrollStatus}
                              >
                                withdrawn
                              </button>
                            ) : (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-400  ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-4 -py-3 `}
                                // onClick={handlePayrollStatus}
                              >
                                active{" "}
                              </button>
                            )}
                          </td>
                          <td className='w-32 px-7 py-3'>2020</td>
                          <td className='w-32 px-7 py-3'>
                            <span className='flex gap-2'>
                              <i className='fa-solid fa-circle-check text-green-400 font-bold text-lg'></i>
                              <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
                            </span>
                          </td>
                          <td className='w-32 px-7 py-3'>
                            <Checkbox onChange={onChange}></Checkbox>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {schedule && (
              <div className='flex flex-wrap flex-col m-1 md:m-9  bg-white rounded-xl shadow-md'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-10 mb-2 md:mb-9  '>
                  <div className='flex flex-col mb-2 p-2 md:p-7 gap2 md:gap-6 w-full '>
                    <span className='md:text-xl  font-bold text-blue-600'>
                      {" "}
                      Schedule Scope
                    </span>
                    <span>section A</span>
                    <div className='flex flex-row gap-3 py-5'>
                      <span>interval</span>
                      <input
                        type='text'
                        placeholder='weekly'
                        className='ring-1 ring-slate-200 rounded-md md:px-3 h-8'
                      />
                    </div>
                    <div className='flex flex-row gap-3'>
                      <span>interval</span>
                      <input
                        type='text'
                        placeholder='1/2/2023'
                        className='ring-1 ring-slate-200 rounded-md md:px-3 h-8'
                      />
                    </div>
                  </div>
                  <div className=' md:w-auto'>
                    <div
                    // style={"wrapperStyle"}
                    >
                      <Calendar
                        fullscreen={false}
                        onPanelChange={onPanelChange}
                        className='md:w-full'
                      />
                    </div>
                  </div>
                  {/* <div className='flex rounded-sm mt-4  w-full'></div> */}
                </div>
                <div className='md:mx-5'>
                  {/* <Scheduler/> */}
                  <div className='flex flex-row gap-2 md:gap-10 p-2'>
                    <div className='flex flex-col gap-2 md:gap-8 text-xs md:text-lg'>
                      {["", 1, 2, 3, 4, 5, 6].map((time) => (
                        <div key={time} className='flex'>
                          <span>{!time == "" && time + ":30"}</span>
                        </div>
                      ))}
                    </div>
                    <div className='flex flex-row gap-2 md:gap-10 w-full text-xs md:text-lg'>
                      {["mon", "thu", "wed", "thur", "fri", "sat", "sun"].map(
                        (date) => (
                          <div key={date} className='flex gap-6'>
                            <button
                              className='flex cursor-pointer  bg-slate-100 ring-1 gap-5 ring-slate-200 md:px-2 rounded-md text-blue-500 '
                              onClick={() => setModalVisible((prev) => !prev)}
                            >
                              {date} +
                            </button>
                          </div>
                        )
                      )}
                      {/* <div className='flex   shadow-2xl fixed  top-20 mt-20 right-0 left-0 z-100 justify-center  items-center  md:inset-0 h-[calc(140%-1rem)] max-h-full'>
                        <div className=' p-4 w-[24%] h-[80%]  max-h-full'>
                          <div className=' bg-white rounded-lg shadow-2xl '>
                            <div className=''>
                              <div className=''>
                                <div className='px-10 flex flex-col '>
                                  <form onSubmit={""} className='gap-2'>
                                    <div className='flex flex-col gap-2'>
                                      <div className='flex justify-end mt-6'>
                                        <input
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow w-24 justify-end h-8 bg-slate-100 appearance-none ring-1 ring-slate-200 border rounded-sm  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='header text'
                                          type='week'
                                          placeholder='12/12/2022'
                                        />
                                      </div>
                                      <div className='flex flex-col  '>
                                        <span className='text-md   font-bold text-slate-500'>
                                          select UC{" "}
                                        </span>
                                        <span className='flex pt-3 flex-row gap-2'>
                                          <input
                                            name=''
                                            // onChange={"onChange"}
                                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                            id='description'
                                            type='text'
                                            placeholder='assign department head '
                                          />
                                          <i className='fa fa-plus mt-1 rounded-full bg-slate-200 p-2 text-xl'></i>
                                        </span>
                                      </div>
                                      <div className='flex flex-col   '>
                                        <span className='text-md   font-bold text-slate-500'>
                                          add a test or quiz
                                        </span>
                                        <span className='flex pt-3 flex-row gap-2'>
                                          <input
                                            name=''
                                            // onChange={"onChange"}
                                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                            id='description'
                                            type='text'
                                            placeholder='type the detail of the test '
                                          />
                                          <i className='fa fa-plus mt-1 rounded-full bg-slate-200 p-2 text-xl'></i>
                                        </span>
                                      </div>
                                      <div className='flex flex-col   '>
                                        <span className='text-md   font-bold text-slate-500'>
                                          time
                                        </span>
                                        <span className='flex pt-3 flex-row gap-2'>
                                          <input
                                            name=''
                                            // onChange={"onChange"}
                                            className='shadow  w-64  appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                            id='description'
                                            type='time'
                                            placeholder=' '
                                          />
                                        </span>
                                      </div>
                                      <div className='flex flex-col   '>
                                        <span className='text-md   font-bold text-slate-500'>
                                          duration(min)
                                        </span>
                                        <span className='flex pt-3 flex-row gap-2'>
                                          <input
                                            name=''
                                            // onChange={"onChange"}
                                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                            id='description'
                                            type='text'
                                            placeholder='enter the duration in min  '
                                          />
                                        </span>
                                      </div>
                                      <div className='flex flex-col   '>
                                        <span className='text-md   font-bold text-slate-500'>
                                          room number
                                        </span>
                                        <span className='flex pt-3 flex-row gap-2'>
                                          <input
                                            name=''
                                            // onChange={"onChange"}
                                            className='shadow w-64  appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                            id='description'
                                            type='text'
                                            placeholder='optional '
                                          />
                                        </span>
                                      </div>

                                      <div className='flex flex-col   '>
                                        <span className='text-md   font-bold text-slate-500'>
                                          clone to
                                        </span>
                                        <span className='flex pt-3 flex-row gap-2 flex-wrap'>
                                          <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                            mon
                                          </button>
                                          <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md bg-blue-500  text-white'>
                                            thu
                                          </button>
                                          <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                            wed
                                          </button>
                                          <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                            thu
                                          </button>
                                          <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                            fri
                                          </button>
                                          <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md  bg-blue-500  text-white'>
                                            sat
                                          </button>
                                          <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                            sun
                                          </button>
                                        </span>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
                                  <Image
                                    src='/loginimage.png'
                                    alt=''
                                    fill
                                    className='object-cover'
                                  />
                                </div>
                              </div>
                            </div>
                            <div className='flex items-center justify-end p-4  '>
                              <button
                                onClick={toggleModal}
                                data-modal-hide='default-modal'
                                type='button'
                                className='text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                              >
                                done
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {isModalVisible && (
                        <div className='flex ring-1 z-50 shadow-2xl fixed bottom-0 right-0 left-0 z-100 justify-center items-center md:inset-0 h-[110%] md:h-auto'>
                          <div className='p-1 md:p-4 w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%]'>
                            <div className='bg-white p-3 mb-3 md:mb-10 rounded-lg shadow-2xl'>
                              <div className='flex items-center justify-between p-2 md:p-5 rounded-t'>
                                <button
                                  onClick={toggleModal}
                                  type='button'
                                  className='text-gray-400 rounded-full bg-gray-200 hover:bg-gray-200 hover:text-gray-900 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                                  data-modal-hide='default-modal'
                                >
                                  <svg
                                    className='w-3 h-3'
                                    aria-hidden='true'
                                    xmlns=''
                                    fill='none'
                                    viewBox='0 0 14 14'
                                  >
                                    <path
                                      stroke='currentColor'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth='2'
                                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                    />
                                  </svg>
                                  <span className='sr-only'>Close modal</span>
                                </button>
                              </div>
                              <div className='px-3  md:px-10 flex flex-col '>
                                <form onSubmit={""} className='gap-2'>
                                  <div className='flex flex-col gap-1 md:gap-2'>
                                    <div className='flex justify-end md:mt-6'>
                                      <input
                                        name=''
                                        // onChange={"onChange"}
                                        className='shadow w-24 justify-end h-8 bg-slate-100 appearance-none ring-1 ring-slate-200 border rounded-sm  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                        id='header text'
                                        type='week'
                                        placeholder='12/12/2022'
                                      />
                                    </div>
                                    <div className='flex flex-col  '>
                                      <span className='text-md   font-bold text-slate-500'>
                                        select UC{" "}
                                      </span>
                                      <span className='flex pt-3 flex-row gap-2'>
                                        <input
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='description'
                                          type='text'
                                          placeholder='assign department head '
                                        />
                                        <i className='fa fa-plus mt-1 rounded-full bg-slate-200 p-2 text-xl'></i>
                                      </span>
                                    </div>
                                    <div className='flex flex-col   '>
                                      <span className='text-md   font-bold text-slate-500'>
                                        add a test or quiz
                                      </span>
                                      <span className='flex pt-3 flex-row gap-2'>
                                        <input
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='description'
                                          type='text'
                                          placeholder='type the detail of the test '
                                        />
                                        <i className='fa fa-plus mt-1 rounded-full bg-slate-200 p-2 text-xl'></i>
                                      </span>
                                    </div>
                                    <div className='flex flex-col   '>
                                      <span className='text-md   font-bold text-slate-500'>
                                        time
                                      </span>
                                      <span className='flex pt-3 flex-row gap-2'>
                                        <input
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow  w-64  appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='description'
                                          type='time'
                                          placeholder=' '
                                        />
                                      </span>
                                    </div>
                                    <div className='flex flex-col   '>
                                      <span className='text-md   font-bold text-slate-500'>
                                        duration(min)
                                      </span>
                                      <span className='flex pt-3 flex-row gap-2'>
                                        <input
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='description'
                                          type='text'
                                          placeholder='enter the duration in min  '
                                        />
                                      </span>
                                    </div>
                                    <div className='flex flex-col   '>
                                      <span className='text-md   font-bold text-slate-500'>
                                        room number
                                      </span>
                                      <span className='flex pt-3 flex-row gap-2'>
                                        <input
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow w-64  appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='description'
                                          type='text'
                                          placeholder='optional '
                                        />
                                      </span>
                                    </div>

                                    <div className='flex flex-col   '>
                                      <span className='text-md   font-bold text-slate-500'>
                                        clone to
                                      </span>
                                      <span className='flex pt-3 flex-row gap-2 flex-wrap'>
                                        <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                          mon
                                        </button>
                                        <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md bg-blue-500  text-white'>
                                          thu
                                        </button>
                                        <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                          wed
                                        </button>
                                        <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                          thu
                                        </button>
                                        <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                          fri
                                        </button>
                                        <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md  bg-blue-500  text-white'>
                                          sat
                                        </button>
                                        <button className='text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md'>
                                          sun
                                        </button>
                                      </span>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className='flex items-center justify-end p-2 md:p-4'>
                                <button
                                  onClick={toggleModal}
                                  data-modal-hide='default-modal'
                                  type='button'
                                  className='text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                >
                                  done
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className='flex justify-end h-10'>
              <button
                className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
                onClick={() => sectionStatus(false)}
              >
                finish
              </button>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default AddSection;
