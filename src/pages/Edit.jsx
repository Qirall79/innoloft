import React, { useState } from "react";
import { Layout } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../features/stateSlice";
import { ProductDetailsEdit } from "../components/ProductDetailsEdit";
import { VideoEdit } from "../components/VideoEdit";
import { OfferDetailsEdit } from "../components/OfferDetailsEdit";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

export const Edit = () => {
  const product = useSelector(getProduct);
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false);

  const [convertedContent, setConvertedContent] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Adding random IDs to data

    data.categories = data.categories.split(",").map((cat) => {
      return {
        id: Math.floor(Math.random() * 100),
        name: cat.trim(),
      };
    });

    data.businessModels = data.businessModels.split(",").map((model) => {
      return {
        id: Math.floor(Math.random() * 100),
        name: model.trim(),
      };
    });

    data.trl = {
      id: Math.floor(Math.random() * 100),
      name: data.trl,
    };

    data.type = {
      id: Math.floor(Math.random() * 100),
      name: data.type,
    };

    data.description = convertedContent;

    // Update product
    dispatch(updateProduct(data));

    setTimeout(() => setIsUpdated(true), 2000);
  };

  if (isUpdated) {
    return <Navigate to={"/product"} />;
  }

  return (
    <Layout>
      <ProductDetailsEdit
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        product={product}
        setConvertedContent={setConvertedContent}
        convertedContent={convertedContent}
      />
      <VideoEdit register={register} product={product} />
      <OfferDetailsEdit register={register} product={product} />
    </Layout>
  );
};
