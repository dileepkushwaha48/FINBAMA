import React from 'react';

export default function BookaFreeConsultation() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
        Talk to a Financial Expert — For Free!
      </h1>

      <p className="text-gray-700 text-center max-w-xl mb-8">
        Get personalized advice tailored to your financial goals. No obligations. Just expert insights to guide you toward financial freedom.
      </p>

      <form className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="4"
          placeholder="Briefly describe your concern (optional)"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Book My Free Consultation
        </button>
      </form>
    </div>
  );
}
