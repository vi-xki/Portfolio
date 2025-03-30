import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageScroller = styled(Box)`
  position: relative;
  height: 400px;
  overflow: hidden;

  .scroll-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    animation: scroll 20s linear infinite;
  }

  @keyframes scroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
`;

const About = () => {
  const technologies = [
    '/tech1.png',
    '/tech2.png',
    '/tech3.png',
    // Add more technology logos
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1a2027 0%, #0a1929 100%)',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" gutterBottom>
                About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                I'm a passionate Full Stack Developer with expertise in modern web technologies.
                I create responsive and user-friendly applications using the latest frameworks
                and best practices.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <StyledPaper>
                    <Typography variant="h6" gutterBottom>
                      Experience
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      3+ years of professional experience in web development
                    </Typography>
                  </StyledPaper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledPaper>
                    <Typography variant="h6" gutterBottom>
                      Education
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bachelor's in Computer Science
                    </Typography>
                  </StyledPaper>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageScroller>
              <Box className="scroll-container">
                {[...technologies, ...technologies].map((tech, index) => (
                  <motion.img
                    key={index}
                    src={tech}
                    alt={`Technology ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100px',
                      objectFit: 'contain',
                      margin: '1rem 0',
                    }}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </Box>
            </ImageScroller>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 