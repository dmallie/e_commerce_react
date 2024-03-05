import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';
import  { UniqueValues, FormatPrice, Min_max_prices } from '../utils/utils';
import { FaCheck } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { filterActions } from '../store/filterSlice';
import Dropdown from 'react-bootstrap/Dropdown';

const Filters = () => {
       const data = useLoaderData();
       const categories = UniqueValues(data.res.data, "category" );
       const companies = UniqueValues(data.res.data, "company");
       const colors = UniqueValues(data.res.data, "colors");
       const [min_price, max] = Min_max_prices(data.res.data);
       const [max_price, setMax_price ] = useState(max);
       const [price, setPrice ] = useState(max);
       const dispatch = useDispatch();
       // let price = max_price;
       const [shipping, setShipping] = useState(true);

       const filterResult = useSelector((state) => state.filter.filteredProducts);
       // console.log('filterResult: ', filterResult);
       const filterValue = useSelector((state) => state.filter.filters);
       console.log('filterValue: ', filterValue);
       const step = 1;
       const priceListener = (e) => {
              e.preventDefault();
              
              // read the value of price from range component
              let value = e.target.value;
              // set the value on the state 
              value = parseFloat(value);
              setPrice(value);
              // filter products that are <= the new value
              dispatch(filterActions.updateFilters({ 
                     payload: value,
                     type: e.target.name
              }))
       };
       const shippingListener = (e) => {
              // set shipping state to true,
              // console.log('e.target.name: ', e.target.name);
              setShipping(e.target.checked);
              dispatch(filterActions.updateFilters({
                     payload: e.target.checked,
                     type: e.target.name,
              }))
       };
       const clrBtn = (e) => {
              e.preventDefault();
              // set price to max
              setPrice(max_price);
              // set shipping to default value
              setShipping(false);
              // time to dispatch
              dispatch(filterActions.clrAction());
              // set company dropdown to all
              const element = document.getElementById('company-select');
              element.value = 'all';
       };
       useEffect(()=>{
              setMax_price(price);
       }, []);

       const btn_listener = (e) => {
              // e.preventDefault();
              dispatch(filterActions.updateFilters({ 
                                                        payload: e.target.name,
                                                        type: 'color',
              }));
       };
       const categoryListener = (e) => {
              dispatch(filterActions.updateFilters({
                     payload: e.target.name,
                     type: 'category',
              }))
       };
       const companyListener = (e) => {
              dispatch(filterActions.updateFilters({
                     payload: e.target.value,
                     type: e.target.name
              }))
       };
       const clrBtnListener = (e) => {
              console.log('max_price: ', max_price);
              console.log('price: ', price);
       };
       return(
<Wrapper>
<div className="container_">
       <form onSubmit={(e) => e.preventDefault()}>
              {/** search input  */}
                     <div className='form-control'>
                            <input type="text" className="search-input"
                                   placeholder="search" name="text"
                                   value=''/>
                     </div>
              {/** category  */}
                     <div className='form-control category_container'>
                            <h5>category</h5>
                            {categories.map((category, index) => {
                                   return(
                                          <button type="button" 
                                                  className="btn-category" 
                                                  key={index} 
                                                  name={category}
                                                  onClick={categoryListener}
                                          >
                                                 {category}
                                          </button>
                                   )
                            })}
                     </div>
              {/** companies  */}
              <div className='form-control'>
                     <h5>company</h5>       
                     <select type="button" 
                             className="company" 
                             name="company"
                             onClick={companyListener}
                             id="company-select"
                     >
                            {companies.map((company, index) => {
                                   return(
                                          <option type="button" 
                                                  className="company" 
                                                  key={index} 
                                                  name={company}
                                                  value={company}>
                                                 {company}
                                          </option>
                                   )
                            })}
                     </select>
              </div>
              {/** colors  */}
              <div className='form-control'>
                     <h5>colors</h5>  
                     <div className='color-container'>   
                            
                            {colors.map((color, index) => {
                                   if(color === 'all'){
                                          return(
                                                <button className="btn-color active" 
                                                        name='all'
                                                        onClick={btn_listener} 
                                                 > 
                                                        {color} 
                                                 </button>   
                                          )
                                   }
                                          return(
                                                 <button className="btn-color" 
                                                        key={index} 
                                                        name={color}
                                                        data-color={color}
                                                        onClick={btn_listener}
                                                        style={{ background:  color  }} 
                                                 >
                                                       {
                                                               color === filterValue.color ? 
                                                                      <FaCheck className='react-icon' name={color}/> : 
                                                                      null
                                                        }  
                                                 </button>
                                          )
                                   })}
                     </div>
              </div>
              {/** price range */}
              <div className='form-control'>
                     <h5>price</h5> 
                     <p className='price'>$ { price }</p>
                     <input type='range'
                            name='price'
                            min={min_price}
                            max={max_price}
                            onChange={priceListener}
                            value={price}
                            step={step}
                     />
              </div>
              {/** Free shipping checkbox */}
              <div className='form-control shipping'>
                     <label className='price' htmlfor='shipping'>Free shipping</label>
                     <input type='checkbox'
                            name='shipping'
                            id='shipping'
                            checked={shipping}
                            onChange={shippingListener}
                     />
              </div>
       </form>
       <button className="clear-btn" onClick={clrBtn}>
              clear filters
       </button>
</div>
</Wrapper>
       );
};

