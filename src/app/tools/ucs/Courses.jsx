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
                {/* <span className='flex gap-10'>
                <span>electronics CI</span>
                <span>12-24-202</span>
                <span>fashion C2</span>
              </span> */}
              </div>
              <hr className=' w-full  text-black' />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
