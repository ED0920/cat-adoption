import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CatProfile from "../components/CatProfile";

const body = {
  minHeight: "65vh",
  backgroundColor: "#F9F4F1",
};
function SingleCat() {
  return (
    <>
      <Header />
      <CatProfile />
      <Footer />
    </>
  );
}

export default SingleCat;
