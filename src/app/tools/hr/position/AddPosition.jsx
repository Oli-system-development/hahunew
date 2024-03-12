"use client";
import { SimpleGrid, Switch } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";

const AddPosition = ({ AddPosition, positionStatus }) => {
  const [general, setGeneral] = useState(true);

  const [permision, setPermision] = useState(false);
  const [content, setContent] = useState(false);
  const [levelPermision, setLevelPermision] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const generalTab = () => {
    setPermision(false);
    setLevelPermision(false);
    setContent(false);
    setGeneral(true);
  };

  const permisionTab = () => {
    setGeneral(false);
    setLevelPermision(false);
    setContent(false);
    setPermision(true);
  };

  const contentTab = () => {
    setGeneral(false);
    setPermision(false);
    setContent(true);
    setLevelPermision(false);
  };
  const levelpermisionTab = () => {
    setGeneral(false);
    setPermision(false);
    setContent(false);
    setLevelPermision(true);
  };
  const toggleModal = () => {
    setGeneral(false);
    setPermision(false);
    setContent(false);
    setLevelPermision(false);
    setModalVisible((prev) => !prev);
  };

  return (
    <>
      <div className='md:w-1/4 md:h-[calc(82vh-0rem)] md:mt-3 md:mb-11 mx-2 md:mx-8 rounded-2xl md:shadow-2xl md:ring-1 ring-slate-200 bg-white '>
        <div className='flex flex-col md:mb-9 '>
          <span className='text-xl md:p-7 text-blue-600 font-bold'>
            Add Level
          </span>
          <div className='flex p-2 md:p-9 gap-0 ring-1 ring-slate-200 md:ring-0 rounded-xl md:rounded-none justify-center flex-row md:flex-col '>
            <span
              onClick={generalTab}
              className={`p-1 px-3 md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                general ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              General{" "}
            </span>

            <span
              onClick={permisionTab}
              className={`p-1 px-3 md:px-8   text-sm md:text-lg cursor-pointer rounded-md ${
                permision ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              Permision{" "}
            </span>
            <span
              onClick={contentTab}
              className={`p-1 px-1 md:px-8 md:mt-32   text-sm md:text-lg cursor-pointer rounded-md ${
                content ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              Growth requirement{" "}
            </span>
          </div>
        </div>
      </div>

      <div className='w-full mx-2 md:mx-3 mt-1 md:mt-4 rounded-2xl mb-11  flex-wrap  text-sm'>
        <>
          {general && (
            <div className='flex flex-wrap  flex-row     mb-2 md:mb-9 '>
              <div className='flex flex-col gap-2 md:gap-10  mb-2 md:mb-9   bg-white rounded-xl w-full shadow-xl ring-1 ring-slate-200'>
                <span className='md:text-xl p-2 md:p-7 font-bold text-blue-500 '>
                  General
                </span>
                <div className='flex flex-col w-full '>
                  <div className='flex flex-wrap  flex-row   px-3 md:px-10 gap-3 md:gap-20   bg-white rounded-lg '>
                    <div className='flex flex-row  mb-2 gap-3 '>
                      <span className='text-md p-0 mt-3 font-bold text-slate-500'>
                        requirement
                      </span>
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='entry '
                        />
                      </span>
                    </div>

                    <div className='flex flex-row  mb-2 gap-3 '>
                      <span className='text-md mt-3  font-bold text-slate-500'>
                        official
                      </span>
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='entry '
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <hr className='w-full h-2 mt-2 mb-3' />
                <div className='flex flex-col mx-2 md:mx-5 gap-2 md:gap-7'>
                  <div className='flex flex-row  mb-2 gap-3 '>
                    <i className='fa fa-user mt-1 mb-0 py-0 h-8 px-2 rounded-full  text-pink-600  text-3xl'></i>

                    <span className='flex  flex-col md:flex-row gap-2'>
                      <input
                        name=''
                        className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='description'
                        type='text'
                        placeholder=' name'
                      />
                      <div className='flex flex-row -mx-14 md:-mx-0 md:ml-32 mb-2 gap-3 '>
                        <i className='fa-solid fa-sign-in mt-1 mb-0 py-0 h-10 px-2 pt-1 text-blue-200 rounded-full text-3xl'></i>
                        <span className='flex  flex-row gap-2'>
                          <input
                            name=''
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='occupation  '
                          />
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className='flex flex-row  mb-2 gap-3 '>
                    <i className='fa-solid fa-barcode mt-1 mb-0 py-0 h-10 px-2 pt-1  bg-green-200  rounded-full text-3xl'></i>
                    <span className='flex  flex-row gap-2'>
                      <input
                        name=''
                        className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='description'
                        type='text'
                        placeholder='enter student id  '
                      />
                    </span>
                  </div>
                </div>
                <hr className='w-full h-2 mt-2' />
                <div className='flex flex-col w-full mt-1 md:mt-5 '>
                  <div className='flex flex-wrap  flex-col   px-3 md:px-10 gap-3 md:gap-12   bg-white rounded-lg '>
                    <div className='flex flex-row  mb-2 gap-5 '>
                      <span className='text-md mt-3  font-bold text-slate-500'>
                        frequency
                      </span>
                      <span className='flex  flex-row gap-1'>
                        <input
                          name=''
                          className='shadow  w-32  appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='enter the units in order '
                        />
                      </span>
                    </div>
                    <div className='flex flex-row  mb-2 gap-5 '>
                      <span className='text-md mt-3  font-bold text-slate-500'>
                        frequency
                      </span>
                      <span className='flex  flex-row gap-1'>
                        <input
                          name=''
                          className='shadow  w-32  appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='enter the units in order '
                        />
                      </span>
                    </div>
                  </div>

                  <hr className='w-full h-2 mt-2 md:mt-32 mb-3' />

                  <div className='flex flex-col w-full '>
                    <div className='flex flex-wrap  flex-row justify-between  px-3 md:px-10 gap-3 md:gap-20   bg-white rounded-lg '>
                      <div className='flex flex-row  mb-2 gap-3 '>
                        <span className='text-sm md:text-md p-0 mt-3 font-bold text-slate-500'>
                          handled by
                        </span>
                        <span className='flex  flex-row gap-2'>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-3 md:py-4 px-1 md:px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='yirgalem beyisa '
                          />
                        </span>
                      </div>
                      <div className=''>
                        <button
                          className='bg-blue-500 rounded-xl px-4  text-white'
                          onClick={() => positionStatus(false)}
                        >
                          done
                        </button>
                      </div>
                    </div>
                    <div className='flex justify-end mt-2 mx-3 gap-5 m-3'></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {permision && (
            <div className='flex flex-wrap  flex-row   w-full  mb-2 md:mb-9 '>
              <div className='flex flex-col gap-2 md:gap-10  mb-2 md:mb-9   bg-white rounded-xl w-full shadow-xl ring-1 ring-slate-200'>
                <span className='text-normal md:text-xl p-2 md:p-7 font-bold text-blue-500 '>
                  {" "}
                  Permision
                </span>
                <div className='flex justify-center  flex-wrap gap-7 md:gap-32 m-0 md:m-3 p-0 md:p-4'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div key={item} className='flex flex-row gap-0 md:gap-5'>
                      <div className='flex flex-col gap-6'>
                        <i className='fa fa-graduation-cap text-md md:text-2xl font-bold shadow-md rounded-full p-3 text-pink-300'></i>{" "}
                        <span>Traines</span>{" "}
                      </div>
                      <div className='flex flex-col gap-3 text-slate-500 text-sm'>
                        <div className='flex w-full flex-row gap-2'>
                          <Switch
                            defaultChecked
                            labelPosition='left'
                            label='all'
                            px={40}
                          />
                        </div>
                        <div className='flex flex-row gap-2'>
                          <Switch
                            defaultChecked
                            labelPosition='left'
                            label='selective'
                          />
                        </div>
                        <div className='flex flex-row gap-2'>
                          <Switch
                            defaultChecked
                            labelPosition='left'
                            label='readonly'
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {content && (
            <div className='flex flex-wrap  flex-row  mb-2 md:mb-9 '>
              <div className='flex flex-col gap-2 md:gap-10  mb-2 md:mb-9   bg-white rounded-xl w-full shadow-xl ring-1 ring-slate-200'>
                <span className='text-sm md:text-xl px-2 md:px-7 pt-2 font-bold text-blue-600 '>
                  Growth requirement
                </span>
                <div className='flex flex-wrap  flex-col h-full   p-3 md:p-10 gap-1    mb-2 bg-white rounded-lg '>
                  <div className='flex flex-col  mb-2 '>
                    <span className='flex flex-row justify-start text-md   font-bold text-slate-500'>
                      attach url or file{" "}
                    </span>
                    <span className='flex pt-3 flex-row gap-2'>
                      <input
                        name=''
                        // onChange={"onChange"}
                        className='shadow    appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='description'
                        type='text'
                        placeholder='enter the units in order '
                      />
                    </span>
                  </div>
                  <hr className='h-4 w-full text-slate-400' />
                  <span className='flex justify-center text-center'>or</span>
                  <span className='flex justify-start text-center'>
                    create requirement
                  </span>
                  <div className='flex  flex-wrap gap-3 md:gap-32'>
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className='flex flex-wrap  flex-col   bg-white rounded-lg '
                      >
                        <div className='flex flex-col  mb-3 '>
                          <span className='text-md   font-bold text-slate-500'>
                            title
                          </span>
                          <span className='flex pt-1 flex-row gap-1'>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-1 md:px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='description'
                              type='text'
                              placeholder='title of requirement '
                            />
                          </span>
                        </div>
                        <div className='flex flex-col  mb-2 '>
                          <span className='text-md   font-bold text-slate-500'>
                            add introduction
                          </span>
                          <span className='flex pt-` flex-row gap-2'>
                            <textarea
                              name=''
                              // onChange={"onChange"}
                              className='shadow  h-12 md:h-24   appearance-none ring-1 ring-slate-400 border rounded-lg w-72 py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='description'
                              type='text'
                              placeholder='insert an introduction for this course and add the full of description  '
                            />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/*              
              <button
                className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
                onClick={() => addcourse(false)}
              >
                finish
              </button> */}
            </div>
          )}
          <div className='flex justify-end h-10'>
            <button
              className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
              onClick={() => positionStatus(false)}
            >
              finish
            </button>
          </div>
        </>
      </div>
    </>
  );
};

export default AddPosition;
