"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Dashboard from "./Dashboard";

import Report from "./report/page";
import Image from "next/image";
import Link from "next/link";
import Trainees from "./trainee/page";
import Tutition from "./tuition/page";
import Log from "./log/page";
import Requests from "./requests/page";

const SuperTrainees = () => {
  const [iconClickStates, setIconClickStates] = useState(Array(8).fill(false));
  const [tab, setTab] = useState("fa fa-home");
  const router = useRouter();
  const handleIconClick = (index) => {
    const updatedClickStates = iconClickStates.map((state, i) =>
      i === index ? !state : false
    );
    setIconClickStates(updatedClickStates);
    // Remove the following line as it doesn't seem to be necessary
    // ReactDOM.findDOMNode
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
        <div className='flex flex-row w-full mx-10 gap-3'>
          <div className='flex fixed  flex-col w-16 shadow-lg ring-1 ring-slate-200  overflow-y-scroll gap-7 rounded-2xl'>
            {[
              "fa fa-home",
              "fa-solid fa-users-viewfinder",
              "fa-solid fa-money-bill",
              "fa-solid fa-book",
              "fa-solid fa-rotate-right",
              "fa-solid fa-glasses",
            ].map((icon, index) => (
              <div
                key={icon}
                className='flex text-center  justify-center text-slate-500'
                onClick={() => changeTabs(icon)}
              >
                <span>
                  <i
                    className={`${icon} p-3 ${
                      icon === "fa-solid fa-glasses" && "mt-10"
                    } text-xl ${
                      iconClickStates[index]
                        ? "bg-blue-500 text-blue-100  rounded-xl"
                        : ""
                    }`}
                    onClick={() => handleIconClick(index)}
                  ></i>

                  {/* {icon === "fa fa-home" ? (
                    <i
                      className={`${icon} p-3 text-xl ${
                        iconClickStates[index]
                          ? "bg-blue-500 text-blue-100  rounded-xl"
                          : ""
                      }`}
                      onClick={() => handleIconClick(index)}
                    ></i>
                  ) : (
                    <i
                      className={`${icon} p-3 text-3xl ${
                        iconClickStates[index]
                          ? "bg-blue-500 text-blue-100  rounded-xl"
                          : ""
                      }`}
                      onClick={() => handleIconClick(index)}
                    ></i>
                  )} */}
                </span>
              </div>
            ))}
          </div>
          {
            //TODO: these are the hr components that we need to handle
            tab === "fa fa-home" ? (
              <Dashboard />
            ) : (
              (tab === "fa-solid fa-users-viewfinder" && <Trainees />) ||
              (tab === "fa-solid fa-money-bill" && <Tutition />) ||
              (tab === "fa-solid fa-book" && <Report />) ||
              (tab === "fa-solid fa-rotate-right" && <Log />) ||
              (tab === "fa-solid fa-glasses" && <Requests />)
            ) /* Missing colon here */
          }
        </div>
      </div>
      <div className='flex flex-row'>wait for it! </div>
    </>
  );
};

export default SuperTrainees;
