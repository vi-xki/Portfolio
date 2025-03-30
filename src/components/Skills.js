import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(45deg, #2196f3, #f50057);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const Skills = () => {
  const skillsData = [
    {
      title: 'Frontend',
      icon: <CodeIcon sx={{ fontSize: 40, color: 'white' }} />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: <StorageIcon sx={{ fontSize: 40, color: 'white' }} />,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Design',
      icon: <BrushIcon sx={{ fontSize: 40, color: 'white' }} />,
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'],
    },
  ];

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1a2027 0%, #0a1929 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #2196f3, #f50057)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 8,
            }}
          >
            My Skills
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} md={4} key={skill.title}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <SkillCard whileHover={{ y: -10 }}>
                  <IconWrapper
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {skill.icon}
                  </IconWrapper>
                  <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                    {skill.title}
                  </Typography>
                  {skill.skills.map((item) => (
                    <Typography
                      key={item}
                      variant="body1"
                      sx={{ color: 'text.secondary', my: 1 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </SkillCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 