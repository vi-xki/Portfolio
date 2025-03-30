import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import styled from '@emotion/styled';

const SocialIconButton = styled(IconButton)`
  margin: 0 8px;
  color: white;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #2196f3, #f50057);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  & > svg {
    position: relative;
    z-index: 1;
  }
`;

const socialLinks = [
  {
    name: 'GitHub',
    icon: <GitHubIcon />,
    url: 'https://github.com/yourusername',
    color: '#333',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://linkedin.com/in/yourusername',
    color: '#0077b5',
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon />,
    url: 'https://twitter.com/yourusername',
    color: '#1da1f2',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    url: 'https://instagram.com/yourusername',
    color: '#e4405f',
  },
  {
    name: 'Email',
    icon: <EmailIcon />,
    url: 'mailto:your.email@example.com',
    color: '#ea4335',
  },
];

const SocialLinks = ({ direction = 'row', showLabels = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: direction,
          gap: 2,
          my: 3,
        }}
      >
        {socialLinks.map((social) => (
          <motion.div key={social.name} variants={itemVariants}>
            <Tooltip title={social.name} placement="top">
              <SocialIconButton
                component={motion.a}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </SocialIconButton>
            </Tooltip>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default SocialLinks; 