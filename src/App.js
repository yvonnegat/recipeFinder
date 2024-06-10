// src/App.js
import React, { useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { fetchRecipes } from './api';
import { useEffect } from 'react';
import './App.css';


const App = () => {
  useEffect(() => {
    const imageUrl = 'https://img.freepik.com/free-photo/assortment-vegetables-herbs-spices-wooden-tabletop-view-copy-space_123827-29277.jpg?t=st=1717845113~exp=1717848713~hmac=f7513bcdc15f77df73a77cbaef23efdf95745047868cff1c88b3fee82e864424&w=740'; // Replace with your image URL
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed'; // Make the image sticky
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';

    // Cleanup on unmount
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.margin = '';
      document.body.style.minHeight = '';
      document.body.style.display = '';
      document.body.style.flexDirection = '';
      document.body.style.justifyContent = '';
      document.body.style.alignItems = '';
    };
  }, []);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async (query) => {
    setLoading(true);
    const result = await fetchRecipes(query);
    setRecipes(result);
    setLoading(false);
  };

  return (
    <Container maxWidth="sm"  sx={{ mt: 4, backgroundColor: 'white', minHeight: '100vh', padding: '20px' }} >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        find your recipe
      </Typography>
      <SearchBar onSearch={searchRecipes} />
      {loading ? (
        <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </Container>
  );
};

export default App;
