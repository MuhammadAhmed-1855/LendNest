import React from 'react';
import Layout from '../Layout/Layout';
import { Box, Typography, Grid } from '@mui/material';

export const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '5%',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
      >
        <div style={{ position: 'relative' }}>
          <img
            src="/Images/BannerSlogan.jpg"
            alt="Banner"
            style={{
              width: '100%',
              objectFit: 'cover',
              margin: '0',
              zIndex: -1,
              opacity: 0.25,
            }}
          />
          <Typography
            variant="h1"
            fontWeight={500}
            sx={{
              background: 'linear-gradient(45deg, #ff0000, #ffffff, #800080)',
              backgroundSize: '200% 100%', // Double the width for animation
              animation: 'gradientAnimation 25s cubic-bezier(0.25, 1, 0.5, 1) infinite',
              padding: '1%',
              textAlign: 'center',
              position: 'absolute',
              top: '50%', // Center vertically
              left: '50%', // Center horizontally
              transform: 'translate(-50%, -50%)', // Correct centering
              fontSize: '4rem', // Responsive font size
              WebkitBackgroundClip: 'text', // Clip text to the gradient
              color: 'transparent', // Make text transparent
            }}
          >
            Your Personalized Lending Universe
          </Typography>
        </div>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '5%',
        }}
      >
        <Typography
          variant="h2"
          fontWeight={500}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1%',
            textAlign: 'center',
            width: '100%',
            position: 'relative', // Add relative positioning here
            top: '50%', // Center vertically
            left: '50%', // Center horizontally
            transform: 'translate(-50%, -50%)', // Correct centering
            fontSize: '3rem', // Responsive font size
          }}
        >
          WELCOME TO LENDNEST
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '5%',
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
                margin: '0',
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
          display: 'flex',
          flexDirection: 'column',
          padding: '10%',
        }}
      >
        <Typography
          variant="h4"
          fontWeight={500}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1%',
            textAlign: 'center',
            width: '100%',
            position: 'relative', // Add relative positioning here
            top: '50%', // Center vertically
            left: '50%', // Center horizontally
            transform: 'translate(-50%, -50%)', // Correct centering
            fontSize: '2rem', // Responsive font size
          }}
        >
          "Empowering you to customize loans, open markets, and explore the limitless potential of blockchain lending."
        </Typography>
      </Box>

      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 200% 0; // Initial position, fully to the right
            }
            100% {
              background-position: -100% 0; // Move fully to the left
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
