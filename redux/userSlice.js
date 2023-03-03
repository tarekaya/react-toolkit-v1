import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    firstName: '',
    email: '',
    city: '',
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.city = action.payload.city;
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
