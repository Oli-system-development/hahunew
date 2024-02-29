"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
// import Tutition from "./Tutition";
// import Tutition from "../trainee/Tutition";
import FilterModal from "./FilterModal";
// import TuitionProfile from "./TuitionProfile";
import RegisterPage from "../../../auth/register/page";
import { useRouter } from "next/navigation";

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
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
          <span>
            <i className='fa-solid fa-money-bill px-3 pt-1 text-xl'></i> Tuition
          </span>
        </div>

        <div className='flex w-full flex-col gap-2 shadow-2xl rounded-xl p-4  ring-2 ring-slate-100 '>
          <div className='flex flex-row justify-between w-full px-20  text-md font-thin text-slate-500 m-3 '>
            <div className='flex flex-row gap-11 text-slate-700'>
              <i className='fa fa-search mt-2  text-slate-400 text-2xl '></i>
              <button
                className='bg-slate-200 px-6  p-1 font-bold text-sm text-slate-600 rounded-full cursor-pointer'
                onClick={toggleModal}
              >
                {" "}
                filter
              </button>

              <span className='font-thin text-slate-400 pt-1'>
                {" "}
                COMPUTER DEPARTMENT/DATABASE STREAM / SECTION 3E
              </span>
            </div>
            {isModalVisible && (
              <FilterModal visibleModal={() => setModalVisible(false)} />
            )}
            <div className='flex justify-around gap-16'>
              <i className='fa fa-tag mt-2  text-yellow-700 bg-slate-100 ring-1 ring-yellow-500 rounded-full px-1  text-2xl '></i>

             
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
          <div className='flex flex-row'>
            <div className='flex rounded-sm  w-full'>
              <div className='flex flex-wrap  flex-row  '>
                <div className='flex flex-col  ring-1 ring-slate-100 shadow-xl mx-2 rounded-2xl w-full'>
                  <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white  px-10'>
                    <div className='flex flex-row justify-around w-full gap-10 text-sm font-thin text-slate-500 m-3 '>
                      <span className='flex flex-block'>TraineeName</span>
                      <span>tuition</span>
                      <span> year</span>
                      <span> status</span>
                      <span> year</span>
                      <span> handledby</span>
                    </div>

                    <div className='all_items flex flex-row flex-wrap gap-6 w-full overflow-y-scroll h-5/6 justify-around -mt-20'>
                      {/* <span className='h-1 bg-slate-100 w-full my-3' /> */}
                      <div className='flex flex-row flex-wrap gap-4 w-full overflow-y-scroll justify-between'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((item) => (
                          <div
                            key={item}
                            className={`flex  text-slate-500 flex-row gap-6 w-full justify-between cursor-pointer ${
                              item === selectedItem
                                ? "bg-blue-500 text-white"
                                : ""
                            }`}
                          >
                            <span
                              htmlFor=''
                              className='flex flex-row'
                              onClick={() => handleButtonClick(item)}
                            >
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
                              <span
                                className='flex flex-col'
                                onClick={() => setSelectedItem(item)}
                              >
                                <span>Melak ab </span>
                                <span className='text-slate-600 font-thin'>
                                  TF010233{" "}
                                </span>
                              </span>
                            </span>
                            <span>400</span>
                            <span>2022</span>
                            {item === 4 ||
                            item === 3 ||
                            item === 6 ||
                            item === 11 ||
                            item === 15 ? (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-0 `}
                                // onClick={handlePayrollStatus}
                              >
                                active
                              </button>
                            ) : (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-400  ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-8 -py-3 `}
                                // onClick={handlePayrollStatus}
                              >
                                active{" "}
                              </button>
                            )}
                            <Popover className='relative'>
                              {({ open }) => (
                                <>
                                  <Popover.Button className=''>
                                    <button
                                      data-modal-hide='default-modal'
                                      type='button'
                                      className={`text-white z-10 ring-1 h-6 bg-green-600 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-8 -py-3 `}
                                      // onClick={handlePayrollStatus}
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
                            <span className='flex flex-col'>
                              <span>Zenebech </span>
                              <span className='text-slate-600 font-thin'>
                                TF010233{" "}
                              </span>
                            </span>{" "}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex  rounded-sm w-full'>
              <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-around shadow-xl w-full bg-white'>
                  <div className='flex flex-row justify-center w-full bg-slate-300 rounded-md'>
                    <div className='flex flex-row  gap-10 p-8'>
                      <div className='mt-8 -ml-3 pr-4'>
                        <Image
                          src='/elsabet.jpeg'
                          alt=''
                          width={150}
                          height={150}
                          className='rounded-full rounded-image -ml-4'
                        />
                      </div>
                      <div className='flex flex-col gap-5 text-slate-500'>
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
                    <div className='flex flex-col gap-5 pt-16 pr-3 pl-10  text-left '>
                      <span>section:3C</span>
                      <span>prgram :regular</span>
                      <span>email :tegebech@gmail.com</span>
                      <span>year joined:2020</span>
                      <span>address: bole ruanda</span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-start mt-4 mb-2 '>
                  <div className=' rounded-md shadow-xl bg-gray-100 p-7 flex flex-row gap-10  '>
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
                  <div className='flex flex-row -mt-7 gap-7'>
                    <div className='flex flex-col '>
                      <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-64 flex-wrap bg-white text-start w-72 mt-14 mb-1 text-slate-500 shadow-md '>
                        <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md '>
                          <div className='flex flex-row  w-full gap-10 text-sm font-thin text-slate-500 '>
                            <span className='flex gap-5'>
                              <span>COURSE</span>
                              <span>REUSLT</span>
                              <span> ABSENSE</span>
                              <span>CGPA</span>
                            </span>
                          </div>
                          <div className='flex flex-row flex-wrap gap-4 w-full overflow-y-scroll h-5/6 justify-around '>
                            {[1, 2, 3, 4, 5].map((item) => (
                              <div
                                key={item}
                                className={`flex text-black text-sm font-thin flex-row gap-10 w-full  cursor-pointer `}
                              >
                                <span>{item}. database</span>
                                <span>12</span>
                                <span>8</span>
                                <span>8</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col w-full '>
                      <div className='flex flex-col gap-2  h-60  w-full text-start  mt-3 mb-1 text-slate-200'>
                        <div className='flex flex-row justify-around'>
                          <span
                            className='text-sm px-3 font-medium py-1 text-white bg-green-600 rounded-full cursor-pointer'
                            onClick={handleTuitionStatus}
                          >
                            tutution{" "}
                          </span>
                          <span className='text-sm px-3 font-medium py-1 text-white bg-blue-600 rounded-full'>
                            generate report
                          </span>
                        </div>

                        <div className='flex flex-col  rounded-md justify-start  bg-white text-start w-64 mt-4 mb-1 text-slate-500 shadow-md '>
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
