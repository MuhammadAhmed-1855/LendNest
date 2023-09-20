import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Profile from './Screens/Profile';
import CreateMarket from './Screens/CreateMarket';
import Markets from './Screens/Markets';

import StarSky from "react-star-sky";
import "react-star-sky/dist/index.css";

import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {

  const darktheme = createTheme({
    palette: {
      primary: {
        main: "#ff0000",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#f44336",
        contrastText: "#ffffff"
      },
      background: {
        default: "#000000",
        paper: "#131313"
      },
      text: {
        primary: "#ffffff",
        secondary: "#ffffff"
      }
    }
  });

  const lighttheme = createTheme({
    palette: {
      primary: {
        main: "#ff0000"
      },
      secondary: {
        main: "#f44336"
      },
      background: {
        default: "#ffffff",
      },
      text: {
        primary: "#000000",
        secondary: "#000000"
      }
    }
  });

  const theme = useState(true) ? darktheme : lighttheme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StarSky
          isPageBackground={true}
          frameRate={60}
          starColor={[255, 255, 255]}
          backgroundColor={[0, 0, 0]}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/create-market' element={<CreateMarket />} />
            <Route path='/markets' element={<Markets />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
