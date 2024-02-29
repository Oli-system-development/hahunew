import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className='m-6'>
      <div className='flex flex-row justify-between'>
        <div className='flex gap-20'>
          <span className='mt-3'>
            <div className='w-10 h-10 rounded-full shadow-lg relative'>
              <Link href={"/dashboard"}>
                <Image
                  src={"/logo.png"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </Link>
            </div>
          </span>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='search'
            />
            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
          </div>
        </div>
        <Link href={"/profile"}>
          <Image
            src={"/elsabet.jpeg"}
            alt=''
            width={50}
            height={40}
            className='rounded-full rounded-image  ring-1 ring-slate-400 -pb-2'
          />
        </Link>
      </div>
      <div className='flex flex-row justify-between gap-20 px-20 pt-20  '>
        <div className='w-full h-96 rounded-lg shadow-lg relative'>
          <Image
            src={"/batman.jpeg"}
            alt='image'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded-lg rounded-image'
          />
          <span className='absolute inset-0 flex flex-row justify-between items-baseline mt-40 p-6 text-white text-lg font-bold'>
            <span className='flex flex-col text-slate-300 text-sm '>
              Frank miller :
              <span className='text-3xl font-bold text-white'>
                Bat man the dark insight
              </span>
            </span>
            <span className='bg-blue-600 text-blue-100 p-3 rounded-full px-4 mt-20'>
              Read now
            </span>
          </span>
        </div>
        <span className='flex flex-col w-full gap-10 shadow-md rounded-xl p-8 bg-slate-300'>
          <span className='text-2xl font-bold'>class books</span>
          <div className='flex flex-row gap-10 px-1'>
            <div className='w-full h-64 rounded-lg shadow-lg relative'>
              <Image
                src={"/books.jpeg"}
                alt='image'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                className='rounded-lg rounded-image'
              />
            </div>
            <div className='w-full h-64 rounded-lg shadow-lg relative'>
              <Image
                src={"/books.jpeg"}
                alt='image'
                layout='fill'
                objectFit='cover'
                className='rounded-lg rounded-image'
                objectPosition='center'
              />
            </div>
          </div>
          <span className='flex flex-row justify-between px-5'>
            <span> Kabra kai</span>
            <span> Kabra kai</span>
          </span>
        </span>
      </div>
      <div className='flex px-20 flex-row  gap-8 text-xl font-bold'>
        <span>All books</span>
        <span>
          <i className='fa fa-plus rounded-full text-white bg-blue-600 p-1 '></i>
        </span>
      </div>
      <div className='flex flex-col flex-wrap overflow-x-scroll justify-normal h-64 gap-16 pt-3  '>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((movie) => (
          <div key={movie} className='flex flex-col'>
            <div className='w-40 h-48 rounded-lg shadow-lg relative'>
              <Image
                src={"/flash.jpeg"}
                alt='image'
                layout='fill'
                objectFit='cover'
                className='rounded-lg rounded-image'
                objectPosition='center'
              />
            </div>
            <span className='text-blue-500 text-md font-bold px-2'>
              {" "}
              The flash vol.1
            </span>
            <span className='text-slate-500 text-sm px-2'>
              {" "}
              marcus rashford
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
