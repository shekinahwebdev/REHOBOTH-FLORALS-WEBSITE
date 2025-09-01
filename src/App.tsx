import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/home/Header";
import { useState } from "react";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <Header setShowNavbar={setShowNavbar} />
      <main className="main_page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
