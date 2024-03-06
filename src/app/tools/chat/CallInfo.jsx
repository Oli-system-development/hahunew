import Image from "next/image";
import React from "react";

const CallInfo = () => {
  return (
    <div className='flex flex-col gap-5 text-white  w-full '>
      <span className='text-3xl font-bold mt-3 mx-2'>Call Info</span>
      <div className='entry cursor-pointer flex flex-row justify-between  bg-opacity-60 bg-slate-700 p-3 mx-4  transform  duration-300 transition-transform  rounded   shadow-md'>
        <div className='flex flex-row gap-4'>
          <div className='w-16 h-16 relative'>
            <Image
              alt=''
              width={200}
              height={200}
              src={"/elsabet.jpeg"}
              className='flex rounded-full rounded-image'
            />{" "}
          </div>
          <span className='text-white text-2xl font-bold mt-4'>Bob</span>
        </div>
        <div className='flex flex-row gap-5 px-3 mt-3'>
          <div className=''>
            <small className='text-white'>
              <i
                className='fa fa-comment text-3xl font-bold '
                aria-hidden='true'
              ></i>{" "}
            </small>
          </div>
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
        </div>
      </div>{" "}
      <div className='entry cursor-pointer flex flex-row justify-between  bg-opacity-40 bg-black  p-3 mx-4  transform  duration-300 transition-transform  rounded   shadow-md'>
        <div className='flex flex-col gap-2'>
          <small>23-23-2020</small>
          <span className='flex flex-row gap-2  text-white text-sm font-bold mt-4'>
            <i className='fa fa-phone text-red-500 '></i>missed calls
          </span>
        </div>
        <div className='flex flex-row gap-5 px-3 mt-3'>unanswered</div>
      </div>{" "}
      <div className='entry cursor-pointer flex flex-row justify-between  bg-opacity-40 bg-black  p-3 mx-4  transform  duration-300 transition-transform  rounded   shadow-md'>
        <div className='flex flex-col gap-2'>
          <small>23-23-2020</small>
          <span className='flex flex-row gap-2  text-white text-sm font-bold mt-4'>
            <i className='fa fa-phone text-red-500 '></i>missed calls
          </span>
        </div>
        <div className='flex flex-row gap-5 px-3 mt-3'>unanswered</div>
      </div>{" "}
      <div className='entry cursor-pointer flex flex-row justify-between bg-opacity-40 bg-black  p-3 mx-4  transform  duration-300 transition-transform  rounded   shadow-md'>
        <div className='flex flex-col gap-2'>
          <small>23-23-2020</small>
          <span className='flex flex-row gap-2  text-white text-sm font-bold mt-4'>
            <i className='fa fa-phone text-red-500 '></i>missed calls
          </span>
        </div>
        <div className='flex flex-row gap-5 px-3 mt-3'>unanswered</div>
      </div>{" "}
    </div>
  );
};

export default CallInfo;
