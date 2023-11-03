'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SubmitButton from '@/components/submitButton';

export default function LoginPage() {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      {/* For Mobile/Tablet  */}
      <div className="lg:hidden">
        {/* Background Image */}
        <div className="relative w-screen h-screen bg-cover  bg-center bg-[url('/assets/login-banner.png')]">
          {/* Login Form Modal */}

          <div className="absolute w-[90%] left-0 right-0 mx-auto mt-[12rem] h-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-center text-2xl font-semibold mt-8 mb-8 text-res-green">
              Welcome Back!
            </h1>
            <form>
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Your Email address"
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-full h-[45px]"
                  required
                />
              </div>
              <div className="mb-8">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-full h-[45px]"
                  required
                />
              </div>
              <button
                type="button"
                className="absolute top-[13.5rem] right-[3rem]"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              <SubmitButton>Login</SubmitButton>
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
        <div className="w-1/2 h-screen  bg-cover bg-center bg-[url('/assets/login-banner.png')]"></div>

        <div className="w-1/2 flex justify-center bg-white ">
          <div className="mt-52 ">
            <h1 className="text-res-green text-2xl text-center font-semibold mb-14">
              Welcome Back!
            </h1>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Email address"
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-[480px] h-[60px]"
                  required
                />
              </div>
              <div className="my-10 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-300 bg-white rounded-md p-2 focus:bg-white w-[480px] h-[60px]"
                  required
                />
                <button
                  type="button"
                  className="absolute top-[1.1rem] right-[1.6rem]"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <SubmitButton>Login</SubmitButton>
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
