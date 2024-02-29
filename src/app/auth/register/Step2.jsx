import React from "react";

const Step2 = () => {
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
            <span className='text-md font-bold'>academic section</span>{" "}
            <p>
              provide accurate background information for your academic history.
              also please double check your preferred occupation choice made are
              irreversible.
            </p>
          </span>
          <div className='flex flex-col text-blue-500 gap-5 '>
            <div className='flex flex-row gap-3'>
              <div className='mt-6'>
                <i className='fa fa-home text-2xl '></i>
              </div>
              <div className='flex flex-row mt-4 gap-10'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>school (form)</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='previous school'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>entrance exam results</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='number'
                    placeholder='average entrance results'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>average highschool</label>
                  <input
                    name=''
                    className='shadow h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='highschool average'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-row gap-3'>
              <div className=''>
                <i className='fa fa-area-chart text-2xl '></i>
              </div>
              <div className='flex flex-col  gap-2'>
                <span>top entrance results </span>
                <div className='flex flex-row gap-6'>
                  <div className='flex flex-col gap-3'>
                    <label htmlFor='' className='  text-slate-600'>
                      1.English
                    </label>
                    <input
                      name='email'
                      className='shadow h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='results'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label htmlFor='' className=' text-slate-600'>
                      2.maths{" "}
                    </label>
                    <input
                      name='email'
                      className='shadow h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='results'
                    />
                  </div>{" "}
                  <div className='flex flex-col gap-3'>
                    <label
                      htmlFor=''
                      className='ring-1 rounded-sm w-24 text-center'
                    >
                      3.subjects{" "}
                    </label>
                    <input
                      name='email'
                      className='shadow h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='results'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label
                      htmlFor=''
                      className='ring-1 rounded-sm w-24 text-center'
                    >
                      4.subjects{" "}
                    </label>
                    <input
                      name='email'
                      className='shadow h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='results'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label
                      htmlFor=''
                      className='ring-1 rounded-sm w-24 text-center'
                    >
                      5.subjects{" "}
                    </label>
                    <input
                      name='email'
                      className='shadow h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='results'
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className='flex flex-row gap-3'>
              <div className='mt-6'>
                <i className='fa fa-bank text-2xl '></i>
              </div>
              <div className='flex flex-row gap-6 mt-4'>
                <div className='flex flex-col gap-3'>
                  <label htmlFor='' className=''>
                    department
                  </label>
                  <select
                    id='cars'
                    name='carlist'
                    form='form'
                    className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                  >
                    <option value='volvo'>select</option>
                    <option value='saab'>3</option>
                  </select>
                </div>
                <div className='flex flex-col gap-3'>
                  <label htmlFor='' className=''>
                    occupation
                  </label>
                  <select
                    id=''
                    name=''
                    form='form'
                    className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                  >
                    <option value='volvo'>select</option>
                    <option value='saab'>3</option>
                  </select>
                </div>{" "}
                <div className='flex flex-col gap-3'>
                  <label htmlFor='' className=''>
                    current level
                  </label>
                  <select
                    id=''
                    name=''
                    form='form'
                    className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                  >
                    <option value='volvo'>select</option>
                    <option value='saab'>3</option>
                  </select>
                </div>
                <div className='flex flex-col gap-3'>
                  <label htmlFor='' className=''>
                    level{" "}
                  </label>
                  <select
                    id=''
                    name=''
                    form='form'
                    className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                  >
                    <option value='volvo'>select</option>
                    <option value='saab'>3</option>
                  </select>
                </div>
                <div className='flex flex-col gap-3'>
                  <label htmlFor='' className=''>
                    section{" "}
                  </label>
                  <select
                    id=''
                    name=''
                    form='form'
                    className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                  >
                    <option value='volvo'>select</option>
                    <option value='saab'>3</option>
                  </select>
                </div>
                <div className='flex flex-col gap-3'>
                  <label htmlFor='' className=''>
                    entry level{" "}
                  </label>
                  <select
                    id=''
                    name=''
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
        </form>
      </div>
    </div>
  );
};

export default Step2;
