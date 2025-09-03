import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/home/Header";
import { useState } from "react";
import MobileNavbar from "./components/home/MobileNavbar";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.8,
  ease: easeInOut,
};

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  return (
    <>
      <Header setShowNavbar={setShowNavbar} />
      <MobileNavbar showNavbar={showNavbar} />
      <main className="main_page">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default App;
