import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: x - 8,
      y: y - 8,
      scale: 1,
      backgroundColor: 'rgba(29, 78, 216, 0.7)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: x - 24,
      y: y - 24,
      scale: 2.5,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
