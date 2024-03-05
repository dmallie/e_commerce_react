import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CartButtons = () => {
       const selector = useSelector( state => state.cart);
       return(
<CartWrapper>
<div className="private_section">
       <Link to='/cart' className='cart-btn'>
              <p className="navbar_p">cart</p>
              <span className='cart-container'>
                     <FaShoppingCart className='cart_icon'/>
                     <span className='cart-value'>{selector.quantity}</span>
              </span>
       </Link>
       <Link to='/login' className='cart-btn'>
              <p className='navbar_p'>Login</p>
              <FaUserPlus className='cart_icon'/>
       </Link>
</div>
</CartWrapper>
       )
};

const CartWrapper = styled.div`
       .private_section {          
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: center;
              width: 225px;
       }

       .cart-btn {
              color: var(--clr-grey-1);
              font-size: 1.5rem;
              letter-spacing: var(--spacing);
              display: flex;
              align-items: center;
       }

       .cart-container {
              display: flex;
              align-items: center;
              position: relative;
              svg {
                     height: 1.6rem;
                     margin-left: 6px;
              }
       }

       .cart-value {
              position: absolute;
              top: -10px;
              right: -16px;
              background: var(--clr-primary-5);
              width: 16px;
              height: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              font-size: 0.75rem;
              color: var(--clr-white);
              padding: 12px;
       }
`;

export default CartButtons;