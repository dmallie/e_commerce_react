import React from "react";
import styled from 'styled-components';
import { services } from '../utils/constants';
import Service from './service';

const Services = () => {
       return(
<Wrapper >
<div className="section-center">
       <article className="header">
              <h3>
                     custom furniture <br />
                     built only for you
              </h3>
              <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                     dolorum debitis consectetur reprehenderit non aliquam voluptates
                     dolore aut vero consequuntur.
              </p>
       </article>
       <div className="services-center">
              { services.map(item => {
                     return(
                            <Service key={item.id} {...item } />
                     )
              })}
       </div>
</div>
</Wrapper>
       );
};

const Wrapper = styled.div`
       background: var(--clr-primary-10);
       .section-center {
              // looks
              // layout
              padding: 5rem 0;

       }
       .services-center{
              // margin-top: 4rem;
              display: grid;
              gap: 2.5rem;
       }
       @media (min-width: 992px) {
              .header{
                     display: grid;
                     grid-template-columns: 1fr 1fr;
              }
       }
       @media (min-width: 576px) {
              .services-center{
                     grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
              }
       }
       @media (min-width: 1280px) {
              padding: 0;
              .services-center{
                     transform: translateY(5rem);
              }
       }
`;
export default Services;