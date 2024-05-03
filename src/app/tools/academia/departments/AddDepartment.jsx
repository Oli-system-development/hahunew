"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddDepartmentMutation } from "../../../../services/api/academia/academiaApi";
import Loading from "../../../common/loading";
import { message } from "antd";
const AddDepartment = ({ deptStatus }) => {
  const [general, setGeneral] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [attachIndustries, setAttachIndustries] = useState(false);
  const [content, setContent] = useState(false);
  const [grading, setGrading] = useState(false);
  const [addDepartment, { isLoading }] = useAddDepartmentMutation();
  const generalTab = () => {
    setAdmin(false);
    setAttachIndustries(false);
    setContent(false);
    setGrading(false);
    setGeneral(true);
  };

  const contentTab = () => {
    setGeneral(false);
    setAdmin(false);
    setAttachIndustries(false);
    setGrading(false);
    setContent(true);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.warn("depts:", data);
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key == `file` || key == `secondFile`) {
          formData.append(key, data[key][0]);
        } else formData.append(key, data[key]);
      });

      await addDepartment(formData);
      deptStatus(false);
      message.success("department added  successfully!");
    } catch (error) {
      console.error("Error submitting Ann:", error);
      setErrorMessage("Invalid data.");
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex w-full flex-col md:flex-row gap-2 md:shadow-xl rounded-xl p-2 md:p-4 '>
          <div className='md:w-1/3 md:h-[calc(82vh-0rem)] md:mt-3 md:mb-11 md:mx-8 rounded-2xl md:shadow-2xl ring-1 ring-slate-200 bg-white '>
            <div className='flex flex-col mb-9 '>
              <span className='md:text-xl px-2 md:p-7 text-blue-600 font-bold'>
                Add Department
              </span>
              <div className='flex p-2 md:p-9 gap-0 ring-1 ring-slate-200 md:ring-0 rounded-xl md:rounded-none justify-center flex-row md:flex-col '>
                <span
                  onClick={generalTab}
                  className={`p-1 px-3 md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                    general ? "bg-slate-200" : "bg-slate-3200"
                  } py-3 text-slate-400`}
                >
                  General{" "}
                </span>

                <span
                  onClick={contentTab}
                  className={`p-1 px-3 md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                    content ? "bg-slate-200" : "bg-slate-3200"
                  } py-3 text-slate-400`}
                >
                  Content{" "}
                </span>
                <span
                  // onClick={gradingTab}
                  className={`p-1 px-3 md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                    grading ? "bg-slate-200" : "bg-slate-3200"
                  } py-3 text-slate-400`}
                >
                  add occupation
                </span>
              </div>
            </div>
          </div>
          <div className='md:w-3/4  md:mx-8 md:mt-4 rounded-2xl mb-11 ring-1 flex-wrap ring-slate-200  '>
            <>
              {general && (
                <div className='flex flex-col md:flex-row gap-2 md:gap-7'>
                  <div className='flex flex-wrap  flex-row  md:h-[calc(82vh-0rem)] p-2 md:p-10  mb-1 md:mb-9 bg-white rounded-lg'>
                    <div className='flex flex-col  '>
                      <span className='md:text-xl pt-3 px-1 md:px-7 font-bold text-blue-600'>
                        General
                      </span>
                      <div className='flex px-2 md:px-9 gap-2 md:gap-5 justify-center flex-col '>
                        <div className='flex flex-col pt-4 gap-4 justify-around'>
                          <label htmlFor=''>Department NAME</label>
                          <input
                            name='name'
                            {...register("name")}
                            className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            placeholder='Enter dept name'
                          />{" "}
                        </div>
                        <div className='flex flex-col gap-4'>
                          <label htmlFor=''>Department abbrevation</label>
                          <input
                            name='depAbb'
                            {...register("depAbb")}
                            className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            placeholder=''
                          />{" "}
                        </div>
                        <div className='flex flex-col gap-4'>
                          <label htmlFor=''>Department ID</label>
                          <input
                            name='depId'
                            {...register("depId")}
                            className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            placeholder='suggest ATC90'
                          />{" "}
                        </div>
                      </div>
                      <div className='flex pt-5 mt-4 md:mt-10  gap-2 md:gap-5 px-4 md:px-9 flex-row '>
                        <div className='flex flex-col gap-7'>
                          <label htmlFor=''>Current year applicant limit</label>
                          <input
                            name='appLimit'
                            {...register("appLimit")}
                            className='shadow h-8 w-16 appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='number'
                            placeholder='1'
                          />{" "}
                        </div>
                      </div>
                      <div className='flex flex-col gap-4 md:gap-7 pt-2 md:pt-4 px-2 md:px-9'>
                        <label htmlFor=''>associate Industries</label>
                        <span className='flex flex-row gap-2'>
                          <input
                            name=''
                            // onChange={"onChange"}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            placeholder='section description'
                          />
                          <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col '>
                    <div className='flex flex-wrap  flex-col  h-64 md:h-96 p-2 md:p-10   mb-2 md:mb-9 bg-white rounded-lg '>
                      <div className='flex flex-col  mb-3 md:mb-9 '>
                        <span className='md:text-xl p-2 md:p-7 font-bold text-black'>
                          department head
                        </span>
                        <span className='flex flex-row gap-2'>
                          <input
                            name='head'
                            {...register("head")}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg md:w-72  py-2 md:px-20 ml-2 md:ml-9  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            placeholder='assign department head '
                          />
                        </span>
                      </div>
                      <div className='flex flex-col gap-2 md:gap-7 pt-2 md:pt-4 px-2 md:px-9'>
                        <label htmlFor=''>department assistant</label>
                        <span className='flex flex-row gap-2'>
                          <input
                            name='assistant'
                            {...register("assistant")}
                            className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            placeholder='add department assistant'
                          />
                          <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                        </span>
                      </div>
                    </div>
                    {/* <button
                      className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
                      onClick={() => deptStatus(false)}
                    >
                      finish
                    </button> */}
                  </div>
                </div>
              )}
              {admin && (
                <div className='flex flex-wrap  flex-row     mb-9 '>
                  <div className='flex flex-col  mb-9  w-1/2 bg-white rounded-xl shadow-md'>
                    <span className='text-xl p-7 font-bold '>
                      Administrator
                    </span>
                    <div className='flex flex-col '>
                      <div className='flex flex-wrap  flex-col   p-10 gap-40    mb-9 bg-white rounded-lg '>
                        <div className='flex flex-col  mb-9 '>
                          <span className='text-md   font-bold text-slate-500'>
                            add Administrator
                          </span>
                          <span className='flex pt-3 flex-row gap-2'>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              type='text'
                              placeholder='enter the units in order '
                            />
                            <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                          </span>
                        </div>
                        <div className='flex flex-col  mb-9 '>
                          <span className='text-md   font-bold text-slate-500'>
                            add Administrator
                          </span>
                          <span className='flex pt-3 flex-row gap-2'>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              type='text'
                              placeholder='enter the units in order '
                            />
                            <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button
                    className='flex justify-center ml-40 h-10 bg-blue-700 py-2 rounded-full w-40 text-white '
                    onClick={() => deptStatus(false)}
                  >
                    finish
                  </button> */}
                </div>
              )}
              {attachIndustries && (
                <div className='flex flex-wrap  flex-row     mb-9 '>
                  <div className='flex flex-col  mb-9  w-1/2 bg-white rounded-xl shadow-md'>
                    <span className='text-xl p-7 font-bold '>
                      attach Industries
                    </span>
                    <div className='flex flex-col '>
                      <div className='flex flex-wrap  flex-col  h-[calc(68vh-0rem)]  p-10 gap-40    mb-9 bg-white rounded-lg '>
                        <div className='flex flex-col  mb-9 '>
                          <span className='text-md   font-bold text-slate-500'>
                            add Industries
                          </span>
                          <span className='flex pt-3 flex-row gap-2'>
                            <input
                              name=''
                              // onChange={"onChange"}
                              className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              type='text'
                              placeholder='enter the units in order '
                            />
                            <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button
                    className='flex justify-center ml-40 bg-blue-700 py-2 h-9 rounded-full w-40 text-white '
                    onClick={() => deptStatus(false)}
                  >
                    finish
                  </button> */}
                </div>
              )}
              {content && (
                <div className='flex flex-wrap  flex-row     md:mb-9 '>
                  <div className='flex flex-col  md:mb-9  md:h-[calc(74vh-0rem)] md:w-2/3 bg-white rounded-xl shadow-md'>
                    <span className='md:text-xl p-2 md:p-7 font-bold '>
                      Content
                    </span>
                    <div className='flex flex-col '>
                      <div className='flex flex-wrap  flex-col   p-4 md:p-10 gap-2 md:gap-4    mb-2 md:mb-9 bg-white rounded-lg '>
                        <div className='flex flex-col  mb-9 '>
                          <span className='text-md   font-bold text-slate-500'>
                            add introduction
                          </span>
                          <span className='flex pt-3 flex-row gap-2'>
                            <textarea
                              name='description'
                              {...register("description")}
                              className='shadow  h-32 md:h-40  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 md:px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              type='text'
                              placeholder='enter the units in order '
                            />
                          </span>
                        </div>
                        <div className='flex flex-col  mb-3 md:mb-9 '>
                          <span className='text-md   font-bold text-slate-500'>
                            attach image or video
                          </span>
                          <span className='flex pt-3 flex-row gap-2'>
                            <input
                              name='file'
                              {...register("file")}
                              className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                              type='file'
                              placeholder='enter the units in order '
                            />
                            <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
        <div className='flex justify-end mt-2 h-10'>
          <button
            type='submit'
            className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
            // onClick={() => deptStatus(false)}
          >
            finish
          </button>
        </div>
      </form>
    </>
  );
};

export default AddDepartment;
