/* eslint-disable react/prop-types */

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../service/Product";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/Cart.Context";
import StarIcon from '@mui/icons-material/Star';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import WishContext from "../context/Wishlist.Context";

export default function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState();
  const { addToCart, removeFromCart, cart, handleQuantityChange } = useContext(CartContext);
  const {addToWishList,removeFromWishList, wishList} = useContext(WishContext);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);


  async function getSingleDetails() {
    const result = await getSingleProduct(id);
    if (result.isSuccess) {
      setData(result.data);
      console.log(data);
    }
  }
  
useEffect(() => {
    const productInCart = cart.find((product) => product.id === data?.id);
    if (productInCart) {
      setQuantity(productInCart.quantity);
    } else {
      setQuantity(1);
    }
  }, [cart, data]);
  


  

  
  useEffect(() => {
    getSingleDetails();
    console.log("Updated quantity:", quantity);
    console.log(id);
  }, [id, cart]);

  return (
    <Container maxWidth="">
      {data && (
        <Card>
          {console.log("this is cart", cart)}
          <Grid container>
            <Grid item xs={12} md={6}>
              <CardMedia
                sx={{
                  padding: "36px",
                  display: "block",
                  margin: "auto",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                component="img"
                height="100%"
                image={data.image}
                alt={data.title}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent
                sx={{
                  padding: "36px",
                  "&:hover": {
                    boxShadow: "0 0 10px black",
                  },
                }}
              >
                <Typography variant="h4" component="div">
                  {data.title}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Category: {data.category}
                </Typography>

                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ margin: "20px auto" }}
                >
                  MRP: ${data.price}
                  <br />
                </Typography>
                <Typography
                  color="default"
                  style={{ display: "inline", fontSize: "28px" }}
                >
                  {data.rating.rate}
                </Typography>
              
                <Rating
                  name="simple-controlled"
                  value={data?.rating.rate}
                  readOnly
                  precision={0.5}
                  style={{
                    color:
                      data?.rating.rate > 3
                        ? "rgb(56, 142, 60)"
                        : "rgb(250, 175, 0)",
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                
                
                <Typography style={{ display: "inline", fontSize: "28px" }}>
                  ({data.rating.count})
                </Typography>
                <br />
                <Accordion sx={{ marginBottom: 5, marginTop: 5 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {" "}
                      <em>About the Product:</em>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="textSecondary">
                      {data.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Grid container spacing={10}>
                  <Grid item xs={12} md={5} sx={{ padding: 2 }}>
                    <FormControl sx={{ width: "100%", minWidth: "120px" }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                          marginTop: "10px",
                          // fontSize: "1rem",
                          color: "text.primary",
                        }}
                      >
                        Select Quantity
                      </InputLabel>
                      <Select  value={quantity}
                      onChange={(e) =>
                        
                        handleQuantityChange(e,data.id)
                      }>
                        {[1, 2, 3, 4, 5].map((value) => (
                          <MenuItem key={value} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                      <br />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography sx={{ width: "100%"}}>
                      {cart.some((product) => product.id === data.id) ? (
                        <Button
                          variant="contained"
                          sx={{ minHeight: "56px" }}
                          onClick={() => {
                            removeFromCart(data.id);
                          }}
                        >
                          Remove From Cart
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          sx={{ minHeight: "56px", minWidth: "200px" }}
                          onClick={() => {
                            addToCart(data, quantity);
                          }}
                        >
                          Add to cart
                        </Button>
                      )}
                    </Typography>
                  </Grid>
                    <Stack direction='row'gap={6} sx={{ width: "100%", marginLeft:10}}>
                    {wishList.some((product) => product.id === data.id) ? (
                        <Button
                          variant="contained"
                          sx={{ minHeight: "56px" }}
                          onClick={() => {
                            removeFromWishList(data.id);
                          }}
                        >
                          Remove From Wishlist
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          sx={{ minHeight: "56px", minWidth: "200px" }}
                          onClick={() => {
                            addToWishList(data);
                          }}
                        >
                          Add to WishList
                        </Button>
                      )}
                      <Button variant="outlined" onClick={()=>navigate('/cart')} sx={{ minHeight: "56px", minWidth: "200px" }}>Goto Cart</Button>
                    </Stack>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      )}
    </Container>
  );
}
