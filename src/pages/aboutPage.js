import React from 'react';
import styled from 'styled-components';
import aboutImg from '../assets/hero-bcg.jpeg';
import PageHero from '../components/pageHero';

const AboutPage = () => {
       return(
<Wrapper>
<PageHero text="About" />
<div className='container page'>
       <img src={aboutImg} alt='about' />
       <div className='story-section'>
              <div className='title'>
                     <h2>our story</h2>
                     <div className='underline_story'></div>
              </div>
              <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                     accusantium sapiente tempora sed dolore esse deserunt eaque
                     excepturi, delectus error accusamus vel eligendi, omnis beatae.
                     Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                     dolore, obcaecati incidunt sequi blanditiis est exercitationem
                     molestiae delectus saepe odio eligendi modi porro eaque in libero
                     minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
                     ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
                     similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
                     iste.                                                  
              </p>
       </div>
</div>
</Wrapper>
)
};

const Wrapper = styled.div`
       .container {
              // layout
              width: 90vw;
              max-width: var(--max-width);
              display: flex;
              flex-direction: column;
              gap: 4rem;
              margin: 0 auto;
              padding: 5rem 0;
              @media (min-width: 800px){
                     flex-direction: row;
              }
       }
       img {
              // layout
             display: block;
             width: 100%;
             height: 500px;
             object-fit: cover;
               //looks
              border-radius: var(--radius); 

       }
       .story-section{
              // layout
              display: flex;
              flex-direction: column;
              // gap: 3rem;
       }
       .title{
              // layout
              text-align: left;
       }
       .underline_story {
              width: 6rem;
              height: 0.25rem;
              background: var(--clr-primary-5);
              margin-left: 0;
       }
       p {
              line-height: 2;
              max-width: 45em;
              margin: 0 auto;
              margin-top: 2rem;
              color: var(--clr-grey-5);
            }
`;
export default AboutPage;