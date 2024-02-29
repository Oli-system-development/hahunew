import React from "react";

const Step1 = () => {
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
            <span className='text-md font-bold'>personal section</span>{" "}
            <p>
              please fill in all the tabs provided to apply to Tegbare-Id
              polytechnic college. Make sure to preview the departments and
              occupation provided by our school. The application ID provided is
              for personal use as such remember not to share it or forget it.
            </p>
          </span>
          <div className='flex flex-col text-blue-500 gap-5 '>
            <div className='flex flex-row gap-3'>
              <div className='mt-6'>
                <i className='fa fa-user text-2xl '></i>
              </div>
              <div className='flex flex-row mt-4 gap-10'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>first name</label>
                  <input
                    name='email'
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='enter your first name'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>middle name</label>
                  <input
                    name='email'
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='enter your middle name'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>last name</label>
                  <input
                    name='email'
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='enter your last name'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-row gap-3'>
              <div className='mt-6'>
                <i className='fa fa-phone text-2xl '></i>
              </div>
              <div className='flex flex-row mt-4 gap-10'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>phone number</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='number'
                    placeholder='enter your phone'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>gender</label>
                  <input
                    name='gender'
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='gender'
                    type=''
                    placeholder='enter your gender'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>disability </label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='specify  your disability if yes'
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
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your country '
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>region</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your region'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>city</label>
                  <input
                    name=''
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
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your woreda'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>house no</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='enter your house no'
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

export default Step1;
