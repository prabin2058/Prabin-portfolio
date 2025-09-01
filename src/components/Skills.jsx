import { motion } from 'framer-motion';
import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={24} />, level: 90 },
  { name: 'JavaScript', icon: <FaJs size={24} />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript size={24} />, level: 75 },
  { name: 'HTML5', icon: <FaHtml5 size={24} />, level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt size={24} />, level: 90 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, level: 85 },
  { name: 'Next.js', icon: <SiNextdotjs size={24} />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs size={24} />, level: 70 },
  { name: 'MongoDB', icon: <SiMongodb size={24} />, level: 65 },
  { name: 'Git', icon: <FaGitAlt size={24} />, level: 80 },
];

const Skills = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-blue-300">
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
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These are the technologies and tools I work with on a regular basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 flex flex-col items-center"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-lg font-medium text-dark mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 mt-2">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;