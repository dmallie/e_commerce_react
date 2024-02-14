import React from 'react';
import styled from 'styled-components';
import { Link, useLoaderData } from 'react-router-dom';
import Product from './product';
// import Error from './Error';

const FeaturedProducts = () => {
       const products = useLoaderData();
       const featuredProducts = products.res.data.filter(product => product.featured === true);
       return(
<Wrapper className='section'>
<div className='title'>
       <h2>featured products</h2>
       <div className='underline'></div>
</div>
<div className='section-center featured'>
       {featuredProducts.slice(0,3).map(product =>{
              return(
                     <Product key={product.id} {...product } />
              )
       })}
</div>
<Link to='/products' className='btn'>
       all products
</Link>
</Wrapper>
       )
};

const Wrapper = styled.div`
       background: var(--clr-grey-10);
       .featured {
              margin: 4rem auto;
              display: grid;
              gap: 2.5rem;
              img { 
                     height: 225px;
              }
       }
       .btn {
              display: block;
              width: 148px;
              margin: 0 auto;
              text-align: center;
       }
       @media (min-width: 576px) {
              .featured {
                     grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
              }
       }
`;
export default FeaturedProducts;