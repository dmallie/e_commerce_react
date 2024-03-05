import { configureStore, createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
       name: 'filterActions',
       initialState : {
              isLoaded: false,
              filteredProducts: [],
              allProducts : [],
              filters: {
                     color: 'all',
                     category: 'all',
                     company: 'all',
              }
       },
       reducers: {
              updateFilters(state, action){
                     // reset filteredProducts
                     state.filteredProducts = [];
                     const selected_filter = action.payload.type;
                     if(selected_filter === 'color'){
                            const selected_color = action.payload.payload;
                            console.log('selected filter: ', action.payload.type);
                            // go through each item in allProducts & populate filteredProducts
                            state.allProducts.map((item) => {
                                   if( item.colors.find(c => c === selected_color || selected_color === 'all' ) ){
                                          state.filteredProducts.push(item);
                                   } 
                            })
                            state.filters.color = selected_color;
                     }
                      if(selected_filter === 'category'){
                            const selected_category = action.payload.payload;
                            console.log('selected filter: ', action.payload.type);
                            // go through each item in allProducts & populate filteredProducts
                            state.allProducts.map((item) => {
                                   if( item.category === selected_category || selected_category === 'all' ){
                                          state.filteredProducts.push(item);
                                   } 
                            });
                            state.filters.category = selected_category;

                     }
                     if(selected_filter === 'company'){
                            // get the selected company
                            const selected_company  = action.payload.payload;
                            // populate products make by that company 
                            if(selected_company === 'all'){
                                   state.filteredProducts = state.allProducts;
                            }else{

                                   state.filteredProducts = state.allProducts.filter(item => 
                                          item.company === selected_company);
                            }
                            state.filters.company = selected_company;
                     }
                     if(selected_filter === 'price'){
                            // get the maximum price range
                            const selected_price = action.payload.payload;
                            // filter out those products that are less than the price range
                            state.filteredProducts = state.allProducts.filter(
                                   item => (Number(item.price)/100) <= selected_price
                            )
                     }
                     if(selected_filter === 'shipping'){
                            // get the shipping filter value
                            const shipping_option = action.payload.payload;
                            // filter out those products that offer free shipping
                            if(shipping_option){
                                   state.filteredProducts = state.allProducts.filter(
                                          item => item.shipping === shipping_option
                                   )
                            }else{
                                   state.filteredProducts = state.allProducts;
                            }
                     }
              },
              loadingAction(state, action) {
                     state.isLoaded = action.payload;
              },
              loadData(state, action) {
                     const initialData = action.payload;
                     state.allProducts.push({
                            id: initialData.id,
                            name: initialData.name,
                            price: initialData.price,
                            image: initialData.image,
                            colors: initialData.colors,
                            company: initialData.company,
                            description: initialData.description,
                            category: initialData.category,
                            shipping: initialData.shipping,
                     });
                     state.filteredProducts.push(initialData);
              },
              clrAction(state, action){
                     // set color to all
                     state.filters.color = 'all';
                     // reset filteredProducts
                     state.filteredProducts = state.allProducts;
              },

       },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;

