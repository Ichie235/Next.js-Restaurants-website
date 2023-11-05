'use client';

import { ComponentProps } from 'react';
// import {experimental_useFormStatus as useFormStatus } from 'react-dom';



type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'button'>;

export default function SubmitButton({
  children,
  className,
  style,
  ...props
}: FormSubmitButtonProps) {
  // const { pending } = useFormStatus();

  return (
    <button 
      {...props}
      className={`btn bg-res-green w-full hover:bg-green-900 text-[#FBDDBB] ${className}`}
      style={style}
      type="submit"
      // disabled={pending}
    >
     {/* {pending && <span className='loading loading-spinner'></span>} */}
     {children}
    </button>
  );
}
