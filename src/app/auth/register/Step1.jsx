"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const { register } = useFormContext();

  return (
    <div className='px-2 md:px-10 flex flex-col gap-4 w-full'>
      <span className='w-5 h-5 md:w-11 md:h-19 bg-teal-400 text-teal-400'>
        {"  "}
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
          <span className='text-sm md:text-md font-bold'>personal section</span>{" "}
          <p className='text-xs md:text-base'>
            Please fill in all the tabs provided to apply to Tegbare-Id
            polytechnic college. Make sure to preview the departments and
            occupation provided by our school. The application ID provided is
            for personal use; as such, remember not to share it or forget it.
          </p>
        </span>
        <div className='flex flex-col text-blue-500 gap-12 md:mt-3'>
          <div className='flex flex-row gap-3 md:gap-6'>
            <div className='mt-2 md:mt-6'>
              <i className='fa fa-user text-xl md:text-2xl'></i>
            </div>
            <div className='flex flex-col md:flex-row gap-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  {...register("firstName")}
                  name='firstName'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='firstName'
                  type='text'
                  placeholder='Enter your first name'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='middleName'>Middle Name</label>
                <input
                  {...register("middleName")}
                  name='middleName'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='middleName'
                  type='text'
                  placeholder='Enter your middle name'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  {...register("lastName")}
                  name='lastName'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='lastName'
                  type='text'
                  placeholder='Enter your last name'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email </label>
                <input
                  {...register("email")}
                  name='email'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-3 md:gap-6'>
            <div className='mt-2 md:mt-6'>
              <i className='fa fa-phone text-xl md:text-2xl'></i>
            </div>
            <div className='flex flex-col md:flex-row gap-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                  {...register("phoneNumber")}
                  name='phoneNumber'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='phoneNumber'
                  type='number'
                  placeholder='Enter your phone number'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='gender'>Gender</label>
                <input
                  {...register("gender")}
                  name='gender'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='gender'
                  type='text'
                  placeholder='Enter your gender'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='disability'>Disability</label>
                <input
                  {...register("disability")}
                  name='disability'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='disability'
                  type='text'
                  placeholder='Specify your disability if any'
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
                <label htmlFor='country'>Country</label>
                <input
                  {...register("country")}
                  name='country'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='country'
                  type='text'
                  placeholder='Enter your country'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='region'>Region</label>
                <input
                  {...register("region")}
                  name='region'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='region'
                  type='text'
                  placeholder='Enter your region'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='city'>City</label>
                <input
                  {...register("city")}
                  name='city'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='city'
                  type='text'
                  placeholder='Enter your city'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='woreda'>Woreda</label>
                <input
                  {...register("woreda")}
                  name='woreda'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='woreda'
                  type='text'
                  placeholder='Enter your woreda'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='houseNo'>House No</label>
                <input
                  {...register("houseNo")}
                  name='houseNo'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='houseNo'
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

export default Step1;
