'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SubmitButton from '@/components/submitButton';
import Navbar from '../../components/Navbar/Navbar';
import LoginButton from '../../components/Navbar/loginButton';
import FormInput from '@/components/FormInput/FormInput';

export default function LoginPage() {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      <Navbar>
        <LoginButton />
      </Navbar>
      {/* For Mobile/Tablet  */}
      <div className="lg:hidden">
        {/* Background Image */}
        <div className="relative w-screen h-[120vh] bg-cover  bg-center bg-[url('/assets/register-banner.png')]">
          {/* Login Form Modal */}

          <div className="absolute w-[90%] left-0 right-0 mx-auto mt-[12rem] h-auto bg-white px-11 py-5 rounded-lg shadow-lg">
            <h1 className="text-center text-2xl font-semibold mt-8 mb-8 text-res-green">
              Welcome to Lilies!
            </h1>
            <form>
              <div className="mb-8">
                <FormInput
                  type="text"
                  name="name"
                  title=""
                  placeholder="Your Name"
                  value={''}
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-full h-[45px]"
                />
              </div>
              <div className="mb-8">
                <FormInput
                  type="email"
                  name="email"
                  title=""
                  placeholder="Your Email address"
                  value={''}
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-full h-[45px]"
                />
              </div>
              <div className="mb-8 relative">
                <FormInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  title=""
                  placeholder="Your Email address"
                  value={''}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-full h-[45px]"
                />
                <button
                  type="button"
                  className="absolute bottom-[0.8rem] right-[1.8rem]"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <SubmitButton>Sign Up</SubmitButton>
            </form>
            <div className="flex justify-between my-6 text-res-green font-semibold text-sm">
              <Link href="/register">create an account</Link>
              <Link href="/forgot-password">forgot password</Link>
            </div>
          </div>
        </div>
      </div>

      {/* LAPTOP / DESKTOP VIEW */}
      <div className="hidden lg:flex">
        <div className="w-1/2 h-[105vh]  bg-cover bg-center bg-[url('/assets/register-banner.png')]"></div>

        <div className="w-1/2 flex justify-center bg-white ">
          <div className="mt-36 ">
            <h1 className="text-res-green text-2xl text-center font-semibold mb-14">
              Welcome to Lilies!
            </h1>
            <form>
              <div className="mb-4">
                  <FormInput
                  type="text"
                  name="name"
                  title=""
                  placeholder="Your Name"
                  value={''}
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-[480px] h-[60px]"
                />
              </div>
              <div className="my-10">
                  <FormInput
                  type="email"
                  name="email"
                  title=""
                  placeholder="Your Email address"
                  value={''}
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-[480px] h-[60px]"
                />
              </div>
              <div className="my-10 relative w-[480px] h-[60px]">
                 <FormInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  title=""
                  placeholder="Your Email address"
                  value={''}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-[480px] h-[60px]"
                />
                <button
                  type="button"
                  className="absolute top-[1.1rem] right-[1.6rem]"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <SubmitButton>Sign Up</SubmitButton>
            </form>
            <div className="flex justify-between my-6 text-res-green">
              <Link href="/register">create an account</Link>
              <Link href="/forgot-password">forgot password</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
