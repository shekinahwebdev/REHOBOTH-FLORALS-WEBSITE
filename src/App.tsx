import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="main_page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
