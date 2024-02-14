import React from "react";
import styled from 'styled-components';

const Service = (props) => {

       return(
<Wrapper>
<div className="service">
       <span>{props.icon}</span>
       <h4>{ props.title }</h4>
       <p>{ props.text }</p>
</div>
</Wrapper>
       )
};

const Wrapper = styled.div`
       .service {
              // layout
              // margin-top: 4rem;
              display: grid;
              gap: 2.5rem;
              text-align: center;
              padding: 2.5rem 2rem;
              // looks
              background: var(--clr-primary-7);
              border-radius: var(--radius);


       }
       .icon {

       }
       h4{
              color: var(--clr-primary-1 );
       }
       p{
              margin-bottom: 0;
              line-height: 1.8;
              color: var(--clr-primary-2);
       }
       span{
              // layout
              width: 4rem;
              height: 4rem;
              display: grid;
              margin: 0 auto;
              place-items: center;
              margin-bottom: 1rem;
              // looks
              border-radius: 50%;
              background: var(--clr-primary-10);
              color: var(--clr-primary-1);
              svg {
                     font-size: 2rem;
              }
       }
       @media (min-width: 1280px) {
              padding: 0;
              .service{
                     transform: translateY(5rem);
              }
       }


`;

export default Service;