import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import userImage from "../assets/user.png";
import ecommerce from "../assets/ecommerce.png";
import lead from "../assets/lead.png";
import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/prabin2058/ecommerces',
    image: ecommerce,
  },
  {
    title: 'User Management App',
    description:
      'A productivity application for managing tasks with drag-and-drop functionality and team collaboration.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/prabin2058/user-management-app.git',
    image: userImage,
  },
  {
    title: 'Lead-management-system',
    description:
      'A Lead Management System (LMS) is a tool for tracking and managing potential customers (leads) through different sales pipeline stages.',
    technologies: ['Django', 'Chart.js'], // fixed extra comma
    github: 'https://github.com/prabin2058/lead-management-system.git',
    image: lead, // from public folder
  },
];

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-blue-300">
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
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* ✅ Show project image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-dark hover:text-primary transition-colors duration-300"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-dark hover:text-primary transition-colors duration-300"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
