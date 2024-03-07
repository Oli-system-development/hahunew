"use client";
import Image from "next/image";
import React, { useState } from "react";
// ... (existing imports)

const TuitionProfile = ({ tuitionStatus }) => {
  const [tuitionLog, setTuitionLog] = useState(true);
  const [tuitionAdjustment, setTuitionAdjustment] = useState(false);

  const tuitionLogTab = () => {
    setTuitionAdjustment(false);

    setTuitionLog(true);
  };

  const tuitionAdjustmentTab = () => {
    setTuitionAdjustment(true);
    setTuitionLog(false);
  };

  return (
    <div className='mx-40 flex flex-row  w-full'>
      <div className='w-1/4 md:h-[calc(82vh-0rem)] mt-3 mb-11 mx-8 rounded-2xl shadow-2xl ring-1 ring-slate-200 bg-white '>
        <div className='flex flex-col mb-9 '>
          <span className='text-xl p-7 text-blue-600 font-bold'>Tuition</span>
          <div className='flex p-9 gap-1 justify-center flex-col'>
            <span
              onClick={tuitionLogTab}
              className={`p-1 px-8 text-lg cursor-pointer rounded-md ${
                tuitionLog ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              Tuition log{" "}
            </span>
            <span
              onClick={tuitionAdjustmentTab}
              className={`p-1 px-8 text-lg cursor-pointer rounded-md ${
                tuitionAdjustment ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              Tuition adjustment{" "}
            </span>
          </div>
        </div>
      </div>
      <div className='w-full mt-4 rounded-2xl mb-11 shadow-2xl  flex-wrap  '>
        <>
          {tuitionLog && (
            <div className='flex flex-col w-full gap-7'>
              <span className='text-xl text-blue-600 font-bold  px-4'>
                Tuition log{" "}
              </span>
              <div className='flex flex-row gap-4'>
                <div className='flex flex-col justify-center w-full rounded-md m-5 bg-slate-200'>
                  <div className='flex mx-4 flex-row  gap-10 px-8'>
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
                  <div className='flex flex-row justify-end gap-5 pb-4 pr-3 pl-20  text-right '>
                    <span>
                      <i className='fa fa-phone px-2 text-2xl'></i>
                    </span>
                    <span>
                      <i className='fa fa-message px-2 text-2xl'></i>
                    </span>
                  </div>
                </div>
                <div className='flex flex-col gap-4 mr-3'>
                  <span className='text-xl font-bold text-black'>Data</span>
                  <div className=' rounded-md shadow-sm bg-white p-9 flex flex-row gap-10 w-96 flex-wrap '>
                    {[5, 2, 3].map((item) => (
                      <span
                        key={item}
                        className='flex flex-row  text-sm justify-between mb-3 gap-5 text-slate-600 w-32'
                      >
                        <span className={`p-1  px-3 w-full flex flex-row  `}>
                          <span
                            className={`flex justify-start w-20 p-3 font-bold text-sm shadow-md ${
                              item === 2 && "bg-sky-500"
                            } bg-red-300 text-white border-l-2 rounded-l-full`}
                          >
                            total overdue feels
                          </span>
                          <span className='flex justify-start w-20 p-3 pt-5 font-bold text-sm shadow-md  bg-white text-black border-r-2 rounded-r-full'>
                            {" "}
                            302
                          </span>
                        </span>
                      </span>
                    ))}
                    <button
                      onClick={tuitionAdjustmentTab}
                      className='btn flex w-32 justify-center text-slate-500 text-sm bg-gray-200 rounded-full mt-10 h-7 '
                    >
                      adjust tuition
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex flex-row gap-4 justify-start m-2'>
                <span className='font-bold text-md text-black'>Tuition </span>
                <span className='font-thin text-md text-white bg-slate-700 px-2 rounded-md mt-1 '>
                  | 2022{" "}
                </span>
              </div>{" "}
              <div
                className='flex flex-col p-2 shadow-md ring-1
               ring-slate-200 rounded-md mx-3 mb-3 w-3/4'
              >
                <div className='flex mb-2 flex-row flex-wrap gap-1 w-full overflow-x-scroll justify-around'>
                  <div className='flex  text-slate-300 flex-row gap-2 w-full justify-around'>
                    <span>month</span>
                    <span>tuition</span>
                    <span>status</span>
                    <span className={` `}>payment ETB</span>

                    <span>due date</span>
                    <span>exemption</span>
                    <span className={` `}>reason</span>
                  </div>
                  {/* ))} */}
                </div>
                <div className='flex h-96 flex-row flex-wrap gap-1 w-full overflow-x-scroll justify-around'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19, 20, 21, 22].map(
                    (item) => (
                      <div
                        key={item}
                        className='flex  text-slate-500 flex-row gap-2 w-full justify-around'
                      >
                        <span>{item}.jan</span>
                        <span>450</span>
                        <span className='text-red-600'>overdue</span>
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className={`text-slate-200  ring-1 h-5 ring-slate-300 rounded-md focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium px-2 text-sm  -py-2 `}
                          // onClick={handlePayrollStatus}
                        >
                          450
                        </button>{" "}
                        <span>21,21,2011</span>
                        <span>
                          <i className='fa fa-circle-check'></i>
                        </span>
                        <button
                          data-modal-hide='default-modal'
                          type='button'
                          className={`text-slate-200  ring-1 h-5 ring-slate-300 rounded-md focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium px-2 text-sm  -py-3 `}
                          // onClick={handlePayrollStatus}
                        >
                          your reason
                        </button>{" "}
                      </div>
                    )
                  )}
                </div>
                <div className='flex flex-row justify-between mt-4'>
                  <button
                    className='bg-blue-500 rounded-full px-4  text-white'
                    onClick={() => tuitionStatus(false)}
                  >
                    generate report
                  </button>
                  <button className='bg-slate-200 text-slate-400 rounded-full px-6 py-2'>
                    close
                  </button>
                </div>
              </div>
            </div>
          )}
          {tuitionAdjustment && (
            <div className='flex flex-wrap  flex-row     mb-9 '>
              <div className='flex flex-col  mb-9   bg-white rounded-xl w-full shadow-xl ring-1 ring-slate-200'>
                <span className='text-xl p-7 font-bold text-blue-500 '>
                  Tuition adjustment
                </span>
                <div className='flex flex-col w-full '>
                  <div className='flex flex-wrap  flex-row   px-10 gap-20   bg-white rounded-lg '>
                    <div className='flex flex-row  mb-2 gap-3 '>
                      <i className='fa fa-tag mt-3 mb-0 py-0 h-6 px-1 rounded-full bg-slate-400  text-xl'></i>
                      <span className='text-md p-0 mt-3 font-bold text-slate-500'>
                        Current level
                      </span>
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-4 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='entry '
                        />
                      </span>
                    </div>

                    <div className='flex flex-row  mb-2 gap-3 '>
                      <i className='fa fa-edit mt-3 mb-0 py-0 h-6 px-1 rounded-full bg-slate-400  text-xl'></i>
                      <span className='text-md mt-3  font-bold text-slate-500'>
                        program
                      </span>
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='regular '
                        />
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-end mt-2 mx-3'>
                    <button
                      className='bg-blue-500 rounded-full px-4  text-white'
                      onClick={() => tuitionStatus(false)}
                    >
                      apply all{" "}
                    </button>
                  </div>
                </div>
                <hr className='w-full h-2 mt-2 mb-3' />
                <div className='flex flex-col mx-5'>
                  <div className='flex flex-row  mb-2 gap-3 '>
                    <i className='fa fa-user mt-1 mb-0 py-0 h-8 px-2 rounded-full  text-pink-600  text-3xl'></i>

                    <span className='flex  flex-row gap-2'>
                      <input
                        name=''
                        className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='description'
                        type='text'
                        placeholder='sutdent  name optional'
                      />
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
                        placeholder='enter student  id optional  '
                      />
                    </span>
                  </div>
                </div>
                <hr className='w-full h-2 mt-2' />
                <div className='flex flex-col w-full '>
                  <div className='flex flex-wrap  flex-row   px-10 gap-12   bg-white rounded-lg '>
                    <div className='flex flex-row  mb-2 gap-3 '>
                      <i className='fa fa-search text-yellow-400 mt-3 mb-0 py-0 h-8 px-2  rounded-full  text-xl'></i>
                      <span className='text-md p-0 mt-3 font-bold text-slate-500'>
                        Current tuition
                      </span>
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow w-32  appearance-none ring-1 ring-slate-400 border rounded-lg  py-4 px-1  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='entry '
                        />
                      </span>
                      <span className='mt-3'> ETB</span>
                    </div>
                    <div className='flex flex-row  mb-2 gap-3 '>
                      <i className='fa-solid fa-scale-balanced text-yellow-400 mt-3 mb-0 py-0 h-8 px-2  rounded-full  text-xl'></i>
                      <span className='text-md p-0 mt-3 font-bold text-slate-500'>
                        set to
                      </span>
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow  w-32  appearance-none ring-1 ring-slate-400 border rounded-lg  py-4 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='entry '
                        />
                      </span>
                      <span className='mt-3'> ETB</span>
                    </div>

                    <div className='flex flex-row  mb-2 gap-1 '>
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
                  <div className='flex flex-row gap-20   flex-wrap overflow-x-scroll  mt-10'>
                    <div className='flex flex-row gap-5 mx-14 '>
                      <span className='bg-green-500 text-xs p-2 px-8 rounded-md text-white '>
                        add
                      </span>
                      <input
                        name=''
                        className='shadow  w-32  appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='description'
                        type='text'
                        placeholder='21,21,2021 '
                      />
                    </div>
                    <div className='flex flex-row gap-5'>
                      <span className='bg-blue-300 text-xs px-3 py-3 rounded-md text-white '>
                        21,21,2022
                      </span>
                      <span className='bg-blue-300 text-xs px-3 py-3 rounded-md text-white '>
                        21,21,2022
                      </span>

                      <span className='bg-blue-300 text-xs px-3 py-3 rounded-md text-white '>
                        21,21,2022
                      </span>
                      <span className='bg-blue-300 text-xs px-3 py-3 rounded-md text-white '>
                        21,21,2022
                      </span>
                      <span className='bg-blue-300 text-xs px-3 py-3 rounded-md text-white '>
                        21,21,2022
                      </span>
                      <span className='bg-blue-300 text-xs px-3 py-3 rounded-md text-white '>
                        21,21,2022
                      </span>
                      <span className='bg-blue-300 text-xs px-3 py-3 rounded-md text-white '>
                        21,21,2022
                      </span>
                    </div>
                  </div>{" "}
                  <div className='flex justify-end mt-2 mx-3'>
                    <button
                      className='bg-blue-500 rounded-full px-4  text-white'
                      onClick={() => tuitionStatus(false)}
                    >
                      all items{" "}
                    </button>
                  </div>
                  <hr className='w-full h-2 mt-2 mb-3' />
                  <div className='flex flex-col mx-5 gap-6'>
                    <div className='flex flex-row  mb-2 gap-3 '>
                      <i className='fa fa-search mt-1 mb-0 py-0 h-8 px-2 rounded-full  text-pink-600  text-3xl'></i>
                      <span>overtime</span>
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='student name'
                        />
                        ETB
                      </span>
                    </div>
                    <div className='flex flex-row  mb-2 gap-3 '>
                      <i className='fa fa-search mt-1 mb-0 py-0 h-8 px-2 rounded-full  text-green-600  text-3xl'></i>
                      extra pay
                      <i className='fa fa-plus mt-2 mb-0 py-0 h-6 px-2  rounded-full bg-slate-400  text-xl'></i>
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='enter stuff id  '
                        />
                        ETB
                        <input
                          name=''
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 w-28 px-1  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='21,24,2021'
                        />
                      </span>
                    </div>
                    <div className='flex flex-row  mb-2 gap-3 mx-10 '>
                      remark
                      <span className='flex  flex-row gap-2'>
                        <input
                          name=''
                          className='shadow    appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-64   text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='enter stuff id  '
                        />
                      </span>
                    </div>
                  </div>
                  <hr className='w-full h-3 m-3' />
                  <div className='flex flex-col w-full '>
                    <div className='flex flex-wrap  flex-row   px-10 gap-20   bg-white rounded-lg '>
                      <div className='flex flex-row  mb-2 gap-3 '>
                        <i className='fa-solid fa-hourglass-start text-2xl mt-3 text-emerald-500'></i>
                        {/* <i className='fa fa-plus mt-3 mb-0 py-0 h-8 px-2  rounded-full bg-slate-400  text-xl'></i> */}
                        <span className='text-md p-0 mt-3 font-bold text-slate-500'>
                          handled by
                        </span>
                        <span className='flex  flex-row gap-2'>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-4 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='yirgalem beyisa '
                          />
                        </span>
                      </div>

                      <div className='flex flex-row  mb-2 gap-3 '>
                        <i className='fa-solid fa-hourglass-start text-2xl mt-3 text-emerald-500'></i>
                        <span className='text-md mt-3  font-bold text-slate-500'>
                          tutution update
                        </span>
                        <span className='flex  flex-row gap-2'>
                          <input
                            name=''
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-4  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            type='text'
                            placeholder='21,21,2021 '
                          />
                        </span>
                      </div>
                    </div>
                    <div className='flex justify-end mt-2 mx-3 gap-5 m-3'>
                      <button
                        className='bg-slate-400 rounded-full px-4  text-white'
                        onClick={() => tuitionStatus(false)}
                      >
                        done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default TuitionProfile;
