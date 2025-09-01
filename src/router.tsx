import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import { Contact } from "lucide-react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
