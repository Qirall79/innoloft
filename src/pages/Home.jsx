import React from "react";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Layout>
      <div>
        <h3>Products:</h3>
        <Link className={`text-pink-800 pl-5 font-semibold`} to={"/product"}>
          - Product 6781
        </Link>
      </div>
    </Layout>
  );
};
