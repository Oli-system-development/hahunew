"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./table.css";
import AddPosition from "./AddPosition";
const topBar = [
  "Staff Name/ID",
  "Sex",
  "Position",
  "Department",
  "Experience",
  "GPA",
  "Education",
  "Contact Number",
  "interview data",
  "exam date",
  "Status",
  "action",
];
const Position = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
  };

  return (
    <>
      {selectedButton && (
        <div className='flex w-full bg-slate-200  p-7 mx-32 gap-8  rounded-xl'>
          <AddPosition positionStatus={() => setSelectedButton(false)} />
        </div>
      )}
      {!selectedButton && (
        <div className='flex w-full  p-7 mx-32 flex-col gap-8 shadow-xl rounded-xl'>
          <div className='flex text-slate-500 text-xl font-bold'>
            <i className='fa-solid fa-notes-medical px-3 pt-1 text-xl'></i>{" "}
            Position
          </div>
          <div className='flex flex-row justify-between p-4'>
            <div className='flex flex-row gap-11 text-slate-700'>
              <span className='flex gap-3 text-green-400'>
                <span>
                  <i className='fa fa-user'></i>
                </span>
                <span>120</span>
              </span>{" "}
              <span className='flex gap-3 text-pink-600'>
                <span>
                  <i className='fa fa-home'></i>
                </span>
                <span>120</span>
              </span>{" "}
              <span className='flex gap-3 text-cyan-600'>
                <span>
                  <i className='fa fa-shop'></i>
                </span>
                <span>11</span>
              </span>{" "}
              <span className='flex gap-3 text-yellow-500'>
                <span>
                  <i className='fa fa-add'></i>
                </span>
                <span>9</span>
              </span>
            </div>
            <div className='flex justify-end'>
              <span className='flex gap-3'>
                <span>
                  <i className='fa fa-add bg-green-500 p-2 text-white rounded-full'></i>
                </span>
                <span>
                  <i className='fa fa-bars bg-slate-100 p-2 text-black text-2xl '></i>
                </span>
              </span>
            </div>
          </div>
          <div className='w-full  flex justify-center'>
            <table cellPadding={40}>
              <thead className='text-slate-300 text-start capitalize text-md'>
                <th></th>
                <th> POSITION</th>
                <th>OFFICIAL</th>
                <th>PERMISSIONS</th>
                <th>READ ONLY</th>
                <th>GROWTH REQUIREMENT</th>
                <th>MEMBERS</th>
                <th>REQUIREMENTS</th>
              </thead>
              <tbody className='text-xs font-bold text-black '>
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td onClick={handleButtonClick}>trainer </td>
                    <td>department head </td>
                    <td>position</td>
                    <td>position</td>
                    <td className='p-3'>
                      <i className='fa fa-file'></i> registry growth doc{" "}
                      <i className='fa fa-download'></i>
                    </td>
                    <td>{item}</td>
                    <td>university</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Position;
