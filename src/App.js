import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  fetchConfig,
  fetchProduct,
  fetchTrl,
  getFulfilled,
} from "./features/stateSlice";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Edit } from "./pages/Edit";

function App() {
  const dispatch = useDispatch();
  const fulfilled = useSelector(getFulfilled);

  useEffect(() => {
    // Only fetch when nothing is fetched yet
    if (fulfilled === 0) {
      dispatch(fetchProduct());
      dispatch(fetchTrl());
      dispatch(fetchConfig());
    }
  }, [dispatch, fulfilled]);

  if (fulfilled < 3) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
