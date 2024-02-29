"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../../../../styles/register.css";
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
  // const goDashboard = () => {
  //   router.push("/dashboard");
  // };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFinish = () => {
    router.push("/tools/hr");

    console.log("Form data submitted:", formData);
    // Example: You can reset the form data
    setFormData({});
    // You can also navigate to another page after submission
    // router.push("/dashboard");
  };

  const handleFormData = (data) => {
    // Merge form data from each step
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const description = "staff user ";

  return (
    <div className='parent w-full'>
      <span
        className={` flex  flex-col justify-center w-full text-center text-2xl  text-bold text-blue-700 p-6 texts`}
      >
        HAHU
        <span className='text-black'>Technologies</span>
      </span>
      <div className='bg-white shadow-sm h-[calc(90vh-2rem)] md:h-[calc(80vh-0rem)] flex flex-col items-center justify-center mx-10 rounded-xl '>
        <div className=' h-full  justify-around rounded-md flex flex-col md:flex-row md:h-[80%] md:w-full  '>
          <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
            <div className='flex flex-col mx-20'>
              <span className='title  font-bold text-black'>
                Wellcome to Tegbarer Id
              </span>
              <div className="relative h-1/3 w-full md:h-full md:w-1/4 bg-[url('/bg.jpeg')]">
                <Image
                  src='/logo.png'
                  alt=''
                  width={570}
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
        <div className='flex items-center justify-center mt-2 pb-6 '>
          {step !== 1 && (
            <button
              onClick={prevStep}
              className='bg-blue-500 mx-4 rounded-xl w-32 text-white font-bold px-8 py-3 focus:outline-none focus:shadow-outline'
            >
              Back
            </button>
          )}
          {step === 4 ? (
            <button
              onClick={handleFinish}
              className='bg-green-500 rounded-xl w-32 text-white font-bold px-8 py-3 focus:outline-none focus:shadow-outline'
            >
              Finish
            </button>
          ) : (
            <button
              onClick={nextStep}
              className='bg-blue-500 rounded-xl w-32 text-white font-bold px-8 py-3 focus:outline-none focus:shadow-outline'
            >
              Next
            </button>
          )}
        </div>

        <Steps current={step - 1} className='px-6 pb-5 mr-7'>
          <Step
            title=''
            description={
              <div className='mt-8 -mx-10 flex flex-col text-md font-bold '>
                Personal details
                <span className='text-slate-500 text-sm'>name and email</span>
              </div>
            }
          />{" "}
          <Step
            title=''
            description={
              <div className='mt-8 -mx-10 flex flex-col text-md font-bold '>
                academic
                <span className='text-slate-500 text-sm'>
                  fill in academic history and choice
                </span>
              </div>
            }
          />{" "}
          <Step
            title=''
            description={
              <div className='mt-8 -mx-10 flex flex-col text-md font-bold '>
                emergency contact
                <span className='text-slate-500 text-sm'>
                  provide emergency contact details
                </span>
              </div>
            }
          />{" "}
          <Step
            title=''
            description={
              <div className='mt-8 -mx-10 flex flex-col text-md font-bold '>
                finalization
                <span className='text-slate-500 text-sm'>
                  for account verification
                </span>
              </div>
            }
          />{" "}
        </Steps>
      </div>
    </div>
  );
};

export default RegisterPage;
