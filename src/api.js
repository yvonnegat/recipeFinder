// src/api.js
import axios from 'axios';

const APP_ID = '977143cc'; // Replace with your App ID
const APP_KEY = '050fb6d84614f7ee3cba6181dc446fc7	'; // Replace with your App Key

export const fetchRecipes = async (query) => {
  const response = await axios.get('https://api.edamam.com/search', {
    params: {
      q: query,
      app_id: APP_ID,
      app_key: APP_KEY,
    },
  });
  return response.data.hits.map(hit => hit.recipe);
};
