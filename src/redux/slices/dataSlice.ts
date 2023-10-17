// src/redux/slices/dataSlice.js
import {createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {  
      state.items = action.payload;
    },
  },
});

export const {setItems} = dataSlice.actions;
export const selectItems = (state: any) => state.data.items;
export default dataSlice.reducer;
