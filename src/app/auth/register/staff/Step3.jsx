import React from "react";
import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const { register } = useFormContext();

  return (
    <div className='px-10 flex flex-col gap-8 md:w-full'>
      <span className='w-11 h-19 bg-teal-400 text-teal-400'>fsd</span>
      <div className='flex flex-row justify-between w-full'>
        <span className='font-bold text-2xl   text-black '>
          Registration page
        </span>
        <span className='text-blue-400'>application Id :ATP3256643</span>
      </div>
      <div className='flex flex-col'>
        <form action=''>
          <span>
            <span className='text-md font-bold'>emergency contact section</span>{" "}
            <p>specify details on emergence contact.</p>
          </span>
          <div className='flex flex-col text-blue-500 gap-5 '>
            <div className='flex flex-row gap-3'>
              <div className='mt-6'>
                <i className='fa fa-user text-2xl '></i>
              </div>
              <div className='flex flex-row mt-4 gap-10'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>full name</label>
                  <input
                    {...register("fullName1")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='enter full name'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>phone number</label>
                  <input
                    {...register("phoneNumber1")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='number'
                    placeholder='+2452'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>relation</label>
                  <input
                    {...register("relation1")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='specify relation'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-row gap-3 '>
              <div className='mt-6'>
                <i className='fa fa-map-marker text-2xl '></i>
              </div>
              <div className='flex flex-row mt-4 gap-10 flex-wrap pb-5'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>country</label>
                  <input
                    {...register("country1")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your country '
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>region</label>
                  <input
                    {...register("region1")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your region'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>city</label>
                  <input
                    {...register("city1")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your city'
                  />
                </div>
                <br />
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>woreda</label>
                  <input
                    {...register("woreda1")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your woreda'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>house no</label>
                  <input
                    {...register("houseNo1")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your house no'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='mt-6'>
                <i className='fa fa-user text-2xl '></i>
              </div>
              <div className='flex flex-row mt-4 gap-10'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>full name</label>
                  <input
                    {...register("fullName2")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='enter full name'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>phone number</label>
                  <input
                    {...register("phoneNumber2")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='number'
                    placeholder='+2452'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>relation</label>
                  <input
                    {...register("relation2")}
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='specify relation'
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;
