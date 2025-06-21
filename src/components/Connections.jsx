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
  Button,
  Chip
} from '@mui/material';
import { Add, MoreHoriz } from '@mui/icons-material';

const connections = [
  {
    name: 'Sarah Johnson',
    title: 'Product Manager at Apple',
    avatar: '/static/images/avatar/2.jpg',
    mutual: 12
  },
  {
    name: 'Michael Chen',
    title: 'Software Engineer at Netflix',
    avatar: '/static/images/avatar/3.jpg',
    mutual: 8
  },
  {
    name: 'Emily Rodriguez',
    title: 'UX Designer at Airbnb',
    avatar: '/static/images/avatar/4.jpg',
    mutual: 15
  }
];

function Connections() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Connections
          </Typography>
          <IconButton size="small">
            <MoreHoriz />
          </IconButton>
        </Box>
        
        <List sx={{ p: 0 }}>
          {connections.map((conn, index) => (
            <ListItem 
              key={index} 
              sx={{ 
                p: 0, 
                mb: 2,
                '&:last-child': { mb: 0 }
              }}
            >
              <ListItemAvatar>
                <Avatar 
                  alt={conn.name} 
                  src={conn.avatar}
                  sx={{ 
                    width: 48, 
                    height: 48,
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.8
                    }
                  }} 
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                    {conn.name}
                  </Typography>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {conn.title}
                    </Typography>
                    <Chip 
                      label={`${conn.mutual} mutual connections`} 
                      size="small" 
                      variant="outlined"
                      sx={{ 
                        height: 20, 
                        fontSize: '0.75rem',
                        '& .MuiChip-label': { px: 1 }
                      }}
                    />
                  </Box>
                }
              />
              <IconButton size="small" sx={{ ml: 1 }}>
                <Add />
              </IconButton>
            </ListItem>
          ))}
        </List>
        
        <Button 
          variant="outlined" 
          color="primary"
          fullWidth
          sx={{ 
            mt: 2,
            borderRadius: '16px',
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          Show all connections
        </Button>
      </CardContent>
    </Card>
  );
}

export default Connections; 