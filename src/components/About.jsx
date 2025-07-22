import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <div>
      <motion.h1 variants={textVariant()} className={style.title}>
        About Me
      </motion.h1>
      <div className={style.para}>
        <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
          Hey there! I&apos;m
          {' '}
          <a
            href="https://www.linkedin.com/in/jin-guo-a95196368"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            Jinyi Guo(Jin),
          </a>
          {' '}
          Senior Full-Stack Engineer & WordPress Developer with 10+ years of experience creating scalable SaaS, AI-enhanced platforms, and multilingual content systems. Expert in React, Node.js, Spring Boot, and headless WordPress with deep cloud-native experience across AWS. Proven success in building high-performance applications with modern DevOps, LLM integration (GPT-4, LangChain), and eCommerce architecture (WooCommerce, Stripe). Known for delivering reliable solutions at scale, mentoring teams, and driving innovation with impact.
        </motion.p>
        <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
          You can explore my work my
          {' '}
          <a
            href="https://github.com/mybuddy4305"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            {' '}
            GitHub
          </a>
          {' '}
          and view my detailed experience in my
          {' '}
          <a
            href="https://github.com/mybuddy4305"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            {' '}
            resume.
          </a>
        </motion.p>
      </div>
    </div>
    <div>
      <motion.h1 variants={textVariant()} className={style.title}>
        Education
      </motion.h1>
      <div className={style.para}>
        <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
          Graduated with a Bachelor of Science in Electrical Engineering & Computer Science from
          {' '}
          <a
            href="https://www.ntust.edu.tw/?Lang=en"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            National Taiwan University of Science and Technology
          </a>
          {' '}
          (2011-2015), holding a strong GPA of 3.6.
        </motion.p>
        <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
          Over the past 10 years, I’ve led and delivered enterprise-grade full stack solutions across diverse domains, combining deep technical expertise with proven engineering leadership.
          My academic foundation and real-world impact consistently drive teams and products forward — no technical test needed.
        </motion.p>
      </div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
