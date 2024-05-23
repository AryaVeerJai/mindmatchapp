// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import reducer from "../reducer";


// const Store =  configureStore({
//   reducer,
//   middleware :[...getDefaultMiddleware({thunk:false})] 
// })

// export default Store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from "../reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false })]
});

export default store;