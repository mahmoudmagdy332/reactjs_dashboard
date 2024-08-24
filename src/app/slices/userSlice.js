import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";





const initialState = {
  admin: null,
};

export const userSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUser: (state, action) => {
    
      const { admin, token } = action.payload;
      if (token) {
        state.admin = admin;

        Cookies.set("access_token", token, { expires: 1 });

        localStorage.setItem("admin", JSON.stringify(admin));
      }
    },

 
  },
});

export const {
  setUser,
} = userSlice.actions;
export default userSlice.reducer;
