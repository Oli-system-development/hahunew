"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../../../styles/register.css";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { Steps } from "antd";

const { Step } = Steps;
const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFinish = () => {
    router.push("/tools/hr");

    console.log("Form data submitted:", formData);
    setFormData({});
  };

  const handleFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const description = "staff user ";

  return (
    <div className='parent w-full'>
      <span
        className={`flex flex-col justify-center w-full text-center text-2xl text-bold text-blue-700 p-6 texts`}
      >
        HAHU <span className='text-black'>Technologies</span>
      </span>
      <div className='p-6  flex flex-wrap bg-white shadow-sm  md:h-[calc(80vh-0rem)]  flex-col items-center justify-center mx-2 rounded-xl'>
        <div className=' justify-around rounded-md flex flex-col md:flex-row md:h-[80%] md:w-full'>
          <div className="relative w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
            <div className='flex w-full flex-row md:flex-col  justify-around mx-2 md:mx-20'>
              <span className='text-xl md:text-3xl font-bold   text-black'>
                Welcome to Tegbarer Id
              </span>
              <div className="relative h-1/3 w-full md:h-full md:w-1/4 bg-[url('/bg.jpeg')]">
                <Image
                  src='/logo.png'
                  alt=''
                  width={70}
                  height={70}
                  className='object-cover'
                />
              </div>
            </div>
          </div>
          <div className='form_pages w-full'>
            {step === 1 && <Step1 onFormData={handleFormData} />}
            {step === 2 && <Step2 onFormData={handleFormData} />}
            {step === 3 && <Step3 onFormData={handleFormData} />}
            {step === 4 && <Step4 onFormData={handleFormData} />}
          </div>
        </div>
      </div>

      <div className='flex flex-col p-4 gap-0'>
        <div className='flex items-center justify-center mt-2 pb-6'>
          {step !== 1 && (
            <button
              onClick={prevStep}
              className='bg-blue-500 mx-4 rounded-xl w-20 md:w-32 text-white font-bold px-4 md:px-8 py-2 md:py-3 focus:outline-none focus:shadow-outline'
            >
              Back
            </button>
          )}
          {step === 4 ? (
            <button
              onClick={handleFinish}
              className='bg-green-500 rounded-xl w-20 md:w-32 text-white font-bold px-4 md:px-8 py-2 md:py-3 focus:outline-none focus:shadow-outline'
            >
              Finish
            </button>
          ) : (
            <button
              onClick={nextStep}
              className='bg-blue-500 rounded-xl w-20 md:w-32 text-white font-bold px-4 md:px-8 py-2 md:py-3 focus:outline-none focus:shadow-outline'
            >
              Next
            </button>
          )}
        </div>

        <Steps
          current={step - 1}
          className='px-2 md:px-6 pb-2 md:pb-5 mr-2 md:mr-7'
        >
          <Step
            title=''
            description={
              <div className='mt-4 md:mt-8 -mx-2 md:-mx-10 flex flex-col text-xs md:text-md font-bold'>
                Personal details
                <span className='text-slate-500 text-xs md:text-sm'>
                  name and email
                </span>
              </div>
            }
          />
          <Step
            title=''
            description={
              <div className='mt-4 md:mt-8 -mx-2 md:-mx-10 flex flex-col text-xs md:text-md font-bold'>
                Academic
                <span className='text-slate-500 text-xs md:text-sm'>
                  fill in academic history and choice
                </span>
              </div>
            }
          />
          <Step
            title=''
            description={
              <div className='mt-4 md:mt-8 -mx-2 md:-mx-10 flex flex-col text-xs md:text-md font-bold'>
                Emergency contact
                <span className='text-slate-500 text-xs md:text-sm'>
                  provide emergency contact details
                </span>
              </div>
            }
          />
          <Step
            title=''
            description={
              <div className='mt-4 md:mt-8 -mx-2 md:-mx-10 flex flex-col text-xs md:text-md font-bold'>
                Finalization
                <span className='text-slate-500 text-xs md:text-sm'>
                  for account verification
                </span>
              </div>
            }
          />
        </Steps>
      </div>
    </div>
  );
};

export default RegisterPage;
