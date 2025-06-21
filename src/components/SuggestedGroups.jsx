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
import { Add, MoreHoriz, Business } from '@mui/icons-material';

const suggestedGroups = [
  { name: 'React Developers', members: '45,678 members' },
  { name: 'JavaScript Community', members: '123,456 members' },
  { name: 'Tech Leaders Network', members: '89,012 members' }
];

function SuggestedGroups() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Suggested groups
          </Typography>
          <IconButton size="small">
            <MoreHoriz />
          </IconButton>
        </Box>
        
        <List sx={{ p: 0 }}>
          {suggestedGroups.map((group, index) => (
            <ListItem 
              key={index} 
              sx={{ 
                p: 0, 
                mb: 2,
                '&:last-child': { mb: 0 }
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                  <Business />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                    {group.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {group.members}
                  </Typography>
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

export default SuggestedGroups; 