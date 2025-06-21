import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemAvatar, 
  Avatar, 
  ListItemText,
  Box,
  IconButton,
  Button
} from '@mui/material';
import { Add, Edit } from '@mui/icons-material';

const experiences = [
  {
    company: 'Block se Block',
    title: 'Junior Software Engineer',
    period: 'Jan 2025 - Present',
    duration: '8 mos',
    location: 'Mountain View, CA, USA',
    description: 'Leading development of scalable web applications using React, Node.js, and Google Cloud Platform.',
    logo: '/block.png' // Correct path for Vite (public/block.png)
  },
  {
    company: 'Facebook',
    title: 'Software Engineer',
    period: 'Jun 2020 - Dec 2021',
    duration: '1 yr 7 mos',
    location: 'Chennai, Tamil Nadu, India',
    description: "Developed and maintained Facebook's internal tools and infrastructure.",
    logo: <img src='/assignment/public/block.png'></img> // Correct path for Vite (public/face.png)
  },
  {
    company: 'Microsoft',
    title: 'Software Engineer Intern',
    period: 'May 2019 - Aug 2019',
    duration: '4 mos',
    location: 'Hyderabad, Telangana, India',
    description: 'Worked on Azure cloud services and contributed to open-source projects.',
    logo: '/mic.png' // Correct path for Vite (public/mic.png)
  }
];



function Experience() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Experience
          </Typography>
          <Box>
            <IconButton size="small" sx={{ mr: 1 }}>
              <Add />
            </IconButton>
            <IconButton size="small">
              <Edit />
            </IconButton>
          </Box>
        </Box>
        
        <List sx={{ p: 0 }}>
          {experiences.map((exp, index) => (
            <ListItem 
              key={index} 
              sx={{ 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                p: 0, 
                mb: 3,
                '&:last-child': { mb: 0 }
              }}
            >
              <Box sx={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
                <ListItemAvatar sx={{ minWidth: 56, mt: 0.5 }}>
                  <Avatar 
                    alt={exp.company} 
                    src={exp.logo}
                    sx={{ 
                      width: 48, 
                      height: 48,
                      bgcolor: '#f3f2ef'
                    }} 
                  />
                </ListItemAvatar>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="body1" color="primary" sx={{ fontWeight: 500, mb: 0.5 }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {exp.period} · {exp.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {exp.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.description}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
        
        <Button 
          variant="outlined" 
          color="primary"
          startIcon={<Add />}
          sx={{ 
            mt: 2,
            borderRadius: '16px',
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          Add experience
        </Button>
      </CardContent>
    </Card>
  );
}

export default Experience; 