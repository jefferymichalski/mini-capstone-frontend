export function ProductsIndex({ products, onShow }) {
  return (
    <div id="products-index">
      <h1 className="text-3xl font-bold underline mb-4">All products</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded shadow-lg mb-4 flex flex-col bg-white">
            <img src={product.primary_image_url} className="w-full aspect-[4/3] object-cover" alt="" />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="font-bold text-2xl mb-2">{product.name}</h2>
              <div className="text-gray-700 text-base mb-2 flex-grow">
                <p>Price: {product.price}</p>
                <p>{product.description}</p>
              </div>
              <button
                className="rounded border border-gray-300 p-2 hover:bg-gray-100 mt-auto"
                onClick={() => onShow(product)}
              >
                More info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
