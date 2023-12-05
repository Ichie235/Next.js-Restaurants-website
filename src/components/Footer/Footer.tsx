import Image from 'next/image';

export default function Footer() {
  const socialMediaIcons = [
    { src: '/assets/icons/instagram-icon.png', alt: 'instagram icon' },
    { src: '/assets/icons/twitter-icon.svg', alt: 'twitter icon' },
    { src: '/assets/icons/youtube.svg', alt: 'youtube icon' },
  ];
  return (
    <>
      <footer className="footer p-10 bg-base-200  text-res-gray-lite lg:justify-around pb-24">
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

      <hr className='border border-gray-700' />

      <footer className="footer footer-center p-5 bg-base-200 text-base-content  rounded">
        <aside>
          <p>© 2021 LILIES, All rights reserved</p>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4">
            {socialMediaIcons.map((icon, index) => (
              <a key={index}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={15}
                  height={15}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </nav>
      </footer>
    </>
  );
}
