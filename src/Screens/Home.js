import React from 'react';
import Layout from '../Layout/Layout';
import { Box, Typography, Grid } from '@mui/material';


export const Home = () => {
  return (
    <Layout>
      
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'flex' },
          paddingBottom: '5%',
          paddingLeft: '5%',
          paddingRight: '5%',
          position: 'relative', // Add relative positioning
        }}
      >
        <img
          src="/Images/BannerSlogan.jpg"
          alt="Banner"
          style={{
            width: '100%',
            objectFit: 'cover',
            margin: '0 auto',
            zIndex: -1,
            opacity: 0.25,
          }}
        />
        <Typography
          variant="h4"
          fontWeight={500}
          sx={{
            display: 'flex',
            position: 'absolute',
            top: { xs: '50%', md: '35%' },
            left: '50%',
            transform: 'translate(-50%, -50%)', 
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          Your Personalized Lending Universe
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'flex' },
          padding: '5%',
          position: 'relative', // Add relative positioning
        }}
      >
        <Typography
          variant="h2"
          fontWeight={500}
          sx={{
            display: 'flex',
            position: 'absolute',
            top: { xs: '50%', md: '35%' },
            left: '50%',
            transform: 'translate(-50%, -50%)', 
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          WELCOME TO LENDNEST
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'flex' },
          padding: '5%',
          position: 'relative', // Add relative positioning
        }}
      >
        <Grid container spacing={2}>
        
          {/* Left side: Centralized line and paragraph */}
          <Grid item xs={12} md={6}>
            
            <Typography
              variant="p"
              sx={{
                marginTop: 3,
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              At LendNest, we embark on a journey to revolutionize decentralized lending. Here, we offer innovative solutions to financial challenges. For lenders, we've streamlined the process of creating smart contracts, removing the complexities that often come with it. Borrowers can diversify their collateral options and access funds more conveniently. With transparent fee structures and reliable collateral holding, trust is at the heart of our ecosystem.
            </Typography>
          </Grid>

          {/* Right side: Image */}
          <Grid item xs={12} md={6}>
            <img
              src="/Images/WhatOffer.jpeg"
              alt="Banner"
              style={{
                width: '100%',
                objectFit: 'cover',
                margin: '0 auto',
                zIndex: -1,
                opacity: 0.4,
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'flex' },
          padding: '5%',
          position: 'relative', // Add relative positioning
        }}
      >
        <Typography
          variant="h4"
          fontWeight={500}
          sx={{
            display: 'flex',
            position: 'absolute',
            top: { xs: '50%', md: '35%' },
            left: '50%',
            transform: 'translate(-50%, -50%)', 
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          "Empowering you to customize loans, open markets, and explore the limitless potential of blockchain lending."
        </Typography>
      </Box>

    </Layout>
  )
}

export default Home;