"use client";
import Image from "next/image";
import React, { useState } from "react";

const FinancialReport = () => {
  return (
    <>
      <div className='flex w-full  px-7 mx-32 flex-col gap-8 shadow-xl rounded-xl'>
        <div className='flex text-slate-500 text-xl font-bold'>
          <i className='fa fa-rotate-right px-3 pt-1 text-xl'></i> Financial report
        </div>
        <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
            <Image src='/notyet.png' alt='' width={300} height={300} className='object-cover w-full h-full' />
          </div>
        </div>
    </>
  );
};

export default FinancialReport;
