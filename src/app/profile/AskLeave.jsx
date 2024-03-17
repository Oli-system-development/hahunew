"use client";
import React, { useState } from "react";

const AskLeave = () => {
  const [leave, setLeave] = useState(true);
  const [clearance, setClearance] = useState(false);
  const leaveTab = () => {
    setClearance(false);
    setLeave(true);
  };
  const clearanceTab = () => {
    setLeave(false);
    setClearance(true);
  };
  return (
    <div className='w-full  flex flex-col mx-2 md:flex-row'>
      <div className='md:w-1/3  md:h-[calc(82vh-0rem)] mb-3 md:mb-11 -mt-4 md:mx-8 rounded-2xl  shadow-sm md:shadow-2xl ring-1  ring-slate-200 '>
        <div className='flex flex-col  mb-2 md:mb-9 '>
          <span className='md:text-xl p-3 md:p-7 text-blue-600'>Personal</span>
          <div className='flex p-2 md:p-9 gap-2 md:gap-5 justify-center md:flex-col'>
            {leave && (
              <input
                name=''
                // onChange={"onChange"}
                className='shadow hidden md:block h-6 md:h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                id='header text'
                type='text'
                placeholder='new'
              />
            )}
            <span
              onClick={leaveTab}
              className={`p-1 md:px-8 text-sm md:text-lg cursor-pointer rounded-md ${
                leave ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              Leave request
            </span>
            <span
              onClick={clearanceTab}
              className={`p-1 md:px-8 text-sm md:text-lg cursor-pointer rounded-md ${
                clearance ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              Clearance
            </span>
          </div>
        </div>
      </div>
      <div className='md:w-3/4 shadow-2xl mx-2 md:mx-8 rounded-2xl md:-mt-4 mb-11 ring-1 flex-wrap  ring-slate-200  '>
        <>
          {leave && (
            <div className='flex flex-wrap  flex-row     mb-9 '>
              <div className='flex flex-col  mb-9 '>
                <span className='md:text-xl p-2 md:p-7 font-bold text-blue-600'>
                  Leave
                </span>
                <div className='flex p-3 md:p-9 gap-2 md:gap-5 justify-center flex-col md:flex-row  '>
                  <div className='flex flex-row gap-4 md:gap-14 justify-around'>
                    <label
                      htmlFor=''
                      className='text-xs font-bold md:text-normal text-slate-500'
                    >
                      type
                    </label>
                    <input
                      name=''
                      // onChange={"onChange"}
                      className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='header text'
                      type='text'
                      placeholder='date'
                    />{" "}
                  </div>
                  <div className='flex flex-row gap-7'>
                    <label
                      htmlFor=''
                      className='text-xs font-bold md:text-normal text-slate-500'
                    >
                      type
                    </label>
                    <input
                      name=''
                      // onChange={"onChange"}
                      className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='header text'
                      type='text'
                      placeholder=''
                    />{" "}
                  </div>
                </div>
                <form action=''>
                  <div className='flex p-2 md:p-9 gap-2 md:gap-5 justify-center flex-row '>
                    <div className='flex flex-row gap-2 md:gap-14'>
                      <label
                        htmlFor=''
                        className='text-xs font-bold md:text-normal text-slate-500'
                      >
                        type
                      </label>
                      <input
                        name=''
                        // onChange={"onChange"}
                        className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='header text'
                        type='text'
                        placeholder='stick leave'
                      />{" "}
                    </div>
                    <div className='flex flex-row gap-2 md:gap-7'>
                      <label
                        htmlFor=''
                        className='text-xs font-bold md:text-normal text-slate-500'
                      >
                        type
                      </label>
                      <input
                        name=''
                        // onChange={"onChange"}
                        className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='header text'
                        type='text'
                        placeholder='date'
                      />{" "}
                    </div>
                  </div>
                  <div className='flex flex-row gap-5 md:gap-14 p-5 md:p-9'>
                    <label
                      htmlFor=''
                      className='text-xs font-bold md:text-normal text-slate-500'
                    >
                      remark
                    </label>
                    <textarea
                      name=''
                      // onChange={"onChange"}
                      className='shadow py-7 md:h-64 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full md:py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='description'
                      type='text'
                      placeholder='section description'
                    />
                  </div>

                  <div className='flex justify-center  md:p-9 md:w-96 '>
                    <input
                      name=''
                      // onChange={"onChange"}
                      className='shadow ml-28  h-11 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='header text'
                      type='file'
                      placeholder='attach your file'
                    />{" "}
                  </div>
                </form>
              </div>
            </div>
          )}
          {clearance && (
            <div className='flex flex-wrap  flex-row w-full    mb-9 '>
              <div className='flex flex-col  mb-9  w-full'>
                <span className='text-xl p-3 md:p-7 font-bold text-blue-600'>
                  Clearance
                </span>
                {/* <div className='flex p-9 gap-5 justify-center  flex-wrap flex-row '>
                  <div className='flex flex-row gap-14 w-full text-lg font-bold justify-around'>
                    <span htmlFor=''>unit</span>
                    <span>name</span>
                    <span>confirmation</span>
                    <span>date</span>
                  </div>

                  <div className='flex flex-row flex-wrap gap-4 w-full overflow-y-scroll h-5/6 justify-around'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                      <div
                        key={item}
                        className='flex text-slate-500 flex-row gap-14 w-full justify-around'
                      >
                        <span htmlFor=''>{item}.general store</span>
                        <span>john doe</span>
                        {item === 4 ||
                        item === 3 ||
                        item === 6 ||
                        item === 11 ||
                        item === 15 ? (
                          <button
                            data-modal-hide='default-modal'
                            type='button'
                            className={`text-white bg-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1`}
                          >
                            rejected
                          </button>
                        ) : (
                          <button
                            data-modal-hide='default-modal'
                            type='button'
                            className={`text-white bg-blue-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1`}
                          >
                            accepted
                          </button>
                        )}
                        <span>12-24-202</span>
                      </div>
                    ))}
                    <span className='flex justify-end text-blue-600  font-bold'>
                      done
                    </span>
                  </div>
                </div> */}
              </div>
              <div className='table-container w-32 md:w-full mx-3 md:mx-10 overflow-scroll  ring-1 ring-slate-200 shadow-sm bg-white rounded-lg h-[calc(40vh)] md:h-[calc(60vh)]'>
                <table>
                  <tbody>
                    <tr className='text-lg  md:w-full md:font-bold'>
                      <th>unit</th>
                      <th>name</th>
                      <th>confirmation</th>
                      <th>date</th>
                    </tr>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                      <tr
                        key={item}
                        className='text-slate-500 flex-row md:gap-14 w-full justify-around'
                      >
                        <td className='w-24 px-7 md:w-full py-3'>
                          {item}.general store
                        </td>
                        <td className='w-24 px-7 md:w-full py-3'>john doe</td>
                        <td className='w-24 px-7 md:w-full py-3'>
                          {item === 4 ||
                          item === 3 ||
                          item === 6 ||
                          item === 11 ||
                          item === 15 ? (
                            <button
                              data-modal-hide='default-modal'
                              type='button'
                              className={`text-white bg-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1`}
                            >
                              rejected
                            </button>
                          ) : (
                            <button
                              data-modal-hide='default-modal'
                              type='button'
                              className={`text-white bg-blue-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-1`}
                            >
                              accepted
                            </button>
                          )}
                        </td>
                        <td className='w-24 px-7 md:w-full py-3'>12-24-202</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <span className='flex justify-end'>
                <span
                  colSpan='4'
                  className='flex justify-end text-blue-600  font-bold px-5 py-1'
                >
                  done
                </span>
              </span>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default AskLeave;
