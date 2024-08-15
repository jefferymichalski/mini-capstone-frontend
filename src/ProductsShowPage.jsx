import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ProductsShow } from "./ProductsShow";

export function ProductsShowPage() {
  const navigate = useNavigate();
  const product = useLoaderData();

  const handleUpdate = (id, params) => {
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then(() => {
      navigate("/products");
    });
  };

  const handleDestroy = (id) => {
    axios.delete(`http://localhost:3000/products/${id}.json`).then(() => {
      navigate("/products");
    });
  };

  return (
    <div>
      <ProductsShow product={product} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
