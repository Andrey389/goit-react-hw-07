import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./contactsSlice";

axios.defaults.baseURL = "https://666dd3ea7a3738f7cacd6a5a.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
