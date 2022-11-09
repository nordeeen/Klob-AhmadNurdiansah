import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from './api';

const initialState = {
  arrLoker: [],
};

export const getLoker = createAsyncThunk(
  '/fakeJob',
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.getLoker();
      console.log(response, 'ini response');
      return response;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);

const klobSlicer = createSlice({
  name: 'klobSlicer',
  initialState: {
    ...initialState,
  },
  reducers: {
    setKlobSlicer: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoker.fulfilled, (state, action) => {
      console.log(action.payload, 'acion payload');
      state.arrLoker = action.payload;
    });
  },
});

const { setKlobSlicer } = klobSlicer.actions;

export default klobSlicer.reducer;
