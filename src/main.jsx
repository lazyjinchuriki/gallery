import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Components/LoginPage.jsx";
import SignUp from "./Components/SignUp.jsx";
import GalleryPage from "./Components/Gallery.jsx";

const supabase = createClient(
  import.meta.env.VITE_Project_URL,
  import.meta.env.VITE_Public_Key
);

const router = createBrowserRouter([
  {
    path: "/gallery/",
    element: <App />,
    children: [
      {
        path: "/gallery/",
        element: <LoginPage />,
      },
      {
        path: "/gallery/signuppage/",
        element: <SignUp />,
      },
      {
        path: "/gallery/gallerypage/",
        element: <GalleryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <RouterProvider router={router} />
    </SessionContextProvider>
  </React.StrictMode>
);
