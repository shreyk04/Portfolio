import { Button, ConfigProvider, Space } from "antd";
import React, { useState, useRef } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";
import { motion, useAnimation, useInView } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { imageVariant, textVariants } from "../animations/motionVariants";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      > span {
        position: relative;
      }
      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }
      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

function Home() {
  const [size] = useState("small");
  const { styles } = useStyle();

  // --- Animation controls and in-view logic ---
  const { ref, controls } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="w-full flex-col-reverse flex md:flex-row gap-4 mt-10 text-gray-400 relative"
    >
      <div className="flex flex-col p-4 h-full md:w-[70%] w-full justify-center items-center">
        <motion.h1
          className="text-white text-3xl tracking-wide md:text-7xl font-bold mt-4 text-shadow-2xs "
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <span className="wave">👋</span> Hi,Welcome to my Portfolio
        </motion.h1>
        <motion.p
          className="text-[1.2rem] my-3"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          I'm Shreya Kad,a frontend developer with{" "}
          <span className="text-white font-bold">2+</span> years of experience
          crafting responsive,accessible,and performance-driven web
          applications.
        </motion.p>
        <motion.p
          className="text-[1.2rem] my-3"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          I believe in writing clean, maintainable code and continuously
          learning to stay updated with the latest web technologies.Whether it's
          a simple landing page or a complex web application,I focus on
          delivering thoughtful, user-centric solutions.
        </motion.p>
        <motion.p
          className="text-[1.2rem] my-3"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          I'm always excited to collaborate on new projects and bring innovative
          ideas to life.
        </motion.p>
        <motion.div
          className="flex gap-4 "
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <ConfigProvider
            button={{
              className: styles.linearGradientButton,
            }}
          >
            <Space className="flex flex-col md:flex-row gap-4">
              <a href="/resume.pdf" download="Resume.pdf">
                <Button type="primary" size="large" icon={<DownloadOutlined />}>
                  Download Resume
                </Button>
              </a>
              <Button size="large">Contact Me</Button>
            </Space>
          </ConfigProvider>
        </motion.div>
      </div>
      <motion.div
        className="flex items-center justify-center"
        variants={imageVariant}
        initial="hidden"
        animate={controls}
      >
        <div className="mt-8 border-2 rounded-full overflow-hidden flex items-center justify-center w-56 md:w-80 max-w-xs md:max-w-lg h-auto aspect-square">
          <img
            src="/images/Profile_Sk.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
