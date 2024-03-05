import React from 'react';
import styled from 'styled-components';
import { FormatPrice } from '../utils/utils';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GridView = (props) => {
       // console.log('props: ', props);
       return(
<Wrapper>
<div className='contain'>
       <img src={props.image} alt={props.title} />
       <Link to={`/products/${props.id}`}  state= {props} className='link'>
              <FaSearch />
       </Link>
</div>
<footer>
       <h5>{ props.name }</h5>
       <p>$ { FormatPrice( props.price ) }</p>
</footer>
</Wrapper>
       );
};

const Wrapper = styled.div`
       .contain {
              // layout
              position: relative;
              // looks
              background: var(--clr-black);
              border-radius: var(--radius);
              margin-bottom: 0;
              margin-top: 0;
       }
       .contain:hover img {
              opacity: 0.5;
       }
       .contain:hover .link{
              opacity: 1;
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
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              display: flex;
              align-items: center;
              justify-content: center;
              // size
              width: 2.5rem;
              height: 2.5rem;
              // looks
              background: var(--clr-primary-5);
              transition: var(--transition);
              border-radius: 50%;
              opacity: 0;
              cursor: pointer;
              svg{
                     font-size: 1.25rem;
                     color: var(--clr-white);
              }
       }
       footer {
              // layout
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
       }
       footer h5,
       footer p {
              margin-top: 0;
              font-weight: normal;
       }
       footer p {
              color: var(--clr-primary-5);
              letter-spacing:  var(--spacing);
       }

`;

export default GridView;