import React from "react";

const Step3 = () => {
  return (
    <div className='px-2 md:px-10 flex flex-col gap-4 w-full'>
      <span className='w-5 h-5 md:w-11 md:h-19 bg-teal-400 text-teal-400'>fsd</span>
      <div className='flex flex-row gap-4 md:gap-10 justify-between w-full'>
        <span className='font-bold text-xl md:text-2xl text-black'>
          Registration page
        </span>
        <span className='text-blue-400 text-xs font-bold md:text-base'>
          application Id: ATP3256643
        </span>
      </div>
      <div className='flex flex-col'>
        <form action=''>
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
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='enter full name'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>phone number</label>
                  <input
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='number'
                    placeholder='+2452'
                  />
                </div>{" "}
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>relation</label>
                  <input
                    name=''
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
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your country'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Region</label>
                  <input
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your region'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>City</label>
                  <input
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your city'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Woreda</label>
                  <input
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your woreda'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>House No</label>
                  <input
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='text'
                    placeholder='Enter your house no'
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
