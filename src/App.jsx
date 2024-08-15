import axios from "axios";

import { createBrowserRouter, useRouteError, Navigate, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { OrdersIndexPage } from "./OrdersIndexPage";
import { CartedProductsIndexPage } from "./CartedProductsIndexPage";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost3000" : "mini-capstone-api-bvw6.onrender.com";

const router = createBrowserRouter([
  {
    element: (
      <div className="flex min-h-screen flex-col font-['Futura'] bg-[url('./assets/moroccan-flower.png')]">
        <Header />
        <div className="container mx-auto flex-auto p-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () => axios.get("/products.json").then((response) => response.data),
      },
      { path: "/products/new", element: <ProductsNewPage /> },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/orders",
        element: <OrdersIndexPage />,
        loader: () => axios.get("/orders.json").then((response) => response.data),
      },
      {
        path: "/carted_products",
        element: <CartedProductsIndexPage />,
        loader: () => axios.get("/carted_products.json").then((response) => response.data),
      },
    ],
  },
]);

function ErrorBoundary() {
  let error = useRouteError();
  console.error("THE ERROR IS", error, error.response.status);
  if (error?.response?.status === 401) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>Dang!</div>;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
