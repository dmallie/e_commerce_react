import React from 'react';
import styled from 'styled-components';
import PageHero from '../components/pageHero';
import Filters from '../components/filters';
import ProductList from '../components/productList';
const ProductsPage = () => {
       return(
<Wrapper>
       <PageHero text="products" />
       <div className='section-center container'>
              <Filters />
              <div>
                     <ProductList />
              </div>
       </div>
</Wrapper>
)
};

const Wrapper = styled.div`
.container {
       // layout
       display: grid;
       gap: 3rem 1.5rem;
       margin: 4rem auto;
}
@media (min-width: 768px) {
       .container {
              grid-template-columns: 200px 1fr;
       }
}
`;
export default ProductsPage;