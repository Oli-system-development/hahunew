"use client";
import React, { useState } from "react";
import "./chatt.css";
import Image from "next/image";
import SideMenu from "./SideMenu";
import Contacts from "./Contacts";
import Messages from "./Messages";
import CallInfo from "./CallInfo";
import VideoCall from "./VideoCall";
const ChattRoom = () => {
  const [selectChat, setSelectChat] = useState(null);
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);
  const [isEndToEndVisible, setIsEndToEndVisible] = useState(false);
  const [isShowCalls, setIsShowCalls] = useState(false);
  const [isVideoCalls, setVideoCalls] = useState(false);

  const handleContactClick = (contact) => {
    setSelectChat(contact);
    setIsMessagesVisible((prev) => !prev);
    setIsEndToEndVisible(false);
    setIsShowCalls(false);
    setVideoCalls(false);
  };
  const endToEndHandler = (contact) => {
    setSelectChat(contact);
    setIsEndToEndVisible((prev) => !prev);
    setIsShowCalls(false);
    setVideoCalls(false);
  };
  const showCalls = (contact) => {
    setSelectChat(contact);
    setIsEndToEndVisible(false);
    setVideoCalls(false);
    setIsShowCalls((prev) => !prev);
  };
  const videoCalls = (contact) => {
    setSelectChat(contact);
    setIsEndToEndVisible(false);
    setIsShowCalls(false);

    setVideoCalls((prev) => !prev);
  };
  return (
    <div className="chatt w-[100%] h-[100vh]  text-white    bg-[url('/2.jpg')]">
      <div className=' p-4 md:pt-20 backdrop-blur-xl '>
        <div className=' flex flex-wrap  overflow-hidden md:mx-40 ring-4 ring-slate-600 rounded-3xl '>
          <div className='w-full '>
            <div className='flex flex-row '>
              <div className='hidden md:block sm:flex-2 w-24  pt-2 opacity-60 border-r-2 border-slate-800 bg-black rounded-l-2xl text-slate-400 backdrop-blur-2xl'>
                <div className='user-profile text-center'></div>

                <SideMenu
                  handleContactClick={handleContactClick}
                  endToEndHandler={endToEndHandler}
                  showCalls={showCalls}
                />
              </div>
              <Contacts handleContactClick={handleContactClick} />
              <div className=' flex  h-[calc(85vh-1vh)] w-full '>
                {!isShowCalls && !isVideoCalls && !isEndToEndVisible && (
                  <div className='chat-area  h-full bg-white-700 backdrop-blur-3xl bg-opacity-20 flex-1 flex flex-col w-full '>
                    <div className='flex-3  bg-black bg-opacity-60 '>
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
                          <div className='flex-1 px-2 md:px-6'>
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
                          <div className='flex flex-row gap-2 md:gap-5 px-3 justify-end text-right'>
                            <div>
                              <small className='text-white'>
                                <i
                                  className='fa fa-phone text-2xl md:text-3xl font-bold '
                                  aria-hidden='true'
                                ></i>{" "}
                              </small>
                            </div>
                            <div>
                              <small
                                className='text-white'
                                onClick={videoCalls}
                              >
                                <i
                                  className='fa fa-video-camera text-2xl md:text-3xl font-bold '
                                  aria-hidden='true'
                                ></i>{" "}
                              </small>
                            </div>
                            <div>
                              <small className='text-white'>
                                <span
                                  className=' text-2xl md:text-3xl font-bold '
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
                    <div className='flex h-4/6 mb-16 py-4'>
                      {isMessagesVisible ? (
                        <Messages selectedChat={selectChat} />
                      ) : (
                        <div className='flex mt-96 pt-20'></div>
                      )}
                    </div>

                    <div className=' flex-2 -mt-9 md:-mt-0 pb-1 h-full md:pb-10 bg-black opacity-40 w-full'>
                      <div className='write shadow flex px-4 rounded-lg '>
                        <div className='flex-3 flex content-center items-center text-center p-4 pr-0'>
                          <span className='block text-center text-gray-400 hover:text-gray-800'>
                            <svg
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              className='h-9 w-9'
                            >
                              <path d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                            </svg>
                          </span>
                        </div>
                        <div className='flex md:flex-1'>
                          <textarea
                            name='message'
                            className='w-full block outline-none py-2 md:py-4 px-4 font-sans text-xstext-lg placeholder-white placeholder:font-bold placeholder:tracking-widest bg-transparent'
                            rows='1'
                            placeholder='Type a message...'
                            // autofocus
                          ></textarea>
                        </div>
                        <div className='flex-2  flex-wrap w-64 px-0 md:px-2 flex content-center items-center'>
                          <div className='flex-1 text-center'>
                            <button className='bg-slate-900 text-white w-10 h-10 rounded-full inline-block'>
                              <span className='inline-block align-text-bottom'>
                                <svg
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
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
                )}
                {isEndToEndVisible && (
                  <span className='text-xs font-bold flex justify-center text-center gap-10 mt-7 mx-64 text-slate-300'>
                    <i className='fa fa-lock text-xl'></i> end to end encrypt
                  </span>
                )}
                {isShowCalls && <CallInfo />}
                {isVideoCalls && <VideoCall videoCalls={videoCalls} />}
              </div>
              <div className='flex-1 w-full h-full  rounded-r-3xl '>
                <div className='main-body container mt-6 w-full h-full flex flex-col'>
                  <div className='main flex-1 flex flex-col  w-full'></div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ChattRoom;
