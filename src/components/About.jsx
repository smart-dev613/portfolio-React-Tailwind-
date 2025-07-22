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
            href="https://www.linkedin.com/in/antonio-fernandez-364928372"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            Antonio Fernandez,
          </a>
          {' '}
          Senior Full-Stack Engineer with 9+ years of experience building secure, scalable systems across FinTech and E-commerce industries. Skilled in developing end-to-end platforms using React, Node.js, NestJS, PHP, Java, and .NET Core. Proven record delivering high-volume transactional systems, fraud detection engines, credit onboarding flows, and e-commerce CMS tools. Strong background in Agile delivery, platform migration, and regulatory compliance (KYC, GDPR). Comfortable collaborating with cross-border product teams using modern DevOps and CI/CD tools
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
          Graduated with a Bachelor of Science in computer engineering from
          {' '}
          <a
            href="https://www.usal.es/en"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            University of Salamanca
          </a>
          {' '}
          (2012-2016), holding a strong GPA of 8.4(/10).
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
