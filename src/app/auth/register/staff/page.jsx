"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../../../../styles/register.css";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { Steps, message } from "antd";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
const { Step } = Steps;

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const router = useRouter();
  const methods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      message.success("Form submitted successfully!");
      console.warn("Submitted Data:", data);
    }
  };

  const onBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };


  return (
    <div className='parent w-full'>
      <span
        className={` flex  flex-col justify-center w-full text-center text-2xl  text-bold text-blue-700 p-6 texts`}
      >
        HAHU
        <span className='text-black'>Technologies</span>
      </span>
      <div className='p-6  flex flex-wrap bg-white shadow-sm  md:h-[calc(70vh-0rem)]  flex-col items-center justify-center mx-2 rounded-xl'>
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
                  width={570}
                  height={70}
                  className='object-cover'
                />
              </div>
            </div>
          </div>
          <div className='form_pages w-full'>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {currentStep === 0 && <Step1 />}
                {currentStep === 1 && <Step2 />}
                {currentStep === 2 && <Step3 />}
                {currentStep === 3 && <Step4 />}
              </form>
            </FormProvider>
          </div>
        </div>
      </div>

      <div className='flex flex-col p-4 gap-0'>
        <div className='flex items-center justify-center mt-2 pb-6'>
          <div style={{ marginTop: "30px" }}>
            {currentStep !== 0 && (
              <button
                onClick={onBack}
                className='bg-blue-500 mx-4 rounded-xl w-20 md:w-32 text-white font-bold px-4 md:px-8 py-2 md:py-3 focus:outline-none focus:shadow-outline'
              >
                Back
              </button>
            )}
            <button
              onClick={handleSubmit(onSubmit)}
              loading={isSubmitting}
              className={`${
                currentStep === 3 ? " bg-green-500" : "bg-blue-500"
              } rounded-xl w-20 md:w-32 text-white font-bold px-4 md:px-8 py-2 md:py-3 focus:outline-none focus:shadow-outline`}
            >
              {currentStep === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>

        <Steps current={currentStep} className='px-6 pb-5 mr-7'>
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
