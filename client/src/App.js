
import './App.css';

import AboutUs from './pages/AboutUs';
import Cats from './pages/Cats';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Rehoming from './pages/Rehoming';
import Signup from './pages/Signup'
import Profile from './pages/Profile';


import { RouterProvider, createBrowserRouter } from 'react-router-dom';


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
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (


    <RouterProvider router={router} />


  );
}

export default App;
