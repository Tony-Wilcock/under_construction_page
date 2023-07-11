import { waterfall } from './fonts';
import Link from 'next/link';
import Image from 'next/image';
import EmzyLogo from '/public/emzy-logo-transparent.png';

export default function Home() {
  return (
    <main className='w-full h-screen flex flex-col justify-between items-center bg-clr-bg text-clr-text'>
      <div className='absolute w-full h-screen flex items-center justify-center'>
        <Image
          src={EmzyLogo}
          alt='emzy logo'
          className='object-contain w-2/3 opacity-20'
        ></Image>
      </div>
      <div className='flex flex-col items-center justify-center pt-10 z-10'>
        <h2 className='text-xl sm:text-2xl font-semibold tracking-widest'>
          Welcome to
        </h2>
        <h1
          className={`${waterfall.className} text-[7rem] sm:text-[12rem] leading-none`}
        >
          Emzy
        </h1>
        <h2 className='text-2xl sm:text-[2.5rem] font-semibold tracking-[0.5em]'>
          Aesthetics & Beauty
        </h2>
      </div>

      <div className='flex flex-col items-center justify-center text-xs sm:text-base md:text-xl z-10'>
        <p>Our brand new website is coming soon.</p>
        <br />
        <p className=''>
          In the meantime, why not follow us on
          <span className='text-[#5383e2] font-bold cursor-pointer'>
            {' '}
            <Link
              href='https://www.facebook.com/profile.php?id=100093526459994'
              target='_blank'
            >
              Facebook
            </Link>
          </span>{' '}
          &{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#574d99] via-[#d2183b] to-[#e6b157] font-bold cursor-pointer'>
            <Link
              href='https://www.instagram.com/emzynurseandbeauty/'
              target='_blank'
            >
              Instagram
            </Link>
          </span>
          .
        </p>
        <br />
        <p>
          You can also book an appointment on{' '}
          <span className='text-black font-bold cursor-pointer'>
            <Link
              href='https://www.fresha.com/a/emzy-aesthetics-nurse-beauty-therapist-wigan-all-over-beauty-7-ladies-lane-cpuy2tce'
              target='_blank'
            >
              Fresha
            </Link>
          </span>
          .
        </p>
      </div>

      <div className='flex flex-col items-center justify-center text-xs sm:text-base md:text-xl z-10'>
        <p>We look forward to showing off our new website soon.</p>
        <p>Thank you for your patience.</p>
      </div>

      <div className='flex flex-col items-center justify-center pb-20 z-10'></div>
    </main>
  );
}
