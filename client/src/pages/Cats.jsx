import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const body = {
  minHeight: "65vh",
  background: "#6461A0",
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
