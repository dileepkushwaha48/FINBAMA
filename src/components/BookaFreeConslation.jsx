import React, { useState } from 'react';

export default function BookaFreeConsultation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending data (Replace this with actual API call)
    console.log('Form submitted:', formData);

    // Show success message or reset form
    alert('Your consultation has been booked!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
        Talk to a Financial Expert — For Free!
      </h1>

      <p className="text-gray-700 text-center max-w-xl mb-8">
        Get personalized advice tailored to your financial goals. No obligations. Just expert insights to guide you toward financial freedom.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+977 XXXXXXXXXX"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
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
