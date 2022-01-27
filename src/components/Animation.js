export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 1000,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    x: -5000,
    transition: {
      duration: 0.5,
    },
  },
};
