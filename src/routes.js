import { useState } from "react";
import { Routes, Route, RouterProvider, createHashRouter } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Login from "./scenes/Login";
import Geography from "./scenes/geography";

import Calendar from "./scenes/calendar/calendar";
import Layout from "./Layout";

//   { path: "/shop", element: 
    //     <AuthenticationRouter>
    //      <Shop />
    //   </AuthenticationRouter>
    //  }, 

const routes = createHashRouter([

  {
    path: "/",
    element:  <Layout />,
    children: [
      {index: true, element: <Dashboard /> },
      {path:"/team" ,element:<Team />},
      {path:"/contacts" ,element:<Contacts />},
      {path:"/invoices", element:<Invoices />},
      {path:"/form" ,element:<Form />},
      {path:"/bar", element:<Bar />},
      {path:"/pie", element:<Pie />},
      {path:"/line" ,element:<Line />},
      {path:"/faq", element:<FAQ />},
      {path:"/calendar", element:<Calendar />},
      {path:"/geography", element:<Geography />},
    ],
  },
  {
    path: "login",
    index: true,
    element: (
      <Login />
    ),
  },
]);

export default routes;
