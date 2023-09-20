import React from 'react';
import Box from '@mui/material/Box';

const AppLogo = ({ customSx }) => {
  return (
    <Box
      component="img"
      src="/logo192.png"
      alt="Logo"
      style={{ height: 'auto', maxWidth: '50px' }}
      sx={customSx} // Use the customSx prop for Material-UI's sx
    />
  );
};

export default AppLogo;
