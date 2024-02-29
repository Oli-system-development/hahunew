"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

const Requests = () => {
  return (
    <>
      <div className='flex w-full  px-7 mx-32 flex-col gap-8 shadow-xl rounded-xl'>
        <div className='flex text-slate-500 text-xl font-bold'>
          <i className='fa fa-rotate-right px-3 pt-1 text-xl'></i> Requests
        </div>
        <div className='flex flex-row justify-between px-4'>
          <div className='flex flex-row gap-11 text-slate-700'>
            <span className='flex gap-3 text-green-400'>
              <span>
                <i className='fa fa-user'></i>
              </span>
              <span>120</span>
            </span>{" "}
            <span className='flex gap-3 text-pink-600'>
              <span>
                <i className='fa fa-home'></i>
              </span>
              <span>120</span>
            </span>{" "}
            <span className='flex gap-3 text-cyan-600'>
              <span>
                <i className='fa fa-shop'></i>
              </span>
              <span>11</span>
            </span>{" "}
            <span className='flex gap-3 text-yellow-500'>
              <span>
                <i className='fa fa-add'></i>
              </span>
              <span>9</span>
            </span>
          </div>
          <div className='flex justify-end'>
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
                            <span className='cursor-pointer '>
                              set a meeting
                            </span>
                            <hr className=' text-black' />

                            <span className='cursor-pointer '>
                              send announcement{" "}
                            </span>
                            <hr className=' text-black' />
                            <span className='cursor-pointer '>
                              create a task group
                            </span>
                            <hr className=' text-black' />

                            <span className='cursor-pointer '>select all</span>
                            <hr className=' text-black' />

                            <span className='cursor-pointer '>pay roll</span>
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
        <div className='flex flex-row gap-20'>
          <div className='flex flex-row mt-1'>
            <input
              name=''
              onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='search'
            />
            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
          </div>
          <span className='flex justify-end mt-2 text-slate-600'>filter</span>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='department'
            />
          </div>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              // onChange={"onChange"}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='stream'
            />
          </div>
        </div>
        <div className='flex flex-wrap gap-7 flex-row'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((btn) => (
            <span
              key={btn}
              className={`p-1 px-8 text-lg cursor-pointer rounded-md ${
                btn === 8 ? "bg-blue-600 text-white" : "bg-slate-200"
              } py-3 text-slate-400`}
            >
              Leave request
            </span>
          ))}
        </div>

        <div className='flex flex-row flex-wrap gap-16 ml-10 text-sm font-thin overflow-x-scroll justify-between'>
          {[
            "employe name",
            "request",
            "for",
            "duration",
            "official review status",
            "action",
          ].map((tab) => (
            <span key={tab} className=' text-slate-500 gap-10  '>
              {tab}
            </span>
          ))}
        </div>

        <span className='h-1 bg-slate-100 w-full ' />
        <div className='flex flex-row flex-wrap gap-4 w-full overflow-y-scroll h-96 justify-between'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
            <div
              key={item}
              className='flex  text-slate-500 flex-row gap-20 w-full justify-between'
            >
              <span htmlFor='' className='flex flex-row'>
                {/* {item}.Melak */}
                <span>
                  <Image
                    src='/elsabet.jpeg'
                    alt=''
                    width={50}
                    height={50}
                    className='rounded-lg rounded-image text-center'
                  />
                </span>
                <span className='flex flex-col'>
                  <span>Melak ab </span>
                  <span className='text-slate-600 font-thin'>
                    melakabebeee@gmail.com
                  </span>
                </span>
              </span>

              <span>sick leave</span>
              <span>30,mar,21</span>
              <span>inventory officer </span>
              <span>Leader</span>

              {item === 4 ||
              item === 3 ||
              item === 6 ||
              item === 11 ||
              item === 15 ? (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-white ring-1 h-6 bg-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-0 `}
                >
                  rejected{" "}
                </button>
              ) : (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-white ring-1 h-6 bg-green-300  rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-1 `}
                >
                  accepted
                </button>
              )}
              <span className='flex gap-2'>
                <i className='fa-solid fa-circle-check text-green-400 font-bold text-lg'></i>
                <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Requests;
