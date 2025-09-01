import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const highlights = [
    {
      title: 'Education',
      description: 'BSC.CSIT, Tribhuvan University',
    },
    {
      title: 'Experience',
      description: '1 years of professional web development experience',
    },
    {
      title: 'Philosophy',
      description: 'Focus on clean, efficient code and user-centered design',
    },
  ];

  return (
    <section id="about" className="py-20 bg-blue-300">
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
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get to know me better and what drives my passion for web development
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <h3 className="text-2xl font-semibold text-dark mb-6">
              Who am I?
            </h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate frontend developer with a strong focus on
              creating intuitive and engaging user experiences. My journey in web
              development started when I was in college, and since then, I've
              been constantly learning and improving my skills.
            </p>
            <p className="text-gray-600 mb-4">
              I specialize in building responsive, accessible, and performant web
              applications using modern technologies like React, Next.js, and
              Tailwind CSS.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me hiking, reading tech blogs,
              or experimenting with new web technologies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold bg-amber-200 text-dark mb-6">
              Key Highlights
            </h3>
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary bg-opacity-10 text-primary">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;