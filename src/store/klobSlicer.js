import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from './api';

export const getLoker = createAsyncThunk(
  '/fakeJob',
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.getLoker();
      return response;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);

const initialState = {
  arrLoker: [],
  corporateId: '',
  detail: {},
  logo: '',
  namaPerusahaan: '',
  namaLoker: '',
  statusKaryawan: '',
  kisaranGaji: '',
  sampaiGaji: '',
  tanggal: '',
};
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
      state.arrLoker = action.payload;
    });
  },
});

export const { setKlobSlicer } = klobSlicer.actions;

export default klobSlicer.reducer;
