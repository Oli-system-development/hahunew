import { Popover } from "@headlessui/react";
import React from "react";

const Tabs = () => {
  return (
    <>
      <span className='mx-4'>
        <Popover className='relative'>
          {({ open }) => (
            <>
              <Popover.Button className=''>
                <span className='flex text-slate-500 ring-1 ring-slate-200 w-32 cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                  occupation{" "}
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
                    <span className='cursor-pointer '>current trainees </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>applications </span>
                    <hr className=' text-black' />
                    <span className='cursor-pointer '>registry requiest </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>withdraw requiest </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>
                      transfer and upgrades
                    </span>
                    <hr className=' text-black' />
                  </div>
                </>{" "}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </span>{" "}
      <span className='mx-4'>
        <Popover className='relative'>
          {({ open }) => (
            <>
              <Popover.Button className=''>
                <span className='flex text-slate-500 ring-1 ring-slate-200 w-32 cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                  level
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
                    <span className='cursor-pointer '>current trainees </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>applications </span>
                    <hr className=' text-black' />
                    <span className='cursor-pointer '>registry requiest </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>withdraw requiest </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>
                      transfer and upgrades
                    </span>
                    <hr className=' text-black' />
                  </div>
                </>{" "}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </span>{" "}
      <span className='mx-4'>
        <Popover className='relative'>
          {({ open }) => (
            <>
              <Popover.Button className=''>
                <span className='flex text-slate-500 ring-1 ring-slate-200 w-32 cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                  section
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
                    <span className='cursor-pointer '>current trainees </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>applications </span>
                    <hr className=' text-black' />
                    <span className='cursor-pointer '>registry requiest </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>withdraw requiest </span>
                    <hr className=' text-black' />

                    <span className='cursor-pointer '>
                      transfer and upgrades
                    </span>
                    <hr className=' text-black' />
                  </div>
                </>{" "}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </span>{" "}
    </>
  );
};

export default Tabs;
