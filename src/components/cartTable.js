import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartItems from './cartItems';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const CartTable = ( props ) => {
       const { orders, shippingFee, totalValue } = props.props;
       const [ totalSum, setTotalSum ] = useState(0);
       const [ orderTotal, setOrderTotal ] = useState(0);
       let sum = 0;

       orders.map(item => {
              sum = sum + parseFloat(item.subTotal);
       });

       useEffect(() =>{
              setTotalSum(sum);
              setOrderTotal(sum + shippingFee);
              dispatch(cartActions.updateTotalValues({
                     totalValues: orderTotal,
              }))
       }, [sum]);
       const dispatch = useDispatch();
       const onClear = () => {
              dispatch(cartActions.clearItems({}));
       };
       return (
<WrapperCartTable>
<div className='table-container'>
       <div className='title'>
              <p> item </p>
              <p>price</p>
              <p>quantity</p>
              <p>subTotal</p>
       </div>
{
       orders.map((order) =>{
              return(
                     <CartItems {...order} key={order.selectedItem.id} />
              )
       })
}
       <div className="btn-container_">
              <button className='btn'>continue shopping</button>
              <button className='btn clr-btn' onClick={onClear}>clear shopping cart</button>
       </div>
       <div className='summary-container'>
              <div className='summary-section'>
                     <h5>subtotal: <span>$ { totalSum.toFixed(2) }</span></h5>
                     <p>shipping fee: <span>$ { shippingFee }</span></p>
                     <hr />
                     <h4>Order Total: <span> $ { orderTotal.toFixed(2) }</span> </h4>
              </div>
       </div>
       <div className='summary-container'>
              <button className='btn login-btn'>
                     login
              </button>
       </div>
</div>
</WrapperCartTable>
       );
}; export default CartTable;

const WrapperCartTable = styled.div`
.title {
       // layout
       display: grid;
       grid-template-columns: auto auto auto auto;
       grid-template-rows: auto;
       gap: 2rem;
}
`; 