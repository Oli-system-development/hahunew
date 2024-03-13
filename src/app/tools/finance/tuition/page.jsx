"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
// import Tutition from "./Tutition";
// import Tutition from "../trainee/Tutition";
// import FilterModal from "./FilterModal";
// import TuitionProfile from "./TuitionProfile";
import RegisterPage from "../../../auth/register/page";
import { useRouter } from "next/navigation";
import FilterModal from "../../trainees/trainee/FilterModal";

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
const Tuition = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [selectedTrainee, setSelectedTrainee] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [tuitionStatus, setTuitionStatus] = useState(false);
  const handleTuitionStatus = () => {
    setTuitionStatus(!tuitionStatus);
  };
  const router = useRouter();

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleButtonClick = (item) => {
    setSelectedTrainee(item);
  };
  const registerPage = () => {
    router.push("../../../auth/register");
  };
  if (selectedTrainee) {
    // return <Tutition payrolStatus={() => setSelectedTrainee(false)} />;
  }
  if (tuitionStatus) {
    // return <TuitionProfile tuitionStatus={() => setTuitionStatus(false)} />;
  }
  return (
    <>
      <div className='flex w-full  p-2 md:p-7 md:mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-lg md:text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-box px-3 pt-1 text-xl'></i> Tuition
          </span>
        </div>

        <div className='flex w-full flex-col gap-2 shadow-2xl md:rounded-xl p-1 md:p-4  md:ring-2 ring-slate-100 '>
          <div className='flex flex-col md:flex-row md:justify-between w-full md:px-20  text-md font-thin text-slate-500 md:m-3 gap-2 '>
            <div className='flex flex-row gap-3 md:gap-11 text-slate-700'>
              <i className='fa fa-search mt-2  text-slate-400 text-2xl '></i>
              <button
                className='bg-slate-200 md:px-6 h-7 md:h-auto p-1 font-bold text-sm text-slate-600 md:rounded-full cursor-pointer'
                onClick={toggleModal}
              >
                {" "}
                filter
              </button>

              <span className='font-thin text-slate-400 pt-1 text-xs md:text-normal'>
                {" "}
                COMPUTER DEPARTMENT/DATABASE STREAM / SECTION 3E
              </span>
            </div>
            {isModalVisible && (
              <FilterModal visibleModal={() => setModalVisible(false)} />
            )}
            <div className='flex justify-around gap-2 md:gap-16'>
              <i className='fa fa-tag mt-2  text-yellow-700 bg-slate-100 ring-1 ring-yellow-500 rounded-full px-1  text-lg md:text-2xl py-1 '></i>
              <i className='fa fa-plus mt-2  text-white bg-green-600 rounded-full px-1  text-lg md:text-2xl py-1'></i>
              <span className='flex gap-3'>
                <span>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                            Current trainees
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                              <span className='cursor-pointer '>select</span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                current trainees{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                applications{" "}
                              </span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                registry requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                withdraw requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                transfer and upgrades
                              </span>
                              <hr className=' text-black' />
                            </div>
                          </>{" "}
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </span>
              </span>
              <span className='flex gap-3'>
                <span>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex cursor-pointer justify-start z-50 text-slate-400 opacity-80'>
                            <i className='fa-solid fa-bars text-xl  p-2 text-slate-500 font-bold rounded-sm'></i>
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                              <span className='cursor-pointer '>select</span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>select </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                send announcement{" "}
                              </span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                generate report{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                send issue{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                export cvs{" "}
                              </span>
                              <hr className=' text-black' />
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
          <div className='flex flex-col md:flex-row gap-2'>
            {/* <div className='table-container h-[calc(50vh-1vh)] md:h-[calc(70vh-1vh)] overflow-scroll ring-1 ring-slate-200 rounded-lg'>
            <table>
              <tbody>
                <tr className='text-sm font-thin text-slate-500'>
                  {["Trainee Name", "Section", "Year", "Status"].map(
                    (tab, index) => (
                      <th key={index}>{tab}</th>
                    )
                  )}
                </tr>
                <tr className='h-1 bg-slate-100 w-full' />
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((item) => (
                  <tr key={item} className='text-sm text-gray-900'>
                    <td
                      className='w-32 px-1 sm:w-40 md:w-72 py-1 md:py-3 cursor-pointer'
                      onClick={() => handleButtonClick(item)}
                    >
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
                    </td>
                    <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                      IT C1
                    </td>
                    <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                      2022
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
                          className='text-white ring-1 h-6 bg-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0'
                        >
                          withdrawn
                        </button>
                      ) : (
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className='text-white ring-1 h-6 bg-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1'
                        >
                          active
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
            <div className='table-container overflow-scroll ring-1 ring-slate-200 shadow-sm bg-white rounded-lg h-[calc(40vh)] md:h-[calc(60vh)]'>
              <table>
                <tbody>
                  <tr className='text-sm font-thin text-slate-500'>
                    <th>TraineeName</th>
                    <th>tuition</th>
                    <th>year</th>
                    <th>status</th>
                    <th>year</th>
                    <th>handledby</th>
                  </tr>
                  <tr className='h-1 bg-slate-100 w-full' />
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((item) => (
                    <tr
                      key={item}
                      className={`text-sm text-gray-900 ${
                        item === selectedItem ? "bg-blue-500 text-white" : ""
                      }`}
                    >
                      <td
                        className='w-32 px-1 sm:w-40 md:w-72 py-1 md:py-3 cursor-pointer'
                        onClick={() => handleButtonClick(item)}
                      >
                        <span className='flex flex-row gap-0'>
                          <span className='w-10 md:w-20 h-10 '>
                            <Image
                              src='/elsabet.jpeg'
                              alt=''
                              width={50}
                              height={50}
                              className='rounded-full rounded-image text-center'
                            />
                          </span>
                          <span className='flex md:-mx-3 flex-col text-start'>
                            <span>Melak ab </span>
                            <span className=' text-xs md:text-base text-slate-600 font-thin'>
                              melakabebeee@gmail.com
                            </span>
                          </span>
                        </span>
                      </td>
                      <td className='w-32 px-7 py-3'>400</td>
                      <td className='w-32 px-7 py-3'>2022</td>
                      <td className='w-32 px-7 py-3'>
                        {item === 4 ||
                        item === 3 ||
                        item === 6 ||
                        item === 11 ||
                        item === 15 ? (
                          <button
                            data-modal-hide='default-modal'
                            type='button'
                            className={`text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-0 `}
                          >
                            active
                          </button>
                        ) : (
                          <button
                            data-modal-hide='default-modal'
                            type='button'
                            className={`text-slate-400 ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-8 -py-3 `}
                          >
                            active
                          </button>
                        )}
                      </td>
                      <td className='w-32 px-7 py-3'>2022</td>
                      <td className='w-32 px-7 py-3'>
                        <Popover className='relative'>
                          {({ open }) => (
                            <>
                              <Popover.Button className=''>
                                <button
                                  data-modal-hide='default-modal'
                                  type='button'
                                  className={`text-white z-10 ring-1 h-6 bg-green-600 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-8 -py-3 `}
                                >
                                  collect
                                </button>
                              </Popover.Button>
                              <Popover.Panel
                                className={`${
                                  open ? "block" : "hidden"
                                } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md shadow-xl`}
                              >
                                <>
                                  <div className='flex justify-center flex-col text-sm gap-4 text-slate-600 w-80 '>
                                    <span className='cursor-pointer text-blue-600 font-bold '>
                                      payment
                                    </span>
                                    <div className='flex flex-row  mb-2 gap-2 '>
                                      <span className='text-sm   text-slate-500'>
                                        receip number
                                      </span>
                                      <span className='flex  flex-row gap-2'>
                                        <input
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-1 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='description'
                                          type='text'
                                          placeholder='R1039233 '
                                        />
                                      </span>
                                    </div>
                                    <div className='flex flex-row  mb-2 gap-2 '>
                                      <span className='text-sm   text-slate-500'>
                                        detail
                                      </span>
                                      <span className='flex  flex-col gap-1 ml-3'>
                                        total expected 900
                                        <span>due date 21/3/2023</span>
                                      </span>
                                    </div>
                                    <div className='flex flex-row  mb-9 gap-2 '>
                                      <span className='text-sm   text-slate-500'>
                                        free amount
                                      </span>
                                      <span className='flex  flex-row gap-2'>
                                        <input
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-1 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='description'
                                          type='text'
                                          placeholder='9000 '
                                        />
                                      </span>
                                    </div>
                                    <div className='flex flex-row  mb-9 gap-2 '>
                                      <span className='text-sm   text-slate-500'>
                                        remark
                                      </span>
                                      <span className='flex  flex-row gap-2 ml-9'>
                                        <textarea
                                          name=''
                                          // onChange={"onChange"}
                                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-8 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                          id='description'
                                          type='text'
                                          placeholder='type in if there is any remark '
                                        />
                                      </span>
                                    </div>
                                    <span className='flex justify-end mb-2'>
                                      <span className='flex  cursor-pointer bg-blue-500 text-white justify-center  text-center w-16 rounded-full'>
                                        done
                                      </span>
                                    </span>
                                  </div>
                                </>
                              </Popover.Panel>
                            </>
                          )}
                        </Popover>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='flex  rounded-sm w-full'>
              <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-around shadow-xl w-full bg-white'>
                  <div className='flex flex-row justify-center w-full bg-slate-300 gap-0 rounded-md'>
                    <div className='flex flex-row  gap-1 md:gap-10 p-2 md:p-8'>
                      <div className='md:mt-8 w-20 md:w-auto md:-ml-3 mdpr-4'>
                        <Image
                          src='/elsabet.jpeg'
                          alt=''
                          width={150}
                          height={150}
                          className='rounded-full rounded-image md-ml-4'
                        />
                      </div>
                      <div className='flex flex-col gap-2 md:gap-5 text-slate-500'>
                        <span className='text-xl font-bold'>HANA Sirgut</span>
                        <span>store officer</span>
                        <span>department : computer</span>
                        <span>date joined : 12-12,2022</span>
                        <span>
                          <i className='fa fa-phone px-2'></i>032823323
                        </span>
                        <span>
                          <i className='fa fa-message px-2'></i>hana@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-5 pt-10 md:pt-16 md:pr-3 md:pl-10 text-xs md:text-base  md:text-left '>
                      <span>store officer</span>
                      <span>department : computer</span>
                      <span>date joined : 12-12,2022</span>
                      <span>
                        <i className='fa fa-phone px-2'></i>032823323
                      </span>
                      <span>
                        <i className='fa fa-message md:px-2'></i>hana@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-start mt-4 mb-2 '>
                  <div className=' rounded-md shadow-xl bg-gray-100 p-5 md:p-7 flex flex-row gap-6 md:gap-10  '>
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
                <div className='flex flex-row gap-4 justify-start m-2'>
                  <span className='font-bold text-md text-black'>
                    Transcript{" "}
                  </span>
                  <span className='font-thin text-md text-white bg-slate-700 px-2 rounded-md mt-1 '>
                    Term | 2022{" "}
                  </span>
                </div>
                <div className='flex flex-row'>
                  <div className='flex flex-col md:flex-row -mt-7 gap-7'>
                    <div className='flex flex-col '>
                      <div className='flex flex-col rounded-md md:pt-4 md:pr-3 md:pl-10  h-64 flex-wrap bg-white text-start md:w-72 mt-14 mb-1 text-slate-500 shadow-md '>
                        <div className='table-container overflow-scroll'>
                          <table>
                            <tbody>
                              <tr className='text-xs md:text-base sm:text-sm md:w-80'>
                                <th>COURSE</th>
                                <th>RESULT</th>
                                <th>ABSENSE</th>
                                <th>CGPA</th>
                              </tr>

                              {[1, 2, 3, 4, 5].map((item) => (
                                <tr
                                  key={item}
                                  className='text-sm text-gray-900'
                                >
                                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                                    {item}. database
                                  </td>
                                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                                    12{" "}
                                  </td>
                                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                                    8
                                  </td>
                                  <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72'>
                                    8
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col w-full '>
                      <div className='flex flex-col gap-2  h-60  w-full text-start  mt-3 mb-1 text-slate-200'>
                        <div className='flex flex-row justify-around'>
                          <span className='text-sm px-3 font-medium py-1 text-white bg-green-600 rounded-full'>
                            tutution{" "}
                          </span>
                          <span className='text-sm px-3 font-medium py-1 text-white bg-blue-600 rounded-full'>
                            generate report
                          </span>
                        </div>

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
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex flex-col  rounded-md justify-start  bg-white text-start w-64 mt-4 mb-1 text-slate-500'>
                    <span className='text-sm px-3 font-bold text-black'>
                      Grade Review
                    </span>
                    <div className='flex justify-center  flex-col w-full p-3 flex-wrap text-sm gap-2 text-slate-600 '>
                      <span className='flex flex-row justify-around'>
                        <span className='cursor-pointer '>
                          Department review{" "}
                        </span>
                        <span>
                          <label className='relative inline-flex items-center cursor-pointer'>
                            <input
                              type='checkbox'
                              value=''
                              className='sr-only peer'
                            />
                            <div className="w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>{" "}
                        </span>
                      </span>
                      <span className='flex flex-row justify-around'>
                        <span className='cursor-pointer '>
                          Register review{" "}
                        </span>
                        <span>
                          <label className='relative inline-flex items-center cursor-pointer'>
                            <input
                              type='checkbox'
                              value=''
                              className='sr-only peer'
                            />
                            <div className="w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                          </label>{" "}
                        </span>
                      </span>
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

export default Tuition;
<></>;
