import Link from 'next/link'

export default function LoginPage() {
  return (
    <div>
      <Link href="/register">
        {' '}
        <button className="btn bg-[#E2B887] text-res-green w-[142px] h-[53px]">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
