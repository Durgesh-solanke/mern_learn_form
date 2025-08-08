import React from "react";
import User from "./getUSer/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdddUser from "./addUser/AdddUser.jsx";
// import UpdateUser from "./updateUser/UpdateUser.jsx";
import UpdateUser from "./updateUser/UpdateUser.jsx";

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AdddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}
