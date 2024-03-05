import React from "react";
import styled from 'styled-components';

const Footer = () => {
       return(
<Wrapper>
<div className='container'>
       <h5>
              &copy; {new Date().getFullYear()} &nbsp; 
              <span>ComfySloth</span>       
       </h5>
       <h5>
              &nbsp; All rights reserved
       </h5>
</div>
</Wrapper>
       )
};

const Wrapper = styled.div`
.container {
       // layout
       height: 5rem;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       @media (min-width: 776px) {
              flex-direction: row;
       }
       // looks
       background: var(--clr-black);
}
span{
       color: var(--clr-primary-5);
}
h5{
       // font
       font-weight: normal;
       color: var(--clr-white);
       text-transform : none;
       // layout
       margin: 0.1rem;
       line-height: 1.25;
}
`;

export default Footer;