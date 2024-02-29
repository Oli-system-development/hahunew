"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddCourse from "./AddCourse";
import Courses from "./Courses";
import Link from "next/link";
import "./table.css";
const Ucs = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddBook, setOpenAddBook] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };

  return (
    <div className='p-6 '>
      <div class=''>
        {/* <table class='w-full'>
          <thead className=' text-start text-slate-500  cursor-pointer '>
            <tr class='   text-slate-500 flex-row   cursor-pointer'>
              <th>COURSE</th>
              <th>DATE CREATEDDATEDATE CREATEDDATE</th>
              <th>PREQUISITES</th>
              <th>ADMIN</th>
              <th>ADMIN</th>
              <th>ADMIN</th>
              <th>ADMIN</th>
            </tr>
          </thead>
          <tbody
          //  class='all_items flex flex-row flex-wrap gap-2 w-full overflow-y-scroll  justify-around mt-8'
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <tr
                key={item}
                class={` text-slate-500 flex-row  w-full justify-around cursor-pointer ${
                  item === selectedItem ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                <td class='flex flex-col font-bold'>
                  {item}. computational breach test
                  <span
                    class={`text-sm font-thin ${
                      item === selectedItem ? "text-white" : "text-slate-600"
                    }`}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TF02230300
                  </span>
                </td>
                <td>electronics CI</td>
                <td>12-24-202</td>
                <td>fashion C2</td> <td>electronics CI</td>
                <td>12-24-202</td>
                <td>fashion C2</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
      <div className='flex flex-row justify-between p-5  w-full'>
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
      <div className='flex flex-row justify-between px-10 pb-10'>
        <div className='flex flex-row gap-11 text-slate-700'>
          <span className='flex gap-3 text-slate-500 text-2xl'>
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
            className='bg-blue-600 text-blue-50 rounded-full px-6 p-2'
            onClick={() => setOpenAddBook(!openAddBook)}
          >
            add course
          </button>
        </div>
      </div>

      <div className='flex flex-row justify-between px-20 -mt-8'>
        <div className='flex gap-20'>
          <div className='flex flex-row mt-3 justify-between w-full'>
            <input
              name=''
              // onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='search'
            />
            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
          </div>
          <span className='flex justify-end mt-2 text-slate-600'>filter</span>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              // onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='department'
            />
          </div>
        </div>
        <span
          className='flex gap-8 text-slate-500 text-2xl'
          onClick={() => setOpenCourses(!openCourses)}
        >
          <i className='fa fa-list'></i>
          <i className='fa fa-list'></i>
        </span>
      </div>
      <div
        className={`flex  shadow-xl ring-1 ring-slate-200 px-14 mx-14 mt-6 rounded-md ${
          openAddBook ? "hidden" : ""
        }`}
      >
        {openCourses ? (
          <Courses openCourse={() => setOpenCourses(false)} />
        ) : null}
      </div>
      <div
        className={`flex  bg-slate-200 px-14 mx-14 mt-6 rounded-md ${
          openCourses ? "hidden" : ""
        }`}
      >
        {!openAddBook ? (
          <div className='flex w-full flex-row'>
            <div className='flex rounded-sm p-6 w-full'>
              <div className='flex flex-wrap  flex-row  '>
                <div className='flex flex-col '>
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
                            some details about the course like the quick brown
                            fox jumped over the lazy dog . well that was not as
                            long as i had hoped
                          </p>
                        </div>
                        <span className='text-xl font-bold'>
                          unit assignment
                        </span>

                        <div className='flex flex-col  text-black'>
                          <p>some details about the</p>{" "}
                          <p>some details about the</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // <div class=' tableFixHead flex w-full p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md'>
                    //   <table class='w-full'>
                    //     <thead className='all_items flex flex-row flex-wrap gap-6 w-full justify-around  text-slate-500  cursor-pointer '>
                    //       <tr class=' flex w-full  text-slate-500 flex-row gap-10  justify-around cursor-pointer'>
                    //         <th>COURSE</th>
                    //         <th>DATE CREATED</th>
                    //         <th>PREQUISITES</th>
                    //         <th>ADMIN</th>
                    //       </tr>
                    //     </thead>
                    //     <tbody class='all_items flex flex-row flex-wrap gap-2 w-full overflow-y-scroll  justify-around mt-8'>
                    //       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map(
                    //         (item) => (
                    //           <tr
                    //             key={item}
                    //             class={`flex text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                    //               item === selectedItem
                    //                 ? "bg-blue-500 text-white"
                    //                 : ""
                    //             }`}
                    //             onClick={() => handleItemClick(item)}
                    //           >
                    //             <td class='flex flex-col font-bold'>
                    //               {item}. computational breach test
                    //               <span
                    //                 class={`text-sm font-thin ${
                    //                   item === selectedItem
                    //                     ? "text-white"
                    //                     : "text-slate-600"
                    //                 }`}
                    //               >
                    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TF02230300
                    //               </span>
                    //             </td>
                    //             <td>electronics CI</td>
                    //             <td>12-24-202</td>
                    //             <td>fashion C2</td>
                    //           </tr>
                    //         )
                    //       )}
                    //     </tbody>
                    //   </table>
                    // </div>
                    //!2
                    // <div className='tableFixHead flex w-full p-1 gap-2 justify-center flex-wrap flex-row bg-white rounded-md'>
                    //   <table className='w-full table-spacing'>
                    //     <thead className='w-full'>
                    //       <tr className='w-full space-x-7'>
                    //         <th>COURSE</th>
                    //         <th>DATE CREATED</th>
                    //         <th>PREQUISITES</th>
                    //         <th>ADMIN</th>
                    //       </tr>
                    //     </thead>
                    //     <tbody
                    //       className='tbody-scrollable overflow-y-scroll'
                    //       style={{ height: "30vh" }}
                    //     >
                    //       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map(
                    //         (item) => (
                    //           <tr
                    //             key={item}
                    //             onClick={() => handleItemClick(item)}
                    //           >
                    //             <td className='text-center'>electronics CI</td>
                    //             <td className='text-center'>electronics CI</td>
                    //             <td className='text-center'>12-24-202</td>
                    //             <td className='text-center'>fashion C2</td>
                    //           </tr>
                    //         )
                    //       )}
                    //     </tbody>
                    //   </table>
                    // </div>

                    //!3

                    <div class='  flex w-full p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md'>
                      <table class='scrolldown '>
                        <thead className=' flex flex-row flex-wrap gap-6 w-full justify-around  text-slate-500  cursor-pointer '>
                          <tr>
                            <th className='w-64'>COURSE</th>
                            <th>DATE CREATED</th>
                            <th>PREQUISITES</th>
                            <th>ADMIN</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map(
                            (item) => (
                              <tr
                                key={item}
                                class={` text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                                  item === selectedItem
                                    ? "bg-blue-500 text-white"
                                    : ""
                                }`}
                                onClick={() => handleItemClick(item)}
                              >
                                <td class='flex flex-col w-64 font-bold justify-start text-start'>
                                  <span>{item}. computational breach test</span>
                                  <span
                                    class={`text-sm font-thin ${
                                      item === selectedItem
                                        ? "text-white"
                                        : "text-slate-600"
                                    }`}
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TF02230300
                                  </span>
                                </td>
                                <td>electronics CI</td>
                                <td>12-24-202</td>
                                <td>fashion C2</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                    // <div class='container w-full'>
                    //   <table class='text-left w-full'>
                    //     <thead class='bg-black flex text-white w-full'>
                    //       <tr class='flex w-full mb-4'>
                    //       <td class='p-4 w-1/4'>Dogs</td>

                    //       </tr>
                    //     </thead>
                    //     <tbody
                    //       class='bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full'
                    //       style={{ height: "30vh" }}
                    //     >
                    //       <tr class='flex w-full mb-4'>
                    //         <td class='p-4 w-1/4'>Dogs</td>
                    //         <td class='p-4 w-1/4'>Cats</td>
                    //         <td class='p-4 w-1/4'>Birds</td>
                    //         <td class='p-4 w-1/4'>Fish</td>
                    //       </tr>
                    //       <tr class='flex w-full mb-4'>
                    //         <td class='p-4 w-1/4'>Dogs</td>
                    //         <td class='p-4 w-1/4'>Cats</td>
                    //         <td class='p-4 w-1/4'>Birds</td>
                    //         <td class='p-4 w-1/4'>Fish</td>
                    //       </tr>
                    //       <tr class='flex w-full mb-4'>
                    //         <td class='p-4 w-1/4'>Dogs</td>
                    //         <td class='p-4 w-1/4'>Cats</td>
                    //         <td class='p-4 w-1/4'>Birds</td>
                    //         <td class='p-4 w-1/4'>Fish</td>
                    //       </tr>

                    //       <tr class='flex w-full mb-4'>
                    //         <td class='p-4 w-1/4'>Dogs</td>
                    //         <td class='p-4 w-1/4'>Cats</td>
                    //         <td class='p-4 w-1/4'>Birds</td>
                    //         <td class='p-4 w-1/4'>Fish</td>
                    //       </tr>
                    //       <tr class='flex w-full mb-4'>
                    //         <td class='p-4 w-1/4'>Dogs</td>
                    //         <td class='p-4 w-1/4'>Cats</td>
                    //         <td class='p-4 w-1/4'>Birds</td>
                    //         <td class='p-4 w-1/4'>Fish</td>
                    //       </tr>
                    //     </tbody>
                    //   </table>
                    // </div>
                  )}
                </div>
              </div>
            </div>
            <div className='flex p-6 rounded-sm w-full'>
              <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-around w-full bg-white'>
                  <div className='flex flex-col  gap-10 p-8 w-full'>
                    <div className='book_items flex flex-col flex-wrap gap-6 w-full overflow-y-scroll h-64 justify-around '>
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className={`flex text-slate-500 flex-col gap-6 w-full justify-around cursor-pointer `}
                          onClick={handleBackToItems}
                        >
                          <span className='text-xl font-bold'>
                            Computational breach test
                          </span>

                          <div className='flex flex-col  text-slate-500'>
                            <p>
                              some details about the course like the quick brown
                              fox jumped over the lazy dog . well that was not
                              as long as i had hoped
                            </p>
                          </div>
                          <div className='-mt-5'>
                            <Image
                              src='/book1.jpeg'
                              alt=''
                              width={290}
                              height={150}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 pt-4 pr-3 pl-10 h-48 bg-violet-400 text-start w-64 mt-14 mb-1 text-slate-200'>
                    <span>ID : ETS0392/12</span>
                    <span>DATA : 12-12,2022</span>
                    <span>CGPA : 3.5</span>
                    <span>UNITS : 5</span>
                  </div>
                </div>
                <div className='flex flex-row -mt-7 gap-7'>
                  <div className='flex flex-col '>
                    <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start w-64 mt-14 mb-1 text-slate-500 shadow-md '>
                      <span className='text-xl px-3 font-bold text-black'>
                        Units
                      </span>
                      <span>1.introduction</span>
                      <span>2.design of algorism</span>
                      <span>3.system training </span>
                      <span>2.field study </span>
                    </div>
                    <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start w-64 mt-3 mb-1 text-slate-500 shadow-md '>
                      <span className='text-xl px-3 font-bold text-black'>
                        Tasks
                      </span>

                      <span>1.assignment 25%</span>
                      <span>2. field study 10%</span>
                      <span>3.test 20%</span>
                      <span>4. project 30%</span>
                    </div>
                  </div>
                  <div className='flex flex-col w-full '>
                    <div className='flex flex-col rounded-md pt-4 pr-3 pl-10   h-40 bg-white text-start  mt-14 mb-1 text-slate-500 shadow-md '>
                      <span className='text-xl px-3 font-bold text-black'>
                        Units
                      </span>
                      <span>1.introduction</span>
                      <span>2.introduction to the design of algorism</span>
                      <span>3.system training </span>
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
                      <div className='flex flex-row mt-16'>
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
          </div>
        ) : (
          <AddCourse addcourse={() => setOpenAddBook(false)} />
        )}
      </div>
    </div>
  );
};

export default Ucs;
