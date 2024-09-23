import React from 'react';
import facebookIcon from '../assets/facebook_icon.png';
import Linkedin from '../assets/linkedin_icon.png';
import Twitter from '../assets/twitter_icon.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-[8vw] mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     
        <div className="flex flex-col">
          <h2 className="text-white text-xl mb-4">Contact Us</h2>
          <p>FoodieHub, 1234 Yummy Street</p>
          <p>City, State, ZIP Code</p>
          <p>Email: support@foodiehub.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
   
        <div className="flex flex-col">
          <h2 className="text-white text-xl mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-white">
              <img src={Linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-white">
              <img src={Twitter} alt="Twitter" className="w-8 h-8" />
            </a>
          </div>
        </div>
      
        <div className="flex flex-col">
          <h2 className="text-white text-xl mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-center text-sm">
        <p>© 2024 FoodieHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
