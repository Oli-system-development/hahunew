"use client";
import Image from "next/image";
import DeptDetail from "./DeptDetail";
import AddDepartment from "./AddDepartment";
import React, { useState } from "react";
import { useGetAllDepartmentsQuery } from "../../../../services/api/academia/academiaApi";
const topBar = [
  "Staff Name/ID",
  "Sex",
  "Position",
  "Department",
  "Experience",
  "GPA",
  "Education",
  "Contact Number",
  "Date Joined",
  "Status",
];
const Departments = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddDepartment, setOpenAddDepartment] = useState(false);
  const { data: departments, isLoading, refetch } = useGetAllDepartmentsQuery();
  console.log("departments", departments);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  const handleHover = (item) => {
    setHoveredItem(item === hoveredItem ? null : item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };
  if (selectedItem) {
    console.log("selected item", selectedItem);
    return (
      <DeptDetail
        courseStatus={() => setSelectedCourse(false)}
        addDept={() => setOpenAddDepartment(false)}
        dept={selectedItem}
      />
    );
  }

  return (
    <>
      <div className='flex w-full  p-2 md:p-7 md:mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-lg md:text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-box px-3 pt-1 text-xl'></i> Departments
          </span>
          <button
            className='bg-blue-600 text-blue-50 text-sm rounded-full px-6 p-2'
            onClick={() => setOpenAddDepartment(!openAddDepartment)}
          >
            add department
          </button>
        </div>
        {openAddDepartment && (
          <div className='flex w-full flex-row gap-2 shadow-xl rounded-xl p-4 bg-slate-200'>
            <AddDepartment
              deptStatus={() => setOpenAddDepartment(false)}
              refetch={refetch}
            />
          </div>
        )}
        <div
          className={`flex  ${
            openAddDepartment && "hidden"
          } w-full flex-col md:flex-row gap-2 shadow-xl  rounded-xl p-4  bg-slate-200`}
        >
          <div className='table-container overflow-scroll bg-white rounded-lg  h-[calc(40vh)] md:h-[calc(60vh)]'>
            <table>
              <tbody>
                <tr className='text-sm font-thin'>
                  <th>Name</th>
                  <th>HEAD</th>
                  <th>STREAMS</th>
                </tr>
                <tr className='h-1 bg-slate-100 w-full' />
                {departments?.map((item, index) => (
                  <tr
                    key={index}
                    className={`text-sm text-gray-900 ${
                      item === selectedItem ? "bg-blue-500 text-white" : ""
                    }`}
                    onMouseOver={() => handleHover(item)}
                    onClick={() => handleItemClick(item)}
                  >
                    <td className='w-32 px-3 sm:w-40 md:w-72 py-1 md:py-3 cursor-pointer'>
                      <span className='flex  flex-col text-start'>
                        <span>
                          {index + 1}. {item.name}
                        </span>
                        <span
                          className={`text-sm font-thin ${
                            item === selectedItem
                              ? "text-white"
                              : "text-slate-600 mx-3"
                          }`}
                        >
                          <span className='text-slate-400 text-sm mx-2'>
                            {item.depId}
                          </span>
                        </span>
                      </span>
                    </td>
                    <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                      {item.head?.user?.firstName}
                    </td>
                    <td className='w-32 px-7 md:px-1 sm:w-40 md:w-72 py-1 md:py-3'>
                      2
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex  rounded-xl w-full'>
            {hoveredItem && (
              <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-around w-full bg-white rounded-lg mb-3'>
                  <div className='flex flex-col  gap-4 md:gap-10 p-3 md:p-8 w-full'>
                    <div className='book_items flex flex-col flex-wrap gap-4 md:gap-6 w-full  h-64 justify-around '>
                      <div
                        className={`flex text-slate-500 flex-col gap-1 md:gap-6 w-full justify-around cursor-pointer `}
                        onClick={handleBackToItems}
                      >
                        <span className='text-xl font-bold'>
                          {hoveredItem.name}
                        </span>

                        <div className='flex flex-col text-sm md:text-normal  text-slate-500'>
                          <p>{hoveredItem.description}</p>
                        </div>
                        <div className='rounded-md w-full h-32 md:h-44 overflow-hidden relative'>
                          {hoveredItem?.file && (
                            <Image
                              src={`http://${hoveredItem.file}` || ""}
                              alt='image here'
                              layout='fill'
                              objectFit='cover'
                              className='w-full h-full'
                            />
                          )}
                        </div>
                      </div>
                      {/* ))} */}
                    </div>
                  </div>
                  <div className='flex flex-col gap-1 md:gap-3  justify-center text-center bg-blue-600  w-40 md:w-64  text-sm md:text-normal text-slate-100'>
                    <span>Head : {hoveredItem?.head?.user?.firstName}</span>
                    <span>Abbrev : {hoveredItem.depAbb}</span>
                    <span>ID :{hoveredItem.departmentId}</span>
                    <span>Registery officer : </span>
                    <span>UNITS : </span>
                    <span>DATE : </span>
                  </div>
                </div>
                <span className='font-bold text-xl'> Stats</span>
                <div className='flex flex-col md:flex-row  gap-1 w-full'>
                  <div className='flex flex-col w-full '>
                    <div className='flex flex-col w-full gap-3 md:gap-5 p-3 md:p-6  flex-wrap '>
                      {[1, 2, 3, 4].map((appointment) => (
                        <div key={appointment} className='flex flex-row w-full'>
                          <span className='flex text-slate-100 font-thin flex-col  bg-indigo-400 rounded-lg px-1 w-20 -mr-2 opacity-75 z-10'>
                            <span className='text-lg font-medium  text-black'>
                              242
                            </span>
                            <span>staff</span>
                          </span>
                          <span
                            className={`p-1  w-full text-center text-xs shadow-lg h-20   bg-slate-100 rounded-md gap-3`}
                          >
                            <div className='flex flex-row gap-3 text-slate-600 text-sm w-full justify-around'>
                              <span className='flex text-slate-500 font-thin flex-col gap-4 '>
                                <span className='text-lg font-medium  text-black'>
                                  11
                                </span>
                                <span>Trainee</span>
                              </span>
                              <span className='flex text-slate-500 font-thin flex-col gap-4 '>
                                <span className='text-lg font-medium  text-black'>
                                  43
                                </span>
                                <span>staff</span>
                              </span>
                              <span className='flex text-slate-500 font-thin flex-col gap-4 '>
                                <span className='text-lg font-medium  text-black'>
                                  242
                                </span>
                                <span>my list</span>
                              </span>
                            </div>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col  items-center w-full '>
                    <div className='flex flex-col rounded-md pt-4 md:pr-3 pl-4 md:pl-10  h-48 bg-white text-start w-full  md:w-64  mb-1 text-slate-500 shadow-md '>
                      <span className='text-xl px-3 font-bold text-black'>
                        streams
                      </span>
                      {hoveredItem.streams?.map((stream, index) => (
                        <span key={index} span>
                          {" "}
                          {index + 1} . {stream?.name}{" "}
                        </span>
                      ))}
                    </div>
                    <div className='flex flex-col rounded-md pt-4 md:pr-3 pl-4 md:pl-10  h-48 bg-white text-start w-full  md:w-64 mt-3 mb-1 text-slate-500 shadow-md '>
                      <span className='text-xl px-3 font-bold text-black'>
                        teams
                      </span>

                      <span>1.assignment 25%</span>
                      <span>2. field study 10%</span>
                      <span>3.test 20%</span>
                      <span>4. project 30%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
