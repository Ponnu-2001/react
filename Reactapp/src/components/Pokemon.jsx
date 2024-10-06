import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';

const Pokemon = () => {
var [Poki, setPoki] = useState([]);

axios.get("https://dummyapi.online/api/pokemon")
    .then((response) => {
        console.log(response)
        setPoki(response.data);
})




  return (
      <div>
          <h1>Pokemon</h1>
          <Grid Container spacing={2}>
              {Poki.map((val) => {
                  return(
              
              <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  sx={{ height: 140 }}
                image={val.image_url}
                  title="green iguana"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                                      {val.pokemon}
                          </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {val.type}
                                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
              </CardActions>
              </Card>
                      </Grid>
                  )
              })}
          </Grid>
            
              
    </div>
  )

}

export default Pokemon
