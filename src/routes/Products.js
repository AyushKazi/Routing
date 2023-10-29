import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

const AllProducts = () => {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {products.map((pros) => (
          <li key={pros.id}>
            <Link to={`/allproducts/${pros.id}`}>{pros.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllProducts;
