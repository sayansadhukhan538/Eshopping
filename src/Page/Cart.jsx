import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
  Grid,
  Card,
} from "@mui/material";
import { useContext } from "react";
import CartContext from "../context/Cart.Context";
import { Link, NavLink } from "react-router-dom";
import { Stack } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const { cart } = useContext(CartContext);
  const { removeFromCart, handleQuantityChange } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (<div style={{backgroundColor: "#f1f3f6",height:'100vh'}}>
    <Container sx={{ paddingTop: 2 }}>
      {cart.length === 0 ? (
        <Typography variant="body2">Your cart is empty.</Typography>
      ) : (
        <Grid container>
          <Grid item xs={12} md={8} sx={{ width: "70%" }}>
            <Typography variant="h4" sx={{paddingBottom:1}}>Shopping Cart</Typography>
            <Card>
              <TableContainer component={Paper} sx={{ width: "100%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell><Typography>{cart.length===1 ? 'Product':'Products'}</Typography></TableCell>
                      <TableCell><Typography>Price</Typography></TableCell>
                      <TableCell><Typography sx={{textAlign:'center'}}>Total Quantity</Typography></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ width: "100%" }}>
                    {cart.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Link to={`/product/${item.id}`} >
                            <img
                              src={item.image}
                              height="97"
                              width="97"
                              alt=""
                            />
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Link to={`/product/${item.id}`} style={{textDecoration:'none'}}>{item.title}</Link>
                        </TableCell>
                        <TableCell>
                          ${(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Select
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(e, item.id)}
                          >
                            {[1, 2, 3, 4, 5].map((value) => (
                              <MenuItem key={value} value={value}>
                                {value}
                              </MenuItem>
                            ))}
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <DeleteIcon />
                            Remove
                          </Button>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sx={{ paddingLeft: "16px" }}>
            <Typography variant="h4" sx={{paddingBottom:1}}>Price Details</Typography>
            <Card sx={{ marginBottom: 6 }}>
              <TableContainer sx={{}}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography>
                          Price of ( 
                          <em>{cart.length !== 0 && cart.length} {cart.length===1? 'item':'items'}</em> ) :
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {cart.length !== 0 && (
                          <Typography variant="h6" gutterBottom>
                            ${total.toFixed(2)}
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography>Discount :</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "rgb(56, 142, 60)" }}>
                          30%
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell><Typography>Delivery Charge :</Typography></TableCell>
                      <TableCell >
                      <s>$40</s><Typography sx={{display:'inline', color: "rgb(56, 142, 60)"}}> Free</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell><Typography>Secure Packaging Fees :</Typography></TableCell>
                      <TableCell><Typography>$0</Typography></TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="h5">Total Amount</Typography>
                      </TableCell>
                      <TableCell>
                        {cart.length !== 0 && (
                          <Typography variant="h5" gutterBottom>
                            ${total.toFixed(2)}
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      
                      <TableCell sx={{ color: "rgb(56, 142, 60)" }}>
                        <Typography>You save 31.28%  </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>

            <Stack direction="row" spacing={4}>
              {cart.length === 0 ? (
                <NavLink to="/dashboard">
                  <Button variant="contained" color="secondary">
                    Continue Shop
                  </Button>
                </NavLink>
              ) : (
                <Button variant="contained" color="primary">
                  Proceed to Checkout
                </Button>
              )}
              <NavLink to="/dashboard">
                <Button variant="contained" color="secondary">
                  Shop More
                </Button>
              </NavLink>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Container>
    </div>
  );
}

export default Cart;
