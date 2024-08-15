import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./Productsindex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isShowVisible, setIsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndex = () => {
    axios.get("/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleCreate = (params, successCallback, failureCallback) => {
    axios
      .post("/products.json", params)
      .then((response) => {
        setProducts([...products, response.data]);
        successCallback();
      })
      .catch((error) => {
        if (error.response.data.errors) {
          failureCallback(error.response.data.errors);
        }
      });
  };

  const handleShow = (product) => {
    setIsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleUpdate = (id, params, successCallback) => {
    axios.patch(`/products/${id}.json`, params).then((response) => {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
      successCallback();
      setIsShowVisible(false);
    });
  };

  const handleDestroy = (id) => {
    axios.delete(`/products/${id}.json`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
      setIsShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isShowVisible} onClose={() => setIsShowVisible(false)}>
        <ProductsShow product={currentProduct} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
