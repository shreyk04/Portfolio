export const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  };
  
  export const imageVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
      },
    },
  };
  export const bounceVariants = (index) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: index % 2 === 0 ? 4 : 7, // alternate speed
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.5, // optional pause
      },
    },
  });
  
