/*  ./components/Navbar.jsx     */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ROUTES } from '../constants';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.navbar}>
      <nav className='flex items-center flex-wrap p-2 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            {/* // TODO: replace logo */}
            <Image rel='icon' src='/android-chrome-192x192.png' alt='logo' width={30} height={30} />
            <span className='text-xl text-black font-bold tracking-wide ml-2'>
              Dogs<span className={styles.title2}>DAO</span>
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href={ROUTES.home}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-orange-100'>
                Market
              </a>
            </Link>
            <Link href={ROUTES.home}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-orange-100 '>
                Owner
              </a>
            </Link>
            <Link href={ROUTES.aboutUs}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-orange-100'>
                About us
              </a>
            </Link>
            <Link href={ROUTES.contactUs}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-orange-100'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
