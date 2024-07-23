import React from 'react'
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import ErrorPage from './components/error.jsx'
import Home from './components/home.jsx'
import Page1 from './components/page1.jsx'
import Page2 from './components/page2.jsx'
import Page3 from './components/page3.jsx'
import Profiles from './components/profiles.jsx'
import ProfileDetail from './components/profile_detail.jsx'

import './index.css'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'page1',
        element: <Page1/>
      },
      {
        path:'page2',
        element: <Page2/>
      },
      {
        path:'page3',
        element: <Page3/>
      },
      {
        path:'profiles',
        element: <Profiles/>
      },
      {
        path:'profile/:id',
        element: <ProfileDetail/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
