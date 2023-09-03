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
  "https://chjdddjpezbmgdjbfigk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoamRkZGpwZXpibWdkamJmaWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MjYxNTIsImV4cCI6MjAwODIwMjE1Mn0.lEgRcaaJ5a9EkFZpaSNzrelXt3A4odgV3-SXxFC-ZrE"
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
