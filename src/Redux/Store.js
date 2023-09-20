import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './Features/WalletSlice';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export default store;
