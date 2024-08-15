import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="bg-gray-800 text-gray-300 p-4">
        <Link className="px-3 py-2 hover:bg-gray-700 rounded-md" to="/">
          Home
        </Link>
        <Link className="px-3 py-2 hover:bg-gray-700 rounded-md" to="/products">
          All products
        </Link>
        <Link className="px-3 py-2 hover:bg-gray-700 rounded-md" to="/products/new">
          New product
        </Link>
        <Link className="px-3 py-2 hover:bg-gray-700 rounded-md" to="/orders">
          Orders
        </Link>
        <Link className="px-3 py-2 hover:bg-gray-700 rounded-md" to="/signup">
          Signup
        </Link>
        <Link className="px-3 py-2 hover:bg-gray-700 rounded-md" to="/login">
          Login
        </Link>
        <LogoutLink className="px-3 py-2 hover:bg-gray-700 rounded-md" />
      </nav>
    </header>
  );
}
