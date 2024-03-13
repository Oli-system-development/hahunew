"use client";
import React, { useState } from "react";

const Courses = ({ openCourse }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  return (
    <div>
      <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md mt-10  mb-10 '>
        <div className='flex flex-row justify-around w-full gap-52 text-sm font-thin text-slate-500  mx-3'>
          <span>COURSE</span>
          <span>abrv</span>
          <span>cgpa</span>
          <span>units</span>
          <span>prerequests</span>
          <span>identifier</span>
        </div>
        <div className=' all_items flex flex-row flex-wrap gap-3 w-full overflow-y-scroll h-5/6 justify-around '>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
            <>
              <div
                key={item}
                className={`flex text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                  item === selectedItem ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                <span className='flex flex-col font-bold'>
                  {item}. &nbsp;&nbsp;&nbsp;computational breach test
                  <span
                    className={`text-sm font-thin ${
                      item === selectedItem ? "text-white" : "text-slate-600"
                    }`}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TF02230300
                  </span>
                </span>

                <span>CBT</span>
                <span>3.6</span>
                <span>5</span>
                <span className='rounded-full bg-black px-3 h-6'></span>
              </div>
              <hr className=' w-full  text-black' />
            </>
          ))}
        </div>
        {/* <div className='table-container overflow-scroll ring-1 ring-slate-200 shadow-sm bg-white rounded-lg h-[calc(40vh)] md:h-[calc(60vh)]'>
          <table>
            <tbody>
              <tr className='text-sm font-thin'>
                <th>COURSE</th>
                <th>abrv</th>
                <th>cgpa</th>
                <th>units</th>
                <th>prerequests</th>
                <th>identifier</th>
              </tr>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                <tr
                  key={item}
                  className={`text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                    item === selectedItem ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <td className='w-32 px-7 py-3 flex flex-col font-bold justify-start text-start'>
                    <span>{item}. computational breach test</span>
                    <span
                      className={`text-sm font-thin ${
                        item === selectedItem ? "text-white" : "text-slate-600"
                      }`}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TF02230300
                    </span>
                  </td>
                  <td className='w-32 px-7 py-3'>CBT</td>
                  <td className='w-32 px-7 py-3'>3.6</td>
                  <td className='w-32 px-7 py-3'>5</td>
                  <td className='w-32 px-7 py-3'>
                    <span className='rounded-full bg-black px-3 h-6'></span>
                  </td>
                  <td className='w-32 px-7 py-3'>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default Courses;
