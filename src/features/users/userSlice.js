import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  searchText: "",
  filter: "all",

  loading: false,
};
// api call
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get("https://dummyjson.com/users");
  console.log(res.data);
  return res.data.users;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    // setFilter: (state, action) => {
    //   state.filter = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSearchText, setFilter } = userSlice.actions;
export default userSlice.reducer;
