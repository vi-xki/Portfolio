import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={isVisible}>
      <motion.div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Fab
          color="primary"
          onClick={scrollToTop}
          sx={{
            background: 'linear-gradient(45deg, #2196f3, #f50057)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1976d2, #c51162)',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </motion.div>
    </Zoom>
  );
};

export default ScrollToTop; 