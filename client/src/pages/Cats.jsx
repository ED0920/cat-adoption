import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const body = {
  minHeight: "65vh",
  backgroundColor: "#F9F4F1",
};
function Cats() {
  return (
    <>
      <Header />
      <div style={body}>
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default Cats;
