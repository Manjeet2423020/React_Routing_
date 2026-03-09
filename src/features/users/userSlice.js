import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  page: 1,
  limit: 10,
  total: 0,

  searchText: "",
  filter: "all",

  loading: false,
};
// api call
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ page, limit }) => {
    const skip = (page - 1) * limit;
    const res = await axios.get(
      `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
    );
    console.log(res.data);
    return res.data;
  },
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
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
        state.data = action.payload.users;
        state.total = action.payload.total;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSearchText, setFilter, setPage } = userSlice.actions;
export default userSlice.reducer;
