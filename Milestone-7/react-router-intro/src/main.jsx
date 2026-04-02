import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import App from "./App.jsx";

const router =
  createBrowserRouter([
    {
      path: "/",
      element: <div>oviiiiiiiiiiiiiiiiiiiiiiiiiiii</div>,
    },{
      path:'blog',
      element:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsam illum esse sapiente quibusdam hic, nostrum ad fuga, ipsa eveniet eum corporis! Exercitationem in non veniam provident eveniet dolore nostrum.</p>
    }
  ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
