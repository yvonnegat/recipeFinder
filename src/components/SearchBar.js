// src/components/SearchBar.js
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
      <TextField
        fullWidth
        label="Search for recipes..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
