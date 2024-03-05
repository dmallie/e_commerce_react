import React, { useState } from 'react';
import styled from 'styled-components';
import GridProductList from './gridProductsList';
import ListProductList from './listProductList';
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filterSlice';

const ProductList = () => {
       const [ grid, setGrid ] = useState(true);
       // const dispatch = useDispatch();
       const selector = useSelector((state) => state.filter);
       // dispatch(filterActions.updateFilters(selector.filters.color));

       const products = selector.filteredProducts;
       // console.log('products: ', products);
       return(
<Wrapper>
       <div className="sort-container">
              <div className="icons-container">
                     <button onClick={()=>{setGrid(true)}} className={`${grid ? 'active' : 'null'}`}>
                            <BsFillGridFill />
                     </button>
                     <button onClick={()=>{setGrid(false)}} className={`${!grid ? 'active' : 'null'}`}>
                            <BsList />
                     </button>
              </div>
              <p>{ products.length } products found</p>
              <hr/>
              <form>
                     <label htmlFor='sort'>Sort by</label>
                     <select name='sort'
                            id='sort'
                            value= { "" }
                            onChange={""}
                            className='sort-input'
                     >
                            <option value='price-lowest'>price (lowest)</option>
                            <option value='price-highest'>price (highest)</option>
                            <option value='name-a'>name (a - z)</option>
                            <option value='name-z'>name (z - a)</option>
                     </select>     
              </form>
       </div>
       { grid ? <GridProductList /> : <ListProductList />}

</Wrapper>
       );
};

const Wrapper = styled.div`
.sort-container {
       // layout
       display: grid;
       grid-template-columns: auto auto 1fr auto;
       column-gap: 2rem;
       align-items: center;
       justify-content: center;
       margin-bottom: 2rem;
}
@media (max-width: 576px) {
       .sort-container {
              display: grid;
              grid-template-columns: 1fr;
              row-gap: 0.75rem;
       }
       .icons-container {
              display: inline-block;
              margin-right: 0.5rem;
       }
}
@media (min-width: 768px) {
       column-gap: 2rem;
}
.icons-container {
       // layout
       display: grid;
       grid-template-columns: 1fr 1fr;
       column-gap: 0.8rem;

       button {
              // layout
              display: flex;
              align-items: center;
              justify-content: center;
              // looks
              background: transparent;
              border: 1px solid var(--clr-black);
              border-radius: var(--radius);
              cursor: pointer;
              // size
              width: 1.5rem;
              height: 1.5rem;
              svg {
                     font-size: 1.2rem;
              }
              color: var(--clr-black);
       }
       .active {
              background: var(--clr-black);
              color: var(--clr-white);
       }
}
label{
       font-size: 1rem;
       text-transform: capitalize;
       padding-right: 1rem;
}
.sort-input {
       // layout
       padding: 0.25rem 0.5rem;
       // looks
       border-color: transparent;
       // font
       font-size: 1rem;
       text-transform: capitalize;
}
`;

export default ProductList;