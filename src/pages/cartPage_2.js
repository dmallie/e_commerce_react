import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import styled from 'styled-components';
import PageHero from '../components/pageHero';
import { Anchor } from 'react-bootstrap';
import CartOrder from '../components/cartOrder';
import EmptyCart from '../components/emptyCart';
import CartItems from '../components/cartItems';
import CartTable from '../components/cartTable';

const CartPage = () => {
       const cartObject = useSelector((state) => state.cart );
       const [ isCartEmpty, setIsCartEmpty ] = useState(true);
       // let [totalValue, setTotalValue ] = useState(0);
       // const [subTotal, setSubTotal ] = useState(0);
       // const [itemSubTotal, setItemSubTotal] = useState(0);
       // let tempSubTotal = 0;
       // const dispatch = useDispatch();

       // const updateValues = (values) => {
       //        setItemSubTotal(values.subTotal);
       //        // console.log('values: ', values);
       //        updateSubTotal(values);
              
       // };
       useEffect(()=>{
              // update the content of cartObject
              if ( cartObject.orders.length !== 0 ){
                     setIsCartEmpty(false);
              }else{
                     setIsCartEmpty(true);
              }
       },[cartObject]);
       const shippingFee = cartObject.shippingFee;
       // const updateSubTotal = (values) => {
       //        tempSubTotal = parseFloat(0);
       //        let newTotalValue = 0;

       //        cartObject.orders.map((item, index) => {
       //               if(item.selectedItem.id === values.id && 
       //                      item.color === values.color ) {
       //                      tempSubTotal = tempSubTotal + parseFloat(values.subTotal);
       //                      console.log('values.id: ', values.subTotal);
       //               }else{
       //                      tempSubTotal = tempSubTotal + parseFloat(item.subTotal);
       //                      // console.log('item.selectedItem.subTotal: ', item.subTotal);
       //               }
       //               // console.log('tempSubTotal: ', tempSubTotal, 'index: ', index);
       //        });
       //        setSubTotal(tempSubTotal.toFixed(2));
       //        // updateStateValues();
       //        setTotalValue((tempSubTotal + parseFloat(shippingFee)).toFixed(2));
       // };

       // const updateStateValues = () => {
       //        // initialize state values to zero
       //        let newQty = 0;
       //        let newTotalValue = 0;
       //        // update state values by going through each items 
       //        cartObject.orders.map((item) => {
       //               newQty = newQty + parseInt(item.qty);
       //               newTotalValue = newTotalValue + parseInt(item.totalValue);
       //        });
       //        // update state values at cartSlice redux
       //        setTotalValue(newTotalValue);
       //        // dispatch(cartActions.updateTotalValues({
       //        //        quantity: newQty,
       //        //        totalValue: newTotalValue,
       //        // }));
       // };
       // console.log('Ordered product: ', cartObject.orders);
       // console.log('ORdered quantity: ', cartObject.quantity);
       return(
<div>
<PageHero text={`cart`} />
<Wrapper>
<div className='table_container'>
       {
              isCartEmpty ? <EmptyCart /> : <CartTable props={cartObject} />
       }
       
       <hr />
       
</div>
</Wrapper>
</div>
              )
};

const Wrapper = styled.div`
.table_container {
       // layout
       // display: flex;
       margin: 1rem auto;
       // margin-left: auto;
       flex-direction: column;
       justify-content: end;
       width: 90vw;
       max-width: var(--max-width);
}
table {
       display: block;
       align-items: center;
       margin: 2rem auto;
       // margin: 0 auto;
       max-width: var(--max-width);
}
thead {
       display: flex;
       justify-content: space-between;
       margin-bottom: 1rem;
       // width: 100%;

}
.underline {
       // layout
       display: flex;
}
.btn-container_ {
       // layout
       display: flex;
       justify-content: space-between;
       margin: 2rem auto;
       max-width: var(--max-width);
}
.btn {
       // font
       font-size: 0.8rem;

}
.clr-btn {
       // looks
       background: var(--clr-black);
       color: var(--clr-white);
}
h5, h4, p {
       display: grid;
       grid-template-columns: 200px 1fr;
       gap: 2rem;
}
p {
       text-transform: capitalize;
}
h4 {
       margin-top: 2rem;
}
.summary-section {
       // layout
       margin-top: 3rem;
       margin-bottom: 2rem;
       // margin-left: auto;
       // margin-right: auto;
       width: var(--section-box-width);
       // looks
       border: 1px solid var(--clr-grey-8);
       border-radius: var(--radius);
       padding: 1.5rem 2rem;
       // text-align: right;
}
.summary-container{
       // layout
       display: flex;
       // flex-direction: column;
       justify-content: right;

}
.login-btn {
       // size
       width: var(--section-box-width);
       // layout
       // displday: block;
       // justify-content: right;
}
`;
export default CartPage;