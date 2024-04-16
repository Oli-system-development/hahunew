"use client";
import React from "react";
import { useForm, useFormContext } from "react-hook-form";

const Step4 = () => {
  const { register } = useFormContext();

  return (
    <div className='px-2 md:px-10 flex flex-col gap-4 w-full'>
      <span className='w-5 h-5 md:w-11 md:h-19 bg-teal-400 text-teal-400'>
        fsd
      </span>
      <div className='flex flex-row gap-4 md:gap-10 justify-between w-full'>
        <span className='font-bold text-xl md:text-2xl text-black'>
          Registration page
        </span>
        <span className='text-blue-400 text-xs font-bold md:text-base'>
          application Id: ATP3256643
        </span>
      </div>
      <div className='flex flex-col '>
        <span>
          <span className='text-sm md:text-md font-bold'>final section</span>{" "}
        </span>
        <div className='flex flex-col text-blue-500 gap-1 md:gap-5  w-full'>
          <div className='flex flex-row gap-3'>
            <div className='mt-6'>
              <i className='fa fa-user text-2xl '></i>
            </div>
            <div className='flex flex-row mt-4 gap-10'>
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>user name</label>
                <input
                  {...register("username")}
                  name='username'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='username'
                  type='text'
                  placeholder='choose username'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-3 '>
            <div className='mt-6'>
              <i className='fa fa-lock text-2xl '></i>
            </div>
            <div className='flex flex-row mt-4 gap-2 md:gap-28 flex-wrap pb-5'>
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>select password </label>
                <input
                  {...register("password")}
                  name='password'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='password'
                  placeholder='enter password '
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>confirm password</label>
                <input
                  {...register("confirmPassword")}
                  name='confirmPassword'
                  className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='confirmPassword'
                  type='password'
                  placeholder='retype password'
                />
              </div>{" "}
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className='mt-6'></div>
            <div className='flex flex-col  gap-2 text-slate-900 font-light text-sm'>
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>upload academic history</label>
                <input
                  {...register("academicHistory")}
                  name='academicHistory'
                  className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='academicHistory'
                  type='file'
                  placeholder='upload academic history'
                />
              </div>
              <div className='flex flex-row gap-1'>
                <label htmlFor='' className='w-full'>
                  entrance exam scan{" "}
                </label>

                <input
                  {...register("entranceExamScan")}
                  name='entranceExamScan'
                  className='shadow h-10 appearance-none    w-full  px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='entranceExamScan'
                  type='file'
                  placeholder='entrance exam scan'
                />
              </div>{" "}
              <div className='flex flex-row  gap-2'>
                <label htmlFor='' className='w-full'>
                  highschool transcript{" "}
                </label>
                <input
                  {...register("highschoolTranscript")}
                  name='highschoolTranscript'
                  className='shadow h-10 appearance-none    w-full  px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='highschoolTranscript'
                  type='file'
                  placeholder='highschool transcript  '
                />
              </div>
              <div className='flex flex-row  gap-2'>
                <label htmlFor='' className='w-full'>
                  id scan
                </label>
                <input
                  {...register("idScan")}
                  name='idScan'
                  className='shadow h-10 appearance-none    w-full  px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='idScan'
                  type='file'
                  placeholder='id scan  '
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
