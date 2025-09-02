import React, { useState } from "react";
import { Send } from "lucide-react";

const eventTypes = [
  "Wedding",
  "Birthday",
  "Anniversary",
  "Funeral/Sympathy",
  "Corporate Event",
  "Church Service",
  "Graduation",
  "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-4xl font-bold text-dark-charcoal mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm md:text-xl font-medium text-dark-charcoal mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm  md:text-xl font-medium text-dark-charcoal mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm  md:text-xl font-medium text-dark-charcoal mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="eventType"
              className="block text-sm md:text-xl font-medium text-dark-charcoal mb-2"
            >
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 md:px-5 py-3 h-[50px] border border-gray-300 not-only:rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent bg-white"
            >
              <option value="">Select Event Type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="eventDate"
            className="block text-sm md:text-xl font-medium text-dark-charcoal mb-2"
          >
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border md:text-xl border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm md:text-xl font-medium text-dark-charcoal mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your vision, preferred colors, budget, and any special requirements..."
            className="w-full px-4 py-3 border md:text-xl border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#facc22] to-[#f83600] text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 cursor-pointer hover:translate-y-[-2px] transition-all 0.3 ease-in-out md:py-5"
        >
          <Send className="h-5 w-5" />
          <span className="md:text-xl">Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
