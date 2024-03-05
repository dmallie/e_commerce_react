import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { FormatPrice } from "../utils/utils";
import { FaCheck, FaMinus, FaPlus } from 'react-icons/fa';
import { MdAdd } from "react-icons/md";
import { cartActions } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const DetailDescription = (props) => {
       const {id, name, stars, company, reviews, price, description, stock, colors, images } = props;
       const [selectedColor, setSelectedColor] = useState(colors[0]);
       const dispatch = useDispatch();
       const selector = useSelector(state=> state.cart.orders);
       let [ qty, setQty ] = useState(1); 
       // console.log('state.orders: ', selector );

       const deductItems = (e) => {
              e.preventDefault();
              const val = qty - 1;
              if(val >= 1){
                     setQty(val);
              } else {
                     setQty(1);
              }     
       };
       const addItems = (e) => {
              e.preventDefault();
              const val = qty + 1;
              if(val >= 5){
                     setQty(5);
              }else{       
                     setQty(val);
              }
       };
       const colorSelector = (e) => {
              e.preventDefault();
              setSelectedColor(e.target.name);
       };
       const addToCart = (e) => {
              e.preventDefault();
              console.log('qty: ' , qty);
              console.log('color: ', selectedColor);
              const dic = {
                     id: id,
                     name: name,
                     price: FormatPrice(price),
                     image: images[0],
              };
              console.log('selectedItem: ', dic);
              dispatch(cartActions.addToCart({
                     selectedItem:{
                            id: id,
                            name: name,
                            price: FormatPrice(price),
                            image: images[0],
                     },
                     qty: qty,
                     color: selectedColor,
                     subTotal: qty*FormatPrice(price).toFixed(2),
              }))
       };

       return(
<Wrapper>
<div className="content">
       <h2>{ name }</h2>
       <h5 className="price">${ FormatPrice(price) }</h5>
       <p className='desc'>{ description }</p>
       <p className="info">
              <span>Available : </span>
              { stock > 0 ? 'In stock' : 'out of stock'}
       </p>
       <p className='info'>
              <span>SKU: </span>{id}
       </p>
       <p className="info">
              <span>Brand: </span>{company}
       </p>
       <hr />
       <p className="info" style={{ "margin-top": "2rem"}}>
              
              <span>Color: </span>
              <div className='clr-container'>
              {
                     colors.map((color, index) => {
                            return(
                            <button className="btn-color active"
                                   name={color}
                                   onClick={colorSelector}
                                   style={{"background" : color }}
                            >
                                  { color === selectedColor ?
                                          <FaCheck style={{"color": "var(--clr-white)"}}/> : 
                                          null
                                   } 
                            </button>
                            
                            )
                     })
              }
              </div>
       </p>
       <div className="qty_container">
              <FaMinus onClick={deductItems} className="qty-icon"/>
              <span className="qty-icon" 
                     style={{"fontSize":"1.8rem"}}>
                     { qty }
              </span>
              <FaPlus onClick={addItems} className="qty-icon"/>
       </div>
       <button className="btn" 
               style={{"margin-top": "1rem"}}
               onClick={addToCart}
       >
              add to cart
       </button>
</div>
</Wrapper>
       )
};

const Wrapper = styled.div `
.price{
       color: var(--clr-primary-5);
}
.desc{
       line-height: 2;
       max-width: 45em;
}
.info {
       // layout
       display: grid;
       grid-template-columns: 125px auto;
       // font
       text-transform: capitalize;
       // size
       width: 500px;
       span {
              font-weight: 700;
       }
}
.clr-container {
       // layout
       display: flex;
       gap: 1rem;
}
.btn-color {
       // layout
       display: block;
       // size
       width: 1.3rem;
       height: 1.3rem;
       // looks
       border: transparent;
       cursor: pointer;
       border-radius: 50%;
}
.qty_container {
       // layout
       display: flex;
       width: 140px;
       gap: 1rem;
       align-items: center;
       justify-content: left;
}
.qty-icon {
       // looks
       cursor: pointer;
       // font
       font-size: 1.3rem;
       font-weight: bold;
       color: var(--clr-black);
}
@media (min-width: 992px) {
       .product-center {
              grid-template-columns: 1fr 1fr;
              align-items: center;
       }
       .price {
              font-size: 1.25rem;
       }
}
`;
export default DetailDescription;