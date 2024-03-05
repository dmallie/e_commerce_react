import React from 'react';
import styled from 'styled-components';
import { FormatPrice } from '../utils/utils';
import { Link } from 'react-router-dom';

const ListView = (props) => {
       
       return(
<Wrapper>
<div className='contain'>
       <img src={props.image} alt={props.name} />
       <div>
              <h4>{props.name}</h4>
              <h5 className='price'>$ { props.price }</h5>
              <p>{ props.description.substring(0, 150)} ...</p>
              <Link to='/' className='link'>
                     Details
              </Link>
       </div>
</div>

</Wrapper>
       );
};

const Wrapper = styled.div`
       .contain {
              // layout
              display: grid;
              row-gap: 3rem;
              // looks
              border-radius: var(--radius);
              margin-bottom: 0;
              margin-top: 0;
       }
       
       img {
              // layout
              width: 100%;
              width: 300px;
              height: 200px;
              display: block;
              object-fit: cover;
              // looks
              border-radius: var(--radius);
              margin-bottom: 1rem;
       }
       h4 {
              margin-bottom: 0.5rem;
       }
       .price {
              color: var(--clr-primary-6);
              margin-bottom: 0.75rem;
       }
       p {
              max-width: 45em;
              margin-bottom: 1rem;
       }
       .link {
              // layout
              transform: translate(-50%, -50%);
              // display: flex;
              align-items: center;
              justify-content: center;
              padding: 0.3rem 1rem;
              // looks
              background: var(--clr-primary-5);
              border-radius: var(--radius);
              cursor: pointer;
       }
@media (min-width: 800px) {
       .contain{
              display: grid;
              grid-template-columns: auto 1fr;
              column-gap: 2rem;
              align-items: center;
       }
}

`;

export default ListView;