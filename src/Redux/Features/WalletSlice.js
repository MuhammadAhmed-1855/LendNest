import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: null,
  },
  reducers: {
    setWalletAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setWalletAddress } = walletSlice.actions;
export default walletSlice.reducer;
