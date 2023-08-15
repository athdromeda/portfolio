import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsSvg from '../components/SkillsSvg';
import { useEffect } from 'react';

function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { scrollYProgress, scrollY } = useScroll();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p>
        Armed with the power of <b className="text-blue-400">React</b>,{' '}
        <b className="text-red-500">HTML</b>, CSS, and a touch of JavaScript
        wizardry, I transform concepts into captivating interfaces.
      </p>
      <SkillsSvg scrollYProgress={scrollYProgress} />
      <div ref={ref} className="mt-24 max-w-4/5">
        {inView && (
          <motion.div style={{ scale: scrollYProgress }}>
            {/* <img src="skills-clean.svg" alt="" /> */}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Skills;
