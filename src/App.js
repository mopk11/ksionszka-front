import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
