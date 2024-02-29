import Image from "next/image";
import Link from "next/link";
import React from "react";

const Btob = () => {
  return (
    <div className='m-6 bg-slate-50'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='flex gap-20 '>
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
            <div className='flex flex-row mt-3 '>
              <i className='fa fa-search mt-2 mx-4  text-slate-400'></i>

              <input
                name=''
                className='shadow h-8  appearance-none ring-1 ring-slate-200 border  w-96 rounded-full  py-2 px-4  text-slate-400 leading-tight focus:outline-none focus:shadow-outline'
                id='header text'
                type='text'
                placeholder='search  what are you looking for...'
              />
              <i className='fa fa-camera mt-2 -mx-5 text-slate-400'></i>
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            <span className='mt-4'>
              <i className='fa fa-usd text-2xl text-slate-300'></i>
            </span>
            <span className='mt-4'>
              <i className='fa fa-cart-plus text-2xl text-slate-300'></i>
            </span>
            <span className='mt-4 text-slate-400'>8:41 sun 06/22</span>
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
        </div>
        <div className='flex flex-row text-slate-400 font-bold text-2xl m-8 gap-2'>
          <i className='fa fa-cart-plus mt-1'></i>
          hahu BtoB
        </div>

        <div className='flex flex-col px-20 pt-6 gap-3 bg-slate-200 rounded-xl relative'>
          <span className='font-bold text-md'>top relevant product </span>

          <div className='flex flex-col flex-wrap overflow-x-scroll justify-normal h-96 gap-16 pb-5 pt-3'>
            {[1, 2, 3, 4, 5, 6, 7].map((movie) => (
              <div key={movie} className='flex flex-col w-1/3 h-full relative'>
                <div className='w-full h-96 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/night.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='rounded-lg rounded-image'
                  />
                </div>
                <span className='absolute flex items-baseline flex-col mt-20 text-2xl font-bold mx-3 flex-wrap w-64 text-white text-md'>
                  <span className='flex flex-col text-slate-300 text-sm'>
                    <span className='text-2xl font-bold text-white'>
                      Sports and entertainment
                    </span>
                  </span>
                  <span className='text-sm'>discover deals on trading</span>
                  <span className='bg-white text-black text-sm rounded-full px-4'>
                    view more
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className='absolute top-0 right-0 z-50 flex flex-col gap-2 w-72 mt-6 bg-blue-400 p-8  rounded-l-3xl text-black'>
            <span className='text-lg font-bold'>My markets</span>
            <div className='flex flex-col gap-3'>
              <span className='flex flex-row gap-3'>
                <i className='fa fa-camera text-xl p-2  bg-white rounded-full text-black'></i>
                <span className='mt-1'>Consumer Electronics</span>
              </span>
              <span className='flex flex-row gap-3'>
                <i className='fa fa-camera text-xl p-2  bg-white rounded-full text-black'></i>
                <span className='mt-1'>Consumer Electronics</span>
              </span>
              <span className='flex flex-row gap-3'>
                <i className='fa fa-camera text-xl p-2  bg-white rounded-full text-black'></i>
                <span className='mt-1'>Consumer Electronics</span>
              </span>
              <span className='flex flex-row gap-3'>
                <i className='fa fa-camera text-xl p-2  bg-white rounded-full text-black'></i>
                <span className='mt-1'>Consumer Electronics</span>
              </span>
              <span className='flex flex-row gap-3'>
                <i className='fa fa-camera text-xl p-2  bg-white rounded-full text-black'></i>
                <span className='mt-1'>Consumer Electronics</span>
              </span>
              <span className='flex flex-row gap-3'>
                <i className='fa fa-camera text-xl p-2  bg-white rounded-full text-black'></i>
                <span className='mt-1'>Consumer Electronics</span>
              </span>
              <span className='flex flex-row gap-3'>
                <i className='fa fa-camera text-xl p-2  bg-white rounded-full text-black'></i>
                <span className='mt-1'>Consumer Electronics</span>
              </span>
            </div>
          </div>
        </div>

        <div className='flex m-20 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <div className='flex flex-row gap-3'>
            <i className='fa fa-star  text-yellow-400 rounded-full bg-blue-400 p-2'></i>
            suppliers{" "}
          </div>
          <button className='px-8 ring-1 ring-slate-400 rounded-full'>
            All
          </button>
        </div>

        <div className='flex w-full flex-row m-8 gap-10'>
          <div className=' flex flex-col w-1/3 bg-blue-400 text-white p-6 h-72 z-10 gap-20  rounded-r-3xl'>
            <div className='flex flex-row'>
              <div className='flex flex-col gap-10 items-baseline'>
                <span className='text-xl font-bold '>suggested supplies </span>
                <span className='text-sm'>discover deals on trading</span>
                <span className='bg-white text-black text-sm rounded-full px-4'>
                  learn more
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-10 -mx-72'>
            <span className='flex  flex-col w-96 gap-2 z-50 shadow-md rounded-2xl mt-3 h-64 bg-white '>
              <span className='text-xl p-3 font-bold'>
                lowest prices in 90 days{" "}
              </span>
              {/* <div className='flex flex-row z-100 gap-10 px-1'> */}
              <div className='flex flex-row gap-10 px-1'>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='rounded-lg rounded-image'
                  />
                </div>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg rounded-image'
                    objectPosition='center'
                  />
                </div>
                {/* </div> */}
              </div>
            </span>
            <span className='flex  flex-col w-96 gap-2 z-50 shadow-md rounded-2xl mt-3 h-64 bg-white '>
              <span className='text-xl p-3 font-bold'>Home living</span>
              {/* <div className='flex flex-row z-100 gap-10 px-1'> */}
              <div className='flex flex-row gap-10 px-1'>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='rounded-lg rounded-image'
                  />
                </div>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg rounded-image'
                    objectPosition='center'
                  />
                </div>
                {/* </div> */}
              </div>
            </span>
            <span className='flex  flex-col w-96 gap-2 z-50 shadow-md rounded-2xl mt-3 h-64 bg-white '>
              <span className='text-xl p-3 font-bold'>featured products </span>
              {/* <div className='flex flex-row z-100 gap-10 px-1'> */}
              <div className='flex flex-row gap-10 px-1'>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='rounded-lg rounded-image'
                  />
                </div>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg rounded-image'
                    objectPosition='center'
                  />
                </div>
                {/* </div> */}
              </div>
            </span>
          </div>
        </div>
        {/* step 2 */}
        <div className='flex flex-row gap-10 w-full '>
          <span className='flex  flex-col w-full gap-2 z-50 shadow-md rounded-2xl mt-3 h-64 bg-white '>
            <span className='flex flex-row gap-3 text-xl p-3 font-bold'>
              <i className='fa fa-bookmark text-2xl text-red-300'></i> New
              arivals
            </span>
            {/* <div className='flex flex-row z-100 gap-10 px-1'> */}
            <div className='flex flex-row gap-10 px-1'>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  className='rounded-lg rounded-image'
                />
              </div>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>
              {/* </div> */}
            </div>
          </span>{" "}
          <span className='flex  flex-col w-full gap-2 z-50 shadow-md rounded-2xl mt-3 h-64 bg-white '>
            <span className='flex flex-row gap-3 text-xl p-3 font-bold'>
              <i className='fa fa-clone text-2xl text-yellow-400'></i>
              Top ranking 9 days
            </span>
            {/* <div className='flex flex-row z-100 gap-10 px-1'> */}
            <div className='flex flex-row gap-10 px-1'>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  className='rounded-lg rounded-image'
                />
              </div>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>
              {/* </div> */}
            </div>
          </span>{" "}
          <span className='flex  flex-col w-full gap-2 z-50 shadow-md rounded-2xl mt-3 h-64 bg-white '>
            <span className='flex flex-row gap-3 text-xl p-3 font-bold'>
              <i className='fa fa-bookmark text-2xl text-black'></i>
              personal protective equipment
            </span>
            {/* <div className='flex flex-row z-100 gap-10 px-1'> */}
            <div className='flex flex-row gap-10 px-1'>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  className='rounded-lg rounded-image'
                />
              </div>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>
              <div className='w-full h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>
              {/* </div> */}
            </div>
          </span>
        </div>
        {/* step 3 */}
        <div className='flex flex-row text-black m-3 w-full gap-16 justify-normal mt-10'>
          <div className='flex flex-col w-full'>
            <div className='font-bold text-lg'>Top suppliers</div>
            <div className='font-normal text-sm w-80'>
              Provided by 60,000+ experienced manufacturers with design and
              production capabilities and on-time delivery.
            </div>
            <span className='flex  flex-col w-full gap-2 z-50 shadow-md rounded-2xl mt-3 h-64 bg-white '>
              <span className='flex flex-row justify-center gap-3 text-xl p-3 font-bold'>
                personal protective equipment
              </span>
              {/* <div className='flex flex-row z-100 gap-10 px-1'> */}
              <div className='flex flex-row gap-10 px-1'>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='rounded-lg rounded-image'
                  />
                </div>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg rounded-image'
                    objectPosition='center'
                  />
                </div>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg rounded-image'
                    objectPosition='center'
                  />
                </div>
              </div>
            </span>
          </div>
          <div className='flex flex-col w-full'>
            <div className='font-bold text-lg'>Top suppliers</div>
            <div className='font-normal text-sm w-80'>
              Provided by 60,000+ experienced manufacturers with design and
              production capabilities and on-time delivery.
            </div>
            <span className='flex  flex-col w-full gap-2 z-50 shadow-md rounded-2xl mt-3 h-64 bg-white '>
              <span className='flex flex-row justify-center gap-3 text-xl p-3 font-bold'>
                personal protective equipment
              </span>
              {/* <div className='flex flex-row z-100 gap-10 px-1'> */}
              <div className='flex flex-row gap-10 px-1'>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='rounded-lg rounded-image'
                  />
                </div>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg rounded-image'
                    objectPosition='center'
                  />
                </div>
                <div className='w-full h-48 rounded-lg shadow-lg relative'>
                  <Image
                    src={"/shirt.jpg"}
                    alt='image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg rounded-image'
                    objectPosition='center'
                  />
                </div>
              </div>
            </span>
          </div>
        </div>
        {/* step4 */}
        <div className='flex m-20 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <div className='flex flex-row gap-3'>
            <i className='fa fa-star  text-yellow-400 rounded-full bg-blue-400 p-2'></i>
            products
          </div>
          <button className='px-8 ring-1 ring-slate-400 rounded-full'>
            All
          </button>
        </div>
        {/* step5 */}
        <div className='flex m-10 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <div className='w-96'>Consumer Electronics </div>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
        </div>

        <div className='flex row mx-8 px-8  w-full'>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1 bg-blue-300'>
            <div className='flex justify-center mt-20'>
              <div className='flex  w-32  h-32 py-2 rounded-lg  relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
        </div>
        {/* step6 */}
        <div className='flex m-10 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <div className='w-96'>Apparel </div>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
        </div>
        <div className='flex row mx-8 px-8  w-full'>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1 bg-green-300'>
            <div className='flex justify-center mt-20'>
              <div className='flex  w-32  h-32 py-2 rounded-lg  relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
        </div>
        {/* step7 */}
        <div className='flex m-10 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <div className='w-1/3'>Vehicle Parts & Accessories </div>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
        </div>
        <div className='flex row mx-8 px-8  w-full'>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1 bg-lime-700'>
            <div className='flex justify-center mt-20'>
              <div className='flex  w-32  h-32 py-2 rounded-lg  relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full border-r-4 px-1'>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>Premium OEM Factories</span>
              <span className='text-sm font-bold text-slate-500'>
                Customization service available
              </span>
            </div>
            <div className='flex justify-end'>
              <div className='flex  w-10 text-end h-10 rounded-lg justify-end relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg  rounded-image'
                  objectPosition='center'
                />
              </div>
            </div>
          </div>
        </div>
        {/* step8 */}
        <div className='flex m-10 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <spa className='w-full'>weekly deals </spa>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
          <div className='w-full'>live </div>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
          <div className='w-full'>
            small comodities market place Parts & Accessories{" "}
          </div>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
        </div>
        <div className='flex flex-col z-10 px-10 flex-wrap overflow-x-scroll justify-normal h-64 gap-16 pt-3  '>
          {[1, 2, 3, 4, 5, 6].map((movie) => (
            <div key={movie} className='flex flex-col gap-3'>
              <div className='w-40 h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>
              <button className='bg-orange-500 text-md font-bold  text-white rounded-full p-2 items-baseline w-32 mx-2  '>
                view more{" "}
              </button>
            </div>
          ))}
        </div>
        {/* step 9 */}
        <div className='flex m-10 flex-row text-slate-400 font-bold text-2xl  gap-2'>
          <spa className='bg-orange-500 text-white font-extrabold text-md rounded-3xl p-2 h-10'>
            RPQ{" "}
          </spa>
          <div className='w-full font-bold text-black'>
            Request for question{" "}
          </div>
          <div className='w-full'>Custumization service </div>
          <div className=' ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></div>
        </div>
        <div className='flex flex-row mx-4 gap-10'>
          <div className='flex flex-col bg-blue-500 w-full text-white text-2xl font-bold gap-10 p-6'>
            <span className='text-xl font-bold text-white'>
              source smarter with faq
            </span>

            <div className='flex flex-row gap-20 '>
              <span>307400 + faq</span>
              <span>{"<21h average response time "}</span>
            </div>

            <div className='flex flex-row gap-20 '>
              <span>170000 active suppliers</span>
              <span>7652 industries </span>
            </div>
            <button className='ring-1 ring-blue-50 text-md font-bold  text-white rounded-full p-2 items-baseline w-72 mx-2  '>
              learn more
            </button>
          </div>
          <div className='flex flex-col  w-full ring-2 ring-slate-300 rounded-sm  gap-8 p-5 '>
            <span className='text-xl font-bold'>
              one Request multiple queots
            </span>
            <input
              type='text'
              name=''
              id=''
              placeholder='enter product name '
              className='ring-2 ring-slate-300 rounded-sm w-72 p-3'
            />
            <div className='flex flex-row gap-20 '>
              <input
                type='text'
                name=''
                id=''
                placeholder='quantity '
                className='ring-2 ring-slate-300 rounded-sm w-72 p-3 text-slate-400'
              />
              <input
                type='text'
                name=''
                id=''
                placeholder='piece/pieces '
                className='ring-2 ring-slate-300 rounded-sm w-72 p-3 text-black'
              />
            </div>
            <button className='bg-orange-500 text-md font-bold  text-white rounded-full p-2 items-baseline w-72 mx-2  '>
              Request for quotation
            </button>
          </div>
        </div>
        {/* step10 */}
        <div className='flex m-10 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <div className='w-96'>Just Foryou </div>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
        </div>
        {/* step 11 */}

        <div className='flex flex-row z-10  flex-wrap overflow-x-scroll justify-center  gap-10 px-3  pt-3  '>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12].map((movie) => (
            <div key={movie} className='flex flex-col gap-2'>
              <div className='w-40 h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/shirt.jpg"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>
              <p className=' text-md   text-black rounded-full p-2 items-baseline w-64 mx-2  '>
                Vegetable scented tea food storage Drawer type Drain dry{" "}
              </p>
              <div className='  flex flex-col text-md font-bold  text-black rounded-full px-2 items-baseline w-64 mx-2  '>
                <span>Rs 4,268.13 - Rs 5,098.05</span>
                <span className='text-sm text-slate-400'>
                  1000.0 pieces (min. order)
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='flex m-10 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <div className='w-96'> </div>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
        </div>
        <div className='flex flex-row z-10  flex-wrap overflow-x-scroll justify-around   px-3  pt-3  '>
          {[1, 2, 3, 4].map((movie) => (
            <div key={movie} className='flex flex-col gap-2'>
              <div className='w-72 h-48 rounded-lg shadow-lg relative'>
                <Image
                  src={"/payment.png"}
                  alt='image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg rounded-image'
                  objectPosition='center'
                />
              </div>

              <div className='  flex flex-row justify-between text-md font-bold  text-black rounded-full px-2 items-baseline  mx-2  '>
                <span className='flex flex-col '>
                  Payment
                  <span className='text-slate-300'>INSPECTION</span>
                </span>
                <span className='text-2xl bg-orange-100 p-3 text-orange-400'>
                  <i className='fa fa-usd'></i>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='flex m-10 flex-row text-slate-400 font-bold text-2xl justify-between gap-2'>
          <span className='px-8 ring-1 ring-slate-400 rounded-full w-full bg-slate-300 h-2 mt-4'></span>
        </div>
      </div>
    </div>
  );
};

export default Btob;
