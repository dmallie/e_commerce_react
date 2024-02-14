import React from "react";
import styled from 'styled-components';

const Contact = () => {
       return(
<Wrapper>
<div className="section-center">
       <h3>Join our newsletter and get 20% off</h3>
       <div className="content">
              <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                     sint unde quaerat ratione soluta veniam provident adipisci cumque
                     eveniet tempore?
              </p>
              <form className="contact-form">
                     <input 
                            type="email" 
                            placeholder= "enter email" 
                            className="form-input"
                     />
                     <button className="submit-btn" type="submit">
                            subscribe
                     </button>
              </form>
       </div>
</div>
</Wrapper>
       )
};

const Wrapper = styled.div`
       padding: 15rem 0;
       h3 {
              text-transform: none;
       }
       p {
              // layout
              line-height: 2;
              max.width: 45em;
              // looks
              color: var(--clr-grey-5);
       }
       .contact-form{
              // layout
              // width: 90vw;
              max-width: 500px;
              display: grid;
              grid-template-columns: 1fr auto;
       }
       .form-input,
       .submit-btn{
              font-size: 1rem;
              padding: 0.5rem 1rem;
              border: 2px solid var(--clr-black);
       }
       .form-input{
              border-right: none;
              color: var(--clr-grey-3);
              border-top-left-radius: var(--radius);
              border-bottom-left-radius: var(--radius);
       }
       .form-input::placeholder{
              color: var(--clr-black);
              text-transform: capitalize;
       }
       .submit-btn{
              // looks
              border-top-right-radius: var(--radius);
              border-bottom-right-radius: var(--radius);
              background: var(--clr-primary-5);
              cursor: pointer;
              transition: var(--transition);
              // font
              text-transform: capitalize;
              letter-spacing: var(--spacing);
              color: var(--clr-black);
       }
       .submit-btn:hover{
              color: var(--clr-white);
       }
       @media (min-width: 992px) {
              .content {
                     // layout
                     display: grid;
                     grid-template-columns: 1fr 1fr;
                     align-items: center;
                     gap: 8rem;
                     margin-top: 2rem;
              }
              p {
                     margin-bottom: 0;
              }
       }
       @media (min-width: 1280px) {
              padding: 15rem 0;
       }
`;

export default Contact;