import { configureStore } from '@reduxjs/toolkit';
import klobSlicer from './klobSlicer';

const store = configureStore({ reducer: klobSlicer });

export default store;
