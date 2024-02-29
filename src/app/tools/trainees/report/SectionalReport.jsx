import React from "react";

const SectionalReport = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex rounded-sm  w-full'>
        <div className='flex flex-wrap  flex-row  '>
          <div className='flex flex-col  ring-1 ring-slate-100 shadow-xl mx-2 rounded-2xl w-full'>
            <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white  px-10'>
              <div className='flex flex-row justify-around w-full gap-5 text-sm font-thin text-slate-500 m-3 '>
                <span className='flex flex-block'>occupation</span>
                <span className='flex flex-col'>
                  <span>regular</span>
                  <span className='flex flex-row font-thin text-sm gap-4 text-slate-600'>
                    <span>LEVEL |</span>
                    <span>LEVEL ||</span>
                    <span>LEVEL |||</span>
                    <span>LEVEL |v</span>
                    <span>LEVEL v</span>
                    <span>TOTAL</span>
                  </span>
                  <span className='flex flex-row font-thin text-sm gap-9 text-slate-600'>
                    <span>M F T</span>
                    <span>M F T</span>
                    <span>M F T</span>
                    <span>M F T</span>
                    <span>M F T</span>
                    <span>M F T</span>
                  </span>
                </span>
                <span className='flex flex-col'>
                  <span>extension</span>
                  <span className='flex flex-row font-thin text-sm gap-4 text-slate-600'>
                    <span>LEVEL |</span>
                    <span>LEVEL ||</span>
                    <span>LEVEL |||</span>
                    <span>LEVEL |v</span>
                    <span>LEVEL v</span>
                    <span>TOTAL</span>
                  </span>
                  <span className='flex flex-row font-thin text-sm gap-9 text-slate-600'>
                    <span>M F T</span>
                    <span>M F T</span>
                    <span>M F T</span>
                    <span>M F T</span>
                    <span>M F T</span>
                    <span>M F T</span>
                  </span>
                </span>
                <span className='flex flex-col'>
                  <span>total</span>
                  <span className='flex flex-row font-thin text-sm text-slate-600'></span>
                  <span>M F T</span>
                </span>
              </div>

              <div className='all_items flex flex-row flex-wrap gap-1 w-full overflow-y-scroll h-5/6 justify-around '>
                <div className='flex flex-row flex-wrap  w-full overflow-y-scroll justify-between '>
                  {[1].map((item) => (
                    <div
                      key={item}
                      className={`flex flex-row justify-around w-full gap-2 text-sm font-thin text-slate-500 m-3  `}
                      onClick={() => handleButtonClick(item)}
                    >
                      <span htmlFor='' className='flex flex-row gap-6'>
                        <span>electronics</span>
                        <span className='flex flex-col gap-6'>
                          <span>electronics c1</span>
                          <span>fashion c1</span>
                          <span>IT A1</span>
                          <span>Construction B</span>
                        </span>
                      </span>
                      <span className='flex flex-row gap-1'>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span> <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                      </span>{" "}
                      <span className='flex flex-row gap-1'>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span> <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                      </span>{" "}
                      <span className='flex flex-row gap-1'>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                      </span>{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionalReport;
