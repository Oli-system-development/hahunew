"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
// import CourseDetails from "./CourseDetail";
import AddOccupation from "./AddOccupation";
import React, { useEffect, useState } from "react";
import { useGetAllOccupationsQuery } from "../../../../services/api/academia/academiaApi";

const Occupation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddDepartment, setOpenAddDepartment] = useState(false);

  const { data: occupations, refetch } = useGetAllOccupationsQuery();
  const [selectedOccupation, setSelectedOccupation] = useState();
  // occupations ?  occupations[0] : ""
  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };
  useEffect(() => {
    if (occupations && occupations.length > 0) {
      setSelectedOccupation(occupations[0]);
    }
  }, [occupations]);
  const handleOccupationChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelectedOccupation(occupations[selectedIndex]);
  };

  console.warn("selectedOccupation", selectedOccupation);
  return (
    <>
      <div className='flex w-full  p-2 md:p-7 md:mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-md md:text-xl font-bold justify-between'>
          <span>
            <i className='fa-regular fa-envelope px-1 md:px-3 pt-1 md:text-xl'></i>
            Occupation
          </span>
          <div className='flex flex-row gap-2 md:gap-9 justify-between'>
            <button
              className='bg-blue-600 text-blue-50 text-xs md:text-sm rounded-full px-2 md:px-6  md:p-2'
              onClick={() => setOpenAddDepartment(!openAddDepartment)}
            >
              add occupation
            </button>
            <div>
              <select
                id='occupation'
                value={selectedOccupation ? selectedOccupation.name : ""}
                onChange={handleOccupationChange}
                className='text-xs md:text-md p-0 md:p-2 ring-1  ring-slate-400 rounded-md'
              >
                {occupations?.map((occupation, index) => (
                  <option
                    className='text-slate-200 bg-slate-600 font-bold rounded-md'
                    key={index}
                    value={occupation.name}
                    onClick={() => selectedOccupation(occupation)}
                  >
                    {occupation.name}
                  </option>
                ))}
              </select>
            </div>{" "}
          </div>
        </div>
        {openAddDepartment && (
          <div className='flex w-full flex-row gap-2 shadow-xl rounded-xl p-1 md:p-4 bg-slate-200'>
            <AddOccupation
              refetch={refetch}
              addOccupation={() => setOpenAddDepartment(false)}
            />
          </div>
        )}
        <div
          className={`flex  ${
            openAddDepartment && "hidden"
          } w-full flex-col md:flex-row gap-2 shadow-xl   p-4  `}
        >
          <div className='flex  rounded-xl w-full'>
            <div className='flex flex-col w-full'>
              <div className='flex flex-row justify-around w-full bg-white rounded-lg mb-3'>
                <div className='flex flex-col  gap-4 md:gap-10 p-3 md:p-8 w-full'>
                  <div className='book_items flex flex-col flex-wrap gap-4 md:gap-6 w-full  h-64 justify-around '>
                    {/* {[1, 2, 3, 4].map((item) => ( */}
                    <div
                      // key={item}
                      className={`flex text-slate-500 flex-col gap-1 md:gap-6 w-full justify-around cursor-pointer `}
                      onClick={handleBackToItems}
                    >
                      <span className='text-xl font-bold'>
                        {selectedOccupation?.name}
                      </span>

                      <div className='flex flex-col text-sm md:text-normal  text-slate-500'>
                        <p>{selectedOccupation?.description}</p>
                        {/* {selectedOccupation?.occAbb} */}
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
                    {/* ))} */}
                  </div>
                </div>
                <div className='flex flex-col gap-1 md:gap-3  justify-center text-center bg-blue-600  w-40 md:w-64  text-sm md:text-normal text-slate-100'>
                  <span>Head : {selectedOccupation?.head?.firstName}</span>
                  <span>Abbrev :{selectedOccupation?.occAbb}</span>
                  <span>ID : {selectedOccupation?.streamId}</span>
                  <span>Levels : 5</span>
                  <span>Date : </span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex rounded-sm  w-full items-center justify-center'>
            <div className='flex flex-col md:flex-row gap-3 md:gap-8 '>
              <div className='flex flex-col rounded-md pt-4 pr-3 pl-10 mt-3  h-48 bg-white text-start w-64  mb-1 text-slate-500 shadow-md ring-2 ring-slate-200 '>
                <span className='text-xl px-3 font-bold text-black'>
                  Levels
                </span>
                <span>1.level |</span>
                <span>2.level ||</span>
                <span>3.system training </span>
                <span>2.field study </span>
              </div>
              <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start w-64 mt-3 mb-1 text-slate-500 shadow-md ring-2 ring-slate-200'>
                <span className='text-xl px-3 font-bold text-black'>teams</span>

                <span>1.assignment 25%</span>
                <span>2. field study 10%</span>
                <span>3.test 20%</span>
                <span>4. project 30%</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            openAddDepartment && "hidden"
          } flex-wrap  flex-col md:flex-row gap-10  w-full  `}
        >
          <div className='flex flex-col  md:gap-5 w-full md:w-2/3  '>
            {/* <div className='flex p-1 gap-4 md:gap-16 justify-center shadow-xl   flex-wrap  flex-row bg-white rounded-md '> */}
            <div className='flex flex-col justify-around w-full mb-5 gap-2 text-sm font-thin text-slate-500 m-3 '>
              <span className='text-xl font-bold text-black'>Requests </span>
              <span className='flex  flex-row justify-between'>
                <div className='flex flex-row gap-10 justify-between w-full px-7 md:px-20  text-md font-thin text-slate-500 mx-3 '>
                  <div className='flex flex-row justify-start text-start gap-2 text-slate-700'>
                    <i className='fa fa-search mt-2  text-slate-400 text-2xl '></i>
                    <button className='bg-slate-200 px-6  p-1 font-bold text-sm text-slate-600 rounded-full cursor-pointer'>
                      {" "}
                      filter
                    </button>
                  </div>

                  <div className='flex justify-around '>
                    <span className='flex gap-3'>
                      <span>
                        <Popover className='relative'>
                          {({ open }) => (
                            <>
                              <Popover.Button className=''>
                                <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                                  12/32/23
                                </span>{" "}
                              </Popover.Button>
                              <Popover.Panel
                                className={`${
                                  open ? "block" : "hidden"
                                } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                              >
                                <>
                                  <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                                    <span className='cursor-pointer '>
                                      select
                                    </span>
                                    <hr className=' text-black' />
                                    <span className='cursor-pointer '>
                                      current trainees{" "}
                                    </span>
                                  </div>
                                </>{" "}
                              </Popover.Panel>
                            </>
                          )}
                        </Popover>
                      </span>
                    </span>
                  </div>
                </div>
              </span>
            </div>

            {/* <div className=' all_items flex flex-row flex-wrap gap-6 w-full  overflow-y-scroll h-5/6 justify-around -mt-20'>
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <div
                    key={item}
                    className={`flex text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                      item === selectedItem ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <span className=''>{item}.</span>

                    <span>grade change</span>
                    <span>amanuel aregaye</span>
                    <span>samri aregaye</span>
                    <span>mistake by instruct</span>
                    <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                      resolved
                    </button>
                    <span className='w-32 bg-slate-200 rounded-md h-6'></span>
                    <span className='flex gap-2'>
                      <i className='fa-solid fa-circle-check text-blue-400 font-bold text-lg'></i>
                      <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
                    </span>
                    <i className='fa fa-eye text-lg text-slate-600'></i>
                  </div>
                ))}
              </div> */}
            <div className='table-container overflow-scroll'>
              <table>
                <tbody>
                  <tr className='text-sm font-thin'>
                    <th>No.</th>
                    <th>Action</th>
                    <th>Handled By</th>
                    <th>Reviewed By</th>
                    <th>Remark</th>
                    <th>Status</th>
                    <th>Details</th>
                    <th>Actions</th>
                  </tr>
                  <tr className='h-1 bg-slate-100 w-full' />
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <tr
                      key={item}
                      className={`text-sm text-gray-900 ${
                        item === selectedItem ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleItemClick(item)}
                    >
                      <td className='w-1/12 px-4 py-3'>{item}.</td>
                      <td className='w-2/12 px-4 py-3'>Grade Change</td>
                      <td className='w-2/12 px-4 py-3'>Amanuel Aregaye</td>
                      <td className='w-2/12 px-4 py-3'>Samri Aregaye</td>
                      <td className='w-2/12 px-4 py-3'>
                        Mistake by instructor
                      </td>
                      <td className='w-2/12 px-4 py-3'>
                        <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                          Resolved
                        </button>
                      </td>
                      <td className='w-2/12 px-4 py-3'>
                        <span className='w-1/12 px-7 py-1 md:py-2 my-1 bg-slate-200 rounded-md'></span>
                      </td>
                      <td className='w-1/12 px-4 py-3 flex gap-2'>
                        <i className='fa-solid fa-circle-check text-blue-400 font-bold text-lg'></i>
                        <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
                        <i className='fa fa-eye text-lg text-slate-600'></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='flex flex-col mb-5 rounded-lg justify-center bg-slate-200  w-full md:w-1/4'>
            <span className='my-1 mx-3 mb-4'> top performing trainers </span>
            <div className='flex flex-row gap-4 md:gap-10 w-full justify-around'>
              <div className='flex flex-col'>
                <div className='flex flex-row   flex-wrap gap1 md:gap-4   justify-between'>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className='flex w-full  flex-wrap text-slate-500 flex-row justify-between     bg-slate-200 p-1'
                    >
                      <span className='flex flex-row justify-between w-72 '>
                        <span className='flex flex-row '>
                          <span>
                            <Image
                              src='/elsabet.jpeg'
                              alt=''
                              width={50}
                              height={50}
                              className='rounded-full rounded-image text-center'
                            />
                          </span>
                          <span className='flex flex-col'>
                            <span>Melak ab </span>
                            <span className='text-slate-600 text-xs'>
                              store office1 manager{" "}
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col w-96 bg-slate-200 mx-4'>
              <span className='my-1 mx-3 mb-4'> top performing trainers </span>
              <div className='flex flex-row gap-10 w-full justify-around'>
                <div className='flex flex-col'>
                  <div className='flex flex-row   flex-wrap gap-4   justify-between'>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className='flex w-full  flex-wrap text-slate-500 flex-row justify-between     bg-slate-200 p-1'
                      >
                        <span className='flex flex-row justify-between w-72 '>
                          <span className='flex flex-row '>
                            <span>
                              <Image
                                src='/elsabet.jpeg'
                                alt=''
                                width={50}
                                height={50}
                                className='rounded-full rounded-image text-center'
                              />
                            </span>
                            <span className='flex flex-col'>
                              <span>Melak ab </span>
                              <span className='text-slate-600 text-xs'>
                                store office1 manager{" "}
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className='table-container overflow-scroll'>
          <table>
            <tbody>
              <tr className='text-sm font-thin'>
                <th>No.</th>
                <th>Action</th>
                <th>Handled By</th>
                <th>Reviewed By</th>
                <th>Remark</th>
                <th>Status</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
              <tr className='h-1 bg-slate-100 w-full' />
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <tr
                  key={item}
                  className={`text-sm text-gray-900 ${
                    item === selectedItem ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <td className='w-1/12 px-4 py-3'>{item}.</td>
                  <td className='w-2/12 px-4 py-3'>Grade Change</td>
                  <td className='w-2/12 px-4 py-3'>Amanuel Aregaye</td>
                  <td className='w-2/12 px-4 py-3'>Samri Aregaye</td>
                  <td className='w-2/12 px-4 py-3'>Mistake by instructor</td>
                  <td className='w-2/12 px-4 py-3'>
                    <button className='bg-sky-600 text-sm text-white px-2 rounded-md'>
                      Resolved
                    </button>
                  </td>
                  <td className='w-1/12 px-4 py-3 bg-slate-200 rounded-md'></td>
                  <td className='w-1/12 px-4 py-3 flex gap-2'>
                    <i className='fa-solid fa-circle-check text-blue-400 font-bold text-lg'></i>
                    <i className='fa-solid fa-xmark text-red-400 font-bold'></i>
                    <i className='fa fa-eye text-lg text-slate-600'></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
};

export default Occupation;
