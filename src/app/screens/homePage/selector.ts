import { createSelector } from "reselect";
import { AppRootState, HomePageState } from "../../../libs/types/screen";

export const retrievePopularProducts= createSelector(
  (state: AppRootState) => state.homePage,
  (HomePage: HomePageState) => HomePage.popularProducts
);

export const retrieveNewProducts = createSelector(
  (state: AppRootState) => state.homePage,
  (HomePage: HomePageState) => HomePage.newProducts
);

export const retrieveEvents = createSelector(
  (state: AppRootState) => state.homePage,
  (HomePage: HomePageState) => HomePage.events
);
