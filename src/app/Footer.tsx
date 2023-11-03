import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-base-200  text-res-gray-lite lg:justify-around">
        <nav>
          <header className="footer-title text-res-gray font-medium">
            Company
          </header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Carrers</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <header className="footer-title text-res-gray font-medium">
            Support
          </header>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Safety Center</a>
        </nav>
        <nav>
          <header className="footer-title text-res-gray font-medium">
            Legal
          </header>
          <a className="link link-hover">Cookies Policy</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Dispute resolution</a>
        </nav>
        <nav>
          <header className="footer-title text-res-gray font-medium">
            Install App
          </header>
          <a className="link link-hover">
            {' '}
            <Image
              src="/assets/google-logo.png"
              alt="instagram icon"
              width={162}
              height={48}
            />
          </a>
          <a className="link link-hover">
            {' '}
            <Image
              src="/assets/App-Store-Badge.png"
              alt="instagram icon"
              width={162}
              height={48}
            />
          </a>
        </nav>
      </footer>
      <footer className="footer pl-44 pr-32 py-4 border-t bg-base-200 text-base-content border-base-300 lg:h-[80px]">
        <aside className="items-center grid-flow-col">
          <p>© 2021 LILIES, All rights reserved</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <Image
                src="/assets/icons/instagram-icon.png"
                alt="instagram icon"
                width={28}
                height={28}
              />
            </a>
            <a>
              <Image
                src="/assets/icons/twitter-icon.svg"
                alt="twitter icon"
                width={28}
                height={28}
              />
            </a>
            <a>
              <Image
                src="/assets/icons/youtube.svg"
                alt="youtube icon"
                width={28}
                height={28}
              />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}
