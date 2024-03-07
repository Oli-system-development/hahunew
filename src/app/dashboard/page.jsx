"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const Dashboard = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const tools = [
    {
      id: "1",
      icon: <i className='fa fa-home text-xl font-bold'></i>,
      link: "/dashboard",
      label: "Home",
      color: "",
    },
    {
      id: "2",
      icon: <i className='fa fa-book-open-reader text-xl font-bold'></i>,
      link: "../tools/library/",
      label: "Library",
      color: "text-red-400",
    },
    {
      id: "3",
      icon: <i className='fa fa-plus text-xl font-bold'></i>,
      link: "/dashboard",
      label: "Add",
      color: "",
    },
    {
      id: "4",
      icon: <i className='fa fa-users-line text-xl font-bold'></i>,
      link: "../tools/myteams/",
      label: "Teams",
      color: "text-pink-600",
    },
    {
      id: "5",
      icon: <i className='fa-solid fa-book text-xl font-bold'></i>,
      link: "../tools/ucs/",
      label: "UCS",
      color: "text-yellow-600",
    },
    {
      id: "6",
      icon: <i className='fa-solid fa-earth-americas text-xl font-bold'></i>,
      link: "../tools/academia/",
      label: "Academia",
      color: "text-indigo-600",
    },
    {
      id: "7",
      icon: <i className='fa-solid fa-square-h text-2xl font-bold'></i>,
      link: "../tools/hr/",
      label: "HR",
      color: "text-green-600",
    },
    {
      id: "8",

      icon: <i className='fa fa-graduation-cap text-2xl font-bold'></i>,
      link: "../tools/trainees/",
      label: "Trainees",
      color: "text-blue-600",
    },
    // {
    //   id: "9",
    //   icon: <i className='fa-solid fa-warehouse text-2xl font-bold'></i>,
    //   link: "../tools/inventory/",
    //   label: "Inventory",
    //   color: "text-blue-600",
    // },
    {
      id: "9",
      icon: <i className='fa fa-university text-2xl font-bold'></i>,
      link: "../tools/finance/",
      label: "Finance",
      color: "text-green-500",
    },

    {
      id: "10",
      icon: <i className='fa fa-cart-plus text-2xl font-bold'></i>,
      link: "../tools/btob/",
      label: "B2B",
      color: "text-pink-400",
    },
    {
      id: "11",
      icon: <i className='fa-solid fa-desktop text-2xl font-bold'></i>,
      link: "../tools/settings/",
      label: "Partners",
      color: "text-blue-600",
    },

    {
      id: "12",
      icon: <i className='fa-solid fa-desktop text-2xl font-bold'></i>,
      link: "../tools/settings/",
      label: "Partner",
      color: "text-blue-500",
    },
    {
      id: "13",
      icon: <i className='fa fa-cog text-2xl font-bold'></i>,
      link: "../tools/finance/",
      label: "Settings",
      color: "text-blue-500",
    },
    {
      id: "14",
      icon: <i className='fa fa-comment text-2xl font-bold'></i>,
      link: "../tools/chat/",
      label: "Chat",
      color: "text-slate-300",
    },

  ];
  //     name: "trianes",
  //     icon: <UserAddOutlined />,
  //   },
  //   {
  //     name: "HR",
  //     icon: <UserAddOutlined />,
  //   },
  //   {
  //     name: "library",
  //     icon: <UserAddOutlined />,
  //   },
  //   {
  //     name: "Academic",
  //     icon: <UserAddOutlined />,
  //   },
  //   {
  //     name: "trianes",
  //     icon: <UserAddOutlined />,
  //   },
  //   {
  //     name: "trianes",
  //     icon: <UserAddOutlined />,
  //   },
  //   {
  //     name: "trianes",
  //     icon: <UserAddOutlined />,
  //   },
  //   {
  //     name: "trianes",
  //     icon: <UserAddOutlined />,
  //   },
  //   {
  //     name: "trianes",
  //     icon: <UserAddOutlined />,
  //   },
  // ];
  // const dailyTasks = [
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  //   {
  //     role: "my list",
  //     description: "meeting with team",
  //     icon: <UserAddOutlined />,
  //     date: "12-3-2022",
  //   },
  // ];
  return (
    <div className='mt-3 '>
      <b className='font-sans px-10 text-4xl  mt-28 py-9'>wellcome back , </b>{" "}
      <br />
      <b className='fon-sans px-10 text-4xl mt-x20'>misrak </b>
      <div className=''>
        <div className='mt-0 flex flex-row '>
          <div className='w-64 h-2/3 -mb-7 mt-16 ml-16 mr-8 rounded-2xl shadow-xl ring-1  ring-slate-200'>
            <div className='flex flex-col gap-5 w-full'>
              <span className='bg-white rounded-lg '>
                <span className='text-2xl flex justify-center  -mt-10 text-center'>
                  <Link href='/profile'>
                    <Image
                      src='/elsabet.jpeg'
                      alt=''
                      width={120}
                      height={120}
                      className='rounded-lg rounded-image text-center'
                    />
                  </Link>
                </span>
                {/* <span className='text-2xl'>Misrak Berhanu</span> */}
                <span className='bg-slate-200  font-thin text-sm p-2 px-3 rounded-2xl text-slate-600 mx-11 my-2 flex justify-center text-center'>
                  Trainer
                </span>
                <span className='text-slate-400  font-thin text-sm p-2 px-3 flex justify-center mb-11 text-center'>
                  IT department
                </span>
              </span>
              <span className='text-slate-400  font-thin text-sm p-2 px-3 flex justify-center mt-96  text-center'>
                School logo
              </span>
            </div>
          </div>

          <div className=' flex flex-col flex-wrap w-1/3 m-12 '>
            <span className='text-2xl text-center'>HaHu Tools</span>
            <div className='flex flex-col mb-16 flex-wrap h-96  gap-16 p-10 overflow-x-scroll shadow-md'>
              {tools.map((tool) => (
                <div key={tool.id} className='f'>
                  <Link href={tool.link}>
                    <span
                      className={`w-11 h-11 p-9 rounded-full ring-slate-200 ring-1 shadow-xl flex items-center justify-center text-xl bg-white ${tool.color}`}
                    >
                      {tool.icon}
                    </span>
                    <span className='px-4'>{tool.label}</span>
                  </Link>
                </div>
              ))}
            </div>
            <span className='text-xl text-slate-400 font-bold pt-6'>
              {" "}
              Select Tools
            </span>{" "}
          </div>
          <div className='w bg-white h-4/5'>
            <div className='  '>
              <span className='text-2xl text-center '>News, and updates</span>
              <div className=' flex flex-row gap-5  h-[calc(70vh-1rem)] shadow-md'>
                <div className='flex flex-col  gap-1 h-full'>
                  <div className='flex flex-wrap gap-1 h-full'>
                    {[1, 2].map((tool) => (
                      //card
                      <div key={tool}>
                        <figure className=''>
                          <span>
                            <Image
                              src='/elsabet.jpeg'
                              alt=''
                              width={170}
                              height={3}
                              className='bg-white'
                            />
                          </span>
                          <figcaption
                            className={`${
                              tool === 2 ? "bg-fuchsia-600" : " bg-blue-400"
                            }`}
                          >
                            <span className='w-40 flex flex-col'>
                              <span className='text-md px-3 font-bold text-white'>
                                Post update
                              </span>
                              <span className='font-thin  text-white px-3 text-xs'>
                                certified in data base design habtamu girma
                              </span>
                            </span>
                          </figcaption>
                        </figure>
                      </div>
                    ))}
                  </div>
                  <div>
                    {/* card */}
                    <div>
                      <figure className=''>
                        <span>
                          <Image
                            src='/elsabet.jpeg'
                            alt=''
                            width={170}
                            height={3}
                            className='bg-white'
                          />
                        </span>
                        <figcaption className=' bg-green-800 w-36 p-3'>
                          <span className='w-40 flex flex-col'>
                            <span className='text-md px-3 font-bold text-white'>
                              Post update
                            </span>
                            <span className='font-thin  text-white px-3 text-xs'>
                              certified in data base design habtamu girma
                            </span>
                          </span>
                        </figcaption>
                      </figure>
                      <span
                        onClick={toggleModal}
                        className='flex cursor-pointer justify-end text-blue-500'
                      >
                        <i className='fa fa-plus bg-blue-600 text-white p-1 rounded-full'></i>
                      </span>
                    </div>
                  </div>

                  {isModalVisible && (
                    <div className='flex ring-1  shadow-2xl fixed  -top-10 right-0 left-0 z-100 justify-center  items-center  md:inset-0 h-[calc(140%-1rem)] max-h-full'>
                      <div className=' p-4 w-[24%] h-[80%]  max-h-full'>
                        <div className=' bg-white rounded-lg shadow-2xl '>
                          <div className='flex items-center justify-between p-4 md:p-5  rounded-t'>
                            <button
                              onClick={toggleModal}
                              type='button'
                              className='text-gray-400 rounded-full bg-gray-200 hover:bg-gray-200 hover:text-gray-900  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                              data-modal-hide='default-modal'
                            >
                              <svg
                                className='w-3 h-3'
                                aria-hidden='true'
                                xmlns=''
                                fill='none'
                                viewBox='0 0 14 14'
                              >
                                <path
                                  stroke='currentColor'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
                                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                />
                              </svg>
                              <span className='sr-only'>Close modal</span>
                            </button>
                          </div>
                          <div className=''>
                            <div className=''>
                              <div className='px-10 flex flex-col '>
                                <form onSubmit={""} className='gap-2'>
                                  <label className='block text-slate-700 text-sm font-bold mb-2'>
                                    Announcement title
                                  </label>
                                  <input
                                    name=''
                                    // onChange={"onChange"}
                                    className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='header text'
                                    type='text'
                                    placeholder='add header text'
                                  />
                                  <div className=' mt-6 '>
                                    <label className='block text-slate-700 text-sm font-bold mb-2'>
                                      description
                                    </label>
                                    <textarea
                                      name=''
                                      // onChange={"onChange"}
                                      className='shadow h-20 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                      id='description'
                                      type='text'
                                      placeholder='section description'
                                    />
                                  </div>
                                  <label className='block text-slate-700 text-sm  mt-6  font-bold mb-2'>
                                    upload optional picture
                                  </label>
                                  <input
                                    name=''
                                    // onChange={"onChange"}
                                    className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='header text'
                                    type='text'
                                    placeholder='optional URL placeholder'
                                  />
                                  <label className='block mt-6  text-slate-700 text-sm font-bold mb-2'>
                                    picture alt
                                  </label>
                                  <input
                                    name='email'
                                    // onChange={"onChange"}
                                    className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='header text'
                                    type='text'
                                    placeholder='image desctiption'
                                  />

                                  <div className='flex items-start justify-around flex-row mt-6'>
                                    <span className='text-xs font-bold'>
                                      announcement to{" "}
                                    </span>
                                    <span className='flex flex-col  '>
                                      <span
                                        // key={""}
                                        className='flex flex-row justify-between gap-11'
                                      >
                                        <span className='bg-slate-300 p-1 -ml-3 px-5 rounded-lg text-slate-500 text-xs'>
                                          filter
                                        </span>
                                        <span>
                                          {/* <Switch
                                            defaultChecked
                                            // onChange={"wait for it"}
                                          /> */}

                                          <label className='relative inline-flex items-center cursor-pointer'>
                                            <input
                                              type='checkbox'
                                              value=''
                                              className='sr-only peer'
                                            />
                                            <div className="w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                          </label>
                                        </span>
                                      </span>
                                      {[1, 2, 3, 4].map((item) => (
                                        <span
                                          key={item}
                                          className='flex flex-row justify-between mb-3 text-slate-600'
                                        >
                                          <span>landing page</span>
                                          <span>
                                            {/* <Switch
                                              defaultChecked
                                              // onChange={"wait for it"}
                                            /> */}
                                            <label className='relative inline-flex items-center cursor-pointer'>
                                              <input
                                                type='checkbox'
                                                value=''
                                                className='sr-only peer'
                                              />
                                              <div className="w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>{" "}
                                          </span>
                                        </span>
                                      ))}
                                    </span>
                                  </div>
                                </form>
                              </div>
                              <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
                                <Image
                                  src='/loginimage.png'
                                  alt=''
                                  fill
                                  className='object-cover'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center justify-end p-4  '>
                            <button
                              onClick={toggleModal}
                              data-modal-hide='default-modal'
                              type='button'
                              className='text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                              done
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className='bg-slate-200 w-72 rounded-r-lg '>
                  <span className='text-blue-400 p-4 pt-2'>HaHu updates</span>
                </div>
                {/* <i className="fa fa-user-circle-o" aria-hidden="true"></i> */}
              </div>
            </div>
          </div>
        </div>
        <div className=' flex w-3/4  flex-col shadow-xl mx-96 mr-9  h-72 mb-6'>
          <div className='text-2xl px-3 text-black '>Daily Tasks</div>
          <div className='flex flex-wrap justify-center'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((task) => (
              <div
                key={task}
                className='bg-slate-200 w-44 m-1 text-slate-500 font-md text-xs rounded-lg p-3  '
              >
                <div className='flex flex-row py-1 gap-3'>
                  <i className='fa fa-user text-xl font-bold text-slate-500'></i>{" "}
                  <span className=''>{"patient support"}</span>
                </div>
                <div className='flex flex-col'>
                  <span>{"meeting with  team"}</span>

                  <span className='text-blue-600'>{"sept ,4,2024"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
