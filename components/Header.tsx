// components/Header.tsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='bg-white shadow-md py-4'>
      <nav className='fixed top-0 left-0 w-full h-16 bg-white shadow-lg z-20'>
        <div className='flex items-center justify-between w-full h-full px-4'>
          <button
            className='p-2 text-gray-600 rounded-md hover:bg-gray-200 focus:outline-none'
            onClick={handleMenuToggle}
          >
            <FaBars />
          </button>
          <span className='font-medium text-lg text-gray-700 mx-auto'>
            Yukiraの家へようこそ
          </span>
          <div>
            <Image
              src='/images/logoSnow.png'
              alt='Logo'
              width={48}
              height={48}
              className='ml-2'
            />
          </div>
        </div>
      </nav>

      {/* Hamburger menu sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg transition-transform duration-300 z-20 ${
          menuOpen ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
      >
        <div className='flex items-center justify-between w-full h-16 px-4'>
          <span className='font-medium text-lg text-gray-700'>Menu</span>
          <button
            className='p-2 text-gray-600 rounded-md hover:bg-gray-200 focus:outline-none'
            onClick={handleMenuToggle}
          >
            <FaBars />
          </button>
        </div>
        <ul className='py-4'>
          <Link href='/' passHref>
            <li className='cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-100'>
              Home
            </li>
          </Link>
          <Link href='/about' passHref>
            <li className='cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-100'>
              About
            </li>
          </Link>
          <Link href='/contact' passHref>
            <li className='cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-100'>
              Contact
            </li>
          </Link>
          <Link href='/e-commerce' passHref>
            <li className='cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-100'>
              shop
            </li>
          </Link>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
