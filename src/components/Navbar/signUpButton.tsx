import Link from 'next/link'

export default function SignUpButton() {
  return (
    <div>
      <Link href="/register">
        {' '}
        <button className="btn bg-[#E2B887] text-res-green w-[140px] h-[50px] hover:bg-[#E2B887]">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
