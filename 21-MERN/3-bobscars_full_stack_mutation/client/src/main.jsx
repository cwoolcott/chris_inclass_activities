import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import CarDetail from './component/cardetail.jsx'
import Error from './component/error'
import CarList from './component/carlist'
import CarAdd from './component/addcar.jsx'
import CarEdit from './component/editcar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <CarList />,
      },
      {
        path: '/car/:carId',
        element: <CarDetail />,
      },
      {
        path: '/addcar',
        element: <CarAdd />,
      },
      {
        path: '/editcar/:carId',
        element: <CarEdit />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

