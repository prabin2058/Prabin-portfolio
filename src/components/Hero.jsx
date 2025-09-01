import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import myPhoto from '../assets/pp.jpeg';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    "Frontend Developer",
    "Backend Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "AI",
    "Machine Learning"
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000); // change skill every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-blue-400 min-h-screen flex items-center bg-gradient-to-br from-light to-gray-100 pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-4">
              Hi, I'm <span className="text-purple-500 ">Prabin Karki</span>
            </h1>

            {/* Rotating skill text */}
            <motion.h2
              key={skills[currentSkillIndex]}
              className="text-2xl md:text-3xl font-semibold text-secondary mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {skills[currentSkillIndex]}
            </motion.h2>

            <p className="text-gray-600 mb-8 text-lg">
              I build exceptional digital experiences with modern technologies.
              Currently focused on creating accessible, user-friendly web
              applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-green-500 hover:bg-primary-dark  px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:text-white"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-green-500 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View Work
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/prabin2058"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors duration-300"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/prabin-karki-157072306/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors duration-300"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors duration-300"
              >
                <FiTwitter size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10"></div>
              <div className="absolute inset-4 border-4 border-primary rounded-full opacity-20"></div>
              <div className="absolute inset-8 border-4 border-primary rounded-full opacity-30"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <img src={myPhoto} alt="My Profile" className="" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
