import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ProductsShow } from "./ProductsShow";

export function ProductsShowPage() {
  const navigate = useNavigate();
  const product = useLoaderData();

  const handleUpdate = (id, params) => {
    axios.patch(`/products/${id}.json`, params).then(() => {
      navigate("/products");
    });
  };

  const handleDestroy = (id) => {
    axios.delete(`/products/${id}.json`).then(() => {
      navigate("/products");
    });
  };

  return (
    <div>
      <ProductsShow product={product} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
