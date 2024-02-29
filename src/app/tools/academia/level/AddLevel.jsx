"use client";
import Image from "next/image";
import React, { useState } from "react";

const AddLevel = ({ addLevel ,levelStatus}) => {
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
      <div className='w-1/3 md:h-[calc(82vh-0rem)] mt-3 mb-11 mx-8 rounded-2xl shadow-2xl ring-1 ring-slate-200 bg-white '>
        <div className='flex flex-col mb-9 '>
          <span className='text-xl p-7 text-blue-600 font-bold'>
            Add Level
          </span>
          <div className='flex p-9 gap-1 justify-center flex-col'>
            <span
              onClick={generalTab}
              className={`p-1 px-8 text-lg cursor-pointer rounded-md ${
                general ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              General{" "}
            </span>

            <span
              onClick={contentTab}
              className={`p-1 px-8  text-lg cursor-pointer rounded-md ${
                content ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              Content{" "}
            </span>
            
          
          </div>
        </div>
      </div>

      <div className='w-3/4  mx-8 mt-4 rounded-2xl mb-11 ring-1 flex-wrap ring-slate-200  '>
        <>
        {general && (
            <div className='flex flex-wrap flex-row mb-9 bg-white rounded-lg'>
              <div className='flex flex-col mb-9 '>
                <div className='flex flex-wrap  flex-row     mb-9 '>
                  <div className='flex flex-col  mb-5 '>
                    <span className='text-xl px-7 font-bold text-slate-600   '>
                      General
                    </span>
                    <div className='flex p-9 gap-5 justify-center flex-col '>
                      <div className='flex flex-col gap-8 justify-around'>
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
                      <div className='flex flex-col gap-7'>
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
                    <div className='flex px-9 gap-5 justify-center flex-col '>
                        <div className='flex flex-col gap-4'>
                          <label htmlFor=''>Department</label>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='header text'
                            type='text'
                            placeholder='enter department name'
                          />{" "}
                        </div>
                        <div className='flex flex-col gap-7'>
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
                      </div>
                      <div className='flex p-9 gap-5 justify-center flex-row '>
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
         
          {content && (
            <div className='flex flex-wrap  flex-row     mb-9 '>
              <div className='flex flex-col  mb-9  h-[calc(74vh-0rem)] w-2/3 bg-white rounded-xl shadow-md'>
                <span className='text-xl p-7 font-bold '>Level Content</span>
                <div className='flex flex-col '>
                  <div className='flex flex-wrap  flex-col   p-10 gap-4    mb-9 bg-white rounded-lg '>
                    <div className='flex flex-col  mb-9 '>
                      <span className='text-md   font-bold text-slate-500'>
                        add introduction
                      </span>
                      <span className='flex pt-3 flex-row gap-2'>
                        <textarea
                          name=''
                          // onChange={"onChange"}
                          className='shadow  h-40  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='enter the units in order '
                        />
                      </span>
                    </div>
                    <div className='flex flex-col  mb-9 '>
                      <span className='text-md   font-bold text-slate-500'>
                        attach image or video
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
            </div>
          )}
           <div className='flex justify-end h-10'>
                <button
                  className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
                  onClick={() => levelStatus(false)}
                >
                  finish
                </button>
              </div>
        </>
      </div>
    </>
  );
};

export default AddLevel;
