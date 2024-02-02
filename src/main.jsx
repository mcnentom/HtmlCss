import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { action as destroyAction } from "./routes/Destroy";
import Index from "./routes/Index";
import Route, { loader as rootLoader, action as rootAction, } from './routes/Route'
import Error from "./Error"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Contact, { loader as contactLoader, action as contactAction, } from "./routes/Contact";
import EditContact, {
  action as editAction,
} from "./routes/Edit";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    errorElement: <Error />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },

    ],
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);