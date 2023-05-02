import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CatCardContainer from "../components/CatCard";

import { useQuery } from '@apollo/client';
import { QUERY_AVAILABLE_CATS } from '../utils/queries';

const body = {
  minHeight: "65vh",
  backgroundColor: "#F9F4F1",
};
function Cats() {
  const { loading, data } = useQuery(QUERY_AVAILABLE_CATS);
  const cats = data?.availableCats || [];

  console.log(cats);
  console.log(loading);

  return (
    <>
      <Header />
      <CatCardContainer />

      <Footer />
    </>
  );
}

export default Cats;
