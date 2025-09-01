import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-blue-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-dark mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600">Baglung, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-dark mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600">prabinkarki789@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-dark mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-600"> 9803491612</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-dark mb-6">
                Send Me a Message
              </h3>
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : null}
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" bg-green-400 w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;