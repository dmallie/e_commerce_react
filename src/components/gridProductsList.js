import React from 'react';
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GridView from './gridView';

const GridProductList = () => {
       const productList = useSelector(state => state.filter.filteredProducts);
       console.log('ProductList: ', productList);
       return(
<Wrapper>
<div className='container_'>
       {
              productList.map(item => {
                     return(
                            <GridView key={item.id} {...item } />
                     );
              })
       }
</div>
</Wrapper>
       );
};

const Wrapper = styled.div`
img {
       height: 175px;
}
.container_ {
       // layout
       display: grid;
       gap: 2rem 1.5rem;
}
@media (min-width: 992px){
       .container_{
              grid-template-columns: repeat(2, 1fr);
       }
}
@media (min-width: 1170px){
       .container_{
              grid-template-columns: repeat(3, 1fr);
       }
}

`;

export default GridProductList;