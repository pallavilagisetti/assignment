import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  InputBase, 
  Avatar, 
  IconButton, 
  Badge,
  Box,
  Divider,
  Container
} from '@mui/material';
import { 
  Search, 
  Home, 
  People, 
  Work, 
  Message, 
  Notifications, 
  Brightness4, 
  Brightness7,
  Apps,
  Business
} from '@mui/icons-material';

function Header({ handleThemeChange, darkMode }) {
  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0}
      sx={{ 
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* LinkedIn Logo */}
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                color: 'primary.main',
                fontSize: '2.125rem',
                fontFamily: 'system-ui',
                mr: 1,
                cursor: 'pointer'
              }}
            >
              in
            </Typography>

            {/* Search Bar */}
            <Box 
              sx={{ 
                position: 'relative',
                borderRadius: '4px',
                bgcolor: 'grey.200',
                width: 280
              }}
            >
              <Box 
                sx={{ 
                  padding: '0 12px',
                  height: '100%',
                  position: 'absolute',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'text.secondary'
                }}
              >
                <Search sx={{ fontSize: 20 }} />
              </Box>
              <InputBase
                placeholder="Search"
                sx={{ 
                  padding: '6px 8px 6px 40px',
                  width: '100%',
                  '& .MuiInputBase-input': {
                    fontSize: '0.875rem'
                  }
                }}
              />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation and Action Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Navigation Icons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <IconButton 
                color="inherit" 
                sx={{ 
                  flexDirection: 'column',
                  borderRadius: 0,
                  px: 1,
                  minWidth: 80,
                }}
              >
                <Home sx={{ fontSize: 24, mb: 0.5 }} />
                <Typography variant="caption" sx={{ fontSize: '0.75rem', lineHeight: 1.2 }}>
                  Home
                </Typography>
              </IconButton>
              
              <IconButton 
                color="inherit" 
                sx={{ 
                  flexDirection: 'column',
                  borderRadius: 0,
                  px: 1,
                  minWidth: 80,
                }}
              >
                <People sx={{ fontSize: 24, mb: 0.5 }} />
                <Typography variant="caption" sx={{ fontSize: '0.75rem', lineHeight: 1.2 }}>
                  My Network
                </Typography>
              </IconButton>
              
              <IconButton 
                color="inherit" 
                sx={{ 
                  flexDirection: 'column',
                  borderRadius: 0,
                  px: 1,
                  minWidth: 80,
                }}
              >
                <Work sx={{ fontSize: 24, mb: 0.5 }} />
                <Typography variant="caption" sx={{ fontSize: '0.75rem', lineHeight: 1.2 }}>
                  Jobs
                </Typography>
              </IconButton>
              
              <IconButton 
                color="inherit" 
                sx={{ 
                  flexDirection: 'column',
                  borderRadius: 0,
                  px: 1,
                  minWidth: 80,
                }}
              >
                <Message sx={{ fontSize: 24, mb: 0.5 }} />
                <Typography variant="caption" sx={{ fontSize: '0.75rem', lineHeight: 1.2 }}>
                  Messaging
                </Typography>
              </IconButton>
              
              <IconButton 
                color="inherit" 
                sx={{ 
                  flexDirection: 'column',
                  borderRadius: 0,
                  px: 1,
                  minWidth: 80,
                }}
              >
                <Badge badgeContent={3} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.75rem' } }}>
                  <Notifications sx={{ fontSize: 24 }} />
                </Badge>
                <Typography variant="caption" sx={{ fontSize: '0.75rem', lineHeight: 1.2, mt: 0.5 }}>
                  Notifications
                </Typography>
              </IconButton>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 1, my: 1.5 }} />

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton 
                onClick={handleThemeChange} 
                color="inherit"
                sx={{ 
                  flexDirection: 'column',
                  borderRadius: 0,
                  px: 1,
                  minWidth: 80,
                }}
              >
                {darkMode ? <Brightness7 sx={{ fontSize: 24, mb: 0.5 }}/> : <Brightness4 sx={{ fontSize: 24, mb: 0.5 }}/>}
                <Typography variant="caption" sx={{ fontSize: '0.75rem', lineHeight: 1.2 }}>Theme</Typography>
              </IconButton>
              
              <IconButton 
                color="inherit"
                sx={{ 
                  flexDirection: 'column',
                  borderRadius: 0,
                  px: 1,
                  minWidth: 80,
                }}
              >
                <Apps sx={{ fontSize: 24, mb: 0.5 }} />
                <Typography variant="caption" sx={{ fontSize: '0.75rem', lineHeight: 1.2 }}>Work</Typography>
              </IconButton>
              
              <IconButton>
                <Avatar 
                  alt="User" 
                  src="/static/images/avatar/1.jpg"
                  sx={{ 
                    width: 24, 
                    height: 24
                  }} 
                />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header; 