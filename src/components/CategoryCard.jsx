/* eslint-disable react/prop-types */
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export default function BasicCard({id,title, rating, count, category, desc, img, price}) {
  return (
    <Grid   item xs={12} sm={6} md={3} lg={4}>
      <Link to={`/product/${id}`}>
        <Card sx={{ minWidth: 123, maxHeight: '100%', zIndex: '10' }}>
          <Badge badgeContent={rating} color={rating > 3 ? 'primary' : 'secondary'}>
            <CardContent>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <CardMedia component="img" height="194" width="120" image={img} alt={title} />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {desc.substring(0, 100)}
              </Typography>
              <Typography variant="body2">
                MRP: {price}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Category: {category}</Button>
            </CardActions>
          </Badge>
        </Card>
        </Link>
    </Grid>
    
  );
}
