import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
    login : false,
  },
  reducers: {

    setUser(state,action) {
      const user = action.payload;
      return {...state, userData:user,login:true}
    },

    updateUser(state,action) {
      const user = action.payload;
      const newArray = {...user};
      newArray.img = user.img;
      return {...state, userData:newArray,login:true}
    },

    removeUser(state,action) {
       return {...state, userData:{},login:false}
    },
  }
})


export const {  setUser , updateUser , removeUser , addTask } = userSlice.actions;

export default userSlice.reducer;