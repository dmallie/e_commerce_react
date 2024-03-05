import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
       name: 'cartActions',
       initialState : {
              orders: [],
              orderedItem: {
                     selectedItem: {},
                     qty : 0,
                     color : '',
                     subTotal: 0,
              },
              quantity: 0,
              totalValue: 0,
              shippingFee: 5.34,
       },
       reducers: {
              addToCart(state,action) {
                     // receive the object
                     let tempTotal = 0;
                     let index = 0;
                     let itemInCart = null;
                     const orderedItem = action.payload;
                     // console.log('orderedItem: ', orderedItem);
                     //if the cart is not empty
                     if(state.orders.length !== 0){
                            // check if the item is already in the cart
                            // const itemInCart = state.orders.find(item => 
                            //        item.selectedItem.id === orderedItem.selectedItem.id);
                            state.orders.map((item, i) => {
                                   if(item.selectedItem.id === orderedItem.selectedItem.id && 
                                          item.color === orderedItem.color ){
                                          index = i;
                                          itemInCart = item;
                                   }
                            })
                                   // check the color matches if item is already in the cart
                                   if(itemInCart){
                                          // as the color matches update the value of quantity
                                          state.orders[index].qty += orderedItem.qty; 
                                   }else{
                                          state.orderedItem.selectedItem = orderedItem.selectedItem;
                                          state.orderedItem.qty = orderedItem.qty;
                                          state.orderedItem.subTotal = orderedItem.subTotal;
                                          state.orderedItem.color = orderedItem.color;
              
                                          state.orders.push(orderedItem);
                                   }
                     }else{
                            // cart is empty so lets puts some items in the cart
                            // add the orderedItem to the cart
                            // console.log('Mita')
                            state.orderedItem.selectedItem = orderedItem.selectedItem;
                            state.orderedItem.qty = orderedItem.qty;
                            state.orderedItem.subTotal = orderedItem.subTotal;
                            state.orderedItem.color = orderedItem.color;

                            state.orders.push(state.orderedItem);
                            // console.log('now it should work')
                     }
                     // update the quantity value
                     state.quantity += orderedItem.qty;
                     
              },
              updateQty(state, action){
                     // fetch the item 
                     const orderedItem = action.payload;
                     let index = 0;
                     var tempTotal = parseFloat(state.shippingFee);
                     // identify the item from the collection and retrieve the index
                     let tempQty = 0;
                     
                     state.orders.map((item, i) => {
                            if(item.selectedItem.id === orderedItem.id && 
                                   item.color === orderedItem.color ){
                                          index = i;
                            }
                     })
                     // calculate the value of difference
                     let difference = orderedItem.qty - state.orders[index].qty;
                     // update the value of qty
                     state.orders[index].qty = orderedItem.qty;
                     // update the value of subTotal
                     state.orders[index].subTotal = orderedItem.subTotal;
                     // update the value of quantity
                     state.quantity += difference;
              },
              deleteItem(state, action){
                     const toRemove = action.payload;
                     // initialize state values to zero
                     let newQty = 0;
                     let newTotalValue = 0;      
                     const newCartObjects = [];
                     let newObject = {};
                     // go through each objects in the list
                     state.orders.map(item=>{
                            if(item.selectedItem.id !== toRemove.id || 
                                   item.color !== toRemove.color){
                                          // prepare new object
                                          newObject = {
                                                 selectedItem: item.selectedItem,
                                                 qty: item.qty,
                                                 color: item.color,
                                                 subTotal: item.subTotal,
                                          };
                                          // push that object onto new cart objects
                                          newCartObjects.push(newObject);
                                          // update the quantity and total values
                                          newQty = newQty + parseInt(item.qty);
                                          newTotalValue = newTotalValue + parseFloat(item.totalValue);

                            }
                     })
                            // console.log('item.selectedItem.id: ', item.selectedItem.id)
                     console.log('newCartObjects: ', newCartObjects);
                     state.orders = newCartObjects;
                     state.quantity = newQty;
              
                     // console.log('newCartObjects: ', newCartObjects);
              },
              updateTotalValues(state, action) {
                     const newValues = action.payload;
                     state.totalValues = newValues.totalValues.toFixed(2);
              },
              clearItems(state){
                     // Reset state values
                     state.orders = [];
                     state.quantity = 0;
                     state.totalValue = 0;
              },
       },
});

export const cartActions = cartSlice.actions;
