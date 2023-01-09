import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  level: 'hide'
}

export const pageRedirectMessageSlice = createSlice({
    name: 'redirectMessage',
    initialState,
    reducers: {
      hideMessage: (state) => {
				state.level = 'hide';
			},
      showMessage: (state) => {
        state.level = 'show';
      }
    }
})

export const selectCurrentLevel = (state) => state.redirectMessage.level


export const { hideMessage, showMessage } = pageRedirectMessageSlice.actions;

export default pageRedirectMessageSlice.reducer;
