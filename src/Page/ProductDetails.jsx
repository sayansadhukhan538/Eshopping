/* eslint-disable react/prop-types */

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../service/Product';
import { useEffect, useState } from 'react';


export default function ProductDetails() {
    const { id } = useParams();
    const [data, setData] = useState();
    async function getSingleDetails(){
        const result = await getSingleProduct(id)
            if(result.isSuccess){
                setData(result.data)
                console.log(data)
            }
        
    }
    
    
    
    useEffect(()=>{
        getSingleDetails();
        console.log(id)
        
    },[id])
  return (
    <Container maxWidth="lg">
      {data && <Card>
        <CardMedia
          component="img"
          height="100%"
          image={data.image}
          alt={data.title}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {data.title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Category: {data.category}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Description: {data.description}
          </Typography>
          <Typography variant="body2">
            Price: {data.price}
          </Typography>
          <Typography variant="body2">
            {/* Average Rating: {rating} (based on {count} reviews) */}
          </Typography>
          <button >Add to cart</button>
        </CardContent>
      </Card>}
    </Container>
  );
}
