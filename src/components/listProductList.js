import React from 'react';
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';
import ListView from './listView';
import { useSelector } from 'react-redux';

const ListProductList = () => {
       const products = useSelector(state => state.filter.filteredProducts);
       // const productList = useSelector(state => state).filteredProducts;
       return(
<Wrapper>
<div>
       {products.map(item => {
              return(
                     <ListView key={item.id} {...item} />
              )
       })}
</div>
</Wrapper>
       );
};

const Wrapper = styled.div``;

export default ListProductList;