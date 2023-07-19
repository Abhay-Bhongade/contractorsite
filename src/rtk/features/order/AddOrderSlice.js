import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosInstance from "../../../Api/AxiosInstance";
import { encrypt, decrypt } from "../../../../src/CryptoFunct/CryptoFunct";

const initialState = {
  loading: false,
  order: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const addOrder = createAsyncThunk(
  "order/addorders",
  async (addOrderData) => {
    console.log("addOrderData", addOrderData);
    const encryptedUser = encrypt(addOrderData);
    console.log("encryptedUser", encryptedUser);
    const config = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "vendors/signup",
      { data: encryptedUser },
      config
    );
    console.log("response", response);
    const decryptedResponse = decrypt(response.data.data);
    console.log(
      "decryptedResponse data response in add order",
      decryptedResponse
    );
    return { status: response.status, ...decryptedResponse };
  }
);

export const submitVerificationCode = createAsyncThunk(
  "order/submitVerificationCodedata",
  async (submitVerificationCodedata) => {
    console.log("addOrderData", submitVerificationCodedata);
    const encryptedUser = encrypt(submitVerificationCodedata);
    console.log("encryptedUser", encryptedUser);
    const config = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "vendors/2faEmail",
      { data: encryptedUser },
      config
    );
    console.log("response from 2fa after submit", response);
    const decryptedResponse = decrypt(response);
    console.log(
      "decryptedResponse response in submitVerificationCodedata",
      decryptedResponse
    );
    return { status: response.status, ...decryptedResponse };
  }
);

export const resendVerificationCode = createAsyncThunk(
  "order/resendVerificationCode",
  async (resendVerificationCode) => {
    console.log("addOrderData", resendVerificationCode);
    const encryptedUser = encrypt(resendVerificationCode);
    console.log("encryptedUser", encryptedUser);
    const config = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "vendors/2faEmail",
      { data: encryptedUser },
      config
    );
    console.log("response", response);
    const decryptedResponse = decrypt(response);
    console.log(
      "decryptedResponse data response in resendVerificationCode",
      decryptedResponse
    );
    return { status: response?.status, ...decryptedResponse };
  }
);

const AddorderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
      state.error = "";
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.loading = false;
      state.order = [];
      state.error = action.error.message;
    });

    // ----------------------------------------------------

    builder.addCase(submitVerificationCode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(submitVerificationCode.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
      state.error = "";
    });
    builder.addCase(submitVerificationCode.rejected, (state, action) => {
      state.loading = false;
      state.order = [];
      state.error = action.error.message;
    });
    // ----------------------------------------------------

    builder.addCase(resendVerificationCode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resendVerificationCode.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
      state.error = "";
    });
    builder.addCase(resendVerificationCode.rejected, (state, action) => {
      state.loading = false;
      state.order = [];
      state.error = action.error.message;
    });
  },
});

export default AddorderSlice.reducer;
