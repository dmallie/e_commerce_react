import React from 'react';
import Hero from '../components/hero';
import FeaturedProducts from '../components/featuredProducts';
import Services from '../components/services';
import Contact from '../components/contact';

const HomePage = () => {
       return(
<div>
       <Hero />
       <FeaturedProducts />
       <Services />
       <Contact />
</div>)
};
export default HomePage;