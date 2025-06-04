import { Button, ConfigProvider, Space } from "antd";
import React, { useState } from "react";
import { AntDesignOutlined, DownloadOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";
import {delay, motion} from 'framer-motion'



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


const textVariants={
  hidden:{opacity:0,y:-50},
  visible:(i=1)=>({
    opacity:1,
    y:0,
    transition:{

      delay:1,
      duration:0.8
    }
  })
}

const imageVariant={
  hidden:{
    opacity:0,x:100
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      delay:1,
      duration:0.8
    }
  }
}



function Home() {
  const [size, setSize] = useState("small"); // default is 'large'
  const { styles } = useStyle();

  return (
    <div className="w-full flex-col-reverse  flex  md:flex-row  gap-4 mt-10 text-gray-400 relative">
      <div className="flex flex-col p-8 h-full md:w-[70%]" >
        <motion.h1 className="text-white text-4xl md:text-7xl font-bold mt-4 " initial="hidden" animate="visible" variants={textVariants}>
          👋 Hi,Welcome to my Portfolio
        </motion.h1>
        <motion.p className="text-[1.2rem] my-3" initial="hidden" animate="visible" custom={1} variants={textVariants}>
          I'm Shreya Kad,a frontend developer with{" "}
          <span className="text-white font-bold">2+</span> years of experience
          crafting responsive,accessible,and performance-driven web
          applications.
        </motion.p>
        <motion.p className="text-[1.2rem] my-3" initial="hidden" animate="visible" custom={1} variants={textVariants}>
          I believe in writing clean, maintainable code and continuously
          learning to stay updated with the latest web technologies.Whether it's
          a simple landing page or a complex web application,I focus on
          delivering thoughtful, user-centric solutions.
        </motion.p>
        <motion.p className="text-[1.2rem] my-3" initial="hidden" animate="visible" custom={1} variants={textVariants}>
          I'm always excited to collaborate on new projects and bring innovative
          ideas to life.
        </motion.p>
        <motion.div className=" flex gap-4" initial="hidden" animate="visible" custom={1} variants={textVariants}>
          <ConfigProvider
            button={{
              className: styles.linearGradientButton,
            }}
          >
            <Space>
              <a href="/resume.pdf" download="Resume.pdf">
                     {" "}
                <Button type="primary" size="large" icon={<DownloadOutlined />}>
                          Download Resume      {" "}
                </Button>
                   {" "}
              </a>

              <Button size="large">Contact Me</Button>
            </Space>
          </ConfigProvider>
        </motion.div>
      </div>
      <motion.div className="flex items-center justify-center" initial="hidden" animate="visible" custom={2} variants={imageVariant}>
        <div className="h-80 w-80 border-2 rounded-full overflow-hidden flex items-center justify-center">
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
