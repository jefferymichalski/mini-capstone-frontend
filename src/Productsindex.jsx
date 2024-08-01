export function RecipesIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className="cards">
        {props.products.map((product) => (
          <div key={recipe.id} className="card">
            <img src={recipe.image_url} alt="" />
            <div className="card-body">
              <h2>{product.name}</h2>
              <p>Chef: {recipe.chef}</p>
              <button>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
