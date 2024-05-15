"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Calendar, Modal, Progress, theme } from "antd";
import AddSection from "./AddSection";
import { useGetAllSectionsQuery, useGetSectionQuery } from "../../../../services/api/academia/academiaApi";
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
const Sections = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddSection, setOpenAddSection] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const { data: sections } = useGetAllSectionsQuery();
  console.log("sections", sections);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };
  //!

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };
  const onChange = (e) => {
    alert(`checked = ${e.target.checked}`);
  };

  //! for calander
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid   ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <>
      <div className='flex w-full  p-2 md:p-7 md:mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-lg md:text-xl font-bold justify-between'>
          <span>
            <i className='fa-solid fa-arrow-right-to-city px-3 pt-1 text-xl'></i>{" "}
            Sections
          </span>
          <button
            className='bg-blue-600 text-blue-50 text-sm rounded-full px-6 p-2'
            onClick={() => setOpenAddSection(!openAddSection)}
          >
            add section
          </button>
          {/* <Button>add section</Button> */}
        </div>
        {openAddSection && (
          <div className='flex w-full flex-row gap-2 shadow-xl rounded-xl p-4 bg-slate-200'>
            <AddSection sectionStatus={() => setOpenAddSection(false)} />
          </div>
        )}
        <div
          className={`flex  ${
            openAddSection && "hidden"
          } w-full flex-col md:flex-row gap-2 shadow-xl  rounded-xl p-4  `}
        >
          {!schedule && (
            <div className='table-container overflow-scroll ring-1 ring-slate-200 shadow-sm bg-white rounded-lg h-[calc(40vh)] md:h-[calc(60vh)]'>
              <table>
                <tbody>
                  <tr className='text-sm font-thin text-slate-600'>
                    <th></th>
                    <th>SECTION Name</th>
                    <th>YEAR</th>
                    <th>LEVEL</th>
                    <th>STUDENTS</th>
                    <th>SECLUDE</th>
                    <th>INSTRUCTOR</th>
                    <th>
                      <i className='fa fa-ellipsis-v'></i>
                    </th>
                  </tr>
                  <tr className='h-1 bg-slate-100 w-full' />
                  {sections?.map((item, index) => (
                    <tr
                      key={index}
                      className={`text-sm text-gray-900 ${
                        item === selectedItem ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleItemClick(item)}
                    >
                      <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                        {index + 1}.
                      </td>
                      <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                        {item.name}
                      </td>
                      <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                        {item.year}
                      </td>
                      <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                        Level V||
                      </td>
                      <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                        23 <i className='fa fa-edit text-blue-600'></i>
                      </td>
                      <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                        23 <i className='fa fa-edit text-blue-600'></i>
                      </td>
                      <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                        2 <i className='fa fa-edit text-blue-600'></i>
                      </td>
                      <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {schedule && (
            <div className='flex flex-wrap flex-col m-9  bg-white rounded-xl shadow-md'>
              <div className='flex flex-row  mb-9  '>
                <div className='flex flex-col p-7 gap-6 w-full '>
                  <span className='text-xl  font-bold text-blue-600'>
                    {" "}
                    Schedule Scope
                  </span>
                  <span>section A</span>
                  <div className='flex flex-row gap-3 py-5'>
                    <span>interval</span>
                    <input
                      type='text'
                      placeholder='weekly'
                      className='ring-1 ring-slate-200 rounded-md px-3 h-8'
                    />
                  </div>
                  <div className='flex flex-row gap-3'>
                    <span>interval</span>
                    <input
                      type='text'
                      placeholder='1/2/2023'
                      className='ring-1 ring-slate-200 rounded-md px-3 h-8'
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <div style={wrapperStyle}>
                    <Calendar
                      fullscreen={false}
                      onPanelChange={onPanelChange}
                      className='w-full'
                    />
                  </div>
                </div>
                <div className='flex rounded-sm mt-4  w-full'></div>
              </div>
              <div className='mx-5'>
                {/* <Scheduler/> */}
                <div className='flex flex-row gap-10'>
                  <div className='flex flex-col gap-8'>
                    {["", 1, 2, 3, 4, 5, 6].map((time) => (
                      <div key={time} className='flex'>
                        <span>{!time == "" && time + ":30"}</span>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-row gap-10 w-full'>
                    {["mon", "thu", "wed", "thur", "fri", "sat", "sun"].map(
                      (date) => (
                        <div key={date} className='flex gap-6'>
                          <button
                            className='flex cursor-pointer  bg-slate-100 ring-1 gap-5 ring-slate-200 px-2 rounded-md text-blue-500 '
                            onClick={() => setModalVisible((prev) => !prev)}
                          >
                            {date} +
                          </button>
                        </div>
                      )
                    )}
                    {isModalVisible && (
                      <div className='flex z-20 opacity-100 shadow-2xl fixed top-20 mt-20 right-0 left-0 z-100 justify-center items-center md:inset-0 h-[calc(140%-1rem)] max-h-full'>
                        {" "}
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
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className='flex flex-col md:flex-col rounded-sm w-full'>
            {selectedItem && (
              <div className='flex gap-1 md:gap-4 flex-col w-full'>
                <div className='flex flex-row'>
                  <div className='flex flex-col md:flex-row md:-mt-7 gap-2 md:gap-7 md:w-full'>
                    <div className='flex flex-col  md:w-[77%] '>
                      <div className='flex flex-col justify-start  md:z-10 rounded-md  pr-3  pl-3   flex-wrap bg-white text-start md:w-full  mb-1 text-slate-500 shadow-xl  '>
                        <span>Level |</span>
                        <div className='flex justify-center text-center flex-col w-full md:py-2 flex-wrap text-sm gap-2 text-slate-600 '>
                          <div className='p-1 md:p-5 my-1 md:my-5 flex flex-col'>
                            <Progress
                              type='circle'
                              status='active'
                              percent={98}
                            />
                            <span className='mt-3 md:mt-7'>
                              6 courses completed{" "}
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-col justify-start  bg-white   '>
                          <span className='my-1 mb-1'> Instructors</span>
                          <div className='flex flex-row gap-0 mb-3 md:mb-6  justify-start'>
                            <div className='flex flex-col '>
                              <div className='flex flex-row   flex-wrap gap-4   justify-between'>
                                {[1].map((item) => (
                                  <div
                                    key={item}
                                    className='flex flex-wrap w-full text-slate-500 ring-1 ring-slate-200 rounded-sm flex-row justify-between   p-1'
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
                          <button
                            className='mt-2 md:mt-9 w-36 text-sm rounded-full bg-slate-300 text-slate-700 m-2'
                            onClick={() => setSchedule((prev) => !prev)}
                          >
                            manage schedule
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col w-full mt-3'>
                      <div className='flex flex-col gap-2  md:h-60  w-full text-start  mt-3 md:mb-1 text-slate-200'>
                        <div className='flex flex-col gap-2 rounded-md justify-start  text-start  mt-4 md:mb-1 text-slate-500  w-full'>
                          <div className='flex flex-col w-full gap-3  justify-center text-center bg-blue-600   md:h-52  text-slate-100'>
                            <span>SECTION : {selectedItem.name}</span>
                            <span>
                              DEPARTMENT :{" "}
                              {selectedItem.class?.department?.name}
                            </span>
                            <span>OCCUPATION : 3.5</span>
                            <span>ID : {selectedItem.sectionId}</span>
                          </div>
                          <div className='flex flex-row text-slate-500 text-xl font-bold  justify-between px-5 w-full'>
                            <span>Data</span>
                          </div>
                          <div className='flex gap-3 justify-start flex-col md:h-64'>
                            <div className=' rounded-md shadow-xl bg-white p-4 md:p-7 flex flex-row gap-10  '>
                              {/* {[5, 2, 3].map((item) => ( */}
                              <span
                                // key={item}
                                className='flex flex-row  text-sm justify-between mb-2 gap-3 text-slate-600'
                              >
                                <span
                                  className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-6   text-slate-500`}
                                >
                                  <span className='flex justify-start font-bold text-lg'>
                                    {selectedItem.students?.length || 20}
                                  </span>
                                  <span> students</span>
                                </span>
                              </span>
                              <span className='flex flex-row  text-sm justify-between mb-2 gap-3 text-slate-600'>
                                <span
                                  className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-6   text-slate-500`}
                                >
                                  <span className='flex justify-start font-bold text-lg'>
                                    10
                                  </span>
                                  <span> male</span>
                                </span>
                              </span>
                              <span className='flex flex-row  text-sm justify-between mb-2 gap-3 text-slate-600'>
                                <span
                                  className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-6   text-slate-500`}
                                >
                                  <span className='flex justify-start font-bold text-lg'>
                                    {/* {item} */}2
                                  </span>
                                  <span> female</span>
                                </span>
                              </span>
                              {/* ))} */}
                            </div>
                            <div className=' rounded-md shadow-xl bg-slate-300 p-4 md:p-7 flex flex-row gap-10  '>
                              <span
                                // key={item}
                                className='flex flex-row  text-sm justify-between mb-2 gap-3 text-slate-600'
                              >
                                <span
                                  className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-6   text-green-500`}
                                >
                                  <span className='flex justify-start font-bold text-lg text-green-400'>
                                    {selectedItem.students?.length || 20}
                                  </span>
                                  <span> pass</span>
                                </span>
                              </span>
                              <span className='flex flex-row  text-sm justify-between mb-2 gap-3 text-slate-600'>
                                <span
                                  className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-6   text-red-500`}
                                >
                                  <span className='flex justify-start font-bold text-lg'>
                                    10
                                  </span>
                                  <span> failed</span>
                                </span>
                              </span>
                              <span className='flex flex-row  text-sm justify-between mb-2 gap-3 text-slate-600'>
                                <span
                                  className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-6   text-slate-500`}
                                >
                                  <span className='flex justify-start font-bold text-lg'>
                                    {/* {item} */}2
                                  </span>
                                  <span> with drawn</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='table-container mt-3 overflow-scroll ring-1 ring-slate-200 shadow-sm bg-white rounded-lg h-[calc(40vh)] md:h-[calc(60vh)]'>
                  <table>
                    <tbody>
                      <tr className='text-sm font-thin'>
                        <th></th>
                        <th>TraineeName</th>
                        <th className=''>CGPA</th>
                        <th>COURSE</th>
                        <th>status</th>
                        <th>COURSES</th>
                        <th>promote</th>
                      </tr>
                      <tr className='h-1 bg-slate-100 w-full' />
                      {[1, 2, 3, 4].map((item) => (
                        <tr
                          key={item}
                          className={`text-sm text-gray-900 ${
                            item === selectedItem
                              ? "bg-blue-500 text-white"
                              : ""
                          }`}
                          onClick={() => handleButtonClick(item)}
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

                          <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                            <i className='fa fa-edit text-blue-600 mx-3'></i>
                          </td>
                          <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                            electro C1
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
                          <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                            2020
                          </td>
                          <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                            <span className='flex gap-7 justify-center'>
                              <i className='fa-solid fa-circle-check text-green-400 font-bold text-lg'></i>
                              <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
