import React, { useState } from "react";
import styled from "styled-components";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";


const CartItems = (props) => {
       const {color, qty, selectedItem, subTotal } = props;
       const [ itemQty, setItemQty ] = useState(qty);
       const dispatch = useDispatch();
       const onClickMinus = (e) => {
              e.preventDefault();
              console.log('element.id: ', e);
              let newQty = itemQty - 1;
              if(newQty < 1){
                     setItemQty(1);
                     newQty = 1;
              }else{
                     setItemQty(newQty);
              }
              const newSubTotal = newQty * selectedItem.price;
              dispatch(cartActions.updateQty({
                     id: e.target.id,
                     qty: newQty,
                     subTotal: newSubTotal.toFixed(2),
                     color: color,
              }))
       };
       const onClickPlus = (e) => {
              e.preventDefault();
              let newQty = itemQty + 1;
              if(newQty > 10){
                     setItemQty(10);
                     newQty = 10;
              }else{
                     setItemQty(newQty);
              }
              const newSubTotal = newQty * selectedItem.price;
              dispatch(cartActions.updateQty({
                     id: selectedItem.id,
                     qty: newQty,
                     subTotal: newSubTotal,
                     color: color,
              }))
       };
       const onDelete = (e) => {
              e.preventDefault();
              dispatch(cartActions.deleteItem({
                     id: selectedItem.id,
                     color: color,
              }));
       };
       return(
<Wrapper>
<div className='grid-row'>
       <div className='item-col'>
              <div className="col-1">
                     <img src= {selectedItem.image.url} alt={selectedItem.name} />
              </div>
              <div className="col-2">
                     <p>{selectedItem.name}</p>
                     <p>color: <span style={{ background: color }}></span></p>
              </div>
       </div>
       <div className='price-col'>
              <p>$ { selectedItem.price }</p>
       </div>
       <div className="quantity-col">
              <FaMinus className='qty-icon' onClick={onClickMinus} id={selectedItem.id}/>
              <p>{qty}</p>
              <FaPlus className='qty-icon' onClick={onClickPlus} id={selectedItem.id}/>       
       </div>
       <div className="subtotal-col">
              <p>$ { subTotal }</p>
              <MdDelete className="delete" onClick={onDelete}/>
       </div>
</div>
</Wrapper>
       )
};

const Wrapper = styled.div`
.grid-row {
       display: grid;
       grid-template-columns: auto auto auto auto;
       gap: 3rem;
       // justify-content: left;
       margin-top: 2rem;
       align-items: center;
}
.item-col {
       display: grid;
       grid-template-columns: 100px auto;
       width: 250px;
       gap : 1rem;
}
.col-1 {
       img {
              width: 100%;
              height: 75px;
              object-fit: cover;
       }
}
.col-2 {
       // layout
       display: flex;
       flex-direction: column;
       text-align: left;
       gap: 0rem;
       p {
              margin-bottom: 0;
              display: flex;
              align-items: center;
              gap: 1rem;
              // font
              font-size: 0.8rem;
              font-weight: bold;
              text-transform: capitalize;
              letter-spacing: var(--spacing);
       }
       span {
              display: block;
              width: 15px;
              height: 15px;
              border-radius: var(--radius);
              border: transparent;
       }
}
.price-col {
       // layout
       display: block;
       // width: 140px;
       // gap: 1rem;
       // align-items: center;
       justify-content: center;
       p {
              color: var(--clr-primary-5);
       }

}
.quantity-col {
       // layout
       display: flex;
       align-items: center;
       justify-content: space-around;

       p {
              display: block;
              align-items: center;
              justify-content: center;
              margin-bottom: 0;
              // looks
              cursor: pointer;
              // font
              font-size: 1.5rem;
              font-weight: bold;
              color: var(--clr-black);
       }
}
.subtotal-col {
       // layout
       display: flex;
       align-items: center;
       justify-content: center;
       padding-left: 2rem;
}
.delete {
       // layout
       // padding-right: 2rem;
       font-size: 1.5rem;
       color: var(--clr-red-dark);
       cursor: pointer;
}
`;
export default CartItems;