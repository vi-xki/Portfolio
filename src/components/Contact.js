import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1a2027 0%, #0a1929 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              mb: 4,
            }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ color: 'text.secondary', mb: 4 }}
          >
            Let's connect! Feel free to reach out through any of these platforms.
          </Typography>
          
          <SocialLinks direction="row" showLabels={true} />

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 4,
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                },
              }}
            />
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                background: 'linear-gradient(45deg, #2196f3, #f50057)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976d2, #c51162)',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 