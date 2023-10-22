import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to="/allproducts">all prodcuts page</Link>
      </p>
    </>
  );
};

export default Home;
