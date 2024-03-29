"use client";
import Image from "next/image";
import React, { useState } from "react";

const AddOccupation = ({ addOccupation }) => {
  const [general, setGeneral] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [attachIndustries, setAttachIndustries] = useState(false);
  const [content, setContent] = useState(false);
  const [level, setLevel] = useState(false);
  const [levelContent, setLevelContent] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const generalTab = () => {
    setAdmin(false);
    setAttachIndustries(false);
    setContent(false);
    setLevelContent(false);
    setLevel(false);
    setGeneral(true);
  };

  const administratorTab = () => {
    setGeneral(false);
    setAttachIndustries(false);
    setLevelContent(false);
    setContent(false);
    setLevel(false);
    setAdmin(true);
  };

  const attachIndustriesTab = () => {
    setGeneral(false);
    setAdmin(false);
    setContent(false);
    setLevelContent(false);
    setLevel(false);
    setAttachIndustries(true);
  };

  const contentTab = () => {
    setGeneral(false);
    setAdmin(false);
    setAttachIndustries(false);
    setLevelContent(false);
    setLevel(false);
    setContent(true);
  };

  const levelTab = () => {
    setGeneral(false);
    setAdmin(false);
    setAttachIndustries(false);
    setContent(false);
    setLevel(true);
    setLevelContent(false);
  };
  const levelContentTab = () => {
    setGeneral(false);
    setAdmin(false);
    setAttachIndustries(false);
    setContent(false);
    setLevel(false);
    setLevelContent(true);
  };
  const toggleModal = () => {
    setGeneral(false);
    setAdmin(false);
    setAttachIndustries(false);
    setContent(false);
    setLevel(false);
    setLevelContent(false);
    setModalVisible((prev) => !prev);
  };

  return (
    <>
      <div className='flex w-full flex-col md:flex-row gap-2 md:shadow-xl rounded-xl  md:p-4 '>
        <div className=' w-full md:w-1/3 md:h-[calc(82vh-0rem)] md:mt-3 md:mb-11 md:mx-8 rounded-2xl md:shadow-2xl ring-1 ring-slate-200 bg-white '>
          <div className='flex flex-col mb-2 md:mb-9 '>
            <span className='md:text-xl p-3 md:p-7 text-blue-600 font-bold'>
              Add Occupation
            </span>
            <div className='flex p-1 md:p-9 gap-0 ring-1 ring-slate-200 md:ring-0 rounded-xl md:rounded-none justify-center flex-row md:flex-col '>
              <span
                onClick={generalTab}
                className={`p-1  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  general ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                General{" "}
              </span>

              <span
                onClick={contentTab}
                className={`p-1  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  content ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Content{" "}
              </span>
              <span
                onClick={levelTab}
                className={`p-1 md:px-8 text-sm md:text-lg md:mt-40 cursor-pointer rounded-md ${
                  level ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                addLevel{" "}
              </span>
              <span
                onClick={toggleModal}
                className={`p-1 md:px-8 text-sm md:text-lg  cursor-pointer rounded-md ${
                  levelContent ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                levelContent{" "}
              </span>
              {isModalVisible && (
                <div className='flex ring-1 shadow-2xl fixed bottom-0 right-0 left-0 z-100 justify-center items-center md:inset-0 h-[110%] md:h-auto'>
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
                      <div className='flex flex-col mb-3 md:mb-9 h-full md:h-[calc(74vh-0rem)]'>
                        <span className='text-xl p-2 md:p-5 font-bold'>
                          level Content
                        </span>
                        <div className='flex flex-col'>
                          <div className='flex flex-wrap flex-col p-2 md:p-6 gap-2 md:gap-4 mb-9 bg-white rounded-lg'>
                            <div className='flex flex-col mb-3 md:mb-9'>
                              <span className='text-md font-bold text-slate-500'>
                                add introduction
                              </span>
                              <span className='flex pt-3 flex-row gap-2'>
                                <textarea
                                  name=''
                                  // onChange={"onChange"}
                                  className='shadow h-20 md:h-40 appearance-none ring-1 ring-slate-400 border rounded-lg md:w-full py-2 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                  id='description'
                                  type='text'
                                  placeholder='enter the units in order '
                                />
                              </span>
                            </div>
                            <div className='flex flex-col mb-3 md:mb-9'>
                              <span className='text-md font-bold text-slate-500'>
                                attach image or video
                              </span>
                              <span className='flex md:pt-3 flex-row gap-2'>
                                <input
                                  name=''
                                  // onChange={"onChange"}
                                  className='shadow appearance-none ring-1 ring-slate-400 border rounded-lg py-2 px-3 w-full text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                  id='description'
                                  type='text'
                                  placeholder='enter the units in order '
                                />
                                <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                              </span>
                            </div>
                          </div>
                        </div>
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

        <div className='md:w-3/4  md:mx-8 md:mt-4 rounded-2xl mb-11 ring-1 flex-wrap ring-slate-200  '>
          <>
            {general && (
              <div className='flex flex-col md:flex-row gap-2 md:gap-7'>
                <div className='flex flex-wrap  flex-row  md:h-[calc(82vh-0rem)] p-2 md:p-10  mb-1 md:mb-9 bg-white rounded-lg'>
                  <div className='flex flex-col  '>
                    <span className='md:text-xl pt-3 px-1 md:px-7 font-bold text-blue-600'>
                      General
                    </span>
                    <div className='flex px-2 md:px-9 gap-2 md:gap-5 justify-center flex-col '>
                      <div className='flex flex-col pt-4 gap-4 justify-around'>
                        <label htmlFor=''>Occupation NAME</label>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='header text'
                          type='text'
                          placeholder='Enter dept name'
                        />{" "}
                      </div>
                      <div className='flex flex-col gap-4'>
                        <label htmlFor=''>Occupation abbrevation</label>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='header text'
                          type='text'
                          placeholder=''
                        />{" "}
                      </div>
                      <div className='flex flex-col gap-4'>
                        <label htmlFor=''>Occupation ID</label>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='header text'
                          type='text'
                          placeholder='suggest ATC90'
                        />{" "}
                      </div>
                    </div>
                    <form action=''>
                      <div className='flex pt-5 mt-4 md:mt-10  gap-2 md:gap-5 px-4 md:px-9 flex-row '>
                        <div className='flex flex-col gap-7'>
                          <label htmlFor=''>Current year applicant limit</label>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow h-8 w-16 appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='header text'
                            type='number'
                            placeholder='1'
                          />{" "}
                        </div>
                      </div>
                      <div className='flex flex-col gap-7 pt-4 px-9'>
                        <label htmlFor=''>teams</label>
                        <span className='flex flex-row gap-2'>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='section description'
                          />
                          <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='flex flex-col '>
                  <div className='flex flex-wrap  flex-col  h-64 md:h-96 p-2 md:p-10   mb-2 md:mb-9 bg-white rounded-lg '>
                    <div className='flex flex-col  mb-3 md:mb-9 '>
                      <span className='md:text-xl p-2 md:p-7 font-bold text-black'>
                        Occupation head
                      </span>
                      <span className='flex flex-row gap-2'>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg md:w-72  py-2 md:px-20 ml-2 md:ml-9  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='assign Occupation head '
                        />
                      </span>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-7 pt-2 md:pt-4 px-2 md:px-9'>
                      <label htmlFor=''>Occupation assistant</label>
                      <span className='flex flex-row gap-2'>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='add Occupation assistant'
                        />
                        <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                      </span>
                    </div>
                  </div>
                  <button
                    className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
                    onClick={() => addOccupation(false)}
                  >
                    finish
                  </button>
                </div>
              </div>
            )}
            {admin && (
              <div className='flex flex-wrap  flex-row     mb-9 '>
                <div className='flex flex-col  mb-9  w-1/2 bg-white rounded-xl shadow-md'>
                  <span className='text-xl p-7 font-bold '>Administrator</span>
                  <div className='flex flex-col '>
                    <div className='flex flex-wrap  flex-col   p-10 gap-40    mb-9 bg-white rounded-lg '>
                      <div className='flex flex-col  mb-9 '>
                        <span className='text-md   font-bold text-slate-500'>
                          add Administrator
                        </span>
                        <span className='flex pt-3 flex-row gap-2'>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='enter the units in order '
                          />
                          <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                        </span>
                      </div>
                      <div className='flex flex-col  mb-9 '>
                        <span className='text-md   font-bold text-slate-500'>
                          add Administrator
                        </span>
                        <span className='flex pt-3 flex-row gap-2'>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='enter the units in order '
                          />
                          <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className='flex justify-center ml-40 h-10 bg-blue-700 py-2 rounded-full w-40 text-white '
                  onClick={() => addOccupation(false)}
                >
                  finish
                </button>
              </div>
            )}
            {attachIndustries && (
              <div className='flex flex-wrap  flex-row     mb-9 '>
                <div className='flex flex-col  mb-9  w-1/2 bg-white rounded-xl shadow-md'>
                  <span className='text-xl p-7 font-bold '>
                    attach Industries
                  </span>
                  <div className='flex flex-col '>
                    <div className='flex flex-wrap  flex-col  h-[calc(68vh-0rem)]  p-10 gap-40    mb-9 bg-white rounded-lg '>
                      <div className='flex flex-col  mb-9 '>
                        <span className='text-md   font-bold text-slate-500'>
                          add Industries
                        </span>
                        <span className='flex pt-3 flex-row gap-2'>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='enter the units in order '
                          />
                          <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className='flex justify-center ml-40 bg-blue-700 py-2 h-9 rounded-full w-40 text-white '
                  onClick={() => addOccupation(false)}
                >
                  finish
                </button>
              </div>
            )}
            {content && (
              <div className='flex flex-wrap  flex-row     md:mb-9 '>
                <div className='flex flex-col  md:mb-9  md:h-[calc(74vh-0rem)] md:w-2/3 bg-white rounded-xl shadow-md'>
                  <span className='md:text-xl p-2 md:p-7 font-bold '>
                    Content
                  </span>
                  <div className='flex flex-col '>
                    <div className='flex flex-wrap  flex-col   p-4 md:p-10 gap-2 md:gap-4    mb-2 md:mb-9 bg-white rounded-lg '>
                      <div className='flex flex-col  mb-9 '>
                        <span className='text-md   font-bold text-slate-500'>
                          add introduction
                        </span>
                        <span className='flex pt-3 flex-row gap-2'>
                          <textarea
                            name=''
                            // onChange={"onChange"}
                            className='shadow  h-32 md:h-40  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 md:px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='enter the units in order '
                          />
                        </span>
                      </div>
                      <div className='flex flex-col  mb-3 md:mb-9 '>
                        <span className='text-md   font-bold text-slate-500'>
                          attach image or video
                        </span>
                        <span className='flex pt-3 flex-row gap-2'>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                            id='description'
                            type='text'
                            placeholder='enter the units in order '
                          />
                          <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-end mt-2 h-10'>
                  <button
                    className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
                    onClick={() => deptStatus(false)}
                  >
                    finish
                  </button>
                </div>
              </div>
            )}
            {level && (
              <div className='flex flex-wrap flex-row mb-2 md:mb-9 bg-white rounded-lg'>
                <div className='flex flex-col mb-2 md:mb-9 '>
                  <div className='flex flex-wrap  flex-row     md:mb-9 '>
                    <div className='flex flex-col  md:mb-9 '>
                      <span className='md:text-xl p-2 md:p-7 font-bold text-slate-600   '>
                        Level
                      </span>
                      <div className='flex p-2 md:p-9 gap-1 md:gap-5 justify-center flex-col '>
                        <div className='flex flex-col gap-2 md:gap-14 justify-around'>
                          <label htmlFor=''>Level name</label>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='header text'
                            type='text'
                            placeholder='enter department name'
                          />{" "}
                        </div>
                        <div className='flex flex-col gap-3 md:gap-7'>
                          <label htmlFor=''>Level id</label>
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
                        <div className='flex p-3 md:p-9 gap-2 md:gap-5 justify-center flex-row '>
                          <div className='flex flex-col gap-7'>
                            <label htmlFor=''>UCS</label>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='search'
                            />{" "}
                          </div>
                          <div className='flex flex-col gap-7'>
                            <label htmlFor=''>add instruction</label>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='search'
                            />{" "}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default AddOccupation;
