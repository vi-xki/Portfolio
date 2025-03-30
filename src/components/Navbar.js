import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
  background: rgba(10, 25, 41, 0.9);
  backdrop-filter: blur(10px);
`;

const MobileMenu = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0a1929 0%, #1a2027 100%);
  padding: 2rem;
`;

const MenuItem = styled(motion.div)`
  padding: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
`;

const NavButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #2196f3, #f50057);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &.active {
    color: #2196f3;
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuItems = ['About', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.toLowerCase());
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Portfolio
          </Typography>
          <IconButton 
            color="inherit" 
            onClick={() => setIsOpen(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((item) => (
              <NavButton
                key={item}
                className={activeSection === item.toLowerCase() ? 'active' : ''}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </NavButton>
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: '100%', background: 'transparent' }
        }}
      >
        <MobileMenu>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <IconButton color="inherit" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <AnimatePresence>
            {menuItems.map((item, index) => (
              <MenuItem
                key={item}
                onClick={() => scrollToSection(item)}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: activeSection === item.toLowerCase() 
                    ? 'rgba(33, 150, 243, 0.1)' 
                    : 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  {item}
                </Typography>
              </MenuItem>
            ))}
          </AnimatePresence>
        </MobileMenu>
      </Drawer>
    </>
  );
};

export default Navbar; 