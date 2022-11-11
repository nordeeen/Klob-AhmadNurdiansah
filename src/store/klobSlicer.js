import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from './api';

export const getLoker = createAsyncThunk(
  '/fakeJob',
  async (params, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoader(true));
      const response = await api.getLoker();
      dispatch(setLoader(false));
      return response;
    } catch (err) {
      rejectWithValue(err);
      dispatch(setLoader(false));
    }
  },
);

const initialState = {
  arrLoker: [],
  corporateId: '',
  detail: {},
  loader: false,
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
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoker.fulfilled, (state, action) => {
      state.arrLoker = action.payload;
    });
  },
});

export const { setKlobSlicer, setLoader } = klobSlicer.actions;

export default klobSlicer.reducer;
