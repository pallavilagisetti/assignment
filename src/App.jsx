import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Grid, Stack } from '@mui/material';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Connections from './components/Connections';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#0073b1',
      },
      background: {
        default: darkMode ? '#000000' : '#f3f2ef',
        paper: darkMode ? '#1d2226' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)',
          },
        },
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header handleThemeChange={handleThemeChange} darkMode={darkMode} />
        
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Grid container spacing={3} alignItems="flex-start">
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              <Stack spacing={2}>
                <Profile />
                <Experience />
                <Connections />
              </Stack>
            </Grid>
            
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Sidebar />
                </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
