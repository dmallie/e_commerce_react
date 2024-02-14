import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/navbar';
import { products_url } from '../utils/constants';
import axios from 'axios';

export const loader = async({ request }) => {
       // get url from the request object
       const url = new URL( request.url );
       // extract the search parameter from the url string
       const searchParam = url.searchParams.get( 'search' ) || '';
       // using the search term look for products
       const res = await axios.get( products_url  );
       return { res };
};
const LandingPage = () => {
       // fetch the data
       const products = useLoaderData();
       console.log('products: ', products);
       return(
<div>
       <Navbar />
       <Outlet />
</div>
       )
};
export default LandingPage;