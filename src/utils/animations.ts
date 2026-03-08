export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const slideIn = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
  transition: { type: 'spring', stiffness: 100 },
};

export const scaleUp = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
  transition: { duration: 0.5 },
};