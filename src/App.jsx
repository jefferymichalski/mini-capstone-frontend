import axios from "axios";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./Homepage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./Loginpage";
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { OrdersIndexPage } from "./OrdersIndexPage";

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
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () => axios.get("http://localhost:3000/products.json").then((response) => response.data),
      },
      { path: "/products/new", element: <ProductsNewPage /> },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/orders",
        element: <OrdersIndexPage />,
        loader: () => axios.get("http://localhost:3000/orders.json").then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
