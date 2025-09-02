import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/home/Header";
import { useState } from "react";
import MobileNavbar from "./components/home/MobileNavbar";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <Header setShowNavbar={setShowNavbar} />
      <MobileNavbar showNavbar={showNavbar} />
      <main className="main_page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
