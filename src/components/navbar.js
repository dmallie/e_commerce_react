import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import CartButtons from './cartButtons';

const Navbar = () => {
       return(     
<NavContainer>
<div className="navbar_container">
       <div  className='nav-header'>
              <Link to="/">
                     <img src={ logo } alt="comfySloth"></img>
              </Link>
       </div>
       <ul className="links_container">
              { links.map( (link) => {
                     return( 
                     <li>
                            <Link className='link' key={link.id} to={link.url}>{link.text}</Link>
                     </li>
                     )
              })}
       </ul>
       <CartButtons />
</div>
</NavContainer>
);
};

const NavContainer = styled.div`
       height: 5rem;
       width: 90vw;
       margin: 0 auto;
       max-width: var(--max-width);
       
       .navbar_container {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              justify-content: space-between;
       
       }
       .nav-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              img {
                     width: 175px;
                     margin-left: -15px;
              }
       }
       .links_container {
              display: none;
       }
       @media (min-width: 992px) {
              .links_container {
                     display: flex;
                     justify-content: center;
              }
              li {
                     margin: 0 0.5rem;
              }
              a {
                     color: var(--clr-grey-3);
                     font-size: 1rem;
                     text-transform: capitalize;
                     letter-spacing: var(--spacing);
                     padding: 0.5rem;
                     &:hover {
                            border-bottom: 2px solid var(--clr-primary-7);
                     }
              }
       }
`;

export default Navbar;