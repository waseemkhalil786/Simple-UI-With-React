import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home";
import AboutUs from "./Pages/about";
import Service from "./Pages/service";
import ContactUs from "./Pages/contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /> <Home /></>,
    },
    {
      path: "/About",
      element: <><Header /> <AboutUs /></>,
    },
    {
      path: "/Service",
      element: <><Header /> <Service /> </> ,
    },
    {
      path: "/Contact",
      element: <><Header /> <ContactUs /></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
