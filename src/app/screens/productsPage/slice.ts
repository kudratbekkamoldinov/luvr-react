import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../libs/types/screen";

const initialState: ProductsPageState = {
  shop: null,
  chosenProduct: null,
  products: [],
};
const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setShop: (state, action) => {
      state.shop = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setShop, setChosenProduct, setProducts } =
  productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;

