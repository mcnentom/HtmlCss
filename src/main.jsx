import React from 'react';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './Components/Main';
import ItemDetail, { productLoader } from './Components/ItemDetail.jsx';
import FetchDataComponent from './Components/FetchDataComponent.jsx';
import Error from './Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            path: '/item',
            element: <FetchDataComponent />
          },
          {
            path: 'item/:itemId',
            element: <ItemDetail />,
            loader: productLoader,
          }
        ]
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
