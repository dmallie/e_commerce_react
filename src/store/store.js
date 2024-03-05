import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterSlice  from './filterSlice';
import { cartSlice } from './cartSlice';
// import { combineReducers } from 'redux';

const allReducer = combineReducers({
       filter: filterSlice.reducer,
       cart: cartSlice.reducer,
})
// const reducers = {
//        filterSlice,
//        cartSlice,
// }
const store = configureStore({
       reducer: {
              filter: filterSlice,
              cart: cartSlice.reducer,
       },

});

export default store;