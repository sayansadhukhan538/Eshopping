/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Badge, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
import AuthContext from "../context/Auth.Context";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/Cart.Context";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
const style = {
  color: "#1976D2",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#1976D2",
    color: "white",
  },
};

export default function Topbar() {
  
  const { isLogin } = useContext(AuthContext);
  const { logIn } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);
  const {cart} = useContext(CartContext);
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign:'center' }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            





            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              E-commerce
            </Typography>

            {!isLogin && (
              <Stack spacing={2} direction="row">
                <Button onClick={logIn} variant="outlined" sx={style}>
                  Sign In
                </Button>
                
                <Button
                  onClick={() => navigate("/signup")}
                  variant="outlined"
                  sx={style}
                >
                  Sign Up
                </Button>
              </Stack>
            )}
            {isLogin && (
              <Stack spacing={6} direction="row">
                <Button onClick={logOut} variant="outlined" sx={style}>
                Sign Out <LogoutIcon/> 
                </Button>

                
            
            
              <Badge badgeContent={cart.length} color="error" anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  overlap=""
  >
              <Button
                  onClick={() => navigate("/cart")}
                  variant="outlined"
                  sx={style}
                >
                cart  {cart.length===0? <AddShoppingCartIcon />:<ShoppingCartIcon/>} 
                </Button> 
              </Badge>
            
                
              </Stack>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)} >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
          
          <ListItem  disablePadding>
            <ListItemButton onClick={()=>navigate('dashboard')} sx={{ textAlign: 'center', width: 300  }}>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton  onClick={()=>navigate('wishlist')} sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Wishlist'} />
            </ListItemButton>
          </ListItem>
        
            {/* Add more list items for your menu */}
          </List>
        </div>
      </Drawer>
      <Toolbar />
    </>
  );
}

