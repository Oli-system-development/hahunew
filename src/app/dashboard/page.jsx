"use client";

import Image from "next/image";
import Link from "next/link";
import Loading from "../common/loading";
import React, { useEffect, useState } from "react";
import { useGetUsersQuery } from "../../services/api/authApi";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { tools } from "./tools";
import {
  useAddAnnouncementMutation,
  useGetAnnouncementQuery,
} from "../../services/api/announcementApi";
import { message } from "antd";
const Dashboard = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [showUpdates, setShowUpdates] = useState(true);
  const [matchedUser, setMAtchedUser] = useState(null);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);
  const [anns, setAnns] = useState(null);

  const {
    data: users,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetUsersQuery();
  const { data: allAn } = useGetAnnouncementQuery();
  const [
    addAnnouncement,
    {
      data: addedAnn,
      isSuccess: isSuccessAnn,
      isLoading: isLoadingAnn,
      isError: isErrorAnn,
      error: errorAnn,
    },
  ] = useAddAnnouncementMutation();
  const userId = process.browser ? localStorage.getItem("userId") : null;

  // var userId = localStorage.getItem("userId");
  useEffect(() => {
    const findMatchedEmail = async () => {
      console.log("users", await users);
      console.log("all announcements", await allAn);
      setAnns(await allAn);
      console.log("fetched announcements are  :", await addedAnn);

      if (users) {
        const matchedUser = users.find((user) => user.userId === userId);
        if (matchedUser) {
          setMAtchedUser(matchedUser);
        }
      }
    };

    findMatchedEmail();

    const updateAnnouncements = async () => {
      if (isSuccessAnn) {
        message.success("You have add announcements  successfully!");

        setAnns(async (prevAnns) => [...prevAnns, await addedAnn]);
      } else if (isErrorAnn) {
        if (errorAnn) {
          setErrorMessage(errorAnn.data);
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      }
    };

    updateAnnouncements();
  }, [userId, users, allAn, isSuccessAnn, isErrorAnn, addedAnn, errorAnn]);

  const toggleModal = () => {
    handleSubmit(onSubmit);

    setModalVisible((prev) => !prev);
  };
  const showUpdate = () => {
    setShowUpdates((prev) => !prev);
  };

  // console.log("matched user", matchedUser);

  if (!userId) {
    router.push("/auth/login");
  }

  //todo announcement
  const methods = useForm();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    try {
      console.warn("announcement:", data);
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      await addAnnouncement(formData);
      toggleModal();
    } catch (error) {
      console.error("Error submitting Ann:", error);
      setErrorMessage("Invalid data.");
    }
  };
  return (
    <div className='mt-3 bg-slate-100'>
      {(isLoading || isLoadingAnn) && <Loading />}
      <span className='hidden md:flex flex-col'>
        <b className='font-sans px-10 text-4xl  '>well come back , </b>
        <b className='fon-sans px-10 text-4xl mt-x20'>
          {matchedUser?.firstName}{" "}
        </b>
      </span>
      <div className=''>
        <div className='mt-1 flex flex-col md:flex-row '>
          <div className='w-auto pt-2 md:pt-2 bg-white  mx-7 md:mx-2  md:w-64 md:h-2/3 -mb-7 mt-16 md:ml-16 md:mr-12 rounded-2xl shadow-xl ring-1  ring-slate-300'>
            <div className='flex flex-row md:flex-col gap-2 mt-3 md:mt-0 h-20 md:h-auto md:gap-5 w-full'>
              <span className='flex flex-row md:block justify-normal w-full bg-white rounded-lg '>
                <span className='text-2xl flex justify-center   md:-mt-10 text-center'>
                  <Link href='/profile'>
                    <Image
                      src='/logo.png'
                      alt=''
                      width={120}
                      height={120}
                      className='rounded-lg rounded-image text-center'
                    />
                  </Link>
                </span>
                <span className='bg-slate-200 h-9 md:h-auto font-thin text-sm p-2 px-8 md:px-3 rounded-2xl text-slate-600 mx-4 md:mx-11 my-0 md:my-2 flex justify-center text-center'>
                  {matchedUser?.type}
                </span>
                <span className='text-slate-400  w-full md:w-auto font-thin text-sm p-2 px-0 md:px-3 flex justify-center mb-0 md:mb-11 text-center'>
                  IT department
                </span>
              </span>
              <span className='hidden md:flex text-slate-400  font-thin text-sm p-2 px-3  justify-center mt-1 md:mt-96  text-center'>
                School logo
              </span>
            </div>
          </div>

          <div className='tools flex flex-col flex-wrap w-auto md:w-1/3 m-8 md:m-12  '>
            <span className='text-lg md:text-2xl text-center mt-6 md:mt-0'>
              HaHu Tools
            </span>
            <div className='flex bg-white rounded-lg flex-col mb-16 flex-wrap h-64 md:h-[calc(50vh-1rem)] md:w-[93%] gap-7 md:gap-14 p-3  md:p-6 overflow-x-scroll shadow-md'>
              {tools.map((tool) => (
                <div key={tool.id} className='f'>
                  <Link href={tool.link}>
                    <span
                      className={`w-12 h-12  rounded-full ring-slate-200 ring-1 shadow-xl flex items-center justify-center text-xl bg-white ${tool.color}`}
                    >
                      {tool.icon}
                    </span>
                    <span className='px-4'>{tool.label}</span>
                  </Link>
                </div>
              ))}
            </div>
            <span className='hidden md:block text-xl text-slate-400 font-bold pt-6'>
              {" "}
              Select Tools
            </span>{" "}
          </div>
          <div className='news h-64 md:h-4/5 -mt-10 md:mt-10 mb-20 md:mb-0 md:mr-8 m-3'>
            <div className='  '>
              <span className='flex justify-center text-xl md:text-2xl text-center '>
                News, and updates
              </span>
              <div className='  bg-white md:flex md:flex-row gap-5 p-  h-72 md:h-[calc(70vh-1rem)] shadow-md'>
                <div className='flex flex-col md:h-full p-2'>
                  <div className='flex   flex-col h-64 md:h-auto w-auto md:w-96 flex-wrap   gap-3 md:gap-16 md:p-10 overflow-x-scroll '>
                    {anns?.map((ann) => (
                      <div key={ann.title}>
                        <figure className=''>
                          <span
                            className={` w-40  md:w-32    ring-slate-200 ring-1 shadow-xl flex items-center justify-center text-xl bg-white`}
                          >
                            <Image
                              src='/books.jpeg'
                              alt=''
                              width={180}
                              height={3}
                              className='bg-white'
                            />
                          </span>
                          <figcaption
                            className={`${
                              ann.title === 2
                                ? "bg-fuchsia-600"
                                : " bg-blue-400"
                            }`}
                          >
                            <span className='w-40 flex flex-col'>
                              <span className='text-md px-3 font-bold text-white'>
                                {ann.title}
                              </span>
                              <span className='font-thin  text-white px-3 text-xs'>
                                {ann.message}
                              </span>
                            </span>
                          </figcaption>
                        </figure>
                      </div>
                    ))}
                  </div>

                  <div>
                    <span
                      onClick={toggleModal}
                      className='flex cursor-pointer  justify-end text-blue-500'
                    >
                      <i className='fa fa-plus bg-blue-600 text-white p-1 rounded-full'></i>
                    </span>
                  </div>

                  {isModalVisible && (
                    <FormProvider {...methods}>
                      <div className='flex ring-1  shadow-2xl fixed  -top-10 right-0 left-0 z-100 justify-center  items-center  md:inset-0 h-[calc(140%-1rem)] max-h-full'>
                        <div className=' p-4 w-auto md:w-[24%] h-auto md:h-[80%]  max-h-full'>
                          <div className=' bg-white rounded-lg shadow-2xl '>
                            <div className='flex items-center justify-between p-2 md:p-5  rounded-t'>
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
                                <div className='px-6 md:px-10 flex flex-col '>
                                  <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className='gap-2'
                                  >
                                    {errorMessage && (
                                      <span className='block w-full bg-red-100 rounded-md p-3 text-center text-red-500 text-sm font-bold mb-2'>
                                        {errorMessage}
                                      </span>
                                    )}
                                    <label className='block text-slate-700 text-sm font-bold mb-0 md:mb-2'>
                                      Announcement title
                                    </label>
                                    <input
                                      {...register("title")}
                                      className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                      id='title'
                                      type='text'
                                      name='title'
                                      placeholder='add header text'
                                    />
                                    <div className=' mt-2 md:mt-6 '>
                                      <label className='block text-slate-700 text-sm font-bold mb-0 md:mb-2'>
                                        description
                                      </label>
                                      <textarea
                                        name='message'
                                        {...register("message")}
                                        className='shadow h-20 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                        id='message'
                                        type='text'
                                        placeholder='section description'
                                      />
                                    </div>
                                    <label className='block text-slate-700 text-sm  mt-2 md:mt-6  font-bold mb-0 md:mb-2'>
                                      upload optional picture
                                    </label>
                                    <input
                                      name='url'
                                      {...register("url")}
                                      className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                      id='url'
                                      type='text'
                                      placeholder='optional URL placeholder'
                                    />
                                    <label className='block mt-2 md:mt-6  text-slate-700 text-sm font-bold mb-0 md:mb-2'>
                                      picture alt
                                    </label>
                                    <input
                                      name='imageDescription'
                                      {...register("imageDescription")}
                                      className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                      id='imageDescription'
                                      type='text'
                                      placeholder='image description'
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
                                            className='flex flex-row justify-between mb-1 md:mb-3 text-slate-600'
                                          >
                                            <span>landing page</span>
                                            <span>
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
                                    <div className='flex items-center justify-end p-4  '>
                                      <button
                                        onClick={handleSubmit(onSubmit)}
                                        loading={
                                          isSubmitting ? "true" : undefined
                                        }
                                        className='text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                      >
                                        done
                                      </button>
                                    </div>
                                  </form>
                                </div>
                                {/* <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
                                  <Image
                                    src='/loginimage.png'
                                    alt=''
                                    fill
                                    className='object-cover'
                                  />
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FormProvider>
                  )}
                </div>

                {showUpdates && (
                  <div className='hidden md:block bg-slate-200 w-72 rounded-r-lg '>
                    <div className='flex flex-row'>
                      <span className='text-blue-400 p-4 pt-2'>
                        HaHu updates
                      </span>
                    </div>
                  </div>
                )}
                <span onClick={showUpdate}>hide</span>
              </div>
            </div>
          </div>
        </div>
        <div className=' flex w-auto md:w-3/4 m-3 md:-mt-5  flex-col shadow-xl  md:mx-96  md:mr-9  h-72 mb-6'>
          <div className='text-2xl px-3 text-black '>Daily Tasks</div>
          <div className='flex  flex-wrap flex-col h-64 overflow-x-scroll   md:justify-center'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((task) => (
              <div
                key={task}
                className='bg-white w-44 md:w-auto m-1 text-slate-500 font-md text-xs rounded-lg p-3  '
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
