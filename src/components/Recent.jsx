import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemText
} from '@mui/material';

const recentItems = [
  { text: '# javascript', count: '2,345 posts' },
  { text: '# react', count: '1,234 posts' },
  { text: '# webdev', count: '3,456 posts' },
  { text: '# softwareengineering', count: '1,789 posts' }
];

function Recent() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Recent
        </Typography>
        
        <List sx={{ p: 0 }}>
          {recentItems.map((item, index) => (
            <ListItem 
              key={index} 
              sx={{ 
                p: 0, 
                mb: 1,
                cursor: 'pointer',
                '&:hover': { bgcolor: 'action.hover' },
                borderRadius: 1
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {item.text}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {item.count}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Recent; 