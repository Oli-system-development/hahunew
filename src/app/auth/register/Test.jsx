"use client";
import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const { Step } = Steps;

const MultistepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    //   age: 0,
    //   color: "",
    //   country: "",
    //   city: "",
    // },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1); // Move to the next step
    } else {
      message.success("Form submitted successfully!");
    }
  };

  const onBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Steps current={currentStep}>
          <Step title='Step 1' />
          <Step title='Step 2' />
          <Step title='Step 3' />
        </Steps>

        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 />}
        {currentStep === 2 && <Step3 />}

        <div style={{ marginTop: "30px" }}>
          <button type='primary' onClick={onBack} disabled={currentStep === 0}>
            Back
          </button>
          <button
            type='primary'
            htmlType='submit'
            style={{ marginLeft: "10px" }}
            loading={isSubmitting}
          >
            {currentStep === 2 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

const Step1 = () => {
//   const { register } = useFormContext();

  return (
    <div>
      <label>First Name</label>
      <input {...register("firstName")} />

      <label>Last Name</label>
      <input {...register("lastName")} />
    </div>
  );
};

const Step2 = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label>Age</label>
      <input type='number' {...register("age")} />

      <label>Color</label>
      <input {...register("color")} />
    </div>
  );
};

const Step3 = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label>Country</label>
      <input {...register("country")} />

      <label>City</label>
      <input {...register("city")} />
    </div>
  );
};

export default MultistepForm;
