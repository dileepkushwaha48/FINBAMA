import React from 'react';

export default function AboutUs() {
  return (
    <section id="AboutUs" className="bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
          Who We Are
        </h2>
        
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 sm:mb-8">
          At Finbama, we're passionate about making financial freedom accessible to everyone.
        </p>
        
        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 text-left max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              To help people live financially confident and stress-free lives.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              To offer smart, practical, and innovative financial advisory services through an intuitive platform and personal guidance.
            </p>
          </div>
        </div>
        
        {/* Team Values Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-6">Our Core Values</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-blue-50 p-4 sm:p-5 rounded-lg">
              <h4 className="text-blue-700 font-medium mb-2">Transparency</h4>
              <p className="text-gray-600 text-sm">Clear, honest advice with no hidden fees or agendas.</p>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-5 rounded-lg">
              <h4 className="text-blue-700 font-medium mb-2">Accessibility</h4>
              <p className="text-gray-600 text-sm">Financial guidance should be available to everyone, not just the wealthy.</p>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-5 rounded-lg">
              <h4 className="text-blue-700 font-medium mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Constantly improving our tools and methods to better serve your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}