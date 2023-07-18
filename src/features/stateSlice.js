import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  product: {},
  trl: [],
  config: {},
  fulfilled: 0,
};

const apiUrl = "https://api-test.innoloft.com";

export const updateProduct = createAsyncThunk(
  "infos/updateProduct",
  async (newProduct) => {
    // send PUT request to server
    await axios.put(apiUrl + "/product/6781/", newProduct);

    // Just return the passed data because server won't register it
    return newProduct;
  }
);
export const fetchProduct = createAsyncThunk("infos/fetchProduct", async () => {
  // fetch product
  const response = await axios.get(apiUrl + "/product/6781/");
  return response.data;
});

export const fetchTrl = createAsyncThunk("infos/fetchTrl", async () => {
  // fetch trl list
  const response = await axios.get(apiUrl + "/trl/");
  return response.data;
});
export const fetchConfig = createAsyncThunk("infos/fetchConfig", async () => {
  const appId = process.env.REACT_APP_ID || 1;

  // fetch configuration using appId
  const response = await axios.get(`${apiUrl}/configuration/${appId}/`);
  return response.data;
});

const stateSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.fulfilled++;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, () => {
        console.log("something went wrong");
      })
      .addCase(fetchTrl.fulfilled, (state, action) => {
        state.fulfilled++;
        state.trl = action.payload;
      })
      .addCase(fetchConfig.fulfilled, (state, action) => {
        state.fulfilled++;
        state.config = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const newProduct = {
          ...state.product,
          ...action.payload,
        };
        console.log(newProduct);

        state.product = newProduct;
      });
  },
});

export const getProduct = (state) => state.infos.product;
export const getTrl = (state) => state.infos.trl;
export const getConfig = (state) => state.infos.config;
export const getFulfilled = (state) => state.infos.fulfilled;

export default stateSlice.reducer;
