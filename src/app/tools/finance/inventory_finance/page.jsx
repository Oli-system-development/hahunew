"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

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
const InventoryFinance = () => {
  const [selectedReport, setSelectedReport] = useState(true);
  const [trainee, setSelectedTrainee] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleButtonClick = (item) => {
    setSelectedTrainee(item);
  };

  return (
    <>
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-book px-3 pt-1 text-xl'></i> inventory finance
          </span>
        </div>

        <div className='flex w-full flex-col gap-2 shadow-2xl rounded-xl p-4  ring-2 ring-slate-100 '>
          <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
            <Image src='/notyet.png' alt='' width={300} height={300} className='object-cover w-full h-full' />
          </div>

        </div>
      </div>
    </>
  );
};

export default InventoryFinance;
