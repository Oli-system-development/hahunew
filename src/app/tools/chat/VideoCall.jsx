import Image from "next/image";
import React from "react";

const VideoCall = () => {
  return (
    <div className="flex flex-col gap-32 text-white w-full bg-cover bg-opacity-70 z-50 relative bg-[url('/melak.jpg')]">
      <div className='flex flex-row justify-between mt-20 mx-9'>
        <div className="w-64  p-5 h-64 bg-cover bg-opacity-70 z-50 rounded-3xl relative bg-[url('/melak.jpg')]">
          melak
        </div>
        <div className="w-64  p-5 h-64 bg-cover bg-opacity-70 z-50 rounded-3xl relative bg-[url('/melak.jpg')]">
          fira
        </div>
      </div>
      <div className='flex flex-row gap-20 justify-center text-2xl'>
        <i className='fa fa-video-camera ring-2 ring-slate-600 text-white rounded-full p-6'></i>
        <i className='fa fa-phone bg-red-500 text-white rounded-full p-6'></i>
        <i className='fa fa-microphone ring-2 ring-slate-600 text-white rounded-full p-6 px-7'></i>
      </div>
    </div>
  );
};

export default VideoCall;
