import React from 'react';
import { Box } from '@mui/material';
import PeopleYouMayKnow from './PeopleYouMayKnow';
import Recent from './Recent';
import SuggestedGroups from './SuggestedGroups';

function Sidebar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <PeopleYouMayKnow />
      <Recent />
      <SuggestedGroups />
    </Box>
  );
}

export default Sidebar; 