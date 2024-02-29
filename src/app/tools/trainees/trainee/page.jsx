"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Tutition from "./Tutition";
import FilterModal from "./FilterModal";
import "../table.css";
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
const Trainees = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [trainee, setSelectedTrainee] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleButtonClick = (item) => {
    setSelectedTrainee(item);
  };

  if (trainee) {
    return <Tutition payrolStatus={() => setSelectedTrainee(false)} />;
  }

  return (
    <>
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-box px-3 pt-1 text-xl'></i> Trainees
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
              <i className='fa fa-plus mt-2  text-white bg-green-600 rounded-full px-1  text-2xl '></i>
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
            {/* <div className='flex rounded-sm  w-full'>
              <div className='flex flex-wrap  flex-row  '>
                <div className='flex flex-col  ring-1 ring-slate-100 shadow-xl mx-2 rounded-2xl w-full'>
                  <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white  px-10'>
                    <div className='flex flex-row justify-around w-full gap-52 text-sm font-thin text-slate-500 m-3 '>
                      <span className='flex flex-block'>TraineeName</span>
                      <span>section</span>
                      <span> year</span>
                      <span> status</span>
                    </div>

                    <div className='all_items flex flex-row flex-wrap gap-6 w-full overflow-y-scroll h-5/6 justify-around -mt-20'>
                      <div className='flex flex-row flex-wrap gap-4 w-full overflow-y-scroll justify-between'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((item) => (
                          <div
                            key={item}
                            className={`flex  text-slate-500 flex-row gap-6 w-full justify-between cursor-pointer ${
                              item === selectedItem
                                ? "bg-blue-500 text-white"
                                : ""
                            }`}
                            onClick={() => handleButtonClick(item)}
                          >
                            <span htmlFor='' className='flex flex-row'>
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

                            <span>IT C1</span>
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
                              >
                                withdrawn
                              </button>
                            ) : (
                              <button
                                data-modal-hide='default-modal'
                                type='button'
                                className={`text-slate-400  ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-8 -py-3 `}
                              >
                                active{" "}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div class='  flex w-full p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md'>
              <table class='scrolldown '>
                <thead className=' flex flex-row flex-wrap gap-6 w-full justify-around  text-slate-500  cursor-pointer '>
                  <tr>
                    <th className='text-sm font-thin text-slate-500 py-3'>
                      TraineeName
                    </th>
                    <th className='text-sm font-thin text-slate-500 py-3'>
                      section
                    </th>
                    <th className='text-sm font-thin text-slate-500 py-3'>
                      year
                    </th>
                    <th className='text-sm font-thin text-slate-500 py-3'>
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                    <tr
                      key={item}
                      className={`text-slate-500 flex-row gap-6 w-full justify-between cursor-pointer ${
                        item === selectedItem ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleButtonClick(item)}
                    >
                      <td className='flex flex-row'>
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
                          <span>Melak ab</span>
                          <span className='text-slate-600 font-thin'>
                            TF010233
                          </span>
                        </span>
                      </td>
                      <td>IT C1</td>
                      <td>2022</td>
                      {item === 4 ||
                      item === 3 ||
                      item === 6 ||
                      item === 11 ||
                      item === 15 ? (
                        <td>
                          <button
                            data-modal-hide='default-modal'
                            type='button'
                            className={`text-slate-400 ring-1 h-5 ring-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-0`}
                          >
                            withdrawn
                          </button>
                        </td>
                      ) : (
                        <td>
                          <button
                            data-modal-hide='default-modal'
                            type='button'
                            className={`text-slate-400 ring-1 h-5 ring-green-300 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm px-8 -py-3`}
                          >
                            active
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
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
                          <span className='text-sm px-3 font-medium py-1 text-white bg-green-600 rounded-full'>
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

export default Trainees;
