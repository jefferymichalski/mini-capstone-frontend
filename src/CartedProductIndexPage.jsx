import axios from "axios";
import { useLoaderData, useNavigate, Link } from "react-router-dom";

export function CartedProductsIndexPage() {
  const navigate = useNavigate();

  const carted_products = useLoaderData();
  console.log("THE CARTED PRODUCTS ARE", carted_products);

  const handleClick = () => {
    console.log("handleClick");
    axios.post("/orders.json").then(() => {
      navigate("/orders");
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-8">Shopping cart</h1>
      {carted_products.map((carted_product) => (
        <div className="mb-4" key={carted_product.id}>
          <h2 className="text-2xl font-bold">{carted_product.product.name}</h2>
          <p>Price: ${carted_product.product.price}</p>
          <p>Quantity: {carted_product.quantity}</p>
        </div>
      ))}
      <Link to="/products" className="rounded border bg-white border-gray-300 p-2 hover:bg-gray-100">
        Continue shopping
      </Link>
      <div className="mt-5">
        <button onClick={handleClick} className="rounded border bg-white border-gray-300 p-2 hover:bg-gray-100">
          Buy now
        </button>
      </div>
    </div>
  );
}
