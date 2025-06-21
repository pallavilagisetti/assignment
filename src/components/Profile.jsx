import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Button, 
  IconButton, 
  TextField,
  Box,
  Chip,
  Divider
} from '@mui/material';
import { 
  Edit, 
  Save, 
  Add,
  MoreHoriz,
  LocationOn,
  Business,
  School
} from '@mui/icons-material';

const initialUser = {
  name: 'Pallavi Lagisetti',
  title: 'MERN Developer',
  description: 'Building the future, one line of code at a time. Passionate about creating innovative solutions that make a difference.',
  avatar: '/static/images/avatar/1.jpg',
  location: 'Hyderabad , Telangana ,India',
  company: 'Google',
  education: 'Vel Tech University',
  connections: '500+ connections'
};

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Card sx={{ maxWidth: '100%', mb: 2 }}>
      {/* Cover Photo */}
      <Box
        sx={{
          height: 200,
          background: 'linear-gradient(135deg, #0073b1 0%, #00a0dc 100%)',
          position: 'relative',
          borderRadius: '8px 8px 0 0'
        }}
      />
      
      {/* Profile Picture */}
      <Box sx={{ position: 'relative', ml: 3, mt: -8 }}>
        <Avatar 
          alt={user.name} 
          src={user.avatar} 
          sx={{ 
            width: 152, 
            height: 152, 
            border: '4px solid white',
            boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)'
          }} 
        />
      </Box>

      <CardContent sx={{ pt: 1, px: 3 }}>
        {/* Header Actions */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton size="small" sx={{ mr: 1 }}>
            <MoreHoriz />
          </IconButton>
          <IconButton onClick={handleEditToggle} size="small" sx={{ mr: 1 }}>
            {isEditing ? <Save /> : <Edit />}
          </IconButton>
        </Box>

        {/* Name and Title */}
        {isEditing ? (
          <Box sx={{ mb: 2 }}>
            <TextField
              name="name"
              label="Name"
              value={user.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              size="small"
            />
            <TextField
              name="title"
              label="Title"
              value={user.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              size="small"
            />
          </Box>
        ) : (
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 0.5 }}>
              {user.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
              {user.title}
            </Typography>
          </Box>
        )}

        {/* Location and Company */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3, mb: 1 }}>
            <LocationOn sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {user.location}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3, mb: 1 }}>
            <Business sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {user.company}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <School sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {user.education}
            </Typography>
          </Box>
        </Box>

        {/* Connections */}
        <Typography variant="body2" color="primary" sx={{ mb: 2, fontWeight: 500 }}>
          {user.connections}
        </Typography>

        {/* About Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            About
          </Typography>
          {isEditing ? (
            <TextField
              name="description"
              label="About"
              value={user.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              size="small"
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {user.description}
            </Typography>
          )}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ 
              borderRadius: '16px',
              textTransform: 'none',
              fontWeight: 600,
              px: 2
            }}
          >
            Open to
          </Button>
          <Button 
            variant="outlined" 
            color="primary"
            sx={{ 
              borderRadius: '16px',
              textTransform: 'none',
              fontWeight: 600,
              px: 2
            }}
          >
            Add profile section
          </Button>
          <Button 
            variant="outlined" 
            color="primary"
            sx={{ 
              borderRadius: '16px',
              textTransform: 'none',
              fontWeight: 600,
              px: 2
            }}
          >
            More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Profile; 