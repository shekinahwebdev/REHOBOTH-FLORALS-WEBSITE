import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
