"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAddDepartmentMutation,
  useGetAllIndustriesQuery,
} from "../../../../services/api/academia/academiaApi";
import Loading from "../../../common/loading";
import { message } from "antd";
import { Select } from "@mantine/core";

const AddDepartment = ({ deptStatus }) => {
  const [general, setGeneral] = useState(true);
  const [content, setContent] = useState(false);
  const [additionalInputs, setAdditionalInputs] = useState([]);
  const [selectedHead, setSelectedHead] = useState("");
  const [selectedAssistant, setSelectedAssistant] = useState("");
  const { data: industries } = useGetAllIndustriesQuery();
  console.log("industry", industries);
  const [addDepartment, { isLoading, isSuccess }] = useAddDepartmentMutation();

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

  const handleInputChange = (index, value) => {
    const newInputs = [...additionalInputs];
    newInputs[index] = value;
    setAdditionalInputs(newInputs);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.warn("depts:", data);
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "file" || key === "secondFile") {
          formData.append(key, data[key][0]);
        } else formData.append(key, data[key]);
      });
      formData.append("head", selectedHead);
      formData.append("assistant", selectedAssistant);
      formData.append("industries", JSON.stringify(additionalInputs));
      console.log(selectedHead);
      await addDepartment(formData);
    } catch (error) {
      console.error("Error submitting Ann:", error);
      setErrorMessage("Invalid data.");
    }
  };

  if (isSuccess) {
    message.success("Department added successfully!");
    deptStatus(false);
  }

  return (
    <>
      {isLoading && <Loading />}
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
                General
              </span>
              <span
                onClick={contentTab}
                className={`p-1 px-3 md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  content ? "bg-slate-200" : "bg-slate-3200"
                } py-3 text-slate-400`}
              >
                Content
              </span>
              <span
                className={`p-1 px-3 md:px-8  text-sm md:text-lg cursor-pointer rounded-md ${
                  "" // Add a state or condition here if needed
                } py-3 text-slate-400`}
              >
                Add Occupation
              </span>
            </div>
          </div>
        </div>
        <div className='md:w-3/4  md:mx-8 md:mt-4 rounded-2xl mb-11 ring-1 flex-wrap ring-slate-200  '>
          <form onSubmit={handleSubmit(onSubmit)}>
            {general && (
              <div className='flex flex-col md:flex-row gap-2 md:gap-7'>
                <div className='flex flex-wrap  flex-row  md:h-[calc(82vh-0rem)] p-2 md:p-10  mb-1 md:mb-9 bg-white rounded-lg'>
                  <div className='flex flex-col'>
                    <span className='md:text-xl pt-3 px-1 md:px-7 font-bold text-blue-600'>
                      General
                    </span>
                    <div className='flex px-2 md:px-9 gap-2 md:gap-5 justify-center flex-col'>
                      <div className='flex flex-col pt-4 gap-4 justify-around'>
                        <label htmlFor=''>Department NAME</label>
                        <input
                          name='name'
                          {...register("name")}
                          className='shadow h-8 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          type='text'
                          placeholder='Enter dept name'
                        />
                      </div>
                      <div className='flex flex-col gap-4'>
                        <label htmlFor=''>Department Abbreviation</label>
                        <input
                          name='depAbb'
                          {...register("depAbb")}
                          className='shadow h-8 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          type='text'
                          placeholder=''
                        />
                      </div>
                      <div className='flex flex-col gap-4'>
                        <label htmlFor=''>Department ID</label>
                        <input
                          name='depId'
                          {...register("depId")}
                          className='shadow h-8 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          type='text'
                          placeholder='suggest ATC90'
                        />
                      </div>
                    </div>
                    <div className='flex pt-5 mt-4 md:mt-10 gap-2 md:gap-5 px-4 md:px-9 flex-row'>
                      <div className='flex flex-col gap-7'>
                        <label htmlFor=''>Current Year Applicant Limit</label>
                        <input
                          name='appLimit'
                          {...register("appLimit")}
                          className='shadow h-8 w-16 appearance-none ring-1 ring-slate-400 border rounded-lg py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          type='number'
                          placeholder='1'
                        />
                      </div>
                    </div>
                    <div className='flex flex-col gap-4 md:gap-7 pt-2 md:pt-4 px-2 md:px-9'>
                      <label htmlFor=''>Associate Industries</label>
                      <div className='flex flex-col gap-2 mb-3 md:mb-9'>
                        {additionalInputs.map((input, index) => (
                          <div key={index} className='flex flex-row'>
                            <input
                              value={input}
                              onChange={(e) =>
                                handleInputChange(index, e.target.value)
                              }
                              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                              type='text'
                              placeholder={`industry ${index + 1}`}
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
                    </div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-wrap flex-col h-64 md:h-96 p-2 md:p-10 mb-2 md:mb-9 bg-white rounded-lg'>
                    <div className='flex flex-col mb-3 md:mb-9'>
                      <span className='md:text-xl py-2 md:py-7 font-bold text-black'>
                        Department Head
                      </span>
                      <span className='p-2 font-bold text-black'>
                        <Select
                          placeholder='Pick a head'
                          data={[
                            "ETS023",
                            "kebede kasa ",
                            "asma",
                            "megersa chala",
                          ]}
                          value={selectedHead}
                          onChange={(value) => setSelectedHead(value)}
                          searchable
                          clearable
                        />
                      </span>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-7 pt-2 md:pt-4 px-2 md:px-9'>
                      <label htmlFor=''>Department Assistant</label>
                      <span className='p-2 font-bold text-black'>
                        <Select
                          placeholder='Pick assistant'
                          data={[
                            "ETS023",
                            "kebede kasa ",
                            "asma",
                            "megersa chala",
                          ]}
                          value={selectedAssistant}
                          onChange={(value) => setSelectedAssistant(value)}
                          searchable
                          clearable
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {content && (
              <div className='flex flex-wrap flex-row md:mb-9'>
                <div className='flex flex-col md:mb-9 md:h-[calc(74vh-0rem)] md:w-2/3 bg-white rounded-xl shadow-md'>
                  <span className='md:text-xl p-2 md:p-7 font-bold'>
                    Content
                  </span>
                  <div className='flex flex-col'>
                    <div className='flex flex-wrap flex-col p-4 md:p-10 gap-2 md:gap-4 mb-2 md:mb-9 bg-white rounded-lg'>
                      <div className='flex flex-col mb-9'>
                        <span className='text-md font-bold text-slate-500'>
                          Add Introduction
                        </span>
                        <span className='flex pt-3 flex-row gap-2'>
                          <textarea
                            name='description'
                            {...register("description")}
                            className='shadow h-32 md:h-40 appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 md:px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='text'
                            placeholder='enter the units in order'
                          />
                        </span>
                      </div>
                      <div className='flex flex-col mb-3 md:mb-9'>
                        <span className='text-md font-bold text-slate-500'>
                          Attach Image or Video
                        </span>
                        <span className='flex pt-3 flex-row gap-2'>
                          <input
                            name='file'
                            {...register("file")}
                            className='shadow appearance-none ring-1 ring-slate-400 border rounded-lg py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                            type='file'
                            placeholder='enter the units in order'
                          />
                          <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className='flex justify-end mt-2 h-10'>
              <button
                type='submit'
                className='flex justify-center ml-40 bg-blue-700 py-2 rounded-full w-40 text-white'
              >
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDepartment;
