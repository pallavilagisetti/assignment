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

const peopleYouMayKnow = [
  {
    name: 'Alex Thompson',
    title: 'Senior Product Manager',
    company: 'Spotify',
    avatar: '/static/images/avatar/5.jpg',
    mutual: 3
  },
  {
    name: 'Lisa Wang',
    title: 'Data Scientist',
    company: 'Uber',
    avatar: '/static/images/avatar/6.jpg',
    mutual: 7
  },
  {
    name: 'David Kim',
    title: 'Frontend Engineer',
    company: 'Stripe',
    avatar: '/static/images/avatar/7.jpg',
    mutual: 5
  }
];

function PeopleYouMayKnow() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            People you may know
          </Typography>
          <IconButton size="small">
            <MoreHoriz />
          </IconButton>
        </Box>
        
        <List sx={{ p: 0 }}>
          {peopleYouMayKnow.map((person, index) => (
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
                  alt={person.name} 
                  src={person.avatar}
                  sx={{ width: 48, height: 48 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                    {person.name}
                  </Typography>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {person.title} at {person.company}
                    </Typography>
                    <Chip 
                      label={`${person.mutual} mutual connections`} 
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
          variant="text" 
          color="primary"
          fullWidth
          sx={{ 
            mt: 1,
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          Show more
        </Button>
      </CardContent>
    </Card>
  );
}

export default PeopleYouMayKnow; 