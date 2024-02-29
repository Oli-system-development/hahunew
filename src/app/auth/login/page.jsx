"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const goDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <span className='p-9 texts'>Created by HAHU</span>

      <div className='p-1 h-[calc(100vh-2rem)] md:h-[calc(100vh-0rem)] flex flex-col items-center justify-center'>
        <div className=' h-full  justify-around rounded-md flex flex-col md:flex-row md:h-[80%] md:w-full gap-40  2xl:w-2/3'>
          <div className='px-10 flex flex-col gap-8 md:w-1/2'>
            <span className='w-11 h-11 bg-teal-400'></span>
            <h1 className='font-bold text-2xl xl:text-sm  text-black '>
              Login
            </h1>
            <p className='text-slate-400'>get to your office </p>
            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='ring-1 ring-slate-600 w-full rounded-full text-slate-600  font-thin px-8 py-3 focus:outline-none focus:shadow-outline'
              >
                sign with google
              </button>
            </div>
            {/* <form onChange={()=>alert('wait')} className=''> */}
            <div className='mb-4'>
              <label className='block text-slate-700 text-sm font-bold mb-2'>
                Email
              </label>
              <input
                name='email'
                // onChange={"onChange"}
                className='shadow h-12 bg-gray-200 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-slate-700 text-sm font-bold mb-2'>
                Password
              </label>
              <input
                name='psd'
                // onChange={"onChange"}
                type='password'
                className='shadow h-12 ring-1 ring-slate-400 bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='psd'
                placeholder='minimum of 8 char.'
              />
              <p className='text-slate-500 text-xs italic'>{}</p>
            </div>
            <div className='mb-4 flex justify-between'>
              <span className='px-2'>
                <input
                  type='checkbox'
                  className='inline-block  align-baseline font-bold text-sm text-slate-500 hover:text-slate-800'
                />
                &nbsp; Remember me
              </span>

              {/* <a
                  className='inline-block align-baseline font-bold mx-28 text-sm text-slate-500 hover:text-slate-800'
                  href='#'
                >
                  Forgot psd?
                </a> */}
            </div>
            <div className='flex items-center justify-between'>
              <button
                type='submit'
                onClick={goDashboard}
                className='bg-indigo-900 w-full rounded-xl text-white font-bold px-8 py-3 focus:outline-none focus:shadow-outline'
              >
                Login
              </button>
            </div>
            {/* </form> */}
            <p className='text-sm'>
              Not registerd yet? creat a new account{" "}
              <Link className='' href='/auth/register'>
                {" "}
                Register
              </Link>
            </p>
          </div>
          <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
            <Image src='/loginimage.png' alt='' fill className='object-cover' />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
