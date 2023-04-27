
import './App.css';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import Cats from './pages/Cats';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Rehoming from './pages/Rehoming';



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
    path: "/rehome",
    element: <Rehoming />,
  },
]);

function App() {
  return (


    <RouterProvider router={router} />


  );
}

export default App;
