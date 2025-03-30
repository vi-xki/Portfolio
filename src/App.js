import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: darkMode ? '#0a1929' : '#f5f5f5',
        paper: darkMode ? '#1a2027' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#b0bec5' : '#666666',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
      h1: {
        fontSize: '3.5rem',
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
    },
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ background: theme.palette.background.default, minHeight: '100vh' }}>
        <IconButton
          onClick={() => setDarkMode(!darkMode)}
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 1100,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App; 