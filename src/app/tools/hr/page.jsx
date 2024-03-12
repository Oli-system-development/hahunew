"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Staff from "./staff/page";
import Dashboard from "./Dashboard";
import Candidate from "./candidate/page";
import Payroll from "./payroll/page";
import Requests from "./requests/page";
import Log from "./log/page";
import Image from "next/image";
import Link from "next/link";
import Position from "./position/page";
const Hr = () => {
  const [iconClickStates, setIconClickStates] = useState(Array(8).fill(false));
  const [tab, setTab] = useState("fa fa-home");
  const router = useRouter();
  const handleIconClick = (index) => {
    const updatedClickStates = iconClickStates.map((state, i) =>
      i === index ? !state : false
    );
    setIconClickStates(updatedClickStates);
    // remove the following line as it doesn't seem to be necessary
  };

  const changeTabs = (icon) => {
    setTab(icon);
  };
  const sidbarIcons = [];

  return (
    <>
      <div className='flex flex-col w-full  '>
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
        <div className='flex flex-row  mx-1 md:mx-10 gap-3'>
          <div className='flex fixed mt-[calc(78vh-1vh)] justify-between md:mt-0 bg-slate-50 z-50 flex-row md:flex-col w-full  md:w-16 shadow-lg ring-1 ring-slate-200   md:gap-7 rounded-2xl'>
            {[
              "fa fa-home",
              "fa fa-user",
              "fa-solid fa-user-plus",
              "fa-solid fa-money-bill",
              "fa-solid fa-notes-medical",
              "fa-solid fa-book",
              "fa-solid fa-rotate-right",
              "fa-solid fa-glasses",
            ].map((icon, index) => (
              <div
                key={icon}
                // flex
                // text-center
                className='flex text-center  justify-center text-slate-500'
                onClick={() => changeTabs(icon)}
              >
                <span>
                  <i
                    className={`${icon} p-3 ${
                      icon === "fa-solid fa-glasses" && "md:mt-10"
                    } text-xl ${
                      iconClickStates[index]
                        ? "bg-blue-500 text-blue-100  rounded-xl"
                        : ""
                    }`}
                    onClick={() => handleIconClick(index)}
                  ></i>
                </span>
              </div>
            ))}
          </div>
          {
            //TODO: these are the hr components that we need to handle
            tab === "fa fa-home" ? (
              <Dashboard />
            ) : (
              (tab === "fa fa-user" && <Staff />) ||
              (tab === "fa-solid fa-user-plus" && <Candidate />) ||
              (tab === "fa-solid fa-money-bill" && <Payroll />) ||
              (tab === "fa-solid fa-notes-medical" && <Position />) ||
              (tab === "fa-solid fa-book" && <Payroll />) ||
              (tab === "fa-solid fa-rotate-right" && <Log />) ||
              (tab === "fa-solid fa-glasses" && <Requests />)
            )
          }
        </div>
      </div>
    </>
  );
};

export default Hr;
