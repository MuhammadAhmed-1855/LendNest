import React from 'react';
import Layout from '../Layout/Layout';
import Box from '@mui/material/Box';

export const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Box
        component="img"
        src="/Images/SloganBanner.jpeg"
        alt="Banner"
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'flex' },
          paddingLeft: '10%',
          paddingRight: '10%',
          objectFit: 'cover',
          width: '100%',
          margin: '0 auto',
          zIndex: -1,
        }}
      />

    </Layout>
  )
}

export default Home;