"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Calendar, Modal, Progress, theme } from "antd";
import AddSection from './AddSection';
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
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
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
          <div className='flex w-full flex-row gap-2  rounded-xl p-4 bg-slate-100'>
            <AddSection sectionStatus={() => setOpenAddSection(false)} />
          </div>
        )}
        <div
          className={`flex  ${
            openAddSection && "hidden"
          } w-full flex-row gap-2   rounded-xl p-4 bg-white`}
        >
          <div className={`flex rounded-sm  w-full shadow-2xl ${schedule&&"hidden"}`}>
            <div className='flex flex-wrap  flex-row  '>
              <div className='flex flex-col '>
                <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md '>
                  <div className='flex flex-row justify-around w-full gap-2 text-sm font-thin text-slate-500 mb-3 '>
                    <span></span>
                    <span>SECTION Name</span>
                    <span>YEAR</span>
                    <span> LEVEL</span>
                    <span> STUDENTS</span>
                    <span> SECLUDE</span>
                    <span> INSTRUCTOR</span>
                    <span>
                      <i className='fa fa-ellipsis-v'></i>
                    </span>
                  </div>
                  <div className=' all_items flex flex-row flex-wrap gap-8 w-full overflow-y-scroll h-5/6 justify-around '>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <div
                        key={item}
                        className={`flex text-slate-500 flex-row gap-1 w-full justify-around cursor-pointer ${
                          item === selectedItem ? "bg-blue-500 text-white" : ""
                        }`}
                        onClick={() => handleItemClick(item)}
                      >
                        <span>{item}.</span>
                        <span>Sec A</span>
                        <span>2020</span>
                        <span>Level V||</span>
                        <span>
                          23 <i className='fa fa-edit text-blue-600'></i>
                        </span>
                        <span>
                          23 <i className='fa fa-edit text-blue-600'></i>
                        </span>
                        <span>
                          2 <i className='fa fa-edit text-blue-600'></i>
                        </span>

                        <span></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
         {schedule&& <div className='flex flex-wrap flex-col m-9  bg-white rounded-xl shadow-md'>
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
                      <div className='flex z-20 opacity-100 shadow-2xl fixed top-20 mt-20 right-0 left-0 z-100 justify-center items-center md:inset-0 h-[calc(140%-1rem)] max-h-full'>                        <div className=' p-4 w-[24%] h-[80%]  max-h-full'>
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
                                        <button className="text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md">mon</button>
                                        <button className="text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md bg-blue-500  text-white">thu</button>
                                        <button className="text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md">wed</button>
                                        <button className="text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md">thu</button>
                                        <button className="text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md">fri</button>
                                         <button className="text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md  bg-blue-500  text-white">sat</button>
                                         <button className="text-sm font-thin ring-1 ring-slate-200 px-3 rounded-md">sun</button>
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
            </div>}

          <div className='flex  rounded-sm w-full'>
            <div className='flex flex-col w-full'>
              <div className='flex flex-row'>
                <div className='flex flex-row -mt-7 gap-7 w-full'>
                  <div className='flex flex-col w-[77%] '>
                    <div className='flex flex-col justify-start  z-10 rounded-md  pr-3  pl-3   flex-wrap bg-white text-start w-full  mb-1 text-slate-500 shadow-xl '>
                      <span>Level |</span>
                      <div className='flex justify-center text-center flex-col w-full py-2 flex-wrap text-sm gap-2 text-slate-600 '>
                        <div className='p-5 my-5 flex flex-col'>
                          <Progress
                            type='circle'
                            status='active'
                            percent={98}
                          />
                          <span className='mt-7'>6 courses completed </span>
                        </div>
                      </div>
                      <div className='flex flex-col justify-start  bg-white   '>
                        <span className='my-1 mb-1'> Instructors</span>
                        <div className='flex flex-row gap-0 mb-6  justify-start'>
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
                        <button className='mt-9 w-36 text-sm rounded-full bg-slate-300 text-slate-700 m-2'
                        onClick={()=>setSchedule((prev=>!prev))}
                        >
                          manage schedule
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col w-full mt-3'>
                    <div className='flex flex-col gap-2  h-60  w-full text-start  mt-3 mb-1 text-slate-200'>
                      <div className='flex flex-col  rounded-md justify-start  text-start  mt-4 mb-1 text-slate-500  w-full'>
                        <div className='flex flex-col w-full gap-3  justify-center text-center bg-blue-600   h-52  text-slate-100'>
                          <span>ID : ETS0392/12</span>
                          <span>DATA : 12-12,2022</span>
                          <span>CGPA : 3.5</span>
                          <span>UNITS : 5</span>
                        </div>
                        <div className='flex flex-row text-slate-500 text-xl font-bold  justify-between px-5 w-full'>
                          <span>Data</span>
                        </div>

                        <div className='flex gap-3 justify-start flex-col'>
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
                          </div>
                          <div className=' rounded-md shadow-xl bg-slate-300 p-7 flex flex-row gap-10  '>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex rounded-sm mt-4  w-full'>
                <div className='flex flex-wrap  flex-row  '>
                  <div className='flex flex-col  ring-1 ring-slate-100 shadow-xl mx-2 rounded-2xl w-full'>
                    <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white  px-10'>
                      <div className='flex flex-row justify-around w-full gap-2 text-sm font-thin text-slate-500 m-3 '>
                      <span></span>
                        <span >TraineeName</span>
                        <span className='flex  px-14'>CGPA</span>
                        <span> COURSE</span>
                        <span> status</span>
                        <span> COURSES</span>
                        <span> promote</span>
                      </div>

                      <div className='all_items flex flex-row flex-wrap gap-6 w-full overflow-y-scroll h-5/6 justify-around '>
                        {/* <span className='h-1 bg-slate-100 w-full my-3' /> */}
                        <div className='flex flex-row flex-wrap gap-2 w-full overflow-y-scroll justify-between'>
                          {[1, 2, 3, 4].map((item) => (
                            <div
                              key={item}
                              className={`flex  text-slate-500 flex-row gap-2 w-full justify-between cursor-pointer ${
                                item === selectedItem
                                  ? "bg-blue-500 text-white"
                                  : ""
                              }`}
                              onClick={() => handleButtonClick(item)}
                            >
                              <span>{item}</span>
                              <span htmlFor='' className='flex flex-row'>
                                {/* {item}.Melak */}
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
                                  <span className='text-slate-600 font-thin'>
                                    TF010233{" "}
                                  </span>
                                </span>
                              </span>

                              <span>electro C1</span>
                              <span>
                                3 <i className='fa fa-edit text-blue-600'></i>
                              </span>
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
                              <span>2020</span>
                              <span className='flex gap-2'>
                              <i className='fa-solid fa-circle-check text-green-400 font-bold text-lg'></i>
                              <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
                            </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                      <div className="flex justify-end">

                        <button className="bg-blue-500 rounded-full h-6 text-white px-4 m-3">done</button>
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

export default Sections;
