import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import WalletIcon from '@mui/icons-material/Wallet';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AppLogo from '../../Components/AppLogo';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWalletAddress } from '../../Redux/Features/WalletSlice';
import { Link } from 'react-router-dom';


const pages = ['Create Market', 'Markets'];
const settings = ['Profile', 'Logout'];

function Navbar() {
  const walletAddress = useSelector((state) => state.wallet.address);

  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const connectWalletHandler = () => {
    if(window.ethereum) {
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then((accounts) => {
        setAccountHandler(accounts[0]);
      })
      .catch((err) => {
        setErrMsg(err.message);
      })
    }
    else {
      setErrMsg("Please install metamask");
    }
  }

  const setAccountHandler = (newAccount) => {
    localStorage.setItem('wallet', newAccount);
    window.location.reload();
  }

  const disconnectWalletHandler = () => {
    localStorage.removeItem('wallet');
    dispatch(setWalletAddress(null));
  }

  useEffect(() => {
    const storedWalletAddress = localStorage.getItem('wallet');
    if (storedWalletAddress) {
      // Set the wallet address in Redux state
      dispatch(setWalletAddress(storedWalletAddress));
    }
  }, [dispatch]);


  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppLogo customSx={{ display: { xs: 'none', md: 'flex' }, mr: 0 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                paddingLeft: '1rem',
              }}
            >
              LendNest
            </Typography>
            
            {walletAddress!==null ? (
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    page==='Create Market' ?
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Link to="/create-market" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography textAlign="center">{page}</Typography>
                        </Link>
                      </MenuItem>
                    :
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Link to="/markets" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography textAlign="center">{page}</Typography>
                        </Link>
                      </MenuItem>
                  ))}
                </Menu>
              </Box>
            ):(null)}

            <AppLogo customSx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.02rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LendNest
            </Typography>

            {walletAddress!==null ? (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                {pages.map((page) => (
                  page==='Create Market' ?
                    <Link to="/create-market" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        {page}
                      </Button>
                    </Link>
                  :
                    <Link to="/markets" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        {page}
                      </Button>
                    </Link>
                ))}
              </Box>
            ):(null)}

            {walletAddress===null ? (
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Tooltip title="Connect Wallet">
                <IconButton onClick={connectWalletHandler} sx={{ p: 0 }}>
                  <WalletIcon fontSize='large' />
                </IconButton>
              </Tooltip>
            </Box>
            ):(
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ display: { xs: 'none', md: 'flex' }, p: 0, backgroundColor:'#f07872', width:'100px', height:'60px', borderRadius:'50%'}}>
                    {walletAddress.slice(0, 6) + '...'}
                  </IconButton>
                  <IconButton onClick={handleOpenUserMenu} sx={{ display: { xs: 'flex', md: 'none' }, p: 0, backgroundColor:'#f07872', width:'70px', height:'40px', borderRadius:'50%'}}>
                    {walletAddress.slice(0, 2) + '..'}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    setting==='Logout' ?
                        <MenuItem key={setting} onClick={disconnectWalletHandler}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    :
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography textAlign="center">{setting}</Typography>
                        </Link>
                      </MenuItem> 
                  ))}
                </Menu>
              </Box>
            )}

            {errMsg !== null ? (
              window.alert(errMsg)
            ) : (
              null
            )}

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;