import Image from "next/image";
import React from "react";

const SideMenu = ({ handleContactClick, endToEndHandler, showCalls }) => {
  return (
    <div className='flex menu mt-3'>
      <div className='flex h-[calc(80vh-1vh)] flex-col  justify-between'>
        <div className='flex flex-col gap-5'>
          <span
            className='block py-1 px-10  text-slate-300 hover:border-l-2 hover:border-green-500'
            onClick={handleContactClick}
          >
            <i
              className='fa fa-commenting text-3xl font-bold '
              aria-hidden='true'
            ></i>
            {/* Home */}
          </span>
          <span
            className='block py-1 px-10  text-slate-300 hover:border-l-2 hover:border-green-500'
            onClick={endToEndHandler}
          >
            <i
              className='fa fa-podcast text-3xl font-bold'
              aria-hidden='true'
            ></i>
            {/* Home */}
          </span>{" "}
          <span
            className='block py-1 px-10 mb-9 text-slate-300 hover:border-l-2 hover:border-green-500'
            onClick={showCalls}
          >
            <i
              className='fa fa-phone text-3xl font-bold'
              aria-hidden='true'
            ></i>
            {/* Home */}
          </span>
        </div>

        <div className='flex flex-col gap-5 '>
          <span className='block py-1 px-10  text-slate-300 hover:border-l-2 hover:border-green-500'>
            <i className='fa fa-cog text-3xl font-bold' aria-hidden='true'></i>
            {/* Home */}
          </span>{" "}
          <span className='block py-1 px-7  text-slate-300 hover:border-l-2 hover:border-green-500'>
            <div className='w-12 h-12 relative'>
              <Image
                alt=''
                width={100}
                height={100}
                src={"/elsabet.jpeg"}
                className='flex rounded-full rounded-image w-30 h-30'
              />{" "}
            </div>
            {/* Home */}
          </span>
        </div>
      </div>
      {/* <a
        className='block py-4 px-12  text-gray-600 hover:bg-gray-300 hover:text-black'
        href='javascript:return false;'
      >
        <span className='inline-block align-text-bottom mr-2'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            stroke-linejoin='round'
            strokeLinejoin='2'
            viewBox='0 0 24 24'
            className='w-4 h-4'
          >
            <path d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'></path>
          </svg>
        </span>
        Files
      </a>
      <a
        className='block py-4 px-12  text-gray-600 hover:bg-gray-300 hover:text-black'
        href='javascript:return false;'
      >
        <span className='inline-block align-text-bottom mr-2'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            stroke-linejoin='round'
            strokeLinejoin='2'
            viewBox='0 0 24 24'
            className='w-4 h-4'
          >
            <path d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path>
          </svg>
        </span>
        Jobs
      </a>
      <a
        className='block py-4 px-12  text-gray-600 hover:bg-gray-300 hover:text-black'
        href='javascript:return false;'
      >
        <span className='inline-block align-text-bottom mr-2'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            stroke-linejoin='round'
            strokeLinejoin='2'
            viewBox='0 0 24 24'
            className='w-4 h-4'
          >
            <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'></path>
            <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
          </svg>
        </span>
        Settings
      </a> */}
    </div>
  );
};

export default SideMenu;
