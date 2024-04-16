"use client"
import React from "react";
import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const { register } = useFormContext();

  return (
    <div className='px-2 md:px-10 flex flex-col gap-4 w-full'>
      <span className='w-5 h-5 md:w-11 md:h-19 bg-teal-400 text-teal-400'>
        sss
      </span>
      <div className='flex flex-row gap-4 md:gap-10 justify-between w-full'>
        <span className='font-bold text-xl md:text-2xl text-black'>
          Registration page
        </span>
        <span className='text-blue-400 text-xs font-bold md:text-base'>
          application Id: ATP3256643
        </span>
      </div>
      <div className='flex flex-col'>
          <span>
            <span className='text-sm md:text-md font-bold'>
              emergency contact section
            </span>{" "}
            <p className='text-xs md:text-base'>
              specify details on emergence contact.
            </p>
          </span>
          <div className='flex flex-col text-blue-500 gap-4 md:gap-12 md:mt-3'>
            <div className='flex flex-row gap-3 md:gap-6'>
              <div className='mt-6'>
                <i className='fa fa-user text-2xl '></i>
              </div>
              <div className='flex flex-col md:flex-row gap-3'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>full name</label>
                  <input
                    {...register("emergencyFullName")}
                    name='emergencyFullName'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='fullName'
                    type='text'
                    placeholder='enter full name'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>phone number</label>
                  <input
                    {...register("emergencyPhoneNumber")}
                    name='emergencyPhoneNumber'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='tel'
                    placeholder='+2452'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>relation</label>
                  <input
                    {...register("emergencyRelation")}
                    name='emergencyRelation'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='specify relation'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-row gap-3 md:gap-6'>
              <div className='mt-2 md:mt-6'>
                <i className='fa fa-map-marker text-xl md:text-2xl'></i>
              </div>
              <div className='flex flex-col md:flex-row gap-3'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Country</label>
                  <input
                    {...register("emergencyCountry")}
                    name='emergencyCountry'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your country'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Region</label>
                  <input
                    {...register("emergencyRegion")}
                    name='emergencyRegion'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your region'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>City</label>
                  <input
                    {...register("emergencyCity")}
                    name='emergencyCity'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your city'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Woreda</label>
                  <input
                    {...register("emergencyWoreda")}
                    name='emergencyWoreda'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your woreda'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>House No</label>
                  <input
                    {...register("emergencyHouseNo")}
                    name='emergencyHouseNo'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your house no'
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Step3;
