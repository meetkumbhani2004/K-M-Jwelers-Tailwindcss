import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/product/cart/cartSlice";
import whishlistReducer from "../features/product/wishlist/wishlistSlice";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    whislist: whishlistReducer,
    product: productReducer,
  },
});
