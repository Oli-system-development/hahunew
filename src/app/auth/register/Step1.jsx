import React from "react";

const Step1 = () => {
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
              personal section
            </span>{" "}
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
                  <label htmlFor=''>First Name</label>
                  <input
                    name='email'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='Enter your first name'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Middle Name</label>
                  <input
                    name='email'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='Enter your middle name'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Last Name</label>
                  <input
                    name='email'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='Enter your last name'
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
                  <label htmlFor=''>Phone Number</label>
                  <input
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
                    type='number'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Gender</label>
                  <input
                    name='gender'
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='gender'
                    type=''
                    placeholder='Enter your gender'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>Disability</label>
                  <input
                    name=''
                    className='shadow appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id=''
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

export default Step1;
