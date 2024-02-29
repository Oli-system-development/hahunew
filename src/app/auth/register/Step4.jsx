import React from "react";

const Step4 = () => {
  return (
    <div className='px-10 flex flex-col gap-8 md:w-full '>
      <span className='w-11 h-19 bg-teal-400 text-teal-400'>fsd</span>
      <div className='flex flex-row justify-between w-full'>
        <span className='font-bold text-2xl   text-black '>
          Registration page
        </span>
        <span className='text-blue-400'>application Id :ATP3256643</span>
      </div>
      <div className='flex flex-col '>
        <form action=''>
          <span>
            <span className='text-md font-bold'>final section</span>{" "}
          </span>
          <div className='flex flex-col text-blue-500 gap-5  w-full'>
            <div className='flex flex-row gap-3'>
              <div className='mt-6'>
                <i className='fa fa-user text-2xl '></i>
              </div>
              <div className='flex flex-row mt-4 gap-10'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>user name</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
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
              <div className='flex flex-row mt-4 gap-28 flex-wrap pb-5'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>select password </label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='password'
                    placeholder='enter password '
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>confirm password</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='password'
                    placeholder='retype password'
                  />
                </div>{" "}
              </div>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='mt-6'>
                {/* <i className='fa fa-user text-2xl '></i> */}
              </div>
              <div className='flex flex-col  gap-2 text-slate-900 font-light text-sm'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>upload academic history</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='file'
                    placeholder='upload academic history'
                  />
                </div>
                <div className='flex flex-row gap-1'>
                  <label htmlFor='' className='w-full'>
                    entrance exam scan{" "}
                  </label>

                  <input
                    name=''
                    className='shadow h-10 appearance-none    w-full  px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='file'
                    placeholder='entrance exam scan'
                  />
                </div>{" "}
                <div className='flex flex-row  gap-2'>
                  <label htmlFor='' className='w-full'>
                    highschool transcript{" "}
                  </label>
                  <input
                    name=''
                    className='shadow h-10 appearance-none    w-full  px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='file'
                    placeholder='highschool transcript  '
                  />
                </div>
                <div className='flex flex-row  gap-2'>
                  <label htmlFor='' className='w-full'>
                    id scan
                  </label>
                  <input
                    name=''
                    className='shadow h-10 appearance-none    w-full  px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='file'
                    placeholder='id scan  '
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

export default Step4;
