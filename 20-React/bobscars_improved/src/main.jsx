import React from 'react'
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import ErrorPage from './components/error.jsx'
import CarList from './components/carlist.jsx'
import CarDetail from './components/cardetail.jsx'

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
        element: <CarList />,
      },
      {
        path: 'test',
        element: <CarList />,
      },
      {
        path: 'car/:id',
        element: <CarDetail />,
      },
      {
        path: 'cardetail/:id',
        element: <CarDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
