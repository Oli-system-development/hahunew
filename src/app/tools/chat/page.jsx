import React from "react";
import "./chatt.css";
import Image from "next/image";
import SideMenu from "./SideMenu";
import Contacts from "./Contacts";
import Messages from "./Messages";
const ChattRoom = () => {
  return (
    <div className='chatt text-white px-40 py-20'>
      <div className=' flex flex-wrap backdrop-blur-xl ring-4 ring-slate-600 rounded-3xl '>
        <div className='w-full '>
          <div className='flex '>
            <div className='hidden xl:block sm:flex-2 w-24  pt-2 opacity-70 border-r-2 border-slate-900 bg-black rounded-l-2xl text-slate-400 backdrop-blur-2xl'>
              <div className='user-profile text-center'>
                {/* <img src="../resources/profile-image.png" alt="user" className="block"> */}
                {/* <div className='w-32 h-32 rounded-full m-auto border-2 border-white shadow-lg'>
                  <Image
                    alt=''
                    width={100}
                    height={100}
                    src={"/elsabet.jpeg"}
                    className='flex rounded-full rounded-image w-30 h-30'
                  />
                </div> */}
                {/* <div className='text-slate-400 mt-8'>
                  Omer Mohamed Alid
                  <span className='inline-block align-text-bottom'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      viewBox='0 0 24 24'
                      className='w-4 h-4'
                    >
                      <path d='M19 9l-7 7-7-7'></path>
                    </svg>
                  </span>
                </div> */}
              </div>

              <SideMenu />
            </div>
            <div className='flex-1 w-full h-full rounded-r-3xl '>
              <div className='main-body container mt-6 w-full h-full flex flex-col'>
                <div className='py-4 flex-2 flex flex-row'>
                  <div className='flex-1'>
                    <span className='xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom'>
                      <span className='block h-6 w-6 p-1 rounded-full hover:bg-gray-400'>
                        <svg
                          className='w-4 h-4'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                      </span>
                    </span>
                    <span className='lg:hidden inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom'>
                      <span className='block h-6 w-6 p-1 rounded-full hover:bg-gray-400'>
                        <svg
                          className='h-4 w-4'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>

                <div className='main flex-1 flex flex-col  w-full'>
                  <div className='flex-1 m-auto flex h-full w-full '>
                    <Contacts />{" "}
                    <div className='chat-area h-full bg-slate-700 backdrop-blur-3xl bg-opacity-20 flex-1 flex flex-col w-full '>
                      <div className='flex-3  bg-black bg-opacity-50 '>
                        <h2 className='text-xl '>
                          <div className='entry cursor-pointer  transform  duration-300 transition-transform  rounded p-4 flex shadow-md'>
                            <div className='flex-2'>
                              <div className='w-16 h-16 relative'>
                                <Image
                                  alt=''
                                  width={200}
                                  height={200}
                                  src={"/elsabet.jpeg"}
                                  className='flex rounded-full rounded-image'
                                />{" "}
                              </div>
                            </div>
                            <div className='flex-1 px-6'>
                              <div className='truncate w-32'>
                                <span className='text-white text-2xl font-bold'>
                                  Bob
                                </span>
                              </div>
                              <div>
                                <small className='text-white'>
                                  last seen 3 min ago
                                </small>
                              </div>
                            </div>
                            <div className='flex flex-row gap-5 px-3 justify-end text-right'>
                              <div>
                                <small className='text-white'>
                                  <i
                                    className='fa fa-phone text-3xl font-bold '
                                    aria-hidden='true'
                                  ></i>{" "}
                                </small>
                              </div>
                              <div>
                                <small className='text-white'>
                                  <i
                                    className='fa fa-video-camera text-3xl font-bold '
                                    aria-hidden='true'
                                  ></i>{" "}
                                </small>
                              </div>
                              <div>
                                <small className='text-white'>
                                  <span
                                    className=' text-3xl font-bold '
                                    aria-hidden='true'
                                  >
                                    |
                                  </span>{" "}
                                </small>
                              </div>
                              <div className=''>
                                <small className='text-white'>
                                  <i
                                    className='fa fa-search text-3xl font-bold '
                                    aria-hidden='true'
                                  ></i>{" "}
                                </small>
                              </div>
                            </div>
                          </div>{" "}
                        </h2>
                      </div>
                      <Messages />{" "}
                      <div className='flex-2 pt-4 pb-10 bg-black opacity-60 w-full'>
                        <div className='write shadow flex px-4 rounded-lg '>
                          <div className='flex-3 flex content-center items-center text-center p-4 pr-0'>
                            <span className='block text-center text-gray-400 hover:text-gray-800'>
                              <svg
                                fill='none'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                className='h-9 w-9'
                              >
                                <path d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                              </svg>
                            </span>
                          </div>
                          <div className='flex-1'>
                            <textarea
                              name='message'
                              className='w-full block outline-none py-4 px-4 font-sans text-lg placeholder-white placeholder:font-bold placeholder:tracking-widest bg-transparent'
                              rows='1'
                              placeholder='Type a message...'
                              // autofocus
                            ></textarea>
                          </div>
                          <div className='flex-2  flex-wrap w-64  px-2 flex content-center items-center'>
                            <div className='flex-1 text-center'>
                              <button className='bg-slate-900 text-white w-10 h-10 rounded-full inline-block'>
                                <span className='inline-block align-text-bottom'>
                                  <svg
                                    fill='none'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    className='w-6 h-6'
                                  >
                                    <path d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'></path>
                                  </svg>{" "}
                                </span>
                              </button>
                            </div>
                            <div className='flex-1'>
                              <button className='bg-slate-900 text-white w-10 h-10 rounded-full inline-block'>
                                <span className='inline-block align-text-bottom'>
                                  <i className='fa fa-camera'></i>
                                </span>
                              </button>
                            </div>
                            <div className='flex-1'>
                              <button className='bg-slate-900 text-white w-10 h-10 rounded-full inline-block'>
                                <span className='inline-block align-text-bottom'>
                                  <i className='fa fa-paper-plane text-white'></i>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ChattRoom;
