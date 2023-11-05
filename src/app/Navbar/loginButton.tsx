import Link from 'next/link';

export default function LoginButton() {
  return (
    <div>
      <Link href="/login" className=" text-white  hover:text-orange-400 transition-colors font-medium text-xl">
        {' '}
        Login
      </Link>
    </div>
  );
}
