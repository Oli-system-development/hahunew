import React from "react";
import { useFormContext } from "react-hook-form";

const Step2 = () => {
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
          <span className='text-sm md:text-md font-bold'>academic section</span>{" "}
          <p className='text-xs md:text-base'>
            provide accurate background information for your academic history.
            also please double check your preferred occupation choice made are
            irreversible.
          </p>
        </span>
        <div className='flex flex-col text-blue-500 gap-4 md:mt-3 '>
          <div className='flex flex-row gap-3 md:gap-6'>
            <div className='mt-6  md:mt-6'>
              <i className='fa fa-home text-2xl '></i>
            </div>
            <div className='flex flex-col md:flex-row mt-4 gap-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>previous work area</label>
                <input
                  {...register("previousWorkArea")}
                  className='shadow h-8 md:h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-5 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='previousWorkArea'
                  type='text'
                  placeholder='previous school'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>duration</label>
                <input
                  {...register("duration")}
                  className='shadow h-8 md:h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-5 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='username'
                  type='text'
                  placeholder='average entrance results'
                />
              </div>{" "}
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>current level</label>
                <input
                  {...register("currentLevel")}
                  className='shadow h-8 md:h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-5 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='username'
                  type='text'
                  placeholder='highschool average'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-3 md:gap-6'>
            <div className=''>
              <i className='fa fa-area-chart text-2xl '></i>
            </div>
            <div className='flex flex-col  gap-2'>
              <span>relevant job positions</span>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='flex flex-row md:flex-col gap-3'>
                  <label htmlFor='' className='text-slate-600'>
                    3.subjects
                  </label>
                  <input
                    {...register("subject3")}
                    className='shadow h-8 md:h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='subject3'
                    type='text'
                    placeholder='results'
                  />
                </div>
                <div className='flex flex-row md:flex-col gap-3'>
                  <label
                    htmlFor=''
                    className='ring-1 rounded-sm w-24 text-center'
                  >
                    4.subjects
                  </label>
                  <input
                    {...register("subject4")}
                    className='shadow h-8 md:h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='results'
                  />
                </div>{" "}
                <div className='flex flex-row md:flex-col gap-3'>
                  <label
                    htmlFor=''
                    className='ring-1 rounded-sm w-24 text-center'
                  >
                    5.subjects{" "}
                  </label>
                  <input
                    {...register("subject5")}
                    className='shadow h-8 md:h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='results'
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='flex flex-row gap-3 md:gap-6'>
            <div className='mt-6'>
              <i className='fa fa-bank text-2xl '></i>
            </div>
            <div className='flex flex-col md:flex-row gap-6 mt-4'>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  position
                </label>
                <select
                  {...register("position")}
                  id='position'
                  name='position'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  <option value='volvo'>select</option>
                  <option value='saab'>3</option>
                </select>
              </div>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  department
                </label>
                <select
                  {...register("department")}
                  id='cars'
                  name='carlist'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  <option value='volvo'>select</option>
                  <option value='saab'>3</option>
                </select>
              </div>{" "}
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  occupation{" "}
                </label>
                <select
                  {...register("occupation")}
                  id='cars'
                  name='carlist'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  <option value='volvo'>select</option>
                  <option value='saab'>3</option>
                </select>
              </div>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  level{" "}
                </label>
                <select
                  {...register("level")}
                  id='cars'
                  name='carlist'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  <option value='volvo'>select/optional</option>
                  <option value='saab'>3</option>
                </select>
              </div>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  head official{" "}
                </label>
                <select
                  {...register("headOfficial")}
                  id='cars'
                  name='carlist'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  <option value='volvo'>select</option>
                  <option value='saab'>3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
