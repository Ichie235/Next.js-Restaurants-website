'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Collapse, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

function NavList({
  isLogin,
  isRegister,
}: {
  isLogin: boolean;
  isRegister: boolean;
}) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-7 ">
      <li className="p-1 font-medium text-xl ">
        <Link
          href="/"
          className="text-[#FBDDBB] hover:text-orange-400 transition-colors "
        >
          Home
        </Link>
      </li>
      <li className="p-1 font-medium text-xl ">
        <Link
          href="/login"
          className={`text-white text-center hover:text-orange-400 transition-colors font-medium text-xl ${
            isLogin ? 'hidden' : ''
          }`}
        >
          {' '}
          Login
        </Link>
      </li>
      <li className="p-1 font-medium text-xl ">
        <Link href="/register">
          {' '}
          <button
            className={`btn bg-[#E2B887] text-res-green w-[200px]  md:w-[250px] lg:w-[140px] h-[50px] hover:bg-[#E2B887] ${
              isRegister ? 'hidden' : ''
            }`}
          >
            Sign Up
          </button>
        </Link>
      </li>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();
  const isLogin = pathname === '/login';
  const isRegister = pathname === '/register';

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  React.useEffect(() => {
    setOpenNav(false);
  }, [pathname]);
  const isTransparentBackground = isLogin || isRegister;
  return (
    <div
      className={`z-40 fixed top-0 w-full text-white px-12 lg:px-16 pt-5 ${
        isTransparentBackground ? 'bg-res-green bg-opacity-70' : 'bg-res-green'
      }`}
    >
      <div className="flex pb-5 items-center justify-between text-blue-gray-900">
        <Link href="/">
          <div className="flex items-center gap-3  cursor-pointer -ml-5 md:ml-2 ">
            {' '}
            <Image
              src="/assets/restaurant-logo.png"
              alt="company logo"
              width={56}
              height={66}
              className="w-10 h-11 md:w-14 md:h-16"
            />
            <h2 className="font-bold text-white text-2xl">Lilies</h2>
          </div>
        </Link>
        <div className="hidden  lg:flex flex-row justify-between items-center gap-2">
          <NavList isLogin={isLogin} isRegister={isRegister} />
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
        <div className="py-6 relative text-center flex flex-col items-center ">
          <NavList isLogin={isLogin} isRegister={isRegister} />
        </div>
      </Collapse>
    </div>
  );
}
