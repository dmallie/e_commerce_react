import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
       return(
<HeroWrapper>
<div className='container'>
       <article className='content'>
              <h1>
                     design your <br />
                     comfort zone
              </h1>
              <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
                     sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
                     aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
                     alias?
              </p>
              <Link to='/products' className='btn hero-btn'>
                     shop now
              </Link>
       </article>
       <article className='img-container'>
              <img src={heroBcg} className='main-img' alt='nice table' />
              <img src={heroBcg2} className='accent-img' alt='nice table' />
       </article>
</div>
</HeroWrapper>
       )
};

const HeroWrapper = styled.article`
       .container {
              // layout
              min-height: 60vh;
              display: flex;
              place-items: center;
              // width: 90vw;
              margin: 0 auto;
              max-width: var(--max-width);
       }
       p{
              // layout
              line-height: 2;
              max-width: 45em;
              margin-bottom: 2rem;
              // font
              color: var(--clr-grey-5);
              font-size: 1rem;
       }
       .img-container {
              // layout
              display: none;
       }
       @media (min-width: 992px){
              .container{
                     // layout
                     height: calc(100vh - 5rem);
                     gap : 8rem;
                     // width: 90vw;
                     // margin: 0 auto;
                     max-width: var(--max-width);
              }
              h1 {
                     margin-bottom: 2rem;
              }
              p {
                     font-size: 1.24rem;
              }
              .hero-btn {
                     // layout
                     padding: 0.75rem 1.5rem;
                     // font
                     font-size: 1rem;
              }
              .img-container{
                     display: block;
                     position: relative;
              }
              .main-img {
                     // layout
                     width: 100%;
                     height: 550px;
                     display: block;
                     object-fit: cover;
                     position: relative;
                     // looks
                     border-radius: var(--radius);
              }
              .accent-img {
                     // layout
                     position: absolute;
                     bottom: 0;
                     left: 0;
                     width: 250px;
                     transform: translateX(-50%);
                     // looks
                     border-radius: var(--radius);
              }
              .img-container::before {
                     content: '';
                     position: absolute;
                     width: 10%;
                     height: 80%;
                     background: var(--clr-primary-9);
                     bottom: 0%;
                     left: -8%;
                     border-radius: var(--radius);
                   }
       }
`;
export default Hero;