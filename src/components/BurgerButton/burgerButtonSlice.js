import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
}

export const burgerButtonSlice = createSlice({
    name: 'burgerButtonState',
    initialState,
    reducers: {
      toggle: (state) => {
				state.isOpen = !state.isOpen;
			},
      toggleOff: (state) => {
        state.isOpen = false;
      }
    }
})

export const { toggle, toggleOff } = burgerButtonSlice.actions;

export default burgerButtonSlice.reducer;
