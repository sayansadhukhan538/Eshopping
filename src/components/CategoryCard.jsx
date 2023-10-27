/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import CartContext from "../context/Cart.Context";
import { useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WishContext from "../context/Wishlist.Context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

export default function BasicCard({ data }) {
  const { addToCart, removeFromCart, cart, input } = useContext(CartContext);
  const { addToWishList, removeFromWishList, wishList } = useContext(WishContext);
  return (
    <Card>
      <Typography>
        {wishList.some((product) => product.id === data.id) ? (
          <Button
            variant="text"
            style={{ border: "none" }}
            onClick={() => removeFromWishList(data.id)}
          >
            <FavoriteIcon />
          </Button>
        ) : (
          <Button
            variant="text"
            style={{ border: "none" }}
            onClick={() => addToWishList(data, input)}
          >
            <FavoriteBorderIcon />
          </Button>
        )}
      </Typography>
      <Link to={`/product/${data.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          image={data.image}
          alt={data.title}
          sx={{
            display: "block",
            margin: "auto",
            width: "180px",
            height: "200px",
            objectFit: "contain",
          }}
        />
        <CardContent
          style={{ display: "block", margin: "30px auto", textAlign: "center" }}
        >
          <Typography variant="h5">{data.title.substring(0, 20)}</Typography>
          <Typography
            variant="h6"
            color="secondary"
            style={{ margin: "20px auto" }}
          >
            MRP: ${data.price}
            <br />
          </Typography>
          <Rating
            name="simple-controlled"
            value={data?.rating.rate}
            readOnly
            precision={0.25}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
            style={{
              color:
                data?.rating.rate > 3 ? "rgb(56, 142, 60)" : "rgb(250, 175, 0)",
            }}
          />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.description.substring(0, 120)}
          </Typography>
        </CardContent>
      </Link>
      <CardActions
        style={{ display: "block", margin: "30px auto", textAlign: "center" }}
      >
        {cart.some((product) => product.id === data.id) ? (
          <Button onClick={() => removeFromCart(data.id)} variant="contained">
            {" "}
            <ShoppingCartIcon /> Remove From Cart
          </Button>
        ) : (
          <Button onClick={() => addToCart(data, 1)} variant="outlined">
            <AddShoppingCartIcon /> Add To Cart
          </Button>
        )}
       </CardActions>
    </Card>
  );
}
