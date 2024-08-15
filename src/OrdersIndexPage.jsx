import { useLoaderData } from "react-router-dom";

export function OrdersIndexPage() {
  const orders = useLoaderData();
  console.log("THE ORDERS ARE", orders);

  return (
    <div>
      <h1>All orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2 className="text-2xl font-bold underline mt-4">Order number {order.id}</h2>
          {order.carted_products.map((carted_product) => (
            <div key={carted_product.id}>
              <p>
                {carted_product.quantity} x {carted_product.product.name} (${carted_product.product.price})
              </p>
              <img width="300" src={carted_product.product.primary_image_url} alt="" />
            </div>
          ))}
          <hr />
          <p>Subtotal: {order.subtotal}</p>
          <p>Tax: {order.tax}</p>
          <p>Total: {order.total}</p>
        </div>
      ))}
    </div>
  );
}
