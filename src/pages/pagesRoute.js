import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutPage, CartPage, CheckoutPage, SingleProductPage, LandingPage,
              ErrorPage, HomePage, ProductsPage, LoginPage, RegisterPage} from './';
import { loader as landingLoader } from './landingPage';

const router = createBrowserRouter([
       {
              path: '/',
              element: <LandingPage />,
              loader: landingLoader,
              errorElement: <ErrorPage />,
              children: [
                     {
                            index: true,
                            element: <HomePage />,
                            loader: landingLoader,
                            errorElement: <ErrorPage />
                     },
                     {
                            path: '/products',
                            element: <ProductsPage />,
                            loader: landingLoader,
                            errorElement: <ErrorPage />
                     },
                     {
                            element: <CartPage />,
                            path: '/cart',
                            errorElement: <ErrorPage />,
                     },
                     {
                            path:'products/:id',
                            element: <SingleProductPage />,
                            errorElement: <ErrorPage />
                     },
                     {
                            path: '/about',
                            element: <AboutPage />,
                            errorElement: <ErrorPage />,
                     },
                     {
                            path: '/checkout',
                            element: <CheckoutPage />,
                            errorElement: <ErrorPage />,
                     }
              ],
       },
       {
              path: '/login',
              element: <LoginPage />,
              errorElement: <ErrorPage />
       },
       {
              path: '/register',
              element: <RegisterPage />,
              errorElement: <ErrorPage />
       }
]);

export const PageRouter = () => {
       return <RouterProvider router = {router}></RouterProvider>
};
