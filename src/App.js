import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import SignUp from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
