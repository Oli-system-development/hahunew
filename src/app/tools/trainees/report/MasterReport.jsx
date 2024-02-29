import Image from "next/image";
import React from "react";

const MasterReport = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex rounded-sm  w-full'>
        <div className='flex flex-wrap  flex-row  '>
          <div className='flex flex-col  ring-1 ring-slate-100  mx-2 rounded-2xl w-full'>
            <div className='flex  justify-center  flex-wrap flex-row bg-white  px-10'>
              <div
                className='flex w-full flex-row flex-wrap gap-3  text-sm font-thin -mb-7
                      justify-between'
              >
                {/* {[
                  "TRAINEE NAME",
                  "GENDER",
                  "COURSE NAME/ID",
                  "student status",
                  "tuition status",
                  "gpa",
                  "grade status",
                  "dept review status",
                  "handled by",
                ].map((tab) => (
                  
                ))} */}
                <span className='mr-36'>TRAINEE NAME</span>
                <span>GENDER</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((course) => (
                  <span
                    key={course}
                    className={` text-slate-500 gap-0 flex flex-col font-thin`}
                  >
                    <span>COURSE NAME</span>
                    <span>COURSE ID</span>
                  </span>
                ))}
              </div>

              <div className='flex -mt-7 flex-row flex-wrap gap-4 w-full overflow-y-scroll h-[80%] justify-between'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
                  <div
                    key={item}
                    className={`flex ${
                      item == 4 || item == 10
                        ? "text-red-600"
                        : "text-slate-500"
                    }  flex-row gap-10 w-full justify-between`}
                  >
                    <span
                      className='flex flex-row cursor-pointer'
                      //   onClick={handleButtonClick}
                    >
                      <span className='mt-2 px-2'>{item}.</span>{" "}
                      <span>
                        <Image
                          src='/elsabet.jpeg'
                          alt=''
                          width={50}
                          height={50}
                          className='rounded-full rounded-image text-center'
                        />
                      </span>
                      <span className='flex flex-col text-black'>
                        <span>Melak ab </span>
                        <span className='text-slate-600 text-sm font-thin'>
                          melakab@gmail.com
                        </span>
                      </span>
                    </span>
                    <span>f </span>
                    <span>c </span>
                    <span>c </span>
                    <span>c </span>
                    <span>c </span>
                    <span>c </span>
                    <span>c </span>
                    <span>3.2</span>
                    <span>3.2</span>
                    <span>3.2</span>
                    <span>3.2</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterReport;
