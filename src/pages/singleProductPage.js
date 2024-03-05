import React, { useState, useEffect } from 'react';
import PageHero from '../components/pageHero';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { GiConsoleController } from 'react-icons/gi';
import { single_product_url } from '../utils/constants';
import DetailImages from '../components/DetailImages';
import DetailDescription from '../components/detailDescription';
import Error from './errorPage';

const SingleProductPage = (props) => {
       const [data, setData] = useState({});
       const [loading, setLoading] = useState(true);
       const [img, setImg] = useState({});
       const location = useLocation();
       const item = location.state;
       const url = single_product_url + item.id;
// console.log('url: ' + url);
       useEffect(()=>{
              console.log('maya: ');
              axios.get(url).then((res)=>{
                     // console.log('res: ' ,res)
                     setData(res.data);
                     setImg(res.data.images);
                     setLoading(false);
              })
       }, []);
       console.log('data: ' ,data);
       return(
<Wrapper>
<PageHero text={`Product/${item.name}`} />
<div className='section section-center page'>
       <Link to='/products' className='btn'>
              back to products
       </Link>
       
       { loading ? <Error /> : 
              <div className='product-center'>
                     <DetailImages pics={data} />
                     <DetailDescription {...data} />
              </div>
       }
       
</div>
</Wrapper>
)};

const Wrapper = styled.div `
.product-center {
       // layout
       display: grid;
       // grid-template-columns: 1fr 1fr;
       gap: 4rem;
       margin-top: 2rem;
       align-items: center;
       justify-content: center;
       // width: 90vw;
}
@media (min-width: 992px) {
       .product-center {
              grid-template-columns: 1fr 1fr;
              align-items: center;
       }

}
`;

export default SingleProductPage;