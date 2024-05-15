"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../common/loading";
import { useAddLevelMutation } from "../../../../services/api/academia/academiaApi";
import { Select } from "@mantine/core";

const AddLevel = ({ addLevel, levelStatus }) => {
  const [general, setGeneral] = useState(true);
  const [content, setContent] = useState(false);
  const [addLevels, { isLoading, isSuccess }] = useAddLevelMutation();
  const [additionalInputs, setAdditionalInputs] = useState(["unit 1"]);
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedOcc, setSelectedOcc] = useState("");
  const [instructor, setInstructor] = useState("");

  const generalTab = () => {
    setContent(false);
    setGeneral(true);
  };

  const contentTab = () => {
    setGeneral(false);
    setContent(true);
  };

  const handleAddInput = () => {
    setAdditionalInputs([...additionalInputs, ""]);
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.warn("Levels:", data);
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key == `file` || key == `secondFile`) {
          formData.append(key, data[key][0]);
        } else formData.append(key, data[key]);
      });
      formData.append("department", selectedDept);
      formData.append("occupation", selectedOcc);
      formData.append("instructor", instructor);

      await addLevels(formData);
    } catch (error) {
      console.log("Error submitting occupation:", error);
    }
  };
  if (isSuccess) {
    message.success("occupation added  successfully!");
    levelStatus(false);
  }
  return (
    <>
      {isLoading && <Loading />}
      <div className='flex w-full flex-col md:flex-row gap-2 md:shadow-xl rounded-xl  md:p-4 '>
        <div className=' w-full md:w-1/3 md:h-[calc(82vh-0rem)] md:mt-3 md:mb-11 md:mx-8 rounded-2xl md:shadow-2xl ring-1 ring-slate-200 bg-white '>
          <div className='flex flex-col mb-2 md:mb-9 '>
            <span className='md:text-xl p-3 md:p-7 text-blue-600 font-bold'>
              Add Level
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
                onClick={contentTab}
                className={`p-1  md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  content ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Content{" "}
              </span>
            </div>
          </div>
        </div>

        <div className='md:w-3/4  md:mx-8 md:mt-4 rounded-2xl mb-11 ring-1 flex-wrap ring-slate-200  '>
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              {general && (
                <div className='flex flex-wrap flex-row mb-9 bg-white rounded-lg'>
                  <div className='flex flex-col mb-9 '>
                    <div className='flex flex-wrap  flex-row     mb-9 '>
                      <div className='flex flex-col  mb-5 '>
                        <span className='md:text-xl pt-3 px-1 md:px-7 font-bold text-blue-600'>
                          General
                        </span>
                        <div className='flex p-3 md:p-9 gap-2 md:gap-5 justify-center flex-col '>
                          <div className='flex flex-col gap-3 md:gap-8 justify-around'>
                            <label htmlFor=''>Level name</label>
                            <input
                              name='name'
                              {...register("name")}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              type='text'
                              placeholder='enter department name'
                            />{" "}
                          </div>
                          <div className='flex flex-col gap-3 md:gap-7'>
                            <label htmlFor=''>Level id</label>
                            <input
                              name='LevelId'
                              {...register("LevelId")}
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              type='text'
                              placeholder='suggest TCL323'
                            />{" "}
                          </div>
                        </div>
                        <div className='flex px-2 md:px-9 gap-2 md:gap-5 justify-center flex-col '>
                          <div className='flex flex-col gap-1 md:gap-4'>
                            <label htmlFor=''>Department</label>
                            <span className=' p-2 font-bold text-black'>
                              <Select
                                placeholder='Pick a department '
                                data={[
                                  "ETS023",
                                  "kebede kasa ",
                                  "asma",
                                  "megersa chala",
                                ]}
                                value={selectedDept}
                                onChange={(value) => setSelectedDept(value)}
                                searchable
                                clearable
                              />
                            </span>
                          </div>
                          <div className='flex flex-col gap-2 md:gap-7'>
                            <label htmlFor=''>Occupation</label>
                            <span className=' p-2 font-bold text-black'>
                              <Select
                                placeholder='Pick occupation '
                                data={[
                                  "ETS023",
                                  "kebede kasa ",
                                  "asma",
                                  "megersa chala",
                                ]}
                                value={selectedOcc}
                                onChange={(value) => setSelectedOcc(value)}
                                searchable
                                clearable
                              />
                            </span>
                          </div>
                        </div>
                        <div className='flex p-3 md:p-9 gap-2 md:gap-30  justify-center flex-row '>
                          <div className='flex flex-col gap-2 mb-3 md:mb-9'>
                            <label className='mb-5' htmlFor=''>
                              UCS
                            </label>
                            {additionalInputs.map((input, index) => (
                              <div key={index} className='flex flex-row'>
                                <input
                                  name={`ucs-${index}`}
                                  {...register(`ucs-${index}`)}
                                  className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                                  type='text'
                                  placeholder={`unit ${index + 1}`}
                                />
                              </div>
                            ))}
                            <span>
                              <i
                                className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'
                                onClick={handleAddInput}
                              ></i>
                            </span>
                          </div>
                          <div className='flex flex-col gap-7'>
                            <label htmlFor=''>add instructors</label>
                            <span className=' p-2 font-bold text-black'>
                              <Select
                                placeholder='Pick instructor '
                                data={[
                                  "ETS023",
                                  "kebede kasa ",
                                  "asma",
                                  "megersa chala",
                                ]}
                                value={instructor}
                                onChange={(value) => setInstructor(value)}
                                searchable
                                clearable
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {content && (
                <div className='flex flex-wrap  flex-row     md:mb-9 '>
                  <div className='flex flex-col  md:mb-9  md:h-[calc(74vh-0rem)] md:w-2/3 bg-white rounded-xl shadow-md'>
                    <span className='md:text-xl p-2 md:p-7 font-bold '>
                      Level Content
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
                              id='description'
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
              <div className='flex justify-end my-3 h-10'>
                <button
                  type='submit'
                  className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white '
                >
                  finish
                </button>
              </div>
            </form>
          </>
        </div>
      </div>
    </>
  );
};

export default AddLevel;
