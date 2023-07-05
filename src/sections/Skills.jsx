import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p>
        Armed with the power of <b className="text-blue-400">React</b>,{' '}
        <b className="text-red-500">HTML</b>, CSS, and a touch of JavaScript
        wizardry, I transform concepts into captivating interfaces.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex text-4xl gap-4 mt-12"
      >
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <SiJavascript />
        <SiTailwindcss />
      </motion.div>
    </div>
  );
}

export default Skills;
