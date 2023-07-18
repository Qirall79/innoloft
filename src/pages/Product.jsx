import React from "react";
import { ProductDetails } from "../components/ProductDetails";
import { Layout } from "./Layout";
import { useSelector } from "react-redux";
import { getProduct } from "../features/stateSlice";
import { Video } from "../components/Video";
import { OfferDetails } from "../components/OfferDetails";

export const Product = () => {
  const product = useSelector(getProduct);

  return (
    <Layout>
      <ProductDetails product={product} />
      <Video product={product} />
      <OfferDetails product={product} />
    </Layout>
  );
};
