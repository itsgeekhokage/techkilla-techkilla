import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import PreLoader from "./components/home/preLoader/PreLoader";

export default function App() {
  return (
    <>
      <PreLoader/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/project"
            element={<ProjectsPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
