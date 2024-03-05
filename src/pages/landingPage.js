import React from 'react';
import { Outlet, useLoaderData  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { products_url } from '../utils/constants';
import axios from 'axios';
import { filterActions } from '../store/filterSlice';

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
       // console.log('products: ', products.res.data);
       const dispatch = useDispatch();
       const selector = useSelector(state => state.filter);
       // console.log('selector: ', selector);
       
       if(!selector.isLoaded) {
              products.res.data.map(item => {
                            return(
                                   dispatch(filterActions.loadData(
                                   {
                                          id: item.id,
                                          name: item.name,
                                          price: item.price,
                                          image: item.image,
                                          colors: item.colors,
                                          company: item.company,
                                          description: item.description,
                                          category: item.category,
                                          shipping: item.shipping,
                                   } ))
                                          );
              });
              dispatch(filterActions.loadingAction(true));
       }
       return(
<div>
       <Navbar />
       <Outlet />
       <Footer />
</div>
       )
};
export default LandingPage;