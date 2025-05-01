import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 md:py-10">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center gap-y-2">
            <a href="AboutUs" className="hover:underline mx-2 sm:mx-3 md:mx-4 text-sm md:text-base transition-colors duration-300 hover:text-blue-300">About Us</a>
            <a href="Services" className="hover:underline mx-2 sm:mx-3 md:mx-4 text-sm md:text-base transition-colors duration-300 hover:text-blue-300">Services</a>
            <a href="Blog" className="hover:underline mx-2 sm:mx-3 md:mx-4 text-sm md:text-base transition-colors duration-300 hover:text-blue-300">Blog</a>
            <a href="#" className="hover:underline mx-2 sm:mx-3 md:mx-4 text-sm md:text-base transition-colors duration-300 hover:text-blue-300">FAQs</a>
            <a href="ContactUs" className="hover:underline mx-2 sm:mx-3 md:mx-4 text-sm md:text-base transition-colors duration-300 hover:text-blue-300">Contact</a>
            <a href="#" className="hover:underline mx-2 sm:mx-3 md:mx-4 text-sm md:text-base transition-colors duration-300 hover:text-blue-300">Careers</a>
          </div>
        </div>
                
    
        <div className="text-center border-t border-blue-800 pt-6">
          <p className="text-xs sm:text-sm text-gray-300 mb-2">© 2025 Finbama. All rights reserved.</p>
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-200 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-200 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}