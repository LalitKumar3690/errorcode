import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left section */}
        <div className="w-full md:w-1/2 md:pr-10 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">We are here to help!</h1>
          <p className="text-lg text-gray-600">
            Let us know how we can best serve you. Use the contact form to
            email us or select from the topics below that best fit your needs.
            It's an honor to support you in your journey towards better health.
          </p>
        </div>

        {/* Right section (form) */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Comment"
              className="w-full p-3 border border-gray-300 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-red-600 text-white rounded"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;