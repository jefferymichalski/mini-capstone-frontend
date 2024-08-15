import { useState } from "react";

export function ProductsNew({ onCreate }) {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    onCreate(
      params,
      () => event.target.reset(),
      (e) => setErrors(e)
    );
  };

  return (
    <div>
      <h1>New product</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image url: <input name="image_url" type="text" />
        </div>
        <div>
          Supplier id: <input name="supplier_id" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
