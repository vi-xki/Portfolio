import React from 'react';
import { Box, Container, Typography, Button, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import SocialLinks from './SocialLinks';

const HeroSection = styled(Box)`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a1929 0%, #1a2027 100%);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%);
  }
`;

const AnimatedBackground = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 150vmax;
    height: 150vmax;
    top: -50vmax;
    left: -50vmax;
    z-index: -1;
    background: rgba(255, 255, 255, 0.03);
    animation: move 25s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform-origin: center;
  }

  &::after {
    animation-delay: -5s;
    animation-duration: 30s;
    background: rgba(255, 255, 255, 0.02);
  }

  @keyframes move {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ProfileAvatar = styled(motion.div)`
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  border-radius: 50%;
  background: linear-gradient(45deg, #2196f3, #f50057);
  padding: 3px;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: inherit;
    border-radius: inherit;
    filter: blur(10px);
    opacity: 0.4;
    z-index: -1;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 100%;
  height: 100%;
  border: 4px solid ${props => props.theme.palette.background.paper};
`;

const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 1;
`;

const Hero = () => {
  return (
    <HeroSection>
      <AnimatedBackground />
      <Container maxWidth="xl">
        <ContentWrapper>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(45deg, #2196f3, #f50057)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Hi, I'm Vikram
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: 'text.secondary', mb: 4 }}
                >
                  Full Stack Developer
                </Typography>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: '30px',
                      px: 4,
                      py: 2,
                      background: 'linear-gradient(45deg, #2196f3, #f50057)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1976d2, #c51162)',
                      },
                    }}
                  >
                    View My Work
                  </Button>
                </motion.div>
                <SocialLinks />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                <ProfileAvatar>
                  <StyledAvatar
                    alt="Vikram"
                    src="/src/assets/images/profileimage3.png" // Add your profile picture path
                    sx={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </ProfileAvatar>
              </motion.div>
              <Box
                sx={{
                  position: 'relative',
                  mt: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {tech}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero; 