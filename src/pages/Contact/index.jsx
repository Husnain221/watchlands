import { useState } from "react";

const Contact = ({ listing, watchland }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md my-32 flex flex-col lg:flex-row lg:space-x-8">
      {/* Left side: Information about the website */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-lg ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">WatchLands</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to Watchland, your ultimate destination for exclusive watch listings.
          Whether you’re a collector or just starting your journey, we connect you with the
          best timepieces in the market. With our user-friendly platform, buying or selling a
          watch has never been easier.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Get in touch with us today to learn more about how you can list your watches or inquire
          about the best offers on the market!
        </p>
      </div>

      {/* Right side: Contact Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={onChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={onChange}
              placeholder="Enter your message here"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            ></textarea>
          </div>

          {/* Send Button */}
          <a
            href={`mailto:${watchland?.email}?subject=Regarding ${listing?.name}&body=${encodeURIComponent(
              `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
            )}`}
            className="block w-full bg-slate-700 text-white text-center py-3 px-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-slate-600 transition-all duration-300"
          >
            Send Message
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
