import Image from "next/image";
import React from "react";

const ShortModal = () => {
  return (
    <div
      data-popover
      id='popover-company-profile'
      role='tooltip'
      className='absolute z-10 mx-4 px-3 visible inline-block text-sm text-white transition-opacity duration-300  border border-gray-200 rounded-lg shadow-sm opacity-90 w-72 dark:text-gray-400 dark:bg-gray-800  dark:border-gray-600'
    >
      <span className='flex mt-3 font-bold text-xl '>new chat</span>
      <div className='flex flex-row  bg-black shadow-xl rounded-full px-3  w-32'>
        <input
          type='text'
          className='outline-none py-1 block w-32 bg-transparent placeholder-slate-500 '
          placeholder='Search'
        />
      </div>
      <div className=' h-3/4 overflow-y-scroll px-2'>
        <div className='entry cursor-pointer transform hover:scale-105 duration-300 transition-transform mb-4 rounded p-4 flex shadow-md'>
          <div className='flex-2'>
            <div className='w-12 h-12 relative'>
              <Image
                alt=''
                width={100}
                height={100}
                src={"/elsabet.jpeg"}
                className='flex rounded-full rounded-image w-30 h-30'
              />{" "}
            </div>
          </div>
          <div className='flex-1 px-2 mt-3 text-xl font-bold'>
            <div className='truncate w-32'>
              <span className='text-white'>Karp Bonolo</span>
            </div>
          </div>
        </div>
        <div className='entry cursor-pointer transform hover:scale-105 duration-300 transition-transform mb-4 rounded p-4 flex shadow-md  border-red-500'>
          <div className='flex-2'>
            <div className='w-12 h-12 relative'>
              <Image
                alt=''
                width={100}
                height={100}
                src={"/elsabet.jpeg"}
                className='flex rounded-full rounded-image w-30 h-30'
              />{" "}
            </div>
          </div>
          <div className='flex-1 px-2 mt-3 text-xl font-bold'>
            <div className='truncate w-32'>
              <span className='text-white'>Mercedes Yemelyan</span>
            </div>
          </div>
        </div>
        <div className='entry cursor-pointer transform hover:scale-105 duration-300 transition-transform mb-4 rounded p-4 flex shadow-md'>
          <div className='flex-2'>
            <div className='w-12 h-12 relative'>
              <Image
                alt=''
                width={100}
                height={100}
                src={"/elsabet.jpeg"}
                className='flex rounded-full rounded-image w-30 h-30'
              />{" "}
            </div>
          </div>
          <div className='flex-1 px-2 mt-3 text-xl font-bold'>
            <div className='truncate w-32'>
              <span className='text-white'>Cadi Kajetán</span>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ShortModal;