const Wrapper = styled.div`
.container {
       // layout
       // display: grid;
       // grid-template-columns: 1fr;
       // flex-direction: column;
       position: sticky;
       top: 1rem;
       // width: 7rem;
       // justify-content: left;
}
.form-control {
       margin-bottom: 1.25rem;
       h5{
              margin-bottom: 0.5rem;
       }
}
.search-input {
       // layout
       padding: 0.5rem;
       // looks
       background: var(--clr-grey-10);
       border-radius: var(--radius);
       border: transparent !important;
       // font
       letter-spacing: var(--spacing);
}
.search-input::placeholder {
       // font
       text-transform: capitalize;
}
.category_container {
       // layout
       display: flex;
       flex-direction: column;
       gap: 1rem;
}
.active {
       //looks
       // border-color: var(--clr-grey-5);
       text-decoration: underline;
}
button {
       // layout
       display: block;
       // margin: 0.25em 0;
       // padding: 0.25em 0;
       text-align: left;
       // looks
       
       border: none;
       border-bottom: 1px solid transparent;
       cursor: pointer;
       // font
       color: var(--clr-grey-5);
       text-transform: capitalize;
       letter-spacing: var(--spacing);
}
.btn-category{
       background: transparent !important;
}
.company{
       // layout
       padding: 0.25rem;
       // looks
       background: var(--clr-grey-10);
       border-radius: var(--radius);
       border-color: transparent;
       // font
       text-transform: capitalize;
}
.color-container{
       // layout
       display: flex;
       gap: 0.7rem;
       align-items: center;
       justify-content: center;
}
.btn-color{
       // size
       width: 1.2rem;
       height: 1.2rem;
       // looks
       border: transparent;
       border-radius: 50%;
       cursor: pointer;
       display: block;
}
.react-icon{
       // font
       color: white;
       font-size: 0.9rem;
       // layout
       padding-left: 3px;
}
.shipping {
       // layout
       display: grid;
       grid-template-columns: auto 1fr;
       align-items: center;
       column-gap: 0.5rem;
       // font
       font-size: 1rem;
       text-transform: capitalize;
}
.clear-btn{
       // layout
       display: block;
       // margin: 0.25em 0;
       padding: 0.25em 0;
       text-align: center;
       // looks
       background: var(--clr-red-dark);
       border: none;
       border-bottom: 1px solid transparent;
       cursor: pointer;
       // font
       color: var(--clr-white);
       text-transform: capitalize;
       letter-spacing: var(--spacing);

}
`;

export default Filters;