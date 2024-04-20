"use client";
import Loading from "../../common/loading";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useLoginAdminMutation } from "../../../services/api/authApi";
import { message } from "antd";

const LoginPage = () => {
  const router = useRouter();
  const methods = useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [loginAdmin, { data: userData, isLoading, isError, error, isSuccess }] =
    useLoginAdminMutation();

  const onSubmit = async (data) => {
    try {
      console.log("Submitted Data:", data);
      await loginAdmin(data);
      localStorage.setItem("allUserData", data);

    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Invalid credentials.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("You have logged in successfully!");
      console.log("fetched userData is :", userData);

      router.push("/dashboard");
      localStorage.setItem("userData", userData.id);
    } else if (isError) {
      if (error) {
        setErrorMessage(error.data);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  }, [isSuccess, isError, router, error, userData]);

  return (
    <>
      <span className='p-9 texts '>Created by HAHU</span>
      {isLoading && <Loading />}
      <FormProvider {...methods}>
        <div className='pt-8 md:p-1 h-[calc(100vh-2rem)] md:h-[calc(100vh-0rem)] flex flex-col items-center justify-center'>
          <div className=' h-full  justify-around rounded-md flex flex-col md:flex-row md:h-[80%] md:w-full gap-40  2xl:w-2/3'>
            <div className='px-10 flex flex-col gap-8 md:w-1/2'>
              <span className='w-5 mt-2 h-5 md:w-11 md:h-19 bg-teal-400 text-teal-400'>
                {"  "}
              </span>
              <h1 className='font-bold text-2xl xl:text-sm  text-black '>
                Login
              </h1>
              <p className='text-slate-400'>Get to your office </p>
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='ring-1 ring-slate-600 w-full rounded-full text-slate-600  font-thin px-8 py-3 focus:outline-none focus:shadow-outline'
                >
                  Sign in with Google
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className='mb-4'>
                  {errorMessage && (
                    <span className='block w-full bg-red-100 rounded-md p-3 text-center text-red-500 text-sm font-bold mb-2'>
                      {errorMessage}
                    </span>
                  )}
                  <label className='block text-slate-700 text-sm font-bold mb-2'>
                    Username
                  </label>
                  <input
                    {...register("username")}
                    name='username'
                    className='shadow h-12 bg-gray-200 appearance-none ring-1 ring-slate-400 border rounded w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='Enter your username'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-slate-700 text-sm font-bold mb-2'>
                    Password
                  </label>
                  <input
                    {...register("password")}
                    name='password'
                    type='password'
                    className='shadow h-12 ring-1 ring-slate-400 bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    placeholder='Minimum of 8 characters'
                  />
                  <p className='text-slate-500 text-xs italic'>{}</p>
                </div>
                <div className='mb-4 flex justify-between'>
                  <span className='px-2'>
                    <input
                      type='checkbox'
                      className='inline-block  align-baseline font-bold text-sm text-slate-500 hover:text-slate-800'
                    />
                    &nbsp; Remember me
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    loading={isSubmitting ? "true" : undefined}
                    className='bg-indigo-900 w-full rounded-xl text-white font-bold px-8 py-3 focus:outline-none focus:shadow-outline'
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className='text-sm'>
                Not registered yet? Create a new account{" "}
                <Link className='' href='/auth/register'>
                  Register
                </Link>
              </p>
            </div>
            <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-[url('/bg.jpeg')]">
              <Image
                src='/loginimage.png'
                alt=''
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default LoginPage;
