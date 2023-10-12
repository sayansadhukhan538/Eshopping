
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';

import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import AuthContext from '../context/Auth.Context';
import { useNavigate } from 'react-router-dom';

const style = {
  color: '#1976D2',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#1976D2', // Change background color on hover
      color: 'white',
}}

export default function Topbar() {
  const{isLogin} = useContext(AuthContext);
  const{logIn} = useContext(AuthContext);
  const{logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-commerce
          </Typography>
          
          {!isLogin && <Stack spacing={2} direction="row">
      <Button onClick={logIn} variant="outlined" sx={style}>Sign In</Button>
      <Button onClick={()=>navigate('/signup')} variant="outlined" sx={style}>Sign Up</Button>
    </Stack>}
    {isLogin && <Stack spacing={2} direction="row">
      <Button onClick={logOut} variant="outlined" sx={style}>Sign Out</Button>
      <Button onClick={()=>navigate('/cart')} variant="outlined" sx={style}>Cart</Button>
    </Stack>}
    
        </Toolbar>
      </AppBar>
    </Box>
  );
}
