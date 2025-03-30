import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      image: 'https://via.placeholder.com/300x200',
    },
    // Add more projects as needed
  ];

  return (
    <Box
      id="projects"
      component="section"
      py={8}
    >
      <Typography variant="h4" textAlign="center" mb={4}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.03 }}
              elevation={3}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 