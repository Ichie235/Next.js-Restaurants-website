'use client';
import React from 'react';
import {
  Collapse,
  Typography,
  IconButton,
  Navbar,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarSimpleProps {
  children: React.ReactNode;
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium text-xl">
        <Link
          href="/home"
          className=" flex items-center text-[#FBDDBB] hover:text-orange-400 transition-colors "
        >
          Home
        </Link>
      </Typography>
    </ul>
  );
}

export default function NavbarSimple({ children }: NavbarSimpleProps) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="z-40 fixed top-0 w-full shadow-md bg-res-green text-white px-12 lg:px-16 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/home">
          <div className="flex items-center gap-3 cursor-pointer ">
            {' '}
            <Image
              src="/assets/restaurant-logo.png"
              alt="company logo"
              width={56}
              height={66}
            />
            <h2 className="font-bold text-white text-2xl">Lilies</h2>
          </div>
        </Link>
        <div className="hidden  lg:flex justify-between items-center gap-7">
          <NavList />
          {children}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-10 w-10 text-[#E2B887]" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-10 w-10 text-[#E2B887]" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="py-6 relative">
          <NavList />
          <div className="mt-5 ml-1">{children}</div>
        </div>
      </Collapse>
    </div>
  );
}
