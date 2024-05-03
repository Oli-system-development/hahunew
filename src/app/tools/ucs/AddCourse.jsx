"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAddCoursesMutation } from "../../../services/api/ucs/ucsApi";
import Loading from "../../common/loading";
import {message} from 'antd'
const AddCourse = ({ addcourse }) => {
  const [general, setGeneral] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [attachIndustries, setAttachIndustries] = useState(false);
  const [content, setContent] = useState(false);
  const [grading, setGrading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [addCourses, { isLoading }] = useAddCoursesMutation();
  const generalTab = () => {
    setAdmin(false);
    setAttachIndustries(false);
    setContent(false);
    setGrading(false);
    setGeneral(true);
  };

  const administratorTab = () => {
    setGeneral(false);
    setAttachIndustries(false);
    setContent(false);
    setGrading(false);
    setAdmin(true);
  };

  const attachIndustriesTab = () => {
    setGeneral(false);
    setAdmin(false);
    setContent(false);
    setGrading(false);
    setAttachIndustries(true);
  };

  const contentTab = () => {
    setGeneral(false);
    setAdmin(false);
    setAttachIndustries(false);
    setGrading(false);
    setContent(true);
  };

  const gradingTab = () => {
    setGeneral(false);
    setAdmin(false);
    setAttachIndustries(false);
    setContent(false);
    setGrading(true);
  };
  const methods = useForm();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.warn("course:", data);
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key == `firstFile` || key == `secondFile`) {
          formData.append(key, data[key][0]);
        }else formData.append(key, data[key]);
      });

      await addCourses(formData);
      message.success("course submitted successfully!");
    } catch (error) {
      console.error("Error submitting Ann:", error);
      setErrorMessage("Invalid data.");
    }
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className='flex w-full flex-col md:flex-row gap-2 md:shadow-xl rounded-xl  md:p-4 '>
        <div className=' w-full md:w-1/3 md:h-[calc(82vh-0rem)] md:mt-3 md:mb-11 md:mx-8 rounded-lg md:shadow-2xl ring-1 ring-slate-200 bg-white '>
          <div className='flex flex-col mb-2 md:mb-9 '>
            <span className='md:text-xl md:p-7 text-blue-600 font-bold'>
              Add UC
            </span>
            <div className='flex p-1 md:p-9 gap-0 ring-1 ring-slate-200 md:ring-0 rounded-xl md:rounded-none justify-center flex-row md:flex-col '>
              <span
                onClick={generalTab}
                className={`p-1  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  general ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                General{" "}
              </span>
              <span
                onClick={administratorTab}
                className={`p-1  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  admin ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Administrator{" "}
              </span>
              <span
                onClick={attachIndustriesTab}
                className={`p-1  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  attachIndustries ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Attach Industries{" "}
              </span>

              <span
                onClick={contentTab}
                className={`p-1 md:px-8 text-sm md:text-lg md:mt-40 cursor-pointer rounded-md ${
                  content ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Content{" "}
              </span>
              <span
                onClick={gradingTab}
                className={`p-1  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  grading ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Grading{" "}
              </span>
            </div>
          </div>
        </div>
        <div className='md:w-3/4  md:mx-8 md:mt-4 rounded-2xl mb-11 ring-1 flex-wrap ring-slate-200  '>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='gap-2'>
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
                            <label htmlFor=''>UC NAME</label>
                            <input
                              name='name'
                              {...register("name")}
                              className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              id='header text'
                              type='text'
                              placeholder='Enter uc name'
                            />{" "}
                          </div>
                          <div className='flex flex-col gap-4'>
                            <label htmlFor=''>UC abbrevation</label>
                            <input
                              name='ucAbb'
                              {...register("ucAbb")}
                              // onChange={"onChange"}
                              className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              // id='header text'
                              type='text'
                              placeholder=''
                            />{" "}
                          </div>
                          <div className='flex flex-col gap-4'>
                            <label htmlFor=''>UC ID</label>
                            <input
                              name='courseId'
                              {...register("courseId")}
                              className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              // id='header text'
                              type='text'
                              placeholder='enter uc id'
                            />{" "}
                          </div>
                        </div>
                        <div className='flex pt-5  px-9 gap-5 justify-center flex-row '>
                          <div className='flex flex-col gap-7'>
                            <label htmlFor=''>Credit hour</label>
                            <input
                              name='creditHr'
                              // onChange={"onChange"}
                              {...register("creditHr")}
                              className='shadow h-8  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              // id='header text'
                              type='number'
                              placeholder=''
                            />{" "}
                          </div>
                          <div className='flex flex-col  gap-7'>
                            <label htmlFor=''>select color</label>
                            <input
                              name='color'
                              {...register("color")}
                              type='color'
                              value='#ff0000'
                            />
                          </div>
                        </div>
                        <div className='flex flex-col gap-7 pt-4 px-9'>
                          <label htmlFor=''>Prerequestie courses</label>
                          <span className='flex flex-row gap-2'>
                            <input
                              name='prerequisites'
                              {...register("prerequisites")}
                              className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              // id='description'
                              type='number'
                              placeholder='section description'
                            />
                            <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                          </span>
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                    <div className='flex flex-col '>
                      <div className='flex flex-wrap  flex-row  md:h-96 p-10    mb-9 bg-white rounded-lg '>
                        <div className='flex flex-col  mb-9 '>
                          <span className='text-xl p-7 font-bold text-black'>
                            add units
                          </span>
                          <span className='flex flex-row gap-2'>
                            <input
                              name='units'
                              {...register("units")}
                              className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              // id='description'
                              type='text'
                              placeholder='enter the units in order '
                            />
                            <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {admin && (
                  <div className='flex flex-col md:flex-row gap-2 md:gap-7'>
                    <div className='flex flex-wrap  flex-row md:flex-col  md:h-[calc(82vh-0rem)] p-2 md:p-10  mb-1 md:mb-9 bg-white rounded-lg'>
                      <span className='text-xl p-7 font-bold '>
                        Administrator
                      </span>
                      <div className='flex flex-col '>
                        <div className='flex flex-wrap  flex-col   p-10 md:gap-40    mb-9 bg-white rounded-lg '>
                          <div className='flex flex-col  mb-9 '>
                            <span className='text-md   font-bold text-slate-500'>
                              add Administrator
                            </span>
                            <span className='flex pt-3 flex-row gap-2'>
                              <input
                                name=''
                                // onChange={"onChange"}
                                className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='description'
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
                                className='shadow   appearance-none ring-1 w-full ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='description'
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
                  onClick={() => addcourse(false)}
                >
                  finish
                </button> */}
                  </div>
                )}
                {attachIndustries && (
                  <div className='flex flex-col md:flex-row gap-2 md:gap-7'>
                    <div className='flex flex-wrap  flex-row md:flex-col  md:h-[calc(82vh-0rem)] p-2 md:p-10  mb-1 md:mb-9 bg-white rounded-lg'>
                      <span className='text-xl p-7 font-bold '>
                        attach Industries
                      </span>
                      <div className='flex flex-col '>
                        <div className='flex flex-wrap  flex-col  h-[calc(38vh-0rem)]  p-10 md:gap-40    mb-9 bg-white rounded-lg '>
                          <div className='flex flex-col  mb-9 '>
                            <span className='text-md   font-bold text-slate-500'>
                              add Industries
                            </span>
                            <span className='flex pt-3 flex-row gap-2'>
                              <input
                                name=''
                                // onChange={"onChange"}
                                className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='description'
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
                  onClick={() => addcourse(false)}
                >
                  finish
                </button> */}
                  </div>
                )}
                {content && (
                  <div className='flex flex-col md:flex-row gap-2 md:gap-7'>
                    <div className='flex flex-wrap  flex-row md:flex-col  md:h-[calc(82vh-0rem)] p-2 md:p-10  mb-1 md:mb-9 bg-white rounded-lg'>
                      <span className='text-xl p-7 font-bold '>Content</span>
                      <div className='flex flex-col '>
                        <div className='flex flex-wrap  flex-col   p-3 md:p-10 gap-2 md:gap-4    mb-9 bg-white rounded-lg '>
                          <div className='flex flex-col  mb-9 '>
                            <span className='text-md   font-bold text-slate-500'>
                              add introduction
                            </span>
                            <span className='flex pt-3 flex-row gap-2'>
                              <textarea
                                name='description'
                                // onChange={"onChange"}
                                {...register("description")}
                                className='shadow  h-40  appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                type='text'
                                placeholder='enter the units in order '
                              />
                            </span>
                          </div>
                          <div className='flex flex-col  mb-9 '>
                            <span className='text-md   font-bold text-slate-500'>
                              attach image or video
                            </span>
                            <span className='flex pt-3 flex-row gap-2'>
                              <input
                                name='firstFile'
                                {...register("firstFile")}
                                className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                type='file'
                                placeholder='enter the units in order '
                              />
                              <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col mx-3 mb-9  h-[calc(74vh-0rem)]   rounded-xl '>
                      <div className='flex flex-col '>
                        <div className='flex flex-wrap  flex-col  h-64 p-10 gap-4    mb-9 bg-white rounded-lg '>
                          <div className='flex flex-col  mb-9 '>
                            <span className='flex flex-row justify-around text-md   font-bold text-slate-500'>
                              add task
                              <i className='fa fa-plus  rounded-full bg-slate-400 p-2 text-xl'></i>
                            </span>
                            <span className='flex pt-3 flex-row gap-2'>
                              <input
                                name='tasks'
                                {...register("tasks")}
                                className='shadow    appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                type='text'
                                placeholder='enter the units in order '
                              />
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-wrap  flex-col h-full   p-10 gap-4    mb-9 bg-white rounded-lg '>
                          <div className='flex flex-col  mb-9 '>
                            <span className='flex flex-row justify-around text-md   font-bold text-slate-500'>
                              attach video or file{" "}
                              {/* <i className='fa fa-plus  rounded-full bg-slate-400 p-2 text-xl'></i> */}
                            </span>
                            <span className='flex pt-3 flex-row gap-2'>
                              <input
                                name='secondFile'
                                {...register("secondFile")}
                                className='shadow    appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                type='file'
                                placeholder='enter the units in order '
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex h-9 w-32 justify-end'>
                      {/* <button
                    className='flex justify-center  bg-blue-700 py-2 rounded-full w-40 text-white '
                    onClick={() => addcourse(false)}
                  >
                    finish
                  </button> */}
                    </div>
                  </div>
                )}
                {grading && (
                  <div className='flex flex-wrap flex-row mb-9 bg-white rounded-lg'>
                    <div className='flex flex-col mb-9 '>
                      <div className='flex flex-wrap  flex-row     mb-9 '>
                        <div className='flex flex-col  mb-3 md:mb-9 '>
                          <span className='md:text-xl p-3 md:p-7 font-bold text-slate-600   '>
                            Grading system
                          </span>
                          <div className='flex p-3 md:p-9 gap-2 md:gap-5 justify-center flex-row '>
                            <div className='flex flex-row gap-4 md:gap-14 justify-around'>
                              <label htmlFor=''>type</label>
                              <input
                                name=''
                                // onChange={"onChange"}
                                className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                // id='header text'
                                type='text'
                                placeholder='date'
                              />{" "}
                            </div>
                            <div className='flex flex-row gap-2 md:gap-7'>
                              <label htmlFor=''>type</label>
                              <input
                                name=''
                                // onChange={"onChange"}
                                className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                // id='header text'
                                type='text'
                                placeholder=''
                              />{" "}
                            </div>
                          </div>
                          <form action=''>
                            <div className='flex p-3 md:p-9 gap-2 md:gap-5 justify-center flex-row '>
                              <div className='flex flex-row gap-4 md:gap-14'>
                                <label htmlFor=''>type</label>
                                <input
                                  name=''
                                  // onChange={"onChange"}
                                  className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                  // id='header text'
                                  type='text'
                                  placeholder='stick general'
                                />{" "}
                              </div>
                              <div className='flex flex-row gap-7'>
                                <label htmlFor=''>type</label>
                                <input
                                  name=''
                                  // onChange={"onChange"}
                                  className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                  // id='header text'
                                  type='text'
                                  placeholder='date'
                                />{" "}
                              </div>
                            </div>
                            <div className='flex flex-row gap-4 md:gap-14 p-4 md:p-9'>
                              <label htmlFor=''>remark</label>
                              <textarea
                                name=''
                                // onChange={"onChange"}
                                className='shadow h-32 md:h-64 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                // id='description'
                                type='text'
                                placeholder='section description'
                              />
                            </div>

                            <div className='flex justify-center p-9 md:w-96 '>
                              <input
                                name=''
                                // onChange={"onChange"}
                                className='shadow ml-28  h-11 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                // id='header text'
                                type='file'
                                placeholder='attach your file'
                              />{" "}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  onClick={handleSubmit(onSubmit)}
                  loading={isSubmitting ? "true" : undefined}
                  className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
                  // onClick={() => addcourse(false)}
                >
                  finish
                </button>
              </>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
