import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isNavOpen: true,
  isMenuOpen: false,
  allStudents: [],
  entireStudents: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },

    openNav(state, action) {
      state.isNavOpen = action.payload;
    },
    openMenu(state, action) {
      state.isMenuOpen = action.payload;
    },

    updateStudents(state, action) {
      state.allStudents = action.payload;
      state.entireStudents = action.payload;
    },
    resetSearch(state) {
      state.allStudents = state.entireStudents;
    },
  },
});

export const { updateName, openNav, updateStudents, resetSearch, openMenu } =
  userSlice.actions;

export default userSlice.reducer;

export const username = (state) => state.user.username;

export const navOpen = (state) => state.user.isNavOpen;

export const allStudents = (state) => state.user.allStudents;

export const menuOpen = (state) => state.user.isMenuOpen;
