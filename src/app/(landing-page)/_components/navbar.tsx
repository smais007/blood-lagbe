'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/images/logo1.png'
import { Button } from '@/components/ui/button';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the drawer when clicking on the backdrop
  const closeDrawer = () => setIsOpen(false);

  return (
    <nav className="relative bg-white shadow-xl dark:bg-gray-800 rounded-xl border ">
      <div className="container px-6 py-2 mx-auto ">
        <div className="flex items-center justify-between">
          
          {/* Logo on the left side */}
          <Link href="/">
            <Image
             
              src={logo}
              width={60}
              height={10}
              alt="Logo"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            aria-label="toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>

          {/* Backdrop for drawer */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
              onClick={closeDrawer}
            ></div>
          )}

          {/* Drawer for mobile menu */}
          <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-white dark:bg-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              aria-label="close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-start mt-16 space-y-4 px-6">
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full px-3 py-2 rounded-md">About</Link>
              <Link href="/service" className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full px-3 py-2 rounded-md">Service</Link>
              <Link href="/campaign" className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full px-3 py-2 rounded-md">Campaign</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full px-3 py-2 rounded-md">Contact</Link>
              <Button className='bg-[#be1d2f]'  title='Login'>Login</Button>
            </div>
          </div>

          {/* Menu Items for larger screens, positioned on the right side with gap */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link href="/about" className="px-4 py-2 font-bold text-gray-700 dark:text-gray-200">About</Link>
            <Link href="/service" className="px-4 py-2 font-bold text-gray-700 dark:text-gray-200">Service</Link>
            <Link href="/campaign" className="px-4 py-2 font-bold text-gray-700 dark:text-gray-200">Campaign</Link>
            <Link href="/contact" className="px-4 py-2 font-bold text-gray-700 dark:text-gray-200">Contact</Link>
           <Link href='/login'>
            <Button className='bg-[#be1d2f]'  title='Login'>Login</Button>
           </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 
