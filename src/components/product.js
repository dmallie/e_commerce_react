import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Product = (props) => {
       return(
<Wrapper>
<div className='container'>
       <img src={ props.image } alt={ props.name } />
       <Link to='/' className='link'>
              <FaSearch />
       </Link>
</div>
<footer>
     <h5>{ props.name }</h5>
     <p>{ props.price }</p>
</footer>
</Wrapper>
       )
};
const Wrapper = styled.div `
       .container{
              // looks
              background: var(--clr-black);
              border-radius: var(--radius);
              // layout
              position: relative;
       }
       img {
              // layout
              width: 100%;
              display: block;
              object-fit: cover;
              // looks
              border-radius: var(--radius);
              transition: var(--transition);
       }
       .link {
              // layout
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: var(--clr-primary-5);
              width: 2.5rem;
              height: 2.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              // looks
              transition: var(--transition);
              opacity: 0;
              border-radius: 50%;
              cursor: pointer;
              svg {
                     font-size: 1.25rem;
                     color: var(--clr-white);
              }
       }
       .container:hover img {
              opacity: 0.5;
       }
       .container:hover .link {
              opacity: 1;
       }
       footer {
              // layout
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
       }
       footer h5, footer p {
              margin-bottom: 0;
              font-weight: 400;
       }
       footer p {
              color: var(--clr-primary-5);
              letter-spacing: var(--spacing);
       }
`;
export default Product;