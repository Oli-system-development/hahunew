"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddCourse from "./AddCourse";
import Courses from "./Courses";
import Link from "next/link";
import "./table.css";
import { useGetAllCoursesQuery } from "../../../services/api/ucs/ucsApi";
const Ucs = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddBook, setOpenAddBook] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(1);
  const { data: courses, isLoading } = useGetAllCoursesQuery();
  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
    setSelectedCourse(item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };
 const units = (units) => {
   const unitsString = String(units);
   const unitList = unitsString.split("__");
   const unitsWithGap = unitList.join(" ");

   console.log("units", unitList);
   return unitList;
 };



 const UnitsComponent = ({ units }) => {
   return (
     <div>
       <span className='text-xl md:px-3 font-bold text-black'>Units</span>{" "}
       <div className='flex flex-col'>
         {units.map((unit, index) => (
           <span key={index}>
             {index + 1}.{unit}
           </span>
         ))}
       </div>
     </div>
   );
 };
  useEffect(() => {
    const fetchCourse = async () => {
      const res = await courses;
      console.log(res);
    };
    fetchCourse();
  }, [courses]);
  return (
    <div className='p-2 md:p-6 '>
      <div className='flex flex-row justify-between p-2 md:p-5  w-full'>
        <span>
          <Link href={"/dashboard/"}>
            <Image src={"/logo.png"} alt='' width={40} height={40} />
          </Link>
        </span>
        <span className='text-slate-500 gap-5 flex flex-row'>
          <span className='flex pt-4 '>20,jan,2023</span>{" "}
          <Link href={"/profile/"}>
            <Image
              src={"/elsabet.jpeg"}
              alt=''
              width={40}
              height={40}
              className='rounded-full rounded-image  ring-1 ring-slate-400 -pb-2'
            />
          </Link>
        </span>
      </div>
      <div className='flex flex-row justify-between px-2 md:px-10 pb-4 md:pb-10'>
        <div className='flex flex-row gap-2 md:gap-11 text-slate-700'>
          <span className='flex gap-3 text-slate-500 md:text-2xl'>
            <span>
              <i className='fa fa-book'></i>
            </span>
            <span onClick={handleBackToItems} className='cursor-pointer'>
              UCS
            </span>
          </span>
        </div>
        <div className='flex justify-end'>
          <button
            className='bg-blue-600 text-blue-50 rounded-full px-6 p-1'
            onClick={() => setOpenAddBook(!openAddBook)}
          >
            add course
          </button>
        </div>
      </div>

      <div className='flex flex-row justify-between px-1 md:px-20 md:-mt-8'>
        <div className='flex gap-3 md:gap-20'>
          <div className='flex flex-row mt-3 justify-between w-full'>
            <input
              name=''
              // onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-28 md:w-64 rounded-full  py-2 md:px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='search'
            />
            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
          </div>
          <span className='flex justify-end md:mt-2 m-5  text-slate-600 text-xs md:text-normal'>
            filter
          </span>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              // onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-28 md:w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='department'
            />
          </div>
        </div>
        <span
          className='flex gap-2 md:gap-8 mt-4 md:mt-0 text-slate-500 md:text-2xl'
          onClick={() => setOpenCourses(!openCourses)}
        >
          <i className='fa fa-bars'></i>
          <i className='fa fa-bars'></i>
        </span>
      </div>
      <div
        className={`flex  shadow-xl ring-1 ring-slate-200 md:px-14 md:mx-14 mt-6 rounded-md ${
          openAddBook ? "hidden" : ""
        }`}
      >
        {openCourses ? (
          <Courses openCourse={() => setOpenCourses(false)} />
        ) : null}
      </div>
      <div
        className={`flex  bg-slate-200 md:px-14 mx-2 px-2 md:mx-14 mt-6 rounded-md ${
          openCourses ? "hidden" : ""
        }`}
      >
        {!openAddBook ? (
          <div className='flex w-full flex-col md:flex-row'>
            <div className='flex flex-col mt-5 '>
              {showBookDetails ? (
                <div className='book_items flex flex-col flex-wrap gap-6 w-full overflow-y-scroll justify-around '>
                  <div
                    className={`flex text-slate-500 flex-col gap-6 w-full justify-around cursor-pointer `}
                    onClick={handleBackToItems}
                  >
                    <div className='-mt-5'>
                      <Image
                        src='/book1.jpeg'
                        alt=''
                        width={590}
                        height={150}
                        className='rounded-xl mt-7 rounded-image'
                      />
                    </div>
                    <span className='text-xl font-bold'>
                      Computational breach test
                    </span>
                    <div className='flex flex-col  text-slate-500'>
                      <p>
                        some details about the course like the quick brown fox
                        jumped over the lazy dog . well that was not as long as
                        i had hoped
                      </p>
                    </div>
                    <span className='text-xl font-bold'>unit assignment</span>

                    <div className='flex flex-col  text-black'>
                      <p>some details about the</p>{" "}
                      <p>some details about the</p>
                    </div>
                  </div>
                </div>
              ) : (
                //!3

                <div className='table-container overflow-scroll ring-1 ring-slate-200 shadow-sm bg-white rounded-lg h-[calc(40vh)] md:h-[calc(60vh)]'>
                  <table>
                    <tbody>
                      <tr className='text-sm font-thin'>
                        <th>COURSE</th>
                        <th>PREQUISITES</th>
                        <th>DATE CREATED</th>
                        <th>ADMIN</th>
                      </tr>
                      <tr className=' bg-slate-100 w-full' />
                      {courses?.map((item, index) => (
                        <tr
                          key={index}
                          className={`text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                            item === selectedItem
                              ? "bg-blue-500 text-white"
                              : ""
                          }`}
                          onClick={() => handleItemClick(item)}
                        >
                          <td className='w-20 md:w-32 px-1 text-slate-500 md:px-10 py-3 flex flex-col font-bold justify-start text-start text-sm'>
                            <span className='w-64'>
                              {index + 1}.{item.name}
                            </span>
                            <span
                              className={`text-sm font-thin ${
                                item === selectedItem
                                  ? "text-slate-500"
                                  : "text-slate-600"
                              }`}
                            >
                              {item.courseId}
                            </span>
                          </td>
                          <td className='w-32 px-7 md:px-10 py-3'>
                            {item.prerequisites[0]?.name || ""}
                          </td>
                          <td className='w-32 px-7 md:px-10 py-3'>12-24-202</td>
                          <td className='w-32 px-7 md:px-10 py-3'>admin</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            {selectedCourse && (
              <div className='flex p2 md:p-6 rounded-sm w-full'>
                {/* {selectedCourse.name} */}
                <div className='flex flex-col w-full'>
                  <div className='flex flex-row justify-around w-full rounded-lg bg-white'>
                    <div className='flex flex-col  gap-4 md:gap-10 p-1  md:p-8 w-full'>
                      <div className='book_items flex flex-col flex-wrap gap-4 md:gap-6 w-full overflow-y-scroll h-64 justify-around '>
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className={`flex text-slate-500 flex-col gap-1 md:gap-6 w-full justify-around cursor-pointer `}
                            onClick={handleBackToItems}
                          >
                            <span className='text-xl font-bold'>
                              {selectedCourse.name}
                            </span>

                            <div className='flex flex-col text-sm md:text-normal  text-slate-500'>
                              <p>
                                some details about the course like the quick
                                brown fox jumped over the lazy dog . well that
                                was not as long as i had hoped
                              </p>
                            </div>
                            <div className='-mt-5'>
                              <Image
                                src={
                                  selectedCourse.courseId == "2s"
                                    ? selectedCourse.firstFile
                                    : "/book1.jpeg"
                                }
                                alt=''
                                width={290}
                                height={150}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 pt-4 pr-3 pl-10 h-48 bg-violet-400 text-start w-32 md:w-64 mt-14 mb-1 text-slate-200'>
                      <span>ID : {selectedCourse.courseId}</span>
                      <span>DATA : 12-12,2022</span>
                      <span>CGPA : 3.5</span>
                      <span>UNITS :{units(selectedCourse.units)}</span>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row -mt-7 gap-2 md:gap-7'>
                    <div className='flex flex-row md:flex-col gap-2 '>
                      <div className='flex flex-col rounded-md pt-4 md:pr-3 md:pl-10 p-2 h-48 bg-white text-start w-64 mt-14 mb-1 text-slate-500 shadow-md '>
                     
                        <UnitsComponent units={units(selectedCourse.units)} />
                      </div>
                      <div className='flex flex-col rounded-md pt-4 md:pr-3 md:pl-10 p-2 h-48 bg-white text-start w-64 mt-14 md:mt-3 mb-1 text-slate-500 shadow-md '>
                        <span className='text-xl md:px-3 font-bold text-black'>
                          Tasks
                        </span>

                        <span>1.assignment 25%</span>
                        <span>2. field study 10%</span>
                        <span>3.test 20%</span>
                        <span>4. project 30%</span>
                      </div>
                    </div>
                    <div className='flex flex-col w-full '>
                      <div className='flex flex-col rounded-md pt-4 pr-3 pl-10   h-40 bg-white text-start  md:mt-14 mb-1 text-slate-500 shadow-md '>
                        <span className='text-xl px-3 font-bold text-black'>
                          Prerequests
                        </span>
                        {
                          selectedCourse.prerequisites?.map((item, index) => (
                            <span key={index}>{ index+1}.{item.name}</span>
                          ))
                        }
                   
                      </div>
                      <div className='flex flex-col gap-3 pt-4 pr-3 pl-10 h-60 bg-violet-400 w-full text-start  mt-3 mb-1 text-slate-200'>
                        <span className='text-xl px-3 font-bold text-white'>
                          Course material
                        </span>
                        <p>
                          {
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit"
                          }
                          {
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                          }
                        </p>
                        <div className='flex flex-row md:mt-16'>
                          <input
                            name=''
                            // onChange={() => alert("wait for form data ")}
                            className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-md  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='header text'
                            type='text'
                            placeholder='department'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <AddCourse addcourse={() => setOpenAddBook(false)} />
        )}
      </div>
    </div>
  );
};

export default Ucs;
