import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHero = (text) => {
       const page = text;

       return(
<Wrapper>
<div className="container_">
       <h3>
              <Link to='/'>
                     home
              </Link>
              /  
              <Link to=''> 
                     { page.text } 
              </Link>
       </h3>
</div>
</Wrapper>
       );
};

const Wrapper = styled.div`
       // width: 100%;
       background: var(--clr-primary-10);
       color: var(--clr-primary-1);
       .container_ {
                     // layout
                     display: flex;
                     align-items: center;
                     width: 100%;
                     min-height: 20vh;
                     margin-left: auto;
                     // looks
              h3 {
                     display: flex;
                     align-items: center;
                     justify-content: left;
              }
              a {
                     color: var(--clr-primary-3);
                     padding: 0.5rem;
                     transition: var(--transition);
              }
       }

       a:hover {
              color: var(--clr-primary-1);
       }
       

`;

export default PageHero;