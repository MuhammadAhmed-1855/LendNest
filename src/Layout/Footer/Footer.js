import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LabelBottomNavigation() {

  const handleChange = (event) => {
    window.open("https://github.com/MuhammadAhmed-1855/LendNest", "_blank");
  };

  return (
    <BottomNavigation sx={{ width: '100%', position:'relative', bottom:'0' }} onChange={handleChange}>
      <BottomNavigationAction
        label="GitHub"
        value="GitHub"
        icon={<GitHubIcon />}
      />
    </BottomNavigation>
    
  );
}
