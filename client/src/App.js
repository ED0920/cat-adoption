import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import AboutUs from './pages/AboutUs';
import Cats from './pages/Cats';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Rehoming from './pages/Rehoming';
import Signup from './pages/Signup'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutUs />,
  },
  {
    path: "/cats",
    element: <Cats />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/rehome",
    element: <Rehoming />,
  },
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
