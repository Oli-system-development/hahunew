"use client";
import { Button, Popover, Text } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import ShortModal from "./ShortModal";
const Contacts = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className='sidebar hidden lg:flex w-1/3 bg-black bg-opacity-50  flex-2 flex-col pr-6 '>
      <div className='hidden lg:block heading flex-2 px-3'>
        <div className='flex flex-row justify-between font-bold text-2xl px-3 mb-3 mx-4'>
          <span>Chat</span>
          <div className='flex flex-row gap-5'>
            <i class='fa fa-edit' aria-hidden='true'></i>
            <div>
              <button
                data-popover-target='popover-company-profile'
                onClick={togglePopover}
                type='button'
                className='text-white  focus:outline-none font-medium rounded-lg text-2xl  text-center'
              >
                <i
                  class={`fa ${
                    isPopoverOpen ? "fa-close text-red-400" : "fa-ellipsis-v"
                  }`}
                  aria-hidden='true'
                ></i>
              </button>
              {isPopoverOpen && <ShortModal />}
            </div>
          </div>{" "}
        </div>{" "}
      </div>
      <div className='flex flex-row  bg-slate-800 shadow-xl rounded-lg px-3  mx-7'>
        <input
          type='text'
          className='outline-none py-2 block w-full bg-transparent placeholder-white '
          placeholder='Search'
        />
        <i className='fa fa-search mt-2 text-xl'></i>
      </div>
      <div className=' h-3/4 overflow-y-scroll px-2'>
        <div className='entry cursor-pointer transform hover:scale-105 duration-300 transition-transform mb-4 rounded p-4 flex shadow-md'>
          <div className='flex-2'>
            <div className='w-12 h-12 relative'>
              {/*  <Image
              alt=''
              width={100}
              height={100}
              src={"/elsabet.jpeg"}
              className='flex rounded-full rounded-image w-30 h-30'
            />{" "} */}
              <Image
                alt=''
                width={100}
                height={100}
                src={"/elsabet.jpeg"}
                className='flex rounded-full rounded-image w-30 h-30'
              />{" "}
              <span className='absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white'></span>
            </div>
          </div>
          <div className='flex-1 px-2'>
            <div className='truncate w-32'>
              <span className='text-white'>Ryann Remo</span>
            </div>
            <div>
              <small className='text-white'>Yea, Sure!</small>
            </div>
          </div>
          <div className='flex-2 text-right'>
            <div>
              <small className='text-green-500 font-mono text-md'>2:53</small>
            </div>
            <div>
              <small className='text-xs bg-green-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block'>
                23
              </small>
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
              <span className='absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white'></span>
            </div>
          </div>
          <div className='flex-1 px-2'>
            <div className='truncate w-32'>
              <span className='text-white'>Karp Bonolo</span>
            </div>
            <div>
              <small className='text-white'>Yea, Sure!</small>
            </div>
          </div>
          <div className='flex-2 text-right'>
            <div>
              <small className='text-green-500 font-mono text-md'>2:53</small>
            </div>
            <div>
              <small className='text-xs bg-green-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block'>
                10
              </small>
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
              <span className='absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white'></span>
            </div>
          </div>
          <div className='flex-1 px-2'>
            <div className='truncate w-32'>
              <span className='text-white'>Mercedes Yemelyan</span>
            </div>
            <div>
              <small className='text-white'>Yea, Sure!</small>
            </div>
          </div>
          <div className='flex-2 text-right'>
            <div>
              <small className='text-gray-500'>15 April</small>
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
              <span className='absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white'></span>
            </div>
          </div>
          <div className='flex-1 px-2'>
            <div className='truncate w-32'>
              <span className='text-white'>Cadi Kajetán</span>
            </div>
            <div>
              <small className='text-white'>Yea, Sure!</small>
            </div>
          </div>
          <div className='flex-2 text-right'>
            <div>
              <small className='text-gray-500'>15 April</small>
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
              <span className='absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white'></span>
            </div>
          </div>
          <div className='flex-1 px-2'>
            <div className='truncate w-32'>
              <span className='text-white'>Rina Samuel</span>
            </div>
            <div>
              <small className='text-white'>Yea, Sure!</small>
            </div>
          </div>
          <div className='flex-2 text-right'>
            <div>
              <small className='text-gray-500'>15 April</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
