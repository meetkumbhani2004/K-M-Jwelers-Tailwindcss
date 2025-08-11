import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Whispering Ocean Waves',
    category: 'Bracelets',
    price: 39,
    oldPrice: 42,
    image1: './brac-card-1-1.webp',
    image2: './brac-card-1.webp',
  },
  {
    id: 2,
    name: 'Whimsical Paw Delight',
    category: 'Rings',
    price: 77,
    oldPrice: 80,
    image1: './rings-card-2-2.webp',
    image2: './rings-card-2-1.webp',
  },
  {
    id: 3,
    name: 'Whimsical Feline Charm',
    category: 'Brooches',
    price: 10,
    oldPrice: 11,
    image1: './bros-3-1.webp',
    image2: './bros-3-2.webp',
  },
  {
    id: 4,
    name: 'Whimsical Cat Pendant',
    category: 'Necklace',
    price: 53,
    oldPrice: 60,
    image1: './Necklace-4-1.webp',
    image2: './Necklace-4-2.webp',
  },
];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {}
});

export default productSlice.reducer;

