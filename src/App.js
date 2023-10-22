import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import AllProducts from "./routes/Products";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/allproducts", element: <AllProducts /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
