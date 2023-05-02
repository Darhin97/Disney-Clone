import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";
// import Login from "./componets/Login";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login />,
  //   },
  // ]);
  return (
    <div>
      {/* <RouterProvider router={router} /> */}

      <Header />
      <Home />
    </div>
  );
}

export default App;
