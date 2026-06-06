import Container from '@/components/container';
import { Mail, MapPinCheckInside, Phone } from 'lucide-react';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 min-h-[200px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">

          {/* Contact Us Section */}
          <div >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className='flex'>
                <span className=" flex gap-2">     <Mail />   Email : </span>
                <a href="mailto:support@donation.com" className="text-white hover:underline ml-2">support@donation.com</a>
                <br />
              </p>
              <p className='pl-[84px]'> <a href="mailto:helpme@donation.com" className="text-white hover:underline">helpme@donation.com</a></p>
              <p className='flex'>
                <span className=" flex gap-2"> <MapPinCheckInside />  Address : </span>
                Road-2,3/A East Shibgonj
                <br />
              </p>
              {/* <p className='pl-[84px]'>  Bangladesh</p> */}
              {/* <Phone /> */}
              <p className='flex'>
                <span className=" flex gap-2">  <Phone /> Phone : </span>
                <a href="mailto:support@donation.com" className="text-white hover:underline ml-2">(+880) 0823 560 433</a>
                <br />
              </p>
              <p className='flex'>
                <span className=" flex gap-2">    <Phone /> Cell : </span>
                <a href="mailto:support@donation.com" className="text-white hover:underline ml-2">(+880) 0723 161 343</a>
                <br />
              </p>

            </div>
          </div>

          {/* Support Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/thallasemia" className="text-white hover:underline">Thalassemia</a>
              <a href="/myelodysasia" className="text-white hover:underline">Myelodysasia</a>
              <a href="/hemolytiamia" className="text-white hover:underline">Hemolytiamia</a>
              <a href="/hyrcoagulable" className="text-white hover:underline">Hyrcoagulable</a>
              <a href="/sicklenemiaxs" className="text-white hover:underline">Sicklenemiaxs</a>
              <a href="/cell-elofrosis" className="text-white hover:underline">Cell Elofrosis</a>
              <a href="/blood-count" className="text-white hover:underline">Blood Count</a>
              <a href="/ychromas-eosis" className="text-white hover:underline">Ychromas Eosis</a>
              <a href="/thrombo-xtosis" className="text-white hover:underline">Thrombo Xtosis</a>
              <a href="/aplastic-anemia" className="text-white hover:underline">Aplastic Anemia</a>
            </div>
          </div>

          {/* Subscribe Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe Us</h3>
            <p className="mb-4">Signup for regular newsletter and stay up to date with our latest news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 flex-1 bg-gray-800 text-white placeholder-gray-400 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-3 rounded-r-lg hover:bg-red-600 focus:outline-none"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </Container>
      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-sm text-gray-500">Copyright 2018 - Blood Buddies by BlueWindLab. All Rights Reserved.</p>
      </div>
    </footer>
  );
};


