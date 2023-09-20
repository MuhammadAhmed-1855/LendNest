import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Profile from './Screens/Profile';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
