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
  Grid,
  Card,
} from "@mui/material";
import { useContext } from "react";
import WishContext from "../context/Wishlist.Context";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

export default function WishList() {
  const {removeFromWishList, wishList} = useContext(WishContext);
  return (
    <>
     <Container sx={{
          paddingTop: 2,
        }}
>
      {wishList.length === 0 ? (
        <Typography variant="body2" sx={{textAlign:'center'}}>Your WishList is empty.</Typography>
      ) : (
        <Grid>
          <Grid item xs={12} md={8} >
            <Typography variant="h4" sx={{padding:3}}>Your Favourite List</Typography>
            <Card>
              <TableContainer component={Paper} sx={{ width: "100%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell><Typography>Product</Typography></TableCell>
                      <TableCell><Typography>Price</Typography></TableCell>
                      
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ width: "100%" }}>
                    {wishList.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Link to={`/product/${item.id}`} >
                            <img
                              src={item.image}
                              height=""
                              width="45%"
                              alt=""
                            />
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Link to={`/product/${item.id}`} style={{textDecoration:'none'}}>{item.title}</Link>
                        </TableCell>
                        <TableCell>
                          $ {item.price}
                        </TableCell>
                        <TableCell>
                          
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            onClick={() => removeFromWishList(item.id)}
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
          </Grid>
      )}
          </Container>
    </>
  )
}
