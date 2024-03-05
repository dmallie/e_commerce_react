import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageHero from './pageHero';
import Error from '../pages/errorPage';
import { useSelector } from 'react-redux';

const DetailImages = ( props ) => {
       // console.log('details page: ', props.pics);
       const { id, name, images} = props.pics;
       const [gallery, setGallery] = useState(images);
       const selector = useSelector(state=> state.cart.orders);
       
       // console.log('state.orders: ', selector );
       // const mainIndex = images[1]
       // imagesArray.push(images[0])
       const [main, setMain] = useState([]);
       // console.log('gallery: ', gallery);
       useEffect(()=>{
              setMain(images[0]);
              setGallery(images);
       }, [images]);
       const picSelector = (e) => {
              e.preventDefault();
              console.log('e: ', e.target.src);
       };
       return(
<Wrapper>
<div className=''>
       <img src={main.url} alt={name} className='main'/>
       <div className='gallery'>
       {       
              images.map((pic, index) => {
                            return(
                                   <img src={pic.url}
                                   alt=''
                                   key={pic.id}
                                   className={`${pic.url === main.url ? 'active': 'null'}`}
                                   onClick = {()=>{setMain(images[index])}}
                                   />
                                   )
                            }) 
       }
       </div>       
                     
              {/** 
       */}
</div>
</Wrapper>
       )
};

const Wrapper = styled.div `
.main {
       height: 200px;
}
img {
       // layout
       display: block;
       width: 100%;
       // looks
       border-radius: var(--radius);
       object-fit: cover;
}
.gallery {
       // layout
       display: grid;
       grid-template-columns: repeat(5, 1fr);
       column-gap: 1rem;
       margin-top: 1rem;
       img {
              height: 100px;
              cursor: pointer;
       }

}
.active {
       border: 2px solid var(--clr-primary-5);
}
@media (max-width: 576px) {
       .main {
         height: 300px;
       }
       .gallery {
         img {
           height: 50px;
         }
       }
     }
     @media (min-width: 992px) {
       .main {
         height: 500px;
       }
       .gallery {
         img {
           height: 75px;
         }
       }
   
`;
export default DetailImages;