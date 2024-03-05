import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartOrder = (props) => {
       // read values from props
       const {qty, color, selectedItem } = props;
       // console.log(props)
       // set value of qty onto tempQty
       const [tempQty, setQty ] = useState(qty);
       const firstSubTotal = (qty *  selectedItem.price).toFixed(2);
       let newSubTotal = firstSubTotal;
       // set value of subtotal
       const [ subTotal , setSubTotal ] = useState(firstSubTotal);
       const dispatch = useDispatch();
       // useEffect is called whenever tempQty is changed
       // it corrects the value of subTotal
       useEffect(() => {
              newSubTotal = (tempQty *  selectedItem.price).toFixed(2);
              setSubTotal(newSubTotal);
              props.parentCallback({id: selectedItem.id,
                                    color: color,
                                   subTotal: newSubTotal});
       }, [tempQty]);
       // onclick listeners will change the value of tempQty
       const onClickPlus = (e) => {
              e.preventDefault();
              // set the quantity of the item
              let newQty = tempQty + 1;
              if(newQty > 10){
                     setQty(10);
                     newQty = 10;
              }else{
                     setQty(newQty);
              }
              const sTotal = (newQty *  selectedItem.price).toFixed(2);
              // update the new value on the redux
              dispatch(cartActions.updateQty({
                     selectedItem: selectedItem, 
                     qty: newQty, 
                     color: color,
                     subTotal: sTotal, 
              }
              ))
       };
       const onClickMinus = (e) => {
              e.preventDefault();
              let newQty = tempQty - 1;
              if(newQty < 1){
                     newQty = 1;
              }
              if (newQty < 1) {
                     setQty(1);
              }else{
                     setQty(newQty);
              }
              const sTotal = (newQty *  selectedItem.price).toFixed(2);

              // update the new value on the redux
              dispatch(cartActions.updateQty({
                     selectedItem: selectedItem, 
                     qty: newQty, 
                     color: color,
                     subTotal: sTotal, 
              }
              ))
              
       };
       const onDelete = (e) => {
              e.preventDefault();
              dispatch(cartActions.deleteItem({
                     id: selectedItem.id,
                     color: color,
              }));
              // update quantity and subTotal values
              setQty(qty);
              setSubTotal(selectedItem.subTotal);
              console.log('qty: ', qty);
              console.log('subTotal: ', subTotal);
       };
       // console.log('selectedItem', selectedItem);
       // console.log('color', color);
       return(
<Wrapper>
<tr className="row-container">
       <td className="desc_container">
              <div className="col-1">
                     <img src= {selectedItem.image.url} alt={selectedItem.name} />
              </div>
              <div className="col-2">
                     <p>{selectedItem.name}</p>
                     <p>color: <span style={{ background: color }}></span></p>
              </div>
       </td>
       <td className="price_container">
             <p>$ {selectedItem.price}</p> 
       </td>
       <td className="qty_container">
              <FaMinus className='qty-icon' onClick={onClickMinus}/>
              <p>{tempQty}</p>
              <FaPlus className='qty-icon' onClick={onClickPlus}/>
       </td>
       <td className="subtotal_container">
              <p>$ { subTotal }</p>
              <MdDelete onClick={onDelete}/>
       </td>
</tr>
</Wrapper>
       )
};

const Wrapper = styled.div`
.subtotal_container {
       display: flex;
       gap: 2rem;
}
.row-container {
       display: flex;
       width: 90vw;
       max-width: var(--max-width);
       align-items: center;
       justify-content: space-between;
}
.qty_container{
       // layout
       display: flex;
       width: 140px;
       gap: 1rem;
       align-items: center;
       justify-content: left;

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
.qty-icon {
       // looks
       cursor: pointer;
       // font
       font-size: 1.3rem;
       font-weight: bold;
       color: var(--clr-black);
}
.price_container {
       // layout
       display: block;
       width: 140px;
       // gap: 1rem;
       align-items: center;
       justify-content: left;
       p {
              color: var(--clr-primary-5);
       }
}
.desc_container {
       // layout
       display: grid;
       grid-template-columns: 100px auto;
       width: 250px;
       gap: 1rem;
       align-items: center;
       justify-content: left;
       margin-top: 2rem;
       p {
              // color: var(--clr-primary-5);
       }
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
       // align-items: center;
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

`;

export default CartOrder;