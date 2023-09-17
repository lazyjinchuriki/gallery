import LoginPage from "./Components/LoginPage";
import GalleryPage from "./Components/Gallery";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="signuppage" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
