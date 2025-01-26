import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";

const initialState: HomePageState = {
  popularProducts: [],
  newProducts: [],
  events: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularProducts: (state, action) => {
      state.popularProducts = action.payload;
    },
    setNewProducts: (state, action) => {
      state.newProducts = action.payload;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { setPopularProducts, setNewProducts, setEvents } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
