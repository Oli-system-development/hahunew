"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

const Requests = () => {
  return (
    <>
      <div className='flex w-full  p-7 md:mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-rotate-right px-3 pt-1 text-xl'></i> Requests
          </span>
        </div>

        <div className='flex w-full flex-col gap-2  rounded-xl p-4  ring-2 ring-slate-100 '>
          <div className="relative  w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
            <Image
              src='/notyet.png'
              alt=''
              width={300}
              height={300}
              className='object-cover w-full h-full'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
