import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import AllProducts from "./routes/Products";
import RootLayout from "./routes/Root";
import ErrorPage from "./routes/Error";
import { ProductDetails } from "./routes/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/allproducts", element: <AllProducts /> },
      { path: "/allproducts/:productID", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
