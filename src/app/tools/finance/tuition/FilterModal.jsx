import { Popover } from "@headlessui/react";
import React from "react";

const FilterModal = ({ visibleModal }) => {
  return (
    <div className='flex z-50 ring-1 backdrop-blur-sm shadow-2xl fixed  -top-10 right-0 left-0 z-100 justify-center  items-center  md:inset-0 h-[calc(140%-1rem)] max-h-full'>
      <div className=' p-4 w-[44%] h-[80%]  max-h-full'>
        <div className='flex flex-wrap  flex-row     mb-9 '>
          <div className='flex flex-col  mb-9   bg-white rounded-xl w-full shadow-xl ring-1 ring-slate-200'>
            <span className='flex flex-row justify-between text-xl p-7 font-bold text-blue-500 '>
              <span>Filter</span>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <span>Arranged by</span>
                    <Popover.Button className=''>
                      <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                        Name
                      </span>{" "}
                    </Popover.Button>
                    <Popover.Panel
                      className={`${
                        open ? "block" : "hidden"
                      } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                    >
                      <>
                        <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 ring-1 ring-slate-300 '>
                          <span className='cursor-pointer '>DATA</span>
                          <hr className=' text-black' />
                          <span className='cursor-pointer '>CGPA</span>
                          <hr className=' text-black' />

                          <span className='cursor-pointer '>NAME </span>
                          <hr className=' text-black' />
                        </div>
                      </>{" "}
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            </span>
            <hr className='w-full h-2 mt-2 mb-3' />
            <span className='flex flex-row justify-between text-xl p-7 font-bold text-blue-500 '>
              <span className=' flex flex-col text-black font-bold text-md '>
                <span className='text-black font-bold text-sm '>Type</span>
                <div className='flex flex-row gap-3 mt-2'>
                  <button
                    className='bg-blue-500 rounded-full px-3 text-sm font-thin  text-white'
                    onClick={() => visibleModal(false)}
                  >
                    regular
                  </button>{" "}
                  <button
                    className='bg-slate-300 rounded-full px-3 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                    onClick={() => visibleModal(false)}
                  >
                    night{" "}
                  </button>{" "}
                  <button
                    className='bg-slate-300 rounded-full px-3 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                    onClick={() => visibleModal(false)}
                  >
                    weekend{" "}
                  </button>{" "}
                </div>
              </span>
              <span className=' flex flex-col text-black font-bold text-md '>
                <span className='text-black font-bold text-sm '>year</span>
                <div className='flex flex-row gap-3 mt-3'>
                  <button
                    className='bg-slate-300 rounded-full px-3 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                    onClick={() => visibleModal(false)}
                  >
                    All
                  </button>{" "}
                </div>
              </span>
            </span>
            <hr className='w-full h-2 mt-2 mb-2' />
            <span className='flex flex-row justify-between text-xl px-7 font-bold text-blue-500 '>
              <span className=' flex flex-col text-black font-bold text-md '>
                <span className='text-black font-bold text-sm '>
                  Department
                </span>
                <div className='flex flex-row gap-3 mt-2   flex-wrap'>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((btn) => (
                    <div className='flex flex-wrap' key={btn}>
                      <button
                        className='bg-slate-300 rounded-full px-3 p-1 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                        onClick={() => visibleModal(false)}
                      >
                        electrical installation{" "}
                      </button>
                    </div>
                  ))}
                </div>
              </span>
            </span>
            <hr className='w-full h-2 mt-2 mb-2' />
            <span className='flex flex-row justify-between text-xl px-7 font-bold text-blue-500 '>
              <span className=' flex flex-col text-black font-bold text-md '>
                <span className='text-black font-bold text-sm '>Streams</span>
                <div className='flex flex-row gap-3 mt-2   flex-wrap'>
                  {[1, 2, 3].map((btn) => (
                    <div className='flex flex-wrap' key={btn}>
                      <button
                        className='bg-slate-300 rounded-full px-3 p-1 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                        onClick={() => visibleModal(false)}
                      >
                        database
                      </button>
                    </div>
                  ))}
                </div>
              </span>
            </span>
            <hr className='w-full h-2 mt-2 mb-2' />
            <span className='flex flex-row justify-between text-xl px-7 font-bold text-blue-500 '>
              <span className=' flex flex-col text-black font-bold text-md '>
                <span className='text-black font-bold text-sm '>Level</span>
                <div className='flex flex-row gap-3 mt-2   flex-wrap'>
                  {[1, 2, 3].map((btn) => (
                    <div className='flex flex-wrap' key={btn}>
                      <button
                        className='bg-slate-300 rounded-full px-3 p-1 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                        onClick={() => visibleModal(false)}
                      >
                        ||
                      </button>
                    </div>
                  ))}
                </div>
              </span>
            </span>
            <hr className='w-full h-2 mt-2 mb-2' />
            <span className='flex flex-row justify-between text-xl px-7 font-bold text-blue-500 '>
              <span className=' flex flex-col text-black font-bold text-md '>
                <span className='text-black font-bold text-sm '>Status</span>
                <div className='flex flex-row gap-3 mt-2   flex-wrap'>
                  {[1, 2, 3].map((btn) => (
                    <div className='flex flex-wrap' key={btn}>
                      <button
                        className='bg-slate-300 rounded-full px-3 p-1 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                        onClick={() => visibleModal(false)}
                      >
                        withdraw
                      </button>
                    </div>
                  ))}
                </div>
              </span>
            </span>
            <hr className='w-full h-2 mt-2 mb-3' />
            <span className='flex flex-row justify-between text-xl p-7 font-bold text-blue-500 '>
              <span className=' flex flex-col text-black font-bold text-md '>
                <span className='text-black font-bold text-sm '>Sections</span>
                <div className='flex flex-row gap-3 mt-2'>
                  <button
                    className='bg-blue-500 rounded-full px-3 text-sm font-thin  text-white'
                    onClick={() => visibleModal(false)}
                  >
                    A
                  </button>{" "}
                  <button
                    className='bg-slate-300 rounded-full px-3 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                    onClick={() => visibleModal(false)}
                  >
                    B{" "}
                  </button>{" "}
                  <button
                    className='bg-slate-300 rounded-full px-3 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                    onClick={() => visibleModal(false)}
                  >
                    C{" "}
                  </button>{" "}
                </div>
              </span>
              <span className=' flex flex-col text-black font-bold text-md '>
                <span className='text-black font-bold text-sm '>Gender</span>
                <div className='flex flex-row gap-3 mt-3'>
                  <button
                    className='bg-blue-500 rounded-full px-3 text-sm font-thin ring-1 text-blue-100'
                    onClick={() => visibleModal(false)}
                  >
                    male
                  </button>{" "}
                  <button
                    className='bg-slate-300 rounded-full px-3 text-sm font-thin  text-slate-500 ring-1 ring-slate-400'
                    onClick={() => visibleModal(false)}
                  >
                    female
                  </button>{" "}
                </div>
              </span>
            </span>
            <hr className='w-full h-2 mt-2 mb-3' />
            <div className='flex justify-end mt-2 mx-3 gap-5 m-3'>
              <button
                className='bg-blue rounded-full px-4 p-1 text-white bg-blue-500'
                onClick={() => visibleModal(false)}
              >
                clear all
              </button>{" "}
              <button
                className='bg-slate-300 rounded-full px-4 p-1 text-white'
                onClick={() => visibleModal(false)}
              >
                filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
