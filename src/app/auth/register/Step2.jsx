"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  useGetAllLevelsQuery,
  useGetAllOccupationsQuery,
  useGetAllSectionsQuery,
} from "../../../services/api/academia/academiaApi";

const Step2 = ({ role }) => {
  const { register } = useFormContext();
  console.log("role", role);
  const { data: departments } = useGetAllLevelsQuery();
  const { data: occupations } = useGetAllOccupationsQuery();
  const { data: levels } = useGetAllLevelsQuery();
  const { data: sections } = useGetAllSectionsQuery();

  
  return (
    <div className='px-2 md:px-10 flex flex-col gap-4 w-full'>
      <span className='w-5 h-5 md:w-11 md:h-19 bg-teal-400 text-teal-400'>
        sss
      </span>
      <div className='flex flex-row gap-4 md:gap-10 justify-between w-full'>
        <span className='font-bold text-xl md:text-2xl text-black'>
          Registration page
        </span>
        <span className='text-blue-400 text-xs font-bold md:text-base'>
          application Id: ATP3256643
        </span>
      </div>
      <div className='flex flex-col'>
        <span>
          <span className='text-sm md:text-md font-bold'>academic section</span>{" "}
          <p className='text-xs md:text-base'>
            provide accurate background information for your academic history.
            also please double check your preferred occupation choice made are
            irreversible.
          </p>
        </span>
        <div className='flex flex-col text-blue-500 gap-4 md:mt-3 '>
          <div className='flex flex-row gap-3 md:gap-6'>
            <div className='mt-6  md:mt-6'>
              <i className='fa fa-home text-xl md:text-2xl'></i>
            </div>
            <div className='flex flex-col md:flex-row mt-4 gap-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>school (form)</label>
                <input
                  {...register("school")}
                  name='school'
                  className='shadow h-8 md:h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-5 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id=''
                  type='text'
                  placeholder='previous school'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>entrance exam results</label>
                <input
                  {...register("entranceExamResults")}
                  name='entranceExamResults'
                  className='shadow h-8 md:h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id=''
                  type='number'
                  placeholder='average entrance results'
                />
              </div>{" "}
              <div className='flex flex-col gap-1'>
                <label htmlFor=''>average highschool</label>
                <input
                  {...register("averageHighschool")}
                  name='averageHighschool'
                  className='shadow h-8 md:h-12 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id=''
                  type='number'
                  placeholder='highschool average'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-3 md:gap-6'>
            <div className=''>
              <i className='fa fa-area-chart text-2xl'></i>
            </div>
            <div className='flex flex-col  gap-2'>
              <span>top entrance results </span>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='flex flex-row md:flex-col gap-3'>
                  <label htmlFor='' className='text-slate-600'>
                    1.English
                  </label>
                  <input
                    {...register("englishResults")}
                    name='englishResults'
                    className='shadow h-8 md:h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    // id='username'
                    type='number'
                    placeholder='results'
                  />
                </div>
                <div className='flex flex-row md:flex-col gap-3'>
                  <label htmlFor='' className='text-slate-600'>
                    2.maths{" "}
                  </label>
                  <input
                    {...register("mathsResults")}
                    name='mathsResults'
                    className='shadow h-8 md:h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='maths'
                    type='number'
                    placeholder='results'
                  />
                </div>{" "}
                <div className=' w-full flex flex-row md:flex-col gap-1 md:gap-3'>
                  <label
                    htmlFor=''
                    className='ring-1 rounded-sm w-24 text-center'
                  >
                    3.subjects{" "}
                  </label>
                  <input
                    {...register("subject3")}
                    name='subject3'
                    className='shadow h-8 md:h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='subject3'
                    type='number'
                    placeholder='results'
                  />
                </div>
                <div className=' w-full flex flex-row md:flex-col gap-1 md:gap-3'>
                  <label
                    htmlFor=''
                    className='ring-1 rounded-sm w-24 text-center'
                  >
                    4.subjects{" "}
                  </label>
                  <input
                    {...register("subject4")}
                    name='subject4'
                    className='shadow h-8 md:h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    // id='username'
                    type='number'
                    placeholder='results'
                  />
                </div>
                <div className=' w-full flex flex-row md:flex-col gap-1 md:gap-3'>
                  <label
                    htmlFor=''
                    className='ring-1 rounded-sm w-24 text-center'
                  >
                    5.subjects{" "}
                  </label>
                  <input
                    {...register("subject5")}
                    name='subject5'
                    className='shadow h-8 md:h-12 w-32 appearance-none ring-1 ring-slate-400 border rounded  py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='subject5'
                    type='number'
                    placeholder='results'
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className='flex flex-row gap-3 md:gap-6'>
            <div className='mt-6'>
              <i className='fa fa-bank text-2xl '></i>
            </div>
            <div className='flex flex-col md:flex-row gap-6 mt-4'>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  department
                </label>
                <select
                  {...register("department")}
                  id='department'
                  name='department'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  {departments?.map((dept) => (
                    <option
                      className='w-20 md:w-full text-xs md:text-lg'
                      key={dept.name}
                      value={`${dept.name}`}
                    >
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  occupation
                </label>
                <select
                  {...register("occupation")}
                  id='occupation'
                  name='occupation'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  {occupations?.map((occ) => (
                    <option
                      className='w-20 md:w-full text-xs md:text-lg'
                      key={occ.name}
                      value={`${occ.name}`}
                    >
                      {occ.name}
                    </option>
                  ))}
                </select>
              </div>{" "}
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  current level
                </label>
                <select
                  {...register("currentLevel")}
                  id='currentLevel'
                  name='currentLevel'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  {levels?.map((level) => (
                    <option
                      className='w-20 md:w-full text-xs md:text-lg'
                      key={level.name}
                      value={`${level.name}`}
                    >
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  level{" "}
                </label>
                <select
                  {...register("level")}
                  id='level'
                  name='level'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  {levels?.map((level) => (
                    <option
                      className='w-20 md:w-full text-xs md:text-lg'
                      key={level.name}
                      value={`${level.name}`}
                    >
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  section{" "}
                </label>
                <select
                  {...register("section")}
                  id='section'
                  name='section'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  {sections?.map((section) => (
                    <option
                      className='w-20 md:w-full text-xs md:text-lg'
                      key={section.name}
                      value={`${section.name}`}
                    >
                      {section.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-row md:flex-col gap-5 md:gap-3'>
                <label htmlFor='' className=''>
                  entry level{" "}
                </label>
                <select
                  {...register("entryLevel")}
                  id='entryLevel'
                  name='entryLevel'
                  form='form'
                  className='ring-1 px-3 p-1 rounded-sm text-slate-500 bg-white'
                >
                  {levels?.map((level) => (
                    <option
                      className='w-20 md:w-full text-xs md:text-lg'
                      key={level.name}
                      value={`${level.name}`}
                    >
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
