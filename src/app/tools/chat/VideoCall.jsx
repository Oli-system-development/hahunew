import Image from "next/image";
import React from "react";

const VideoCall = ({ videoCalls }) => {
  return (
    <div className="flex flex-col gap-32 text-white w-full bg-cover bg-opacity-70 z-50 relative bg-[url('/melak.jpg')]">
      <div className='flex flex-row justify-between mt-20 mx-9'>
        <div className="w-32 md:w-64 sm:w-40  p-5 h-40 md:h-64 bg-cover bg-opacity-70 z-50 rounded-3xl relative bg-[url('/melak.jpg')]">
          melak
        </div>
        <div className="w-32 md:w-64 sm:w-40  p-5 h-40 md:h-64 bg-cover bg-opacity-70 z-50 rounded-3xl relative bg-[url('/melak.jpg')]">
          fira
        </div>
      </div>
      <div className='flex flex-row gap-5 mt-20 md:mt-0 md:gap-20 justify-center text-2xl cursor-pointer'>
        <i className='fa fa-video-camera ring-2 ring-slate-600 text-white rounded-full p-6'></i>
        <i
          className='fa fa-phone bg-red-500 text-white rounded-full p-6'
          onClick={videoCalls}
        ></i>
        <i className='fa fa-microphone ring-2 ring-slate-600 text-white rounded-full p-6 px-7'></i>
      </div>
    </div>
  );
};

export default VideoCall;
