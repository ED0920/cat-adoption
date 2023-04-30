import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const body = {
  minHeight: "85vh",
  background: "#F9F4F1",
  color: "#444c54",
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
