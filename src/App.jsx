import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";
import Root from "./componets/Root";
import Detail from "./componets/Detail";
import Login from "./componets/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "detail",
          element: <Detail />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
