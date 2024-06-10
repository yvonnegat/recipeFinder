// src/components/RecipeList.js
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const RecipeList = ({ recipes }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card>
            <CardActionArea href={recipe.url} target="_blank">
              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.label}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {recipe.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.cuisineType ? recipe.cuisineType.join(', ') : 'Unknown'}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
